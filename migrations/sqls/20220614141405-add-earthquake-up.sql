/* Replace with your SQL commands */
CREATE TABLE `earthquake` (
	`id` INT(20) NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(200) CHARACTER SET utf8 COLLATE utf8_general_ci,
  `mag` DECIMAL(6,2),
  `place` VARCHAR(200) CHARACTER SET utf8 COLLATE utf8_general_ci,
  `tz` INT,
  `url` VARCHAR(200) CHARACTER SET utf8 COLLATE utf8_general_ci,
  `detail` VARCHAR(200) CHARACTER SET utf8 COLLATE utf8_general_ci,
  `felt` INT,
  `cdi` DECIMAL(6,2),
  `mmi` DECIMAL(6,2),
  `alert` VARCHAR(200) CHARACTER SET utf8 COLLATE utf8_general_ci,
  `status` VARCHAR(200) CHARACTER SET utf8 COLLATE utf8_general_ci,
  `tsunami` INT,
  `sig` INT,
  `net` VARCHAR(200) CHARACTER SET utf8 COLLATE utf8_general_ci,
  `code` VARCHAR(200) CHARACTER SET utf8 COLLATE utf8_general_ci,
  `ids` VARCHAR(200) CHARACTER SET utf8 COLLATE utf8_general_ci,
  `sources` VARCHAR(200) CHARACTER SET utf8 COLLATE utf8_general_ci,
  `types` VARCHAR(200) CHARACTER SET utf8 COLLATE utf8_general_ci,
  `nst` INT,
  `dmin` DECIMAL(6,2),
  `rms` DECIMAL(6,2),
  `gap` DECIMAL(6,2),
  `mag_type` VARCHAR(200) CHARACTER SET utf8 COLLATE utf8_general_ci,
  `imported_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
	`created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
) ENGINE = INNODB;