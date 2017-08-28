const u1 = { name: 'Cynthia' };
const u2 = { name: 'Jackson' };
const u3 = { name: 'Olive' };
const u4 = { name: 'James' };

const userRoles = new Map();

userRoles.set(u1, 'User');
userRoles.set(u2, 'User');
userRoles.set(u3, 'Admin');
// 애석하지만 제임스에게는 역활이 없습니다.

userRoles
    .set(u1, 'User')
    .set(u2, 'User')
    .set(u3, 'Admin');
