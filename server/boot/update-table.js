module.exports = function(app) {
    var mysqlDs = app.dataSources.db;
    var Projects = app.models.projects;
  
    // first autoupdate the `Author` model to avoid foreign key constraint failure
    mysqlDs.autoupdate('projects', function(err) {
      if (err) throw err;
      console.log('\nAutoupdated table `projects`.');   
      });
  };
  