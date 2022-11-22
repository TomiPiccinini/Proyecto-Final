package com.cuchucambiazo.persistence.builds;

import api.cuchucambiazo.controller.match.model.Message;
import com.cuchucambiazo.persistence.entity.Mensaje;
import org.springframework.stereotype.Component;

@Component
public class MensajeBuilds {

    public Message MensajeToMessage(Mensaje mensaje){

        Message message = new Message();

        message.setDateTime(mensaje.getFechaHora());
        message.setText(mensaje.getTexto());
        message.setUserIssuing(mensaje.getIdPublicacionEmisor());
        message.setUserReceiver(mensaje.getIdPublicacionReceptor());
        message.setMatchId(mensaje.getIdMatcheo());

        return message;
    }

    public Mensaje MessageToMensaje(Message message){

        Mensaje mensaje = new Mensaje();

        mensaje.setFechaHora(message.getDateTime());
        mensaje.setIdMatcheo(message.getMatchId());
        mensaje.setTexto(message.getText());
        mensaje.setIdPublicacionEmisor(message.getUserIssuing());
        mensaje.setIdPublicacionReceptor(message.getUserReceiver());

        return mensaje;
    }

}
