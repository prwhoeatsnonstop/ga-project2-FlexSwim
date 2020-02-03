CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	name TEXT,
	password TEXT,
	UNIQUE (name)
);

-- ┌─┐┌─┐┬─┐┌─┐┌─┐┌┐┌┌─┐┬    ┬ ┬┌─┐┬─┐┬┌─┌─┐┬ ┬┌┬┐
-- ├─┘├┤ ├┬┘└─┐│ ││││├─┤│    ││││ │├┬┘├┴┐│ ││ │ │
-- ┴  └─┘┴└─└─┘└─┘┘└┘┴ ┴┴─┘  └┴┘└─┘┴└─┴ ┴└─┘└─┘ ┴

CREATE TABLE IF NOT EXISTS personal_strokes (
	id SERIAL PRIMARY KEY,
	stroke_type TEXT,
	distance INTEGER,
	duration INTEGER,
	user_id INTEGER,
	done BOOLEAN,
	date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	date_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	date_completed TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ┌─┐┌─┐┬  ┬┌─┐┬─┐┬┌┬┐┌─┐  ┬ ┬┌─┐┬─┐┬┌─┌─┐┬ ┬┌┬┐
-- ├┤ ├─┤└┐┌┘│ │├┬┘│ │ ├┤   ││││ │├┬┘├┴┐│ ││ │ │
-- └  ┴ ┴ └┘ └─┘┴└─┴ ┴ └─┘  └┴┘└─┘┴└─┴ ┴└─┘└─┘ ┴

-- CREATE TABLE IF NOT EXISTS user_fav_workouts (
-- 	id SERIAL PRIMARY KEY,
-- 	user_id INTEGER,
-- 	category_id INTEGER
-- );

-- CREATE TABLE IF NOT EXISTS fav_workouts (
-- 	id SERIAL PRIMARY KEY,
-- 	category_id INTEGER
-- );

-- CREATE TABLE IF NOT EXISTS category_for_fav_workouts (
-- 	id SERIAL PRIMARY KEY,
-- 	category TEXT,
-- 	fav_stroke_id INTEGER
-- );

-- CREATE TABLE IF NOT EXISTS fav_strokes (
-- 	id SERIAL PRIMARY KEY,
-- 	stroke_type TEXT,
-- 	distance INTEGER,
-- 	duration INTEGER,
-- 	user_id INTEGER
-- );