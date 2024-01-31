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
import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class PostService {

    private final CustomPostRepository customPostRepository;

    public ResponseEntity<Map<String, String>> addPost(PostDTO postDTO) {
        Map<String, String> message = new HashMap<>();
        try {
            System.out.println("add post started");
            PostEntity postEntity = convertDTOToEntity(postDTO);
            customPostRepository.save(postEntity);
            System.out.println("add post completed");

            message.put("response", ApiConstants.API_REQUEST_SUCCESS);
            return new ResponseEntity<>(message, HttpStatus.OK);
        } catch (Exception e) {
            message.put("response", ApiConstants.API_REQUEST_FAIL);
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
