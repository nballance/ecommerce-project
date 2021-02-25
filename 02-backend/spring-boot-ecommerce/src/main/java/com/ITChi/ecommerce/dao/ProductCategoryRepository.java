package com.ITChi.ecommerce.dao;

import com.ITChi.ecommerce.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

// Server where the JS application is running (ie Angular)
//  protocol + hostname + port
@CrossOrigin("http://localhost:4200")
// Name of JSON entry and '/product-category'
@RepositoryRestResource(collectionResourceRel = "productCategory", path = "product-category")
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {
}
