import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  const { query } = useRouter();
  const line_name:any = query.lineName
  const api_line = encodeURIComponent(line_name)
  const apikey:string|undefined = process.env.REACT_APP_APIKEY
  //const apiurl:string = 'https://subway.2ero.dev/api/subway?station=' + api_line
  const apiurl:string = 'http://swopenapi.seoul.go.kr/api/subway/' + apikey + '/json/realtimePosition/0/100/' + api_line

  const line:any = [
    ['1호선', 1], ['2호선', 2], ['3호선', 3], ['4호선', 4], ['5호선', 5], ['6호선', 6], ['7호선', 7], ['8호선', 8], ['9호선', 9],
    ['경의중앙선', 'gyeongjung'], ['수인분당선', 'suinbundang'], ['경춘선', 'gyeongchun'],
    ['우이신설선', 'ui'], ['신분당선', 'shinbundang'], ['공항철도', 'airport']
    /*,['신림', 'shinrim'],['인천1호', 'incheon1'], ['인천2호', 'incheon2']*/
  ];

  const metro_company:any = [
    ['K', '한국철도공사', '1577-7769', 'www.letskorail.com'],
    ['S', '서울교통공사', '1577-1234', 'www.seoulmetro.co.kr'],
    ['I', '인천교통공사', '1899-4446', 'www.ictr.or.kr'],
    ['N', '남양주도시공사', '031-560-1415', 'www.ncuc.or.kr'],
    ['UI', '우이신설도시철도', '02-3499-5561', 'www.ui-line.com'],
    ['M9', '서울시메트로9호선', '02-2656-0009', 'www.metro9.co.kr'],
    ['SB', '신분당선주식회사', '031-8018,7777', 'www.shinbundang.co.kr'],
    ['Airport', '공항철도주식회사', '1599-7788', 'www.arex.or.kr']
  ]

  const line_1:any = [
    ['K', '097', , '연천', '미개통'],
    ['K', '098', , '전곡', '미개통'],
    ['K', '099', , '초성리', '미개통'],
    ['K', '100', , '소요산', ''],
    ['K', '101', , '동두천', ''],
    ['K', '102', , '보산', ''],
    ['K', '103', , '동두천중앙', ''],
    ['K', '104', , '지행', ''],
    ['K', '105', , '덕정', ''],
    ['K', '000', , '회정', '미개통'],
    ['K', '106', , '덕계', ''],
    ['K', '107', , '양주', ''],
    ['K', '108', , '녹양', ''],
    ['K', '109', , '가능', ''],
    ['K', '110', , '의정부', ''],
    ['K', '111', , '회룡', ''],
    ['K', '112', , '망월사', ''],
    ['K', '113', , '도봉산', ''],
    ['K', '114', , '도봉', ''],
    ['K', '115', , '방학', ''],
    ['K', '116', , '창동', ''],
    ['K', '117', , '녹천', ''],
    ['K', '118', , '월계', ''],
    ['K', '119', , '광운대', ''],
    ['K', '120', , '석계', ''],
    ['K', '121', , '신이문', ''],
    ['K', '122', , '외대앞', ''],
    ['K', '123', , '회기', ''],
    ['S', '124', , '지하청량리', ''],
    ['S', '125', , '제기동', ''],
    ['S', '126', , '신설동', ''],
    ['S', '127', , '동묘앞', ''],
    ['S', '128', , '동대문', ''],
    ['S', '129', , '종로5가', ''],
    ['S', '130', , '종로3가', ''],
    ['S', '131', , '종각', ''],
    ['S', '132', , '시청', ''],
    ['S', '133', , '지하서울역', ''],
    ['K', '134', , '남영', ''],
    ['K', '135', , '용산', ''],
    ['K', '136', , '노량진', ''],
    ['K', '137', , '대방', ''],
    ['K', '138', , '신길', ''],
    ['K', '139', , '영등포', ''],
    ['K', '140', , '신도림', ''],
    ['K', '141', , '구로', ''],
    ['K', '142', , '구일', ''],
    ['K', '143', , '개봉', ''],
    ['K', '144', , '오류동', ''],
    ['K', '145', , '온수', ''],
    ['K', '146', , '역곡', ''],
    ['K', '147', , '소사', ''],
    ['K', '148', , '부천', ''],
    ['K', '149', , '중동', ''],
    ['K', '150', , '송내', ''],
    ['K', '151', , '부개', ''],
    ['K', '152', , '부평', ''],
    ['K', '153', , '백운', ''],
    ['K', '154', , '동암', ''],
    ['K', '155', , '간석', ''],
    ['K', '156', , '주안', ''],
    ['K', '157', , '도화', ''],
    ['K', '158', , '제물포', ''],
    ['K', '159', , '도원', ''],
    ['K', '160', , '동인천', ''],
    ['K', '161', , '인천', ''],
    ['K', 'P141', '경부선', '구로', ''],
    ['K', 'P142', '경부선', '가산디지털단지', ''],
    ['K', 'P143', '경부선', '독산', ''],
    ['K', 'P144', '경부선', '금천구청', ''],
    ['K', 'P145', '경부선', '석수', ''],
    ['K', 'P146', '경부선', '관악', ''],
    ['K', 'P147', '경부선', '안양', ''],
    ['K', 'P148', '경부선', '명학', ''],
    ['K', 'P159', '경부선', '금정', ''],
    ['K', 'P150', '경부선', '군포', ''],
    ['K', 'P151', '경부선', '당정', ''],
    ['K', 'P152', '경부선', '의왕', ''],
    ['K', 'P153', '경부선', '성균관대', ''],
    ['K', 'P154', '경부선', '화서', ''],
    ['K', 'P155', '경부선', '수원', ''],
    ['K', 'P156', '경부선', '세류', ''],
    ['K', 'P157', '경부선', '병점', ''],
    ['K', 'P158', '경부선', '세마', ''],
    ['K', 'P159', '경부선', '오산대', ''],
    ['K', 'P160', '경부선', '오산', ''],
    ['K', 'P161', '경부선', '진위', ''],
    ['K', 'P162', '경부선', '송탄', ''],
    ['K', 'P163', '경부선', '서정리', ''],
    ['K', 'P164', '경부선', '평택지제', ''],
    ['K', 'P165', '경부선', '평택', ''],
    ['K', 'P166', '경부선', '성환', ''],
    ['K', 'P167', '경부선', '직산', ''],
    ['K', 'P000', '경부선', '부성', '미개통'],
    ['K', 'P168', '경부선', '두정', ''],
    ['K', 'P169', '경부선', '천안', ''],
    ['K', 'P170', '경부선', '봉명', ''],
    ['K', 'P171', '경부선', '쌍용', ''],
    ['K', 'P172', '경부선', '아산', ''],
    ['K', 'P173', '경부선', '탕정', ''],
    ['K', 'P174', '경부선', '배방', ''],
    ['K', 'P175', '경부선', '풍기', '미개통'],
    ['K', 'P176', '경부선', '온양온천', ''],
    ['K', 'P177', '경부선', '신창', ''],
    ['K', 'P144-1', '경부고속선', '광명', ''],
    ['K', 'P157-1', '병점기지선', '서동탄', '']
  ]

  const line_2:any = [
    ['S', '201', , '시청', ''],
    ['S', '202', , '을지로입구', ''],
    ['S', '203', , '을지로3가', ''],
    ['S', '204', , '을지로4가', ''],
    ['S', '205', , '동대문역사문화공원', ''],
    ['S', '206', , '신당', ''],
    ['S', '207', , '상왕십리', ''],
    ['S', '208', , '왕십리', ''],
    ['S', '209', , '한양대', ''],
    ['S', '210', , '뚝섬', ''],
    ['S', '211', , '성수', ''],
    ['S', '212', , '건대입구', ''],
    ['S', '213', , '구의', ''],
    ['S', '214', , '강변', ''],
    ['S', '215', , '잠실나루', ''],
    ['S', '216', , '잠실', ''],
    ['S', '217', , '잠실새내', ''],
    ['S', '218', , '종합운동장', ''],
    ['S', '219', , '삼성', ''],
    ['S', '220', , '선릉', ''],
    ['S', '221', , '역삼', ''],
    ['S', '222', , '강남', ''],
    ['S', '223', , '교대', ''],
    ['S', '224', , '서초', ''],
    ['S', '225', , '방배', ''],
    ['S', '226', , '사당', ''],
    ['S', '227', , '낙성대', ''],
    ['S', '228', , '서울대입구', ''],
    ['S', '229', , '봉천', ''],
    ['S', '230', , '신림', ''],
    ['S', '231', , '신대방', ''],
    ['S', '232', , '구로디지털단지', ''],
    ['S', '233', , '대림', ''],
    ['S', '234', , '신도림', ''],
    ['S', '235', , '문래', ''],
    ['S', '236', , '영등포구청', ''],
    ['S', '237', , '당산', ''],
    ['S', '238', , '합정', ''],
    ['S', '239', , '홍대입구', ''],
    ['S', '240', , '지하신촌', ''],
    ['S', '241', , '이대', ''],
    ['S', '242', , '아현', ''],
    ['S', '243', , '충정로', ''],
    ['S', '211', '성수지선', '성수', ''],
    ['S', '211-1', '성수지선', '용답', ''],
    ['S', '211-2', '성수지선', '신답', ''],
    ['S', '211-3', '성수지선', '용두', ''],
    ['S', '211-4', '성수지선', '신설동', ''],
    ['S', '234', '신정지선', '신도림', ''],
    ['S', '234-1', '신정지선', '도림천', ''],
    ['S', '234-2', '신정지선', '양천구청', ''],
    ['S', '234-3', '신정지선', '신정네거리', ''],
    ['S', '234-4', '신정지선', '까치산', '']
  ]

  const line_3:any = [
    ['S', '309', '', '대화', ''],
    ['S', '310', '', '주엽', ''],
    ['S', '311', '', '정발산', ''],
    ['S', '312', '', '마두', ''],
    ['S', '313', '', '백석', ''],
    ['S', '314', '', '대곡', ''],
    ['S', '315', '', '화정', ''],
    ['S', '316', '', '원당', ''],
    ['S', '317', '', '원흥', ''],
    ['S', '318', '', '삼송', ''],
    ['S', '319', '', '지축', ''],
    ['S', '320', '', '구파발', ''],
    ['S', '321', '', '연신내', ''],
    ['S', '322', '', '불광', ''],
    ['S', '323', '', '녹번', ''],
    ['S', '324', '', '홍제', ''],
    ['S', '325', '', '무악재', ''],
    ['S', '326', '', '독립문', ''],
    ['S', '327', '', '경복궁', ''],
    ['S', '328', '', '안국', ''],
    ['S', '329', '', '종로3가', ''],
    ['S', '330', '', '을지로3가', ''],
    ['S', '331', '', '충무로', ''],
    ['S', '332', '', '동대입구', ''],
    ['S', '333', '', '약수', ''],
    ['S', '334', '', '금호', ''],
    ['S', '335', '', '옥수', ''],
    ['S', '336', '', '압구정', ''],
    ['S', '337', '', '신사', ''],
    ['S', '338', '', '잠원', ''],
    ['S', '339', '', '고속더미널', ''],
    ['S', '340', '', '교대', ''],
    ['S', '341', '', '남부터미널', ''],
    ['S', '342', '', '양재', ''],
    ['S', '343', '', '매봉', ''],
    ['S', '344', '', '도곡', ''],
    ['S', '345', '', '대치', ''],
    ['S', '346', '', '학여울', ''],
    ['S', '347', '', '대청', ''],
    ['S', '348', '', '일원', ''],
    ['S', '349', '', '수서', ''],
    ['S', '350', '', '가락시장', ''],
    ['S', '351', '', '경찰병원', ''],
    ['S', '352', '', '오금', '']
  ]

  const line_4:any = [
    ['N', '405', , '진접', ''],
    ['N', '406', , '오남', ''],
    ['N', '407', , '풍양', '미개통'],
    ['N', '408', , '별내별가람', ''],
    ['S', '409', , '당고개', ''],
    ['S', '410', , '상계', ''],
    ['S', '411', , '노원', ''],
    ['S', '412', , '창동', ''],
    ['S', '413', , '쌍문', ''],
    ['S', '414', , '수유', ''],
    ['S', '415', , '미아', ''],
    ['S', '416', , '미아사거리', ''],
    ['S', '417', , '길음', ''],
    ['S', '418', , '성신여대입구', ''],
    ['S', '419', , '한성대입구', ''],
    ['S', '420', , '혜화', ''],
    ['S', '421', , '동대문', ''],
    ['S', '422', , '동대문역사문화공원', ''],
    ['S', '423', , '충무로', ''],
    ['S', '424', , '명동', ''],
    ['S', '425', , '회현', ''],
    ['S', '426', , '지하서울역', ''],
    ['S', '427', , '숙대입구', ''],
    ['S', '428', , '삼각지', ''],
    ['S', '429', , '신용산', ''],
    ['S', '430', , '이촌', ''],
    ['S', '431', , '동작', ''],
    ['S', '432', , '총신대입구', ''],
    ['S', '433', , '사당', ''],
    ['S', '434', , '남태령', ''],
    ['K', '435', , '선바위', ''],
    ['K', '436', , '경마공원', ''],
    ['K', '437', , '대공원', ''],
    ['K', '438', , '과천', ''],
    ['K', '439', , '정부과천청사', ''],
    ['K', '440', , '인덕원', ''],
    ['K', '441', , '평촌', ''],
    ['K', '442', , '범계', ''],
    ['K', '443', , '금정', ''],
    ['K', '444', , '산본', ''],
    ['K', '445', , '수리산', ''],
    ['K', '446', , '대야미', ''],
    ['K', '447', , '반월', ''],
    ['K', '448', , '상록수', ''],
    ['K', '449', , '한대앞', ''],
    ['K', '450', , '중앙', ''],
    ['K', '451', , '고잔', ''],
    ['K', '452', , '초지', ''],
    ['K', '453', , '안산', ''],
    ['K', '454', , '신길온천', ''],
    ['K', '455', , '정왕', ''],
    ['K', '456', , '오이도', '']
  ]

  const line_5:any = [
    ['S', '510', ,'방화', ''],
    ['S', '511', ,'개화산', ''],
    ['S', '512', ,'김포공항', ''],
    ['S', '513', ,'송정', ''],
    ['S', '514', ,'마곡', ''],
    ['S', '515', ,'발산', ''],
    ['S', '516', ,'우장산', ''],
    ['S', '517', ,'화곡', ''],
    ['S', '518', ,'까치산', ''],
    ['S', '519', ,'신정', ''],
    ['S', '520', ,'목동', ''],
    ['S', '521', ,'오목교', ''],
    ['S', '522', ,'양평', ''],
    ['S', '523', ,'영등포구청', ''],
    ['S', '524', ,'영등포시장', ''],
    ['S', '525', ,'신길', ''],
    ['S', '526', ,'여의도', ''],
    ['S', '527', ,'여의나루', ''],
    ['S', '528', ,'마포', ''],
    ['S', '529', ,'공덕', ''],
    ['S', '530', ,'애오개', ''],
    ['S', '531', ,'충정로', ''],
    ['S', '532', ,'서대문', ''],
    ['S', '533', ,'광화문', ''],
    ['S', '534', ,'종로3가', ''],
    ['S', '535', ,'을지로4가' ,''],
    ['S', '536', ,'동대문역사문화공원', ''],
    ['S', '537', ,'청구', ''],
    ['S', '538', ,'신금호', ''],
    ['S', '539', ,'행당', ''],
    ['S', '540', ,'왕십리', ''],
    ['S', '541', ,'마장', ''],
    ['S', '542', ,'답십리', ''],
    ['S', '543', ,'장한평', ''],
    ['S', '544', ,'군자', ''],
    ['S', '545', ,'아차산', ''],
    ['S', '546', ,'광나루', ''],
    ['S', '547', ,'천호', ''],
    ['S', '548', ,'강동', ''],
    ['S', '549', ,'길동', ''],
    ['S', '550', ,'굽은다리', ''],
    ['S', '551', ,'명일', ''],
    ['S', '552', ,'고덕', ''],
    ['S', '553', ,'상일동', ''],
    ['S', '554', ,'강일', ''],
    ['S', '555', ,'미사', ''],
    ['S', '556', ,'하남풍산', ''],
    ['S', '557', ,'하남시청', ''],
    ['S', '558', ,'하남검단산', ''],
    ['S', 'P548', '마천지선', '강동', ''],
    ['S', 'P549', '마천지선', '둔촌동', ''],
    ['S', 'P550', '마천지선', '올림픽공원', ''],
    ['S', 'P551', '마천지선', '방이', ''],
    ['S', 'P552', '마천지선', '오금', ''],
    ['S', 'P553', '마천지선', '개롱', ''],
    ['S', 'P554', '마천지선', '거여', ''],
    ['S', 'P555', '마천지선', '마천', '']
  ]

  const line_6:any = [
    ['S', '610', , '응암', ''],
    ['S', '611', , '역촌', ''],
    ['S', '612', , '불광', ''],
    ['S', '613', , '독바위', ''],
    ['S', '614', , '연신내', ''],
    ['S', '615', , '구산', ''],
    ['S', '610', , '응암', ''],
    ['S', '616', , '새절', ''],
    ['S', '617', , '증산', ''],
    ['S', '618', , '디지털미디어시티', ''],
    ['S', '619', , '월드컵경기장', ''],
    ['S', '620', , '마포구청', ''],
    ['S', '621', , '망원', ''],
    ['S', '622', , '합정', ''],
    ['S', '623', , '상수', ''],
    ['S', '624', , '광흥창', ''],
    ['S', '625', , '대흥', ''],
    ['S', '626', , '공덕', ''],
    ['S', '627', , '효창공원앞', ''],
    ['S', '628', , '삼각지', ''],
    ['S', '629', , '녹사평', ''],
    ['S', '630', , '이태원', ''],
    ['S', '631', , '한강진', ''],
    ['S', '632', , '버티고개', ''],
    ['S', '633', , '약수', ''],
    ['S', '634', , '청구', ''],
    ['S', '635', , '신당', ''],
    ['S', '636', , '동묘앞', ''],
    ['S', '637', , '창신', ''],
    ['S', '638', , '보문', ''],
    ['S', '639', , '안암', ''],
    ['S', '640', , '고려대', ''],
    ['S', '641', , '월곡', ''],
    ['S', '642', , '상월곡', ''],
    ['S', '643', , '들곶이', ''],
    ['S', '644', , '석계', ''],
    ['S', '645', , '태릉입구', ''],
    ['S', '646', , '화랑대', ''],
    ['S', '647', , '봉화산', ''],
    ['S', '648', , '신내', '']
  ]
  const line_7:any = [
    ['', '707', , '고읍', '미개통'],
    ['', '708', , '탑석', '미개통'],
    ['S', '709', , '장암', ''],
    ['S', '710', , '도봉산', ''],
    ['S', '711', , '수락산', ''],
    ['S', '712', , '마들', ''],
    ['S', '713', , '노원', ''],
    ['S', '714', , '중계', ''],
    ['S', '715', , '하계', ''],
    ['S', '716', , '공릉', ''],
    ['S', '717', , '태릉입구', ''],
    ['S', '718', , '먹골', ''],
    ['S', '719', , '중화', ''],
    ['S', '720', , '상봉', ''],
    ['S', '721', , '면목', ''],
    ['S', '722', , '사가정', ''],
    ['S', '723', , '용마산', ''],
    ['S', '724', , '중곡', ''],
    ['S', '725', , '군자', ''],
    ['S', '726', , '어린이대공원', ''],
    ['S', '727', , '건대입구', ''],
    ['S', '728', , '뚝섬유원지', ''],
    ['S', '729', , '청담', ''],
    ['S', '730', , '강남구청', ''],
    ['S', '731', , '학동', ''],
    ['S', '732', , '논현', ''],
    ['S', '733', , '반포', ''],
    ['S', '734', , '고속터미널', ''],
    ['S', '735', , '내방', ''],
    ['S', '736', , '이수', ''],
    ['S', '737', , '남성', ''],
    ['S', '738', , '숭실대입구', ''],
    ['S', '739', , '상도', ''],
    ['S', '740', , '장승배기', ''],
    ['S', '741', , '신대방삼거리', ''],
    ['S', '742', , '보라매', ''],
    ['S', '743', , '신풍', ''],
    ['S', '744', , '대림', ''],
    ['S', '745', , '남구로', ''],
    ['S', '746', , '가산디지털단지', ''],
    ['S', '747', , '철산', ''],
    ['S', '748', , '광명사거리', ''],
    ['S', '749', , '천왕', ''],
    ['S', '750', , '온수', ''],
    ['I', '751', , '까치울', ''],
    ['I', '752', , '부천종합운동장', ''],
    ['I', '753', , '춘의', ''],
    ['I', '754', , '신중동', ''],
    ['I', '755', , '부천시청', ''],
    ['I', '756', , '상동', ''],
    ['I', '757', , '삼산체육관', ''],
    ['I', '758', , '굴포천', ''],
    ['I', '759', , '부평구청', ''],
    ['I', '760', , '산곡', ''],
    ['I', '761', , '석남', ''],
    ['I', '762', , '독골사거리', '미개통'],
    ['I', '763', , '가현', '미개통'],
    ['I', '764', , '심곡천', '미개통'],
    ['I', '765', , '커낼웨이', '미개통'],
    ['I', '766', , '청라시티타워', '미개통'],
    ['I', '767', , '청라국제업무단지', '미개통'],
    ['I', '768', , '청라국제도시', '미개통']
  ]
  const line_8:any = [
    ['S', '802', , '별내별가람', '미개통'],
    ['S', '803', , '별내중앙', '미개통'],
    ['S', '804', , '별내', '미개통'],
    ['S', '805', , '다산', '미개통'],
    ['S', '806', , '동구릉', '미개통'],
    ['S', '807', , '구리', '미개통'],
    ['S', '808', , '장자호수공원', '미개통'],
    ['S', '809', , '암사역사공원', '미개통'],
    ['S', '810', , '암사', ''],
    ['S', '811', , '천호', ''],
    ['S', '812', , '강동구청', ''],
    ['S', '813', , '몽촌토성', ''],
    ['S', '814', , '잠실', ''],
    ['S', '815', , '석촌', ''],
    ['S', '816', , '송파', ''],
    ['S', '817', , '가락시장', ''],
    ['S', '818', , '문정', ''],
    ['S', '819', , '장지', ''],
    ['S', '820', , '복정', ''],
    ['S', '821', , '남위례', ''],
    ['S', '822', , '산성', ''],
    ['S', '823', , '남한산성입구', ''],
    ['S', '824', , '단대오거리', ''],
    ['S', '825', , '신흥', ''],
    ['S', '826', , '수진', ''],
    ['S', '827', , '모란', '']
  ]
  const line_9:any = [
    ['M9', '901', , '개화', ''],
    ['M9', '902', , '김포공항', ''],
    ['M9', '903', , '공항시장', ''],
    ['M9', '904', , '신방화', ''],
    ['M9', '905', , '마곡나루', ''],
    ['M9', '906', , '양천향교', ''],
    ['M9', '907', , '가양', ''],
    ['M9', '908', , '증미', ''],
    ['M9', '909', , '등촌', ''],
    ['M9', '910', , '염창', ''],
    ['M9', '911', , '신목동', ''],
    ['M9', '912', , '선유도', ''],
    ['M9', '913', , '당산', ''],
    ['M9', '914', , '국회의사당', ''],
    ['M9', '915', , '여의도', ''],
    ['M9', '916', , '샛강', ''],
    ['M9', '917', , '노량진', ''],
    ['M9', '918', , '노들', ''],
    ['M9', '919', , '흑석', ''],
    ['M9', '920', , '동작', ''],
    ['M9', '921', , '구반포', ''],
    ['M9', '922', , '신반포', ''],
    ['M9', '923', , '고속터미널', ''],
    ['M9', '924', , '사평', ''],
    ['M9', '925', , '신논현', ''],
    ['S', '926', , '언주', ''],
    ['S', '927', , '선정릉', ''],
    ['S', '928', , '삼성중앙', ''],
    ['S', '929', , '봉은사', ''],
    ['S', '930', , '종합운동장', ''],
    ['S', '931', , '삼전', ''],
    ['S', '932', , '석촌고분', ''],
    ['S', '933', , '석촌', ''],
    ['S', '934', , '송파나루', ''],
    ['S', '935', , '한성백제', ''],
    ['S', '936', , '올림픽공원', ''],
    ['S', '937', , '둔촌오륜', ''],
    ['S', '938', , '중앙보훈병원', ''],
    ['S', '939', , '길동생태공원', '미개통'],
    ['S', '940', , '신명일', '미개통'],
    ['S', '941', , '고덕', '미개통'],
    ['S', '942', , '샘터공원', '미개통']
  ]
  const line_gyeongjung:any = []
  const line_suinbundang:any = []
  const line_gyeongchun:any = [
    ['K' ,'K117', , '청량리', ''],
    ['K' ,'K118', , '회기', ''],
    ['K' ,'K119', , '중랑', ''],
    ['K' ,'K120', , '상봉', ''],
    ['K' ,'K121', , '망우', ''],
    ['K' ,'K122', , '신내', ''],
    ['K' ,'K123', , '갈매', ''],
    ['K' ,'K124', , '별내', ''],
    ['K' ,'K125', , '퇴계원', ''],
    ['K' ,'K000', , '왕숙', '미개통'],
    ['K' ,'K126', , '사릉', ''],
    ['K' ,'K127', , '금곡', ''],
    ['K' ,'K128', , '평내호평', ''],
    ['K' ,'K129', , '천마산', ''],
    ['K' ,'K130', , '마석', ''],
    ['K' ,'K131', , '대성리', ''],
    ['K' ,'K132', , '청평', ''],
    ['K' ,'K133', , '상천', ''],
    ['K' ,'K134', , '가평', ''],
    ['K' ,'K135', , '굴봉산', ''],
    ['K' ,'K136', , '백양리', ''],
    ['K' ,'K137', , '강촌', ''],
    ['K' ,'K138', , '김유정' ,''],
    ['K' ,'K139', , '남춘천', ''],
    ['K' ,'K140', , '춘천', '']
  ]

  const line_ui:any = [
    ['UI', 'S110', , '북한산우이', ''],
    ['UI', 'S111', , '솔밭공원', ''],
    ['UI', 'S112', , '419민주묘지', ''],
    ['UI', 'S113', , '가오리', ''],
    ['UI', 'S114', , '화계', ''],
    ['UI', 'S115', , '삼양', ''],
    ['UI', 'S116', , '삼양사거리', ''],
    ['UI', 'S117', , '솔샘', ''],
    ['UI', 'S118', , '북한산보국문', ''],
    ['UI', 'S119', , '정릉', ''],
    ['UI', 'S120', , '성신여대입구', ''],
    ['UI', 'S121', , '보문', ''],
    ['UI', 'S122', , '신설동', '']
  ]

  const line_shinbundang:any = [
    ['SB', 'D01', , '용산', '미개통'],
    ['SB', 'D02', , '국립박물관', '미개통'],
    ['SB', 'D03', , '동빙고', '미개통'],
    ['SB', 'D04', , '신사', ''],
    ['SB', 'D05', , '논현', ''],
    ['SB', 'D06', , '신논현', ''],
    ['SB', 'D07', , '강남', ''],
    ['SB', 'D08', , '양재', ''],
    ['SB', 'D09', , '양재시민의숲', ''],
    ['SB', 'D10', , '청계산입구', ''],
    ['SB', 'D11', , '판교', ''],
    ['SB', 'D12', , '정자', ''],
    ['SB', 'D13', , '미금', ''],
    ['SB', 'D14', , '동천', ''],
    ['SB', 'D15', , '수지구청', ''],
    ['SB', 'D16', , '성복', ''],
    ['SB', 'D17', , '상현', ''],
    ['SB', 'D18', , '광교중앙', ''],
    ['SB', 'D19', , '수원월드컵경기장', '미개통'],
    ['SB', 'D20', , '동수원', '미개통'],
    ['SB', 'D21', , '화서', '미개통'],
    ['SB', 'D22', , '호매실', '미개통']
  ]
  const line_airport:any = [
    ['Airport', 'A01', , '서울역', ''],
    ['Airport', 'A02', , '공덕', ''],
    ['Airport', 'A03', , '홍대입구', ''],
    ['Airport', 'A04', , '디지털미디어시티', ''],
    ['Airport', 'A05', , '마곡나루', ''],
    ['Airport', 'A06', , '김포공항', ''],
    ['Airport', 'A07', , '계양', ''],
    ['Airport', 'A08', , '검암', ''],
    ['Airport', 'A09', , '청라국제도시', ''],
    ['Airport', 'A10', , '영종', ''],
    ['Airport', 'A11', , '운서', ''],
    ['Airport', 'A12', , '공항화물청사', ''],
    ['Airport', 'A13', , '인천공항1터미널', ''],
    ['Airport', 'A14', , '인천공항2터미널', ''],
    ['Airport', 'A15', , '용유', '미개통']
  ]

  let stationInfo:any = ''

  let lineId:any|undefined;

  if(query.lineId !== undefined) lineId = 'line_' + query.lineId

  function getData(){

    axios.get(apiurl).then((res) => {
      const data = res.data;
      if(data.status === 500) { return console.log('error!') }
      data.realtimePositionList.map((e:any, key:number) => {
        const getStnId = e['statnId'].substr(6)
        let stnId:string;
        if(getStnId[0] == 0) stnId = getStnId.substr(1)
        else stnId = getStnId
      
        const newDiv = document.createElement('div')
        if(e['updnLine'] == 0) {
          if(e['trainSttus']) {
            document.querySelector('.stn_' + stnId)?.append('test')
            //`[data-id=${stnId}]`
          } else if(e['trainSttus'] === 1) {document.querySelector('.stn_' + stnId)?.append('test')
            
          } else {document.querySelector('.stn_' + stnId)?.append('test')
            
          }
        } else {
          if(e['trainSttus'] === 0) {
            const newText = document.createTextNode(e['trainNo'] + '열차 ' + e['statnNm'] + ' 진입')
            newDiv.append(newText)
            document.querySelector('.up_approach.stnid_' + stnId)?.append(newDiv)
          }
          else if(e['trainSttus'] === 1) {
            const newText = document.createTextNode(e['trainNo'] + '열차 ' + e['statnNm'] + ' 도착')
            newDiv.append(newText)
            document.querySelector('.up_approach.stnid_' + stnId)?.append(newDiv)
          } else {
            const newText = document.createTextNode(e['trainNo'] + '열차 ' + e['statnNm'] + ' 출발')
            newDiv.append(newText)
            document.querySelector('.up_approach.stnid_' + stnId)?.append(newDiv)
          }
        }
      })
    })

    //eval(lineId).map(x => console.log(x))
  }

  useEffect(() => {
    if(query.lineName !== undefined && query.lineId !== undefined) {
      // 최초 1회는 불러오고 이후로는 30초 단위로 갱신
      getData()

      const interval = setInterval(() => getData(), 10000);
      return() => clearInterval(interval)
    }
  })

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <nav>
        <ul className='gnb'>
          {
            line.map(
              (e:any, key:number) => {
                let line_name:any = '';
                const line_number:any = 'bg line_' + e[1]
                if (e[1] >= 0 && e[1] <= 9) line_name = e[0]
                else line_name = e[0]
                return(
                  <li className={line_number} key={key}>
                    <Link href={{ pathname: '', query: { lineId: e[1], lineName: e[0] } }}>
                      <a className='selectMetro'>{line_name}</a>
                    </Link>
                  </li>
                )
              })
          }
        </ul>
      </nav>
      <main>
        {
          eval(lineId) !== undefined && eval(lineId).map((e:any, key:number) => {
            if(e[4] !== '미개통') {
              return(
              <div className='row' key={key}>
                <div className='direction_down'>
                  <div className='down_leave'></div>
                  <div className='down_arrival'></div>
                  <div className='down_approach'></div>
                </div>
                <div className='station_info'>
                  <div>
                    <span className={'StnId bg ' + lineId}>{e[1]}</span>
                    <span className='StnName'>{e[3]}</span>
                  </div>
                </div>
                <div className='direction_up'>
                  <div className={'up_leave stnid_' + e[1]}></div>
                  <div className={'up_arrival stnid_' + e[1]}></div>
                  <div className={'up_approach stnid_' + e[1]}></div>
                </div>
              </div>)}
          })
        }
      </main>
    </>
  )
}

export default Home
