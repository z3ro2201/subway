/*export const getStation = {
  {'K', '097', {}, , '연천', '미개통'},
  {'K', '098', {}, , '전곡', '미개통'},
  {'K', '099', {}, , '초성리', '미개통'},
  {'K', '100', {}, , '소요산', ''},
  {'K', '101', {}, , '동두천', ''},
  {'K', '102', {}, , '보산', ''},
  {'K', '103', {}, , '동두천중앙', ''},
  {'K', '104', {}, , '지행', ''},
  {'K', '105', {}, , '덕정', ''},
  {'K', '000', {}, , '회정', '미개통'},
  {'K', '106', {}, , '덕계', ''},
  {'K', '107', {}, , '양주', ''},
  {'K', '108', {}, , '녹양', ''},
  {'K', '109', {}, , '가능', ''},
  {'K', '110', {}, , '의정부', ''},
  {'K', '111', {'UL'}, , '회룡', ''},
  {'K', '112', {}, , '망월사', ''},
  {'K', '113', {7}, , '도봉산', ''},
  {'K', '114', {}, , '도봉', ''},
  {'K', '115', {}, , '방학', ''},
  {'K', '116', {4}, , '창동', ''},
  {'K', '117', {}, , '녹천', ''},
  {'K', '118', {}, , '월계', ''},
  {'K', '119', {'Gyeongchun'}, , '광운대', ''},
  {'K', '120', {6}, , '석계', ''},
  {'K', '121', {}, , '신이문', ''},
  {'K', '122', {}, , '외대앞', ''},
  {'K', '123', {'GyeongJung', 'Gyeongchun'}, , '회기', ''},
  {'S', '124', {}, , '지하청량리', ''},
  {'S', '125', {}, , '제기동', ''},
  {'S', '126', {'UI', '2SS'}, , '신설동', ''},
  {'S', '127', {6}, , '동묘앞', ''},
  {'S', '128', {4}, , '동대문', ''},
  {'S', '129', {}, , '종로5가', ''},
  {'S', '130', {3, 5}, , '종로3가', ''},
  {'S', '131', {}, , '종각', ''},
  {'S', '132', {2}, , '시청', ''},
  {'S', '133', {4, 'Airport', 'GyeongJung'}, , '지하서울역', ''},
  {'K', '134', {}, , '남영', ''},
  {'K', '135', {'Gyeongjung', 'ITX'}, , '용산', ''},
  {'K', '136', {9}, , '노량진', ''},
  {'K', '137', {'SR'}, , '대방', ''},
  {'K', '138', {5}, , '신길', ''},
  {'K', '139', {}, , '영등포', ''},
  {'K', '140', {2, '2SJ'}, , '신도림', ''},
  {'K', '141', {}, , '구로', ''},
  {'K', '142', {}, , '구일', ''},
  {'K', '143', {}, , '개봉', ''},
  {'K', '144', {}, , '오류동', ''},
  {'K', '145', {7}, , '온수', ''},
  {'K', '146', {}, , '역곡', ''},
  {'K', '147', {'SH'}, , '소사', ''},
  {'K', '148', {}, , '부천', ''},
  {'K', '149', {}, , '중동', ''},
  {'K', '150', {}, , '송내', ''},
  {'K', '151', {}, , '부개', ''},
  {'K', '152', {'I1'}, , '부평', ''},
  {'K', '153', {}, , '백운', ''},
  {'K', '154', {}, , '동암', ''},
  {'K', '155', {}, , '간석', ''},
  {'K', '156', {'I2'}, , '주안', ''},
  {'K', '157', {}, , '도화', ''},
  {'K', '158', {}, , '제물포', ''},
  {'K', '159', {}, , '도원', ''},
  {'K', '160', {}, , '동인천', ''},
  {'K', '161', {'SuinBundang'}, , '인천', ''},
  {'K', 'P141', {}, '경부선', '구로', ''},
  {'K', 'P142', {}, '경부선', '가산디지털단지', ''},
  {'K', 'P143', {}, '경부선', '독산', ''},
  {'K', 'P144', {}, '경부선', '금천구청', ''},
  {'K', 'P145', {}, '경부선', '석수', ''},
  {'K', 'P146', {}, '경부선', '관악', ''},
  {'K', 'P147', {}, '경부선', '안양', ''},
  {'K', 'P148', {}, '경부선', '명학', ''},
  {'K', 'P159', {4}, '경부선', '금정', ''},
  {'K', 'P150', {}, '경부선', '군포', ''},
  {'K', 'P151', {}, '경부선', '당정', ''},
  {'K', 'P152', {}, '경부선', '의왕', ''},
  {'K', 'P153', {}, '경부선', '성균관대', ''},
  {'K', 'P154', {}, '경부선', '화서', ''},
  {'K', 'P155', {'SuinBundang'}, '경부선', '수원', ''},
  {'K', 'P156', {}, '경부선', '세류', ''},
  {'K', 'P157', {}, '경부선', '병점', ''},
  {'K', 'P158', {}, '경부선', '세마', ''},
  {'K', 'P159', {}, '경부선', '오산대', ''},
  {'K', 'P160', {}, '경부선', '오산', ''},
  {'K', 'P161', {}, '경부선', '진위', ''},
  {'K', 'P162', {}, '경부선', '송탄', ''},
  {'K', 'P163', {}, '경부선', '서정리', ''},
  {'K', 'P164', {}, '경부선', '평택지제', ''},
  {'K', 'P165', {}, '경부선', '평택', ''},
  {'K', 'P166', {}, '경부선', '성환', ''},
  {'K', 'P167', {}, '경부선', '직산', ''},
  {'K', 'P000', {}, '경부선', '부성', '미개통'},
  {'K', 'P168', {}, '경부선', '두정', ''},
  {'K', 'P169', {}, '경부선', '천안', ''},
  {'K', 'P170', {}, '경부선', '봉명', ''},
  {'K', 'P171', {}, '경부선', '쌍용', ''},
  {'K', 'P172', {}, '경부선', '아산', ''},
  {'K', 'P173', {}, '경부선', '탕정', ''},
  {'K', 'P174', {}, '경부선', '배방', ''},
  {'K', 'P175', {}, '경부선', '풍기', '미개통'},
  {'K', 'P176', {}, '경부선', '온양온천', ''},
  {'K', 'P177', {}, '경부선', '신창', ''},
  {'K', 'P144-1', {}, '경부고속선', '광명', ''},
  {'K', 'P157-1', {}, '병점기지선', '서동탄', ''}
}*/

