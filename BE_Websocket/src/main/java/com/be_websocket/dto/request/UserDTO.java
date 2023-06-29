package com.be_websocket.dto.request;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class UserDTO {
    private String email;
    private String password;
    private String fullName;

}
