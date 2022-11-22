package com.cuchucambiazo.domain.repository;

import api.cuchucambiazo.controller.match.model.Message;

import java.util.List;

public interface MessageRepository {
    List<Message> getAllMessagesByMatchId(Integer matchId);
    void saveMessage(Message message);
}
