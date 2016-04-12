-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Erstellungszeit: 18. Jun 2013 um 17:03
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
  `wbName` varchar(255) COLLATE utf8_bin NOT NULL,
  `workbench` int(255) DEFAULT NULL,
  `cmpid` int(255) NOT NULL AUTO_INCREMENT,
  `userid` varchar(255) COLLATE utf8_bin NOT NULL,
  `typid` varchar(255) COLLATE utf8_bin NOT NULL,
  `titel` varchar(255) COLLATE utf8_bin NOT NULL,
  `filename` varchar(255) COLLATE utf8_bin NOT NULL,
  `comment` text COLLATE utf8_bin NOT NULL,
  `timestamp` varchar(40) COLLATE utf8_bin NOT NULL,
  `boolfree` tinyint(1) NOT NULL,
  `hashed` varchar(255) COLLATE utf8_bin NOT NULL,
  `uploaded` tinyint(1) NOT NULL,
  `m_data` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`cmpid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=2 ;

--
-- Daten für Tabelle `phaidra_repo`
--

INSERT INTO `phaidra_repo` (`wbName`, `workbench`, `cmpid`, `userid`, `typid`, `titel`, `filename`, `comment`, `timestamp`, `boolfree`, `hashed`, `uploaded`, `m_data`) VALUES
('Projekt 01', 0, 1, 'geonb', 'pdf', '', 'PRINTING_FH_E_05_Ca_Co_Col_3399_001.pdf', 0x73647364667366736673663c62723e, '18.6.2013 16:57:16', 1, 'a47ed1e90f6142c2e85fae516d802d71', 1, '[object Object]');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
