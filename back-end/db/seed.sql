\c cta_dev;

INSERT INTO collections (collectionsname, numberofdolls) VALUES
('World Travel', 9),
('Movie Magic', 12),
('Remix Rock', 4),
('All-Star BBs', 8),
('Dance Dance Dance', 12);

INSERT INTO dolls (dollscollection, dollsname, doll_id, series, price, is_featuredrare) VALUES
('World Travel', 'Kawaii Queen', 'WT-O1', 'Series 1', '$10', false), 
('World Travel', 'Independent Queen', 'WT-O2', 'Series 1', '$10',false),
('World Travel', 'Golden BB', 'WT-O3', 'Series 1', '$10',false),
('World Travel', 'Surreal Bebe', 'WT-O4', 'Series 1', '$10', false),
('World Travel', 'Pharoh Babe', 'WT-O5', 'Series 1', '$10', false),
('World Travel', 'Coconut Q.T', 'WT-O6', 'Series 1', '$10', true),
('World Travel', 'Cheeky Babe', 'WT-O7', 'Series 1', '$10', false),
('World Travel', 'Jammin', 'WT-O8', 'Series 1', '$10', true),
('World Travel', 'Harle Quinn Girl', 'WT-O9', 'Series 1', '$10', false);
