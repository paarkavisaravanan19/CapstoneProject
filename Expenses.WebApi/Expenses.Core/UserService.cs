﻿using Expenses.Core.DTO;
using Expenses.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Expenses.Core
{
    public class UserService : IUserService
    {
        //dependency injection
        public Task<AuthenticatedUser> SignUp(User user)
        {
            throw new NotImplementedException();
        }
    }
}
