using Services.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Services.MockData
{
    public static class MockedUser
    {
        public static UserModel[] GetMockData()
        {
            return new UserModel[]
            {
                new UserModel()
                {
                    email = "abc@gmail.com",
                    first_name = "abc",
                    id = 1,
                    last_name = "abc",
                    password = "12345"
                }
            };
        }
    }
}
