angular.module('myApp.userService', [])
.service('userService', function() {
    let selectedItem;
    let selectedData;
    const userList = [
        {"id":1,"first_name":"Heather","last_name":"Bell","hobby":"Eating"},
        {"id":2,"first_name":"Andrea","last_name":"Dean","hobby":"Gaming"},
        {"id":3,"first_name":"Peter","last_name":"Barnes","hobby":"Reading Books"},
        {"id":4,"first_name":"Harry","last_name":"Bell","hobby":"Youtubing"},
        {"id":5,"first_name":"Deborah","last_name":"Burns","hobby":"Fishing"},
        {"id":6,"first_name":"Larry","last_name":"Kim","hobby":"Skipping"},
        {"id":7,"first_name":"Jason","last_name":"Wallace","hobby":"Football"},
        {"id":8,"first_name":"Carol","last_name":"Williams","hobby":"Baseball"},
        {"id":9,"first_name":"Samuel","last_name":"Olson","hobby":"Programming"},
        {"id":10,"first_name":"Donna","last_name":"Evans","hobby":"Playing DOTA"},
        {"id":11,"first_name":"Lois","last_name":"Butler","hobby":"Gaming"},
        {"id":12,"first_name":"Daniel","last_name":"Hill","hobby":"surfing"},
        {"id":13,"first_name":"Matthew","last_name":"Torres","hobby":"cycling"},
        {"id":14,"first_name":"Jerry","last_name":"Hernandez","hobby":"Music"},
        {"id":15,"first_name":"Christopher","last_name":"Carpenter","hobby":"Football"},
        {"id":16,"first_name":"Harold","last_name":"West","hobby":"Gaming"},
        {"id":17,"first_name":"Carol","last_name":"Hicks","hobby":"Youtubing"},
        {"id":18,"first_name":"Bonnie","last_name":"Davis","hobby":"Partying"},
        {"id":19,"first_name":"Nancy","last_name":"Banks","hobby":"Photography"},
        {"id":20,"first_name":"Walter","last_name":"Freeman","hobby":"maya"},
        {"id":21,"first_name":"Louis","last_name":"Gonzales","hobby":"Bloging"},
        {"id":22,"first_name":"Jean","last_name":"Watkins","hobby":"Bloging"},
        {"id":23,"first_name":"Albert","last_name":"Harris","hobby":"Music"},
        {"id":24,"first_name":"Billy","last_name":"Owens","hobby":"Camping"},
        {"id":25,"first_name":"Russell","last_name":"Patterson","hobby":"Singing"},
        {"id":26,"first_name":"Micheal","last_name":"Jordan","hobby":"Joking"},
        {"id":27,"first_name":"Heather","last_name":"Bell","hobby":"Eating"},
        {"id":28,"first_name":"Andrea","last_name":"Dean","hobby":"Gaming"},
        {"id":29,"first_name":"Peter","last_name":"Barnes","hobby":"Reading Books"},
        {"id":30,"first_name":"Harry","last_name":"Bell","hobby":"Youtubing"},
        {"id":31,"first_name":"Deborah","last_name":"Burns","hobby":"Fishing"},
        {"id":32,"first_name":"Larry","last_name":"Kim","hobby":"Skipping"},
        {"id":33,"first_name":"Jason","last_name":"Wallace","hobby":"Football"},
        {"id":34,"first_name":"Carol","last_name":"Williams","hobby":"Baseball"},
        {"id":35,"first_name":"Samuel","last_name":"Olson","hobby":"Programming"},
        {"id":36,"first_name":"Donna","last_name":"Evans","hobby":"Playing DOTA"},
        {"id":37,"first_name":"Lois","last_name":"Butler","hobby":"Gaming"},
        {"id":38,"first_name":"Daniel","last_name":"Hill","hobby":"surfing"},
        {"id":39,"first_name":"Matthew","last_name":"Torres","hobby":"cycling"},
        {"id":40,"first_name":"Jerry","last_name":"Hernandez","hobby":"Music"},
        {"id":41,"first_name":"Christopher","last_name":"Carpenter","hobby":"Football"},
        {"id":42,"first_name":"Harold","last_name":"West","hobby":"Gaming"},
        {"id":43,"first_name":"Carol","last_name":"Hicks","hobby":"Youtubing"},
        {"id":44,"first_name":"Bonnie","last_name":"Davis","hobby":"Partying"},
        {"id":45,"first_name":"Nancy","last_name":"Banks","hobby":"Photography"},
        {"id":46,"first_name":"Walter","last_name":"Freeman","hobby":"maya"},
        {"id":47,"first_name":"Louis","last_name":"Gonzales","hobby":"Bloging"},
        {"id":48,"first_name":"Jean","last_name":"Watkins","hobby":"Bloging"},
        {"id":49,"first_name":"Albert","last_name":"Harris","hobby":"Music"},
        {"id":50,"first_name":"Billy","last_name":"Owens","hobby":"Camping"},
    ];
  
    const addUser = function(newObj) {
        userList.push(newObj);
    };

    const getUsers = function(){
        return userList;
    };

    const getUser = function(id) {
        return userList.find(user => user.id === id);
    }
    const setItem = function(item) {
        selectedItem = userList.filter((elem => item.indexOf(elem.id) > -1));
    }
    const getItem = function() {
        return selectedItem;
    }
    const getData = function() {
        return selectedData;
    }
    const updateBundle = function(userId, bundle) {
        const id = parseInt(userId, 10);
        let selectedUser = selectedItem.find(user => user.id === id);
        selectedUser['bundle'] = bundle;
    }
    const updateHotfix = function(userId, Hotfix) {
        const id = parseInt(userId, 10);
        let selectedUser = selectedItem.find(user => user.id === id);
        selectedUser['hotfix'] = Hotfix;
    }
    const setData = function() {
        selectedData = selectedItem.filter((elem => elem.bundle || elem.hotfix ));
        console.log(selectedData, 'maximuf')
    }
    const updateSlot = function (time, userId) {
        let selectedUser = selectedItem.find(user => user.id === userId);
        selectedUser['slot'] = time;
    }
    return {
      addUser,
      getUsers,
      setItem,
      getItem,
      updateBundle,
      updateHotfix,
      setData,
      getData,
      updateSlot
    };
  
  });