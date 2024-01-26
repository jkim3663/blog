package com.jun.service.logic;

import com.jun.service.constants.ApiConstants;
import com.jun.service.dto.UserDTO;
import com.jun.service.entity.UserEntity;
import com.jun.service.repository.CustomUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final CustomUserRepository customUserRepository;

    private UserEntity convertDTOToEntity(UserDTO userDTO) {
        UserEntity userEntity = new UserEntity();
        userEntity.setEmail(userDTO.getEmail());
        userEntity.setPassword(userDTO.getPassword());
        return userEntity;
    }

    public ResponseEntity loadUser(UserDTO userDTO) {
        UserEntity userEntity = convertDTOToEntity(userDTO);
        System.out.println("Load User Started");
        customUserRepository.save(userEntity);
        System.out.println("Load User Completed");
        return new ResponseEntity(ApiConstants.API_REQUEST_SUCCESS, HttpStatus.OK);
    }
}
