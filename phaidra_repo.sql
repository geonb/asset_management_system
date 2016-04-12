-- phpMyAdmin SQL Dump
-- version 3.4.10.1deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Erstellungszeit: 07. Mai 2013 um 11:22
-- Server Version: 5.5.31
-- PHP-Version: 5.3.10-1ubuntu3.6

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
  `timestamp` date NOT NULL,
  `boolfree` tinyint(1) NOT NULL,
  `hashed` varchar(255) COLLATE utf8_bin NOT NULL,
  `uploaded` tinyint(1) NOT NULL,
  PRIMARY KEY (`cmpid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
