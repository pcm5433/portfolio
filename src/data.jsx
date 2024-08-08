import gicova from './assets/gicova.png';
import gicova_full from './assets/gicova_full.png';
import todolist from './assets/todolist.png';
import dictionary from './assets/dictionary.png';
import dic_full from './assets/dic_full.png';
import gyeongbok from './assets/gyeongbok.png';
import g_full from './assets/bandifesta_full.png';
import monsters from './assets/catch.png';
import m_full from './assets/catch_full.png';

const Contents = {
    datas: [{
        id: "01",
        cls: "personal",
        img: gicova,
        title: "지코바",
        tag: "HOMEPAGE",
        date: "2024.03.26 ~ 2024.04.09",
        content: "기존 지코바 홈페이지를 리뉴얼 작업한 프로젝트입니다.\nNode.js와 Express, MySQL을 통한 데이터베이스 저장 및 불러오기 등의 기술을 이용해 제작하였습니다.",
        page: "https://pcm5433.github.io/gicova/",
        git: "https://github.com/pcm5433/gicova.git",
        full_img: gicova_full
    }, {
        id: "02",
        cls: "toy",
        img: todolist,
        title: "투두리스트",
        tag: "TODOLIST",
        date: "2024.04.25 ~ 2024.04.26",
        content: "개인 프로젝트인 프론트엔드 사전을 제작하기 전, 투두리스트에 뭐 썼지...",
        page: "https://pcm5433.github.io/todolist/",
        git: "https://github.com/pcm5433/todolist.git",
        full_img: todolist
    }, {
        id: "03",
        cls: "personal",
        img: dictionary,
        title: "프론트엔드 사전",
        tag: "DICTIONARY",
        date: "2024.05.03 ~ 2024.05.09",
        content: "학원 수업에서 공부한 것들을 정리해둔 페이지입니다.\nReact를 사용해 제작하였으며, 앞서 진행한 토이 프로젝트 '투두리스트'에서 사용한 기능들을 응용해 작업하였습니다.",
        page: "https://pcm5433.github.io/dictionary/",
        git: "https://github.com/pcm5433/dictionary.git",
        full_img: dic_full
    }, {
        id: "04",
        cls: "team",
        img: gyeongbok,
        title: "대한민국 밤산책",
        tag: "HOMEPAGE",
        date: "2024.05.16 ~ 2024.06.18",
        content: "'경복궁 별빛야행'을 중심으로 그 외 다양한 행사를 알리는 축제 홈페이지입니다.\nReact를 사용해 제작하였으며, '알려드립니다' 메뉴의 공지사항 게시판(작성/수정/삭제), '마이 페이지' 메뉴의 회원 정보 표시를 담당하였습니다.",
        page: "https://thesandfox.github.io/bandifesta",
        git: "https://github.com/pcm5433/bandifesta_Chaemin.git",
        full_img: g_full
    }, {
        id: "05",
        cls: "team",
        img: monsters,
        title: "캐치! 수학 몬스터즈",
        tag: "HOMEPAGE",
        date: "2024.07.08 ~ 2024.08.09",
        content: "온라인으로 수학 공부를 도와주는 디지털 스마트 북 홈페이지입니다.\nReact를 사용해 제작하였으며, '학습하기' 메뉴의 메인/오늘의 학습/오답노트 페이지, 채점하기 기능, '학부모 코너' 메뉴의 포인트 내역 페이지를 담당하였습니다.",
        page: "https://pichiss.github.io/TeamMMs/",
        git: "https://github.com/pcm5433/TeamMMs_Chaemin",
        full_img: m_full
    }]
}

export {Contents};