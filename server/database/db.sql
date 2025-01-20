CREATE DATABASE IF NOT EXISTS veloce;

USE veloce;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    profile_image_url VARCHAR(255),
    role ENUM('user', 'admin') DEFAULT 'user',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS cars (
    id INT AUTO_INCREMENT PRIMARY KEY,
    brand VARCHAR(255) NOT NULL,
    model VARCHAR(255) NOT NULL,
    year YEAR NOT NULL,
    color VARCHAR(50),
    mileage INT,
    status ENUM('available', 'rented', 'sold', 'under maintenance') DEFAULT 'available',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    engine VARCHAR(255),
    horsepower INT,
    transmission ENUM('manual', 'automatic', 'semi-automatic'),
    doors INT,
    traction ENUM('front-wheel', 'rear-wheel', 'all-wheel'),
    fuel_type ENUM('petrol', 'diesel', 'electric', 'hybrid'),
    acceleration DECIMAL(5,2),
    main_image_url VARCHAR(255),
    last_rented_at DATETIME,
    min_rent_duration INT,
    rent_cost_per_day DECIMAL(10,2),
    next_available_at DATETIME
);