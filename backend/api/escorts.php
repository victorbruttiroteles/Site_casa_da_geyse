<?php
require_once __DIR__ . '/../config/database.php';

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit; }

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $conn = getConnection();

    $conditions = ['is_active = 1'];
    $params = [];
    $types  = '';

    if (!empty($_GET['city'])) {
        $conditions[] = 'city = ?';
        $params[]     = $_GET['city'];
        $types       .= 's';
    }
    if (!empty($_GET['neighborhood'])) {
        $conditions[] = 'neighborhood = ?';
        $params[]     = $_GET['neighborhood'];
        $types       .= 's';
    }
    if (!empty($_GET['state'])) {
        $conditions[] = 'state = ?';
        $params[]     = strtoupper($_GET['state']);
        $types       .= 's';
    }
    if (!empty($_GET['category']) && in_array($_GET['category'], ['mulheres','novatas'], true)) {
        $conditions[] = 'category = ?';
        $params[]     = $_GET['category'];
        $types       .= 's';
    }

    $where   = implode(' AND ', $conditions);
    $orderBy = ($_GET['sort'] ?? '') === 'views' ? 'views DESC' : 'created_at DESC';
    $limit   = 20;
    $page    = max(1, intval($_GET['page'] ?? 1));
    $offset  = ($page - 1) * $limit;

    // Total
    $cs = $conn->prepare("SELECT COUNT(*) FROM escorts WHERE {$where}");
    if ($types !== '') $cs->bind_param($types, ...$params);
    $cs->execute();
    $total = (int) $cs->get_result()->fetch_row()[0];
    $cs->close();

    // Rows
    $lp = [...$params, $limit, $offset];
    $lt = $types . 'ii';
    $st = $conn->prepare(
        "SELECT id, name, age, city, neighborhood, state, description, images, category, views
           FROM escorts WHERE {$where} ORDER BY {$orderBy} LIMIT ? OFFSET ?"
    );
    $st->bind_param($lt, ...$lp);
    $st->execute();
    $rows = $st->get_result()->fetch_all(MYSQLI_ASSOC);
    $st->close();
    $conn->close();

    foreach ($rows as &$r) $r['images'] = json_decode($r['images'], true) ?? [];

    echo json_encode([
        'escorts' => $rows,
        'total'   => $total,
        'page'    => $page,
        'pages'   => (int) ceil($total / $limit),
    ]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $b = json_decode(file_get_contents('php://input'), true) ?? [];
    foreach (['name','age','city','state','whatsapp'] as $f) {
        if (empty($b[$f])) { http_response_code(422); echo json_encode(['error' => "Field '{$f}' required"]); exit; }
    }
    $name  = substr(strip_tags($b['name']), 0, 100);
    $age   = intval($b['age']);
    $city  = substr(strip_tags($b['city']), 0, 100);
    $nbhd  = substr(strip_tags($b['neighborhood'] ?? ''), 0, 100);
    $state = strtoupper(substr(strip_tags($b['state']), 0, 2));
    $desc  = substr(strip_tags($b['description'] ?? ''), 0, 2000);
    $imgs  = json_encode(array_values(array_filter((array)($b['images'] ?? []))));
    $wa    = preg_replace('/\D/', '', $b['whatsapp']);
    $cat   = in_array($b['category'] ?? '', ['mulheres','novatas'], true) ? $b['category'] : 'mulheres';

    $conn = getConnection();
    $st   = $conn->prepare('INSERT INTO escorts (name,age,city,neighborhood,state,description,images,whatsapp,category) VALUES (?,?,?,?,?,?,?,?,?)');
    $st->bind_param('sissssss s', $name, $age, $city, $nbhd, $state, $desc, $imgs, $wa, $cat);
    $st->close();
    $st = $conn->prepare('INSERT INTO escorts (name,age,city,neighborhood,state,description,images,whatsapp,category) VALUES (?,?,?,?,?,?,?,?,?)');
    $st->bind_param('sisssssss', $name, $age, $city, $nbhd, $state, $desc, $imgs, $wa, $cat);
    $st->execute();
    $id = $conn->insert_id;
    $st->close(); $conn->close();
    http_response_code(201);
    echo json_encode(['id' => $id]);
    exit;
}

http_response_code(405);
echo json_encode(['error' => 'Method not allowed']);
