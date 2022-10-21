package com.cuchucambiazo.domain.repository;

import api.cuchucambiazo.controller.user.model.User;

public interface UserRepository {
    User findByEmail(String email);
}
