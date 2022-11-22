package com.cuchucambiazo.persistence;


import api.cuchucambiazo.controller.match.model.Message;
import com.cuchucambiazo.domain.repository.MessageRepository;
import com.cuchucambiazo.persistence.builds.MensajeBuilds;
import com.cuchucambiazo.persistence.crud.MensajeCrudRepository;
import com.cuchucambiazo.persistence.entity.Mensaje;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class MensajeRepository implements MessageRepository {

    @Autowired
    private MensajeCrudRepository mensajeCrudRepository;

    @Autowired
    private MensajeBuilds mensajeBuilds;

    @Override
    public List<Message> getAllMessagesByMatchId(Integer matchId) {

        List<Message> messages = new ArrayList<>();
        mensajeCrudRepository.findAllByIdMatcheo(matchId).forEach(a -> messages.add(mensajeBuilds.MensajeToMessage(a)));
        return messages;
    }

    @Override
    public void saveMessage(Message message) {
        mensajeCrudRepository.save(mensajeBuilds.MessageToMensaje(message));
    }
}
