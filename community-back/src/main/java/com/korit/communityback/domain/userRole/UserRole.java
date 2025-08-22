package com.korit.communityback.domain.userRole;

import com.korit.communityback.domain.role.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserRole {
    private Integer userRoleId;
    private Integer userId;
    private Integer roleId;

    private Role role;
}
