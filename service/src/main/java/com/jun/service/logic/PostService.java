package com.jun.service.logic;

import com.jun.service.constants.ApiConstants;
import com.jun.service.dto.PostDTO;
import com.jun.service.entity.PostEntity;
import com.jun.service.repository.CustomPostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PostService {

    private final CustomPostRepository customPostRepository;

    public ResponseEntity<String> addPost(PostDTO postDTO) {
        try {
            PostEntity postEntity = convertDTOToEntity(postDTO);
            customPostRepository.save(postEntity);
            return new ResponseEntity<>(ApiConstants.API_REQUEST_SUCCESS, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(ApiConstants.API_REQUEST_FAIL + e.getMessage(), HttpStatus.OK);
        }
    }

    private PostEntity convertDTOToEntity(PostDTO postDTO) {
        PostEntity postEntity = new PostEntity();
        postEntity.setDetail(postDTO.getDetail());
        return postEntity;
    }
}
