using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace FirstApp.Models
{
    public class FirstAppInitializer : DropCreateDatabaseIfModelChanges<FirstAppContext>
    {
        protected override void Seed(FirstAppContext context)
        {
            var tasks = new List<Task>
                {
                    new Task() {Name = "Some task", Description = "Do this", Type = TaskType.Task, Done = true},
                    new Task() {Name = "Other task", Description = "Do this", Type = TaskType.Task},
                    new Task() {Name = "Some notify", Description = "Do this", Type = TaskType.Notification},
                };

            tasks.ForEach(p => context.Tasks.Add(p));

            context.SaveChanges();
        }
    }
}