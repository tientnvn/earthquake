/* Replace with your SQL commands */
CREATE TABLE `datastore` (
	`id` INT(20) NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(200) CHARACTER SET utf8 COLLATE utf8_general_ci,
  `req_url` VARCHAR(1000) CHARACTER SET utf8 COLLATE utf8_general_ci,
  `headers` VARCHAR(2000) CHARACTER SET utf8 COLLATE utf8_general_ci,
  `response` TEXT CHARACTER SET utf8 COLLATE utf8_general_ci,
  `imported_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
	`created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
) ENGINE = INNODB;