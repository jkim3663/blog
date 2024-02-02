package com.jun.service.repository;

import com.jun.service.entity.PostEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomPostRepository extends JpaRepository<PostEntity, Integer> {

    List<PostEntity> findAllByOrderByIdDesc();
}
