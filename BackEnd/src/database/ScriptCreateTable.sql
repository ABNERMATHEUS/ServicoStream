CREATE DATABASE  IF NOT EXISTS `db_movies` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `db_movies`;
-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: db_movies
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `filmeserie`
--

DROP TABLE IF EXISTS `filmeserie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `filmeserie` (
  `idFilmeSerie` int NOT NULL AUTO_INCREMENT,
  `tipo` int DEFAULT NULL,
  `state` tinyint NOT NULL,
  `titulo` varchar(45) NOT NULL,
  `descricao` varchar(45) NOT NULL,
  `cartaz` longtext,
  PRIMARY KEY (`idFilmeSerie`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `filmeserie`
--

LOCK TABLES `filmeserie` WRITE;
/*!40000 ALTER TABLE `filmeserie` DISABLE KEYS */;
INSERT INTO `filmeserie` VALUES (1,1,1,'testeUpdate','testeUpdate','teste'),(5,1,0,'testet','teste','teste'),(6,1,1,'testet','teste','teste'),(7,1,1,'testet','teste','teste'),(8,1,1,'testet','teste','teste'),(9,1,1,'testet','teste','teste'),(10,1,1,'testet','teste','teste'),(11,1,1,'testet','teste','teste'),(12,1,1,'testeUpdate','testeUpdate','teste'),(13,1,1,'testet','teste','teste'),(14,1,1,'testet','teste','teste'),(15,1,1,'testet','teste','teste'),(16,1,1,'testet','teste','teste'),(17,1,1,'testet','teste','teste'),(18,1,1,'testet','teste','teste'),(19,1,1,'testet','teste','teste'),(20,1,1,'testet','teste','teste'),(21,1,1,'testet','teste','teste'),(22,1,1,'testet','teste','teste'),(23,1,1,'testet','teste','teste'),(24,1,1,'testet','teste','teste'),(25,1,1,'testet','teste','teste'),(26,1,1,'testet','teste','teste'),(27,1,1,'testet','teste','teste'),(28,1,1,'testet','teste','teste'),(29,1,1,'testet','teste','teste'),(30,1,1,'testet','teste','teste'),(31,1,1,'testet','teste','teste'),(32,1,1,'testet','teste','teste'),(33,1,1,'testet','teste','teste'),(34,1,1,'testet','teste','teste'),(35,1,1,'testet','teste','teste'),(36,1,1,'testet','teste','teste'),(37,1,1,'testet','teste','teste');
/*!40000 ALTER TABLE `filmeserie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `idusuario` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `sobrenome` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `senha` varchar(45) NOT NULL,
  `cod` varchar(45) DEFAULT NULL,
  `verificado` tinyint DEFAULT '0',
  PRIMARY KEY (`idusuario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-18 14:32:56
