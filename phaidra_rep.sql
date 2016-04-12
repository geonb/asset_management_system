-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Erstellungszeit: 10. Mai 2013 um 15:05
-- Server Version: 5.5.27
-- PHP-Version: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Datenbank: `phaidrahss`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `phaidra_repo`
--

CREATE TABLE IF NOT EXISTS `phaidra_repo` (
  `cmpid` int(255) NOT NULL,
  `userid` varchar(255) COLLATE utf8_bin NOT NULL,
  `typid` varchar(255) COLLATE utf8_bin NOT NULL,
  `titel` varchar(255) COLLATE utf8_bin NOT NULL,
  `filename` varchar(255) COLLATE utf8_bin NOT NULL,
  `comment` text COLLATE utf8_bin NOT NULL,
  `timestamp` varchar(256) COLLATE utf8_bin NOT NULL,
  `boolfree` tinyint(1) NOT NULL,
  `hashed` varchar(255) COLLATE utf8_bin NOT NULL,
  `uploaded` tinyint(1) NOT NULL,
  PRIMARY KEY (`cmpid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Daten für Tabelle `phaidra_repo`
--

INSERT INTO `phaidra_repo` (`cmpid`, `userid`, `typid`, `titel`, `filename`, `comment`, `timestamp`, `boolfree`, `hashed`, `uploaded`) VALUES
(1, 'geonb', 'jpg', 'gngngngn', 'magnetic_engine_II.jpg', 0x6720676e6e676e676e676e676e, '2013-05-10 14:47:21', 1, 'e344b553d2ddf09f3530f4fe8d1880b1', 1),
(2, 'geonb', 'jpg', 'dsdsd', 'dia_047(keepers_keepest)[bc_00_47] 001.jpg', 0x736473647364736473, '2013-05-10 14:48:04', 0, '7ceff6e0f01f0ab40bb304285a33e175', 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
