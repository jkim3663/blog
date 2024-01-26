package com.jun.service.controller;

import com.jun.service.constants.AppConstants;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Validation {
    protected static boolean validateGetUserInfoRequest(String userEmail) {
        if (userEmail.length() > 50 || userEmail.isEmpty()) {
            return false;
        }
        Pattern emailPattern = Pattern.compile(AppConstants.EMAIL_REGEX);
        Matcher matcher = emailPattern.matcher(userEmail);
        return matcher.find();
    }
}
