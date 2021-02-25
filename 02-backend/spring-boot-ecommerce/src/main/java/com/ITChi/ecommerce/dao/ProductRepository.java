// DAO = Data Access Object
// Manages the connection with the data source to obtain and store data

package com.ITChi.ecommerce.dao;

import com.ITChi.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

// Server where the JS application is running (ie Angular)
//  protocol + hostname + port
@CrossOrigin("http://localhost:4200")
// Entity and Basic data type
public interface ProductRepository extends JpaRepository<Product, Long> {
}
