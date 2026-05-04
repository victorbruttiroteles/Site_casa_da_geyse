-- ============================================================
-- Casa da Geyse — Schema + Dados Reais
-- ============================================================

CREATE DATABASE IF NOT EXISTS casa_geyse
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE casa_geyse;

DROP TABLE IF EXISTS escorts;

CREATE TABLE escorts (
  id           INT AUTO_INCREMENT PRIMARY KEY,
  name         VARCHAR(100)                     NOT NULL,
  age          TINYINT UNSIGNED                 NOT NULL,
  city         VARCHAR(100)                     NOT NULL,
  neighborhood VARCHAR(100)                     NOT NULL DEFAULT '',
  state        CHAR(2)                          NOT NULL DEFAULT 'SC',
  description  TEXT,
  images       JSON,
  whatsapp     VARCHAR(20),
  category     ENUM('mulheres','novatas')        NOT NULL DEFAULT 'mulheres',
  views        INT UNSIGNED                     NOT NULL DEFAULT 0,
  is_active    TINYINT(1)                       NOT NULL DEFAULT 1,
  created_at   TIMESTAMP                        NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- ══════════════════════════════════════════
-- PENHA — ARMAÇÃO
-- ══════════════════════════════════════════
INSERT INTO escorts (name, age, city, neighborhood, state, description, images, whatsapp, category, views) VALUES

('Marina', 27, 'Penha', 'Armação', 'SC',
 'Morena gostosa e muito carinhosa. Atendo no bairro Armação em Penha com discrição e conforto total.',
 '["/penha-armacao/marina.jpg"]',
 '553199101996', 'mulheres', 1240),

('Bruna Loira', 25, 'Penha', 'Armação', 'SC',
 'Loira linda e apaixonante. Atendo em Penha, bairro Armação. Muita simpatia e carinho garantido.',
 '["/penha-armacao/bruna-loira.jpg"]',
 '554699416449', 'mulheres', 980),

('Jéssica', 24, 'Penha', 'Armação', 'SC',
 'Morena tatuada e cheia de estilo. Atendo no bairro Armação em Penha. Contato direto pelo WhatsApp.',
 '["/penha-armacao/jessica.jpg"]',
 '5531999713710', 'mulheres', 1560),

('Melissa', 23, 'Penha', 'Armação', 'SC',
 'Gatinha deliciosa e muito simpática. Atendo em Penha, Armação. Venha me conhecer!',
 '["/penha-armacao/melissa.jpg"]',
 '553171688238', 'novatas', 870);

-- ══════════════════════════════════════════
-- PENHA — CENTRO
-- ══════════════════════════════════════════
INSERT INTO escorts (name, age, city, neighborhood, state, description, images, whatsapp, category, views) VALUES

('Veneza', 26, 'Penha', 'Centro', 'SC',
 'Morena linda de biquíni. Atendo no Centro de Penha. Boa de papo e melhor ainda na prática.',
 '["/penha-centro/veneza.jpg"]',
 '554899966488', 'mulheres', 2100),

('Ana', 24, 'Penha', 'Centro', 'SC',
 'Novinha gostosa e muito animada. Atendo no Centro de Penha com muito carinho e dedicação.',
 '["/penha-centro/ana.jpg"]',
 '554891472311', 'novatas', 1340),

('Beatriz', 25, 'Penha', 'Centro', 'SC',
 'Linda e muito especial. Atendo no Centro de Penha. Discrição garantida, contato direto.',
 '["/penha-centro/beatriz.jpg"]',
 '554799226475', 'mulheres', 1120),

('Japinha', 27, 'Penha', 'Centro', 'SC',
 'Morena tatuada e cheia de curvas. Atendo no Centro de Penha. Venha me conhecer!',
 '["/penha-centro/japinha.jpg"]',
 '5547999108198', 'mulheres', 1890);

-- ══════════════════════════════════════════
-- BARRA VELHA — CENTRO
-- ══════════════════════════════════════════
INSERT INTO escorts (name, age, city, neighborhood, state, description, images, whatsapp, category, views) VALUES

('Lauren', 26, 'Barra Velha', 'Centro', 'SC',
 'Morena gostosa e muito carinhosa. Atendo no Centro de Barra Velha com todo conforto e discrição.',
 '["/barra-velha-centro/lauren.jpg"]',
 '554796272040', 'mulheres', 960),

('Gabriela', 28, 'Barra Velha', 'Centro', 'SC',
 'Linda de batom vermelho e muito estilosa. Atendo no Centro de Barra Velha. Contato direto.',
 '["/barra-velha-centro/gabriela.jpg"]',
 '554796199303', 'mulheres', 1450),

('Mirella', 25, 'Barra Velha', 'Centro', 'SC',
 'Morena gostosa atendendo em Barra Velha. Perfil verificado, contato direto sem intermediários.',
 '["/barra-velha-centro/mirella.jpg"]',
 '5547999889182', 'mulheres', 780),

('Mari', 24, 'Barra Velha', 'Centro', 'SC',
 'Novinha linda e muito animada. Atendo no Centro de Barra Velha. Venha me conhecer!',
 '["/barra-velha-centro/mari.jpg"]',
 '5511983441355', 'novatas', 1670);
