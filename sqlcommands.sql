/* insert season */
INSERT INTO season (name) VALUES ('Summer 16');

/* insert team knowing season id */
INSERT INTO teams (name, season_id) VALUES ('Team 1', 1);

/* insert team knowning season name */
INSERT INTO teams (name, season_id) VALUES ('Team 2', (SELECT id FROM season WHERE name = 'Summer 16'));

/* insert into schedule team knowing team id's */
INSERT INTO schedule (team1_id, team2_id) VALUES (1, 2);

/*insert into schedule knowing team names */
INSERT INTO schedule (team1_id, team2_id) VALUES ((SELECT id FROM teams WHERE name = 'Team 2'), (SELECT id FROM teams WHERE name = 'Team 1'));

/* update scores in schedule need to know id of game */
UPDATE schedule SET team1_score = 0, team2_score = 5 WHERE id = 2;
