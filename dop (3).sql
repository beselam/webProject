-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 12, 2019 at 07:30 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dop`
--

-- --------------------------------------------------------

--
-- Table structure for table `catagory`
--

CREATE TABLE `catagory` (
  `id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `catagory`
--

INSERT INTO `catagory` (`id`, `name`) VALUES
(1, 'electronics'),
(2, 'electronics'),
(3, 'furnitur'),
(4, 'car'),
(5, 'cloth');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `comments_id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  `postdate` date NOT NULL,
  `content` text NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `favorite`
--

CREATE TABLE `favorite` (
  `user_id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `hastag`
--

CREATE TABLE `hastag` (
  `tag_id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `image`
--

CREATE TABLE `image` (
  `id` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  `post_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `like`
--

CREATE TABLE `like` (
  `user_id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `description` text DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  `file_path` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`id`, `user_id`, `description`, `category_id`, `file_path`) VALUES
(44, 7, 'this is my cat ,it is 2  month old and it is cute', 4, 'b146970c12605388b2f552e452c9e746'),
(45, 7, 'this is yhr best', 4, 'eef2771acb70b202b3401d5ab882992a'),
(46, 7, 'hey guys this is a nice tv offer in jumbo gigantti ', 1, 'ab67314d1907b74d54b145f036028029'),
(47, 7, 'check this offer at forum power the original price was 500 euro  and we are selling now it for 250 euro', 1, '5e8d6c54604aaa0336e3c4c5f08b620d'),
(48, 7, 'check this nice offer from jsk vantaa , they have also other similar offers ', 3, '6f5ea06d506c4379ca7e76fd88522224'),
(49, 7, 'check this nice offer from jsk espoo  , they have also other similar offers ', 3, 'b7e9320867fed8c8ee36bea58c11c3dc'),
(50, 8, 'our best offer of the session ,honda x6   come quickly and check it at vantaa honda dealer ', 4, '25dc54fce462f0c0222b6e47f9ad7685'),
(51, 8, 'this a toyota dealer offer  in espoo , w', 4, '779d7056a126227db7f4746463c4bb99'),
(52, 8, 'hey guys i was in tripla this morning and i saw this nice offer from superdry shop, the offer is only for ladies ', 5, '19e7fbd9d1e2a6495f5e2ce6f78aa204'),
(53, 8, 'hey guys i was in tripla this morning and i saw this nice offer from superdry shop, the offer is only for ladies ', 5, 'a7e11596134d00805ec1133d7b06184a'),
(54, 8, 'hey guys i was in tripla this morning and i saw this nice offer from superdry shop, the offer is only for ladies ', 1, '962f8141e6e58b47f9e8558d30280c2a'),
(55, 8, 'nice offer from this dealer please check it guys ', 4, '26b7ad4afa8be2067840c31d02820627'),
(66, 11, 'pc', 1, '766206a07ebe8c7c33f028e0772939d6'),
(68, 7, 'ggyy yfyt ty fty f tfyt f yt f ty tyf yt f ytf ytf', 3, 'f3f86c41c7fad31a5150a288e52722fc');

-- --------------------------------------------------------

--
-- Table structure for table `tag`
--

CREATE TABLE `tag` (
  `id` int(11) NOT NULL,
  `value` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(20) NOT NULL,
  `userName` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `dateofbirth` date DEFAULT NULL,
  `phonenumber` int(11) DEFAULT NULL,
  `photocount` int(11) DEFAULT NULL,
  `joineddate` date DEFAULT NULL,
  `password` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `userName`, `email`, `gender`, `dateofbirth`, `phonenumber`, `photocount`, `joineddate`, `password`) VALUES
(1, 'beselam', 'gbeselam@gmail.com', 'm', '2019-11-05', 0, 0, '0000-00-00', '8787878'),
(2, 'nebiii', 'nebii@gmail.com', NULL, NULL, NULL, NULL, NULL, '0'),
(3, 'beselammmmm', 'gbeselam@gmail.com', NULL, NULL, NULL, NULL, NULL, '0'),
(4, 'beselam1', 'gbeselam@gmail.com', NULL, NULL, NULL, NULL, NULL, '$2a$10$cwWSlDIWP1q.g0kg8YcX4uf86FHTYw.A/RkOvB89PtSFE7zpBMhTK'),
(5, 'beselam1', 'gbeselam@gmail.com', NULL, NULL, NULL, NULL, NULL, '$2a$10$Se3RkmLVb5wPBmGzko.cqefjICpPMqQa3qhStS676O0/WETcPNbHq'),
(6, 'mamo1', 'mamo@gmail.com', NULL, NULL, NULL, NULL, NULL, '$2a$10$fW9xnt4.qjAKmp95BN3fuu6mPV88O1evpOMH9qJGS3kWwVW8ElDgS'),
(7, 'beseee', 'mammo@gmail.com', NULL, NULL, NULL, NULL, NULL, '$2a$10$45PZexQkaQ2Qb0Zufcr1ueR6T4/M9.UGaTg1zBmjBjZxi1/tjBgrS'),
(8, 'Nebii', 'nebi@thedealer.com', NULL, NULL, NULL, NULL, NULL, '$2a$10$pvkCN3lU0ch4ZZ51gnqRneDLxPTn3W6ffUuIqMgtzPKezV2Lqakq.'),
(9, 'Kuha9999', 'kuha@kuha.fi', NULL, NULL, NULL, NULL, NULL, '$2a$10$B2Qfixs/yvd9Ihxkid98JOpnvxYfkIHHk3yMWga6hpsF6D.MLFJpu'),
(10, 'quandao', 'quan@asdasd.fon', NULL, NULL, NULL, NULL, NULL, '$2a$10$ONrB76ucBDSo0N3WPwge6OYF6AP8lQLd/yfLAW4GuFFirArBSwidq'),
(11, 'ville', 'v@gmail.com', NULL, NULL, NULL, NULL, NULL, '$2a$10$iAQ50OmPTnmtmBy.IUvRQuQB3ptdbUzLYGXEe.T22N8w/qXari88C');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `catagory`
--
ALTER TABLE `catagory`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`comments_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `post_id` (`post_id`) USING BTREE;

--
-- Indexes for table `favorite`
--
ALTER TABLE `favorite`
  ADD PRIMARY KEY (`user_id`,`post_id`),
  ADD UNIQUE KEY `user_id` (`user_id`),
  ADD KEY `post_id` (`post_id`);

--
-- Indexes for table `hastag`
--
ALTER TABLE `hastag`
  ADD PRIMARY KEY (`tag_id`,`post_id`),
  ADD KEY `post_id` (`post_id`);

--
-- Indexes for table `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_id` (`post_id`);

--
-- Indexes for table `like`
--
ALTER TABLE `like`
  ADD PRIMARY KEY (`user_id`,`post_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `post_id` (`post_id`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `tag`
--
ALTER TABLE `tag`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `catagory`
--
ALTER TABLE `catagory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `comments_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `image`
--
ALTER TABLE `image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT for table `tag`
--
ALTER TABLE `tag`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`),
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `favorite`
--
ALTER TABLE `favorite`
  ADD CONSTRAINT `favorite_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`),
  ADD CONSTRAINT `favorite_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `hastag`
--
ALTER TABLE `hastag`
  ADD CONSTRAINT `hastag_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`),
  ADD CONSTRAINT `hastag_ibfk_2` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`);

--
-- Constraints for table `image`
--
ALTER TABLE `image`
  ADD CONSTRAINT `image_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`);

--
-- Constraints for table `like`
--
ALTER TABLE `like`
  ADD CONSTRAINT `like_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`),
  ADD CONSTRAINT `like_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `post_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `catagory` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
