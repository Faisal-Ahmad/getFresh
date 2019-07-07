-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 06, 2019 at 05:44 PM
-- Server version: 10.1.29-MariaDB
-- PHP Version: 7.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node1`
--

-- --------------------------------------------------------

--
-- Table structure for table `infotable`
--

CREATE TABLE `infotable` (
  `uid` int(100) NOT NULL,
  `sellerusername` varchar(100) NOT NULL,
  `email` varchar(111) NOT NULL,
  `phone` varchar(111) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tempupload`
--

CREATE TABLE `tempupload` (
  `uid` int(100) NOT NULL,
  `bookname` varchar(100) NOT NULL,
  `booktype` varchar(111) NOT NULL,
  `bookdiscription` varchar(111) NOT NULL,
  `askingprice` varchar(100) NOT NULL,
  `picture` varchar(111) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `serial` int(250) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `dob` date NOT NULL,
  `email` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`serial`, `username`, `password`, `dob`, `email`) VALUES
(1, 'kongkon', 'good', '2019-07-02', 'kongkon@gmail.com'),
(2, 'tanjila', 'tanjila', '2019-07-16', 'tanjila@gmail.com'),
(3, 'naurin', 'naurin', '2019-07-01', 'naurin@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `usertable`
--

CREATE TABLE `usertable` (
  `uid` int(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `type` varchar(111) NOT NULL,
  `password` varchar(111) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(111) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `infotable`
--
ALTER TABLE `infotable`
  ADD PRIMARY KEY (`uid`);

--
-- Indexes for table `tempupload`
--
ALTER TABLE `tempupload`
  ADD PRIMARY KEY (`uid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`serial`);

--
-- Indexes for table `usertable`
--
ALTER TABLE `usertable`
  ADD PRIMARY KEY (`uid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `infotable`
--
ALTER TABLE `infotable`
  MODIFY `uid` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tempupload`
--
ALTER TABLE `tempupload`
  MODIFY `uid` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `serial` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `usertable`
--
ALTER TABLE `usertable`
  MODIFY `uid` int(100) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
