package com.example.ecommerce.dao;


import com.example.ecommerce.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;



@RepositoryRestResource
public interface ProductRepository extends JpaRepository<Product, Long> {

    // spring generate corresponding select statement behind
    Page<Product> findByCategoryId(@Param("id") Long id, Pageable pageable);

    // new query method for keyword searching
    // below line, spring would generate select statements similar to : select * from product p
    // p.name like concat('%', :name, '%')
    Page<Product> findByNameContaining(@Param("name") String name, Pageable pageable);
}
