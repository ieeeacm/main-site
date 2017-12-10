$(document).ready(function() {

     $(document).ready(function(){
         $('.collapsible').collapsible();
     });

     var officers = [
        {id: 'AlishaSaxena', name: 'Alisha Saxena', position: 'President', image: 'AlishaSaxena_2018_6-2_President.jpg'},
        {id: 'CzarinaLao', name: 'Czarina Lao', position: 'Vice President', image: 'CzarinaLao_2018_6-3_VP.jpg'},
        {id: 'AdelaideOh', name: 'Adelaide Oh', position: 'Secretary', image: 'AdelaideOh_2020_6-3and17_Secretary.jpg'},
        {id: 'MartinWinton', name: 'Martin Winton', position: 'Treasurer', image: 'MartinWinton_2020_6-2_Treasurer.jpg'},
        {id: 'SylvieLee', name: 'Sylvie Lee', position: 'Social Chair', image: 'SylvieLee_2019_6-2_Social.jpg'},
        {id: 'KaiAichholz', name: 'Kai Aichholz', position: 'Faculty Chair', image: 'KaiAichholz_2017_6-2_FacultyCo-Chair.jpg'},
        {id: 'CarlaPinzon', name: 'Carla Pinzon', position: 'Publicity Chair', image: 'CarlaPinzon_2018_6-1_PubChair.jpg'},
        {id: 'JessicaWang', name: 'Jessica Wang', position: 'Publicity Chair', image: 'JessicaWang_2017_6-3_Publicity Chair.jpg'},
        {id: 'AndrewLuo', name: 'Andrew Luo', position: 'ML Chair', image: 'AndrewLuo_2019_6-3_MLGroup.jpg'},
        {id: 'WeiLow', name: 'Wei Low', position: 'Voltage Chair', image: 'WeiLow_2017_6-2_VoltageChair.jpg'},
        {id: 'MinaSun', name: 'Mina Sun', position: 'URTC Chair', image: 'MinaSun_2019_6-2_URTC_Co-chair.jpg'},
        {id: 'JacquelineXu', name: 'Jacqueline Xu', position: 'WiEECS Chair', image: 'JacquelineXu_2017_6-3_WomenInEECSChair.jpg'},
        {id: 'AneliseNewman', name: 'Anelise Newman', position: 'URGE Chair', image: 'AneliseNewman_2019_6-3_URGEchair.jpg'},
        {id: 'ShramanRayChaudhuri', name: 'Shraman Ray Chaudhuri', position: 'Faculty Chair', image: 'ShramanRayChaudhuri_2017_6-3_FacultyCo-Chair.jpg'},
        {id: 'ChunchunWu', name: 'Chunchun Wu', position: '6# Chair', image: 'ChunchunWu_2018_6-2_6Sharpco-chair.jpg'},
        {id: 'TenzinUkyab', name: 'Tenzin Ukyab', position: 'Webmaster', image: 'TenzinUkyab_2020_6-3_Webmaster.jpg'}
      ];

     var execTemplate = $('#exec-template').html();
     var execHandlebars = Handlebars.compile(execTemplate);
     var execCards = execHandlebars({officers: officers});
     $('#exec.row').html(execCards);
 });
