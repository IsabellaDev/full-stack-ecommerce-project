package com.example.ecommerce.dao;


import com.example.ecommerce.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin(origins = "http://localhost:4200")
public interface ProductRepository extends JpaRepository<Product, Long> {

    // spring generate corresponding select statement behind
    Page<Product> findByCategoryId(@RequestParam("id") Long id, Pageable pageable);

    // new query method for keyword searching
    // below line, spring would generate select statements similar to : select * from product p
    // p.name like concat('%', :name, '%')
    Page<Product> findByNameContaining(@RequestParam("name") String name, Pageable pageable);
}
