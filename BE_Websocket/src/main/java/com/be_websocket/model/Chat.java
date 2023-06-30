package com.be_websocket.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "messages")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Chat {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        @ManyToOne
        @JsonIgnoreProperties({"chatList"})
        private User user;
        @ManyToOne
        @JsonIgnoreProperties({"chatList"})
        private Room room;
        private String content;
        private long  timestamp;
        private Status status;

}
