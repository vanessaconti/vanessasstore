\c cta_dev;

INSERT INTO collections (collectionsname, numberofdolls) VALUES
('World Travel', 9),
('Movie Magic', 12),
('Remix Rock', 4),
('All-Star BBs', 8),
('Dance Dance Dance', 12);

INSERT INTO dolls (dollscollection, dollsname, doll_id, series, price, is_featuredrare, image) VALUES
('World Travel', 'Kawaii Queen', 'WT-O1', 'Series 1', '$10', false, 'https://i.ibb.co/7X85Vmh/Kawaii-Queen.png'), 
('World Travel', 'Independent Queen', 'WT-O2', 'Series 1', '$10',false, 'https://i.ibb.co/KDXcyWJ/Independent-Queen.png'),
('World Travel', 'Golden BB', 'WT-O3', 'Series 1', '$10',false, 'https://i.ibb.co/JnkmYsq/Golden-BB.png'),
('World Travel', 'Surreal Bebe', 'WT-O4', 'Series 1', '$10', false, 'https://i.ibb.co/RvpMJNZ/Surreal-Bebe.png'),
('World Travel', 'Pharoh Babe', 'WT-O5', 'Series 1', '$10', false, 'https://i.ibb.co/MZ1V53Y/Pharaoh-Babe.png'),
('World Travel', 'Coconut Q.T', 'WT-O6', 'Series 1', '$10', true, 'https://i.ibb.co/vk0bPrH/Coconut-QT.png'),
('World Travel', 'Cheeky Babe', 'WT-O7', 'Series 1', '$10', false, 'https://i.ibb.co/YbR3mpm/Cheeky-Babe.png'),
('World Travel', 'Jammin', 'WT-O8', 'Series 1', '$10', true, 'https://i.ibb.co/vhb0Pvv/Jammin.png'),
('World Travel', 'Harle Quinn Girl', 'WT-O9', 'Series 1', '$10', false, 'https://i.ibb.co/pJrCGmF/Harle-Quin-Girl.png');


