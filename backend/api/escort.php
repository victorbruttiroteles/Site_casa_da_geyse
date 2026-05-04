<?php
require_once __DIR__ . '/../config/database.php';

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$id = intval($_GET['id'] ?? 0);
if ($id <= 0) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid id']);
    exit;
}

$conn = getConnection();

// Increment view counter
$conn->query("UPDATE escorts SET views = views + 1 WHERE id = {$id} AND is_active = 1");

$stmt = $conn->prepare(
    'SELECT id, name, age, city, state, description, images, whatsapp, category, views, created_at
       FROM escorts
      WHERE id = ? AND is_active = 1'
);
$stmt->bind_param('i', $id);
$stmt->execute();
$row = $stmt->get_result()->fetch_assoc();
$stmt->close();
$conn->close();

if (!$row) {
    http_response_code(404);
    echo json_encode(['error' => 'Escort not found']);
    exit;
}

$row['images'] = json_decode($row['images'], true) ?? [];
echo json_encode($row);
