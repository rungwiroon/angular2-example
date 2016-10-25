using Services.MockData;
using Services.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Services.Services
{
    public class UserService
    {
        public UserModel[] Get()
        {
            return MockedUser.GetMockData();
        }
    }
}