export const getStation =  [
  {'companyCode': 'K', 'lineId': '1', 'stationId': '097', 'transferLine': '', 'lineType':'', 'stationName': '연천', 'status': 0},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '098', 'transferLine': '', 'lineType': '', 'stationName': '전곡', 'status': 0},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '099', 'transferLine': '', 'lineType': '', 'stationName': '초성리', 'status': 0},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '100', 'transferLine': '', 'lineType': '', 'stationName': '소요산', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '101', 'transferLine': '', 'lineType': '', 'stationName': '동두천', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '102', 'transferLine': '', 'lineType': '', 'stationName': '보산', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '103', 'transferLine': '', 'lineType': '', 'stationName': '동두천중앙', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '104', 'transferLine': '', 'lineType': '', 'stationName': '지행', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '105', 'transferLine': '', 'lineType': '', 'stationName': '덕정', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '000', 'transferLine': '', 'lineType': '', 'stationName': '회정', 'status': 0},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '106', 'transferLine': '', 'lineType': '', 'stationName': '덕계', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '107', 'transferLine': '', 'lineType': '', 'stationName': '양주', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '108', 'transferLine': '', 'lineType': '', 'stationName': '녹양', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '109', 'transferLine': '', 'lineType': '', 'stationName': '가능', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '110', 'transferLine': '', 'lineType': '', 'stationName': '의정부', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '111', 'transferLine': '', 'lineType': '', 'stationName': '회룡', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '112', 'transferLine': '', 'lineType': '', 'stationName': '망월사','status':  ''},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '113', 'transferLine': '', 'lineType': '', 'stationName': '도봉산','status':  ''},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '114', 'transferLine': '', 'lineType': '', 'stationName': '도봉', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '115', 'transferLine': '', 'lineType': '', 'stationName': '방학', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '116', 'transferLine': '', 'lineType': '', 'stationName': '창동', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '117', 'transferLine': '', 'lineType': '', 'stationName': '녹천', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '118', 'transferLine': '', 'lineType': '', 'stationName': '월계', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '119', 'transferLine': '', 'lineType': '', 'stationName': '광운대','status':  ''},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '120', 'transferLine': '', 'lineType': '', 'stationName': '석계', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '121', 'transferLine': '', 'lineType': '', 'stationName': '신이문','status':  ''},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '122', 'transferLine': '', 'lineType': '', 'stationName': '외대앞','status':  ''},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '123', 'transferLine': '', 'lineType': '', 'stationName': '회기', 'status': 1},
  {'companyCode': 'S', 'lineId': '1', 'stationId': '124', 'transferLine': '', 'lineType': '', 'stationName': '지하청량리', 'status': 1},
  {'companyCode': 'S', 'lineId': '1', 'stationId': '125', 'transferLine': '', 'lineType': '', 'stationName': '제기동', 'status': 1},
  {'companyCode': 'S', 'lineId': '1', 'stationId': '126', 'transferLine': '', 'lineType': '', 'stationName': '신설동', 'status': 1},
  {'companyCode': 'S', 'lineId': '1', 'stationId': '127', 'transferLine': '', 'lineType': '', 'stationName': '동묘앞', 'status': 1},
  {'companyCode': 'S', 'lineId': '1', 'stationId': '128', 'transferLine': '', 'lineType': '', 'stationName': '동대문', 'status': 1},
  {'companyCode': 'S', 'lineId': '1', 'stationId': '129', 'transferLine': '', 'lineType': '', 'stationName': '종로5가', 'status': 1},
  {'companyCode': 'S', 'lineId': '1', 'stationId': '130', 'transferLine': '', 'lineType': '', 'stationName': '종로3가', 'status': 1},
  {'companyCode': 'S', 'lineId': '1', 'stationId': '131', 'transferLine': '', 'lineType': '', 'stationName': '종각', 'status': 1},
  {'companyCode': 'S', 'lineId': '1', 'stationId': '132', 'transferLine': '', 'lineType': '', 'stationName': '시청', 'status': 1},
  {'companyCode': 'S', 'lineId': '1', 'stationId': '133', 'transferLine': '', 'lineType': '', 'stationName': '지하서울역', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '134', 'transferLine': '', 'lineType': '', 'stationName': '남영', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '135', 'transferLine': '', 'lineType': '', 'stationName': '용산', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '136', 'transferLine': '', 'lineType': '', 'stationName': '노량진', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '137', 'transferLine': '', 'lineType': '', 'stationName': '대방', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '138', 'transferLine': '', 'lineType': '', 'stationName': '신길', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '139', 'transferLine': '', 'lineType': '', 'stationName': '영등포', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '140', 'transferLine': '', 'lineType': '', 'stationName': '신도림', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '141', 'transferLine': '', 'lineType': '', 'stationName': '구로', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '142', 'transferLine': '', 'lineType': '', 'stationName': '구일', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '143', 'transferLine': '', 'lineType': '', 'stationName': '개봉', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '144', 'transferLine': '', 'lineType': '', 'stationName': '오류동', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '145', 'transferLine': '', 'lineType': '', 'stationName': '온수', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '146', 'transferLine': '', 'lineType': '', 'stationName': '역곡', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '147', 'transferLine': '', 'lineType': '', 'stationName': '소사', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '148', 'transferLine': '', 'lineType': '', 'stationName': '부천', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '149', 'transferLine': '', 'lineType': '', 'stationName': '중동', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '150', 'transferLine': '', 'lineType': '', 'stationName': '송내', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '151', 'transferLine': '', 'lineType': '', 'stationName': '부개', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '152', 'transferLine': '', 'lineType': '', 'stationName': '부평', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '153', 'transferLine': '', 'lineType': '', 'stationName': '백운', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '154', 'transferLine': '', 'lineType': '', 'stationName': '동암', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '155', 'transferLine': '', 'lineType': '', 'stationName': '간석', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '156', 'transferLine': '', 'lineType': '', 'stationName': '주안', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '157', 'transferLine': '', 'lineType': '', 'stationName': '도화', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '158', 'transferLine': '', 'lineType': '', 'stationName': '제물포', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '159', 'transferLine': '', 'lineType': '', 'stationName': '도원', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '160', 'transferLine': '', 'lineType': '', 'stationName': '동인천', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': '161', 'transferLine': '', 'lineType': '', 'stationName': '인천', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P141', 'transferLine': '', 'lineType': '경부선', 'stationName': '구로', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P142', 'transferLine': '', 'lineType': '경부선', 'stationName': '가산디지털단지', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P143', 'transferLine': '', 'lineType': '경부선', 'stationName': '독산', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P144', 'transferLine': '', 'lineType': '경부선', 'stationName': '금천구청', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P145', 'transferLine': '', 'lineType': '경부선', 'stationName': '석수', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P146', 'transferLine': '', 'lineType': '경부선', 'stationName': '관악', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P147', 'transferLine': '', 'lineType': '경부선', 'stationName': '안양', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P148', 'transferLine': '', 'lineType': '경부선', 'stationName': '명학', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P159', 'transferLine': '', 'lineType': '경부선', 'stationName': '금정', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P150', 'transferLine': '', 'lineType': '경부선', 'stationName': '군포', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P151', 'transferLine': '', 'lineType': '경부선', 'stationName': '당정', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P152', 'transferLine': '', 'lineType': '경부선', 'stationName': '의왕', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P153', 'transferLine': '', 'lineType': '경부선', 'stationName': '성균관대', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P154', 'transferLine': '', 'lineType': '경부선', 'stationName': '화서', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P155', 'transferLine': 'SuinBundang', 'lineType': '경부선', 'stationName': '수원', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P156', 'transferLine': '', 'lineType': '경부선', 'stationName': '세류', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P157', 'transferLine': '', 'lineType': '경부선', 'stationName': '병점', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P158', 'transferLine': '', 'lineType': '경부선', 'stationName': '세마', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P159', 'transferLine': '', 'lineType': '경부선', 'stationName': '오산대', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P160', 'transferLine': '', 'lineType': '경부선', 'stationName': '오산', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P161', 'transferLine': '', 'lineType': '경부선', 'stationName': '진위', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P162', 'transferLine': '', 'lineType': '경부선', 'stationName': '송탄', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P163', 'transferLine': '', 'lineType': '경부선', 'stationName': '서정리', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P164', 'transferLine': '', 'lineType': '경부선', 'stationName': '평택지제', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P165', 'transferLine': '', 'lineType': '경부선', 'stationName': '평택', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P166', 'transferLine': '', 'lineType': '경부선', 'stationName': '성환', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P167', 'transferLine': '', 'lineType': '경부선', 'stationName': '직산', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P000', 'transferLine': '', 'lineType': '경부선', 'stationName': '부성', 'status': 0},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P168', 'transferLine': '', 'lineType': '경부선', 'stationName': '두정', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P169', 'transferLine': '', 'lineType': '경부선', 'stationName': '천안', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P170', 'transferLine': '', 'lineType': '경부선', 'stationName': '봉명', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P171', 'transferLine': '', 'lineType': '경부선', 'stationName': '쌍용', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P172', 'transferLine': '', 'lineType': '경부선', 'stationName': '아산', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P173', 'transferLine': '', 'lineType': '경부선', 'stationName': '탕정', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P174', 'transferLine': '', 'lineType': '경부선', 'stationName': '배방', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P175', 'transferLine': '', 'lineType': '경부선', 'stationName': '풍기', 'status': 0},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P176', 'transferLine': '', 'lineType': '경부선', 'stationName': '온양온천', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P177', 'transferLine': '', 'lineType': '경부선', 'stationName': '신창', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P144-1', 'transferLine': '', 'LineType': '경부고속선', 'stationName': '광명', 'status': 1},
  {'companyCode': 'K', 'lineId': '1', 'stationId': 'P157-1', 'transferLine': '', 'LineType': '병점기지선', 'stationName': '서동탄', 'status': 1}
]