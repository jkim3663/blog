package com.jun.service.logic;

import com.jun.service.constants.ApiConstants;
import com.jun.service.dto.PostDTO;
import com.jun.service.entity.PostEntity;
import com.jun.service.repository.CustomPostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.*;

@Service
@RequiredArgsConstructor
public class PostService {

    private final CustomPostRepository customPostRepository;

    public ResponseEntity<List<PostEntity>> getPosts() {
        List<PostEntity> list;
        try {
            System.out.println("get post started");
            list = customPostRepository.findAllByOrderByIdDesc();
            System.out.println("get post completed");
            return new ResponseEntity<>(list, HttpStatus.OK);
        } catch (Exception e) {
            list = new ArrayList<>();
            return new ResponseEntity<>(list, HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity<Map<String, String>> addPost(PostDTO postDTO) {
        Map<String, String> message = new HashMap<>();
        try {
            System.out.println("add post started");
            PostEntity postEntity = convertDTOToEntity(postDTO);
            customPostRepository.save(postEntity);
            System.out.println("add post completed");

            message.put(ApiConstants.RESPONSE, ApiConstants.API_REQUEST_SUCCESS);
            return new ResponseEntity<>(message, HttpStatus.OK);
        } catch (Exception e) {
            message.put(ApiConstants.RESPONSE, ApiConstants.API_REQUEST_FAIL);
            return new ResponseEntity<>(message, HttpStatus.OK);
        }
    }

    private PostEntity convertDTOToEntity(PostDTO postDTO) {
        PostEntity postEntity = new PostEntity();
        postEntity.setTitle(postDTO.getTitle());
        postEntity.setDetail(postDTO.getDetail());
        postEntity.setDate(Date.valueOf(LocalDate.now()));
        return postEntity;
    }
}
