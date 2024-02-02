package com.jun.service.controller;

import com.jun.service.constants.ApiConstants;
import com.jun.service.dto.PostDTO;
import com.jun.service.dto.UserDTO;
import com.jun.service.entity.PostEntity;
import com.jun.service.logic.PostService;
import com.jun.service.logic.UserService;
import com.jun.service.repository.CustomPostRepository;
import com.jun.service.repository.CustomUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/api")
@RequiredArgsConstructor
public class AppController {

    private final CustomUserRepository customUserRepository;

    private final CustomPostRepository customPostRepository;

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/usr/check")
    public ResponseEntity<Boolean> checkProfile(@RequestBody UserDTO userDTO) {
        if (userDTO.getEmail() != null && userDTO.getPassword() != null
                && Validation.validateGetUserInfoRequest(userDTO.getEmail())) {
            UserService userService = new UserService(customUserRepository);
            return userService.checkUser(userDTO);
        }
        return new ResponseEntity(ApiConstants.API_REQUEST_FAIL, HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/usr/profile")
    public ResponseEntity createNewProfile(@RequestBody UserDTO userDTO) {
        if (userDTO.getEmail() != null && userDTO.getPassword() != null
                && Validation.validateGetUserInfoRequest(userDTO.getEmail())) {
            UserService userService = new UserService(customUserRepository);
            return userService.loadUser(userDTO);
        }
        return new ResponseEntity(ApiConstants.API_REQUEST_FAIL, HttpStatus.BAD_REQUEST);
    }


    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/paragraphs")
    public ResponseEntity<Map<String, String>> addPost(@RequestBody PostDTO postDTO) {
        if (!postDTO.getDetail().isEmpty() && postDTO.getTitle().length() < 255) {
            PostService postService = new PostService(customPostRepository);
            return postService.addPost(postDTO);
        }
        Map<String, String> map = new HashMap<>();
        map.put(ApiConstants.RESPONSE, ApiConstants.API_REQUEST_FAIL);
        return new ResponseEntity<>(map, HttpStatus.BAD_REQUEST);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/paragraphs")
    public ResponseEntity<List<PostEntity>> getPosts() {
        PostService postService = new PostService(customPostRepository);
        return postService.getPosts();
    }


    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/paragraphs")
    public ResponseEntity<Boolean> deletePosts(@RequestBody List<Integer> ids) {
        PostService postService = new PostService(customPostRepository);
        return postService.deletePost(ids);
    }
}
