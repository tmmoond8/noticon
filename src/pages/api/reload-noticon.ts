import { NextApiRequest, NextApiResponse } from 'next';
import { createNoticon } from '../../apis/noticon';
import { Noticon } from '../../types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const data = getBackup();
  for (let i = 0; i < data.length; i++) {
    const icon = data[i];

    try {
      await createNoticon(icon);
    } catch (error) {
      console.log('error', icon.title);
    } finally {
      wait(10);
    }
  }

  return res.status(200).json({ ok: true });
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const getBackup = (): Noticon[] => [
  {
    uuid: 'noticon_eyhvbmh82nhdoydl4j2a',
    title: 'node',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566557264/noticon/eyhvbmh82nhdoydl4j2a.png',
    keywords: 'node.js‡nodejs',
    date: '2019-08-24T23:51:40.528Z',
  },
  {
    uuid: 'noticon_uadhcwuyrgxksewdvuyf',
    title: 'angular',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566557294/noticon/uadhcwuyrgxksewdvuyf.png',
    keywords: 'angularjs‡',
    date: '2019-08-24T23:51:40.528Z',
  },
  {
    uuid: 'noticon_wul5anidcdfekfblva14',
    title: 'vue',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566557313/noticon/wul5anidcdfekfblva14.png',
    keywords: 'vuejs‡vue.js',
    date: '2019-08-24T23:51:40.528Z',
  },
  {
    uuid: 'noticon_d5hqar2idkoefh6fjtpu',
    title: 'react',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566557331/noticon/d5hqar2idkoefh6fjtpu.png',
    keywords: 'react.js‡',
    date: '2019-08-24T23:51:40.528Z',
  },
  {
    uuid: 'noticon_ljsyjnz07gbdffzfmc3b',
    title: 'webpack',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566557350/noticon/ljsyjnz07gbdffzfmc3b.png',
    keywords: '‡',
    date: '2019-08-24T23:51:40.528Z',
  },
  {
    uuid: 'noticon_reezsa2psnh8moufkd5l',
    title: 'javascript',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566557375/noticon/reezsa2psnh8moufkd5l.png',
    keywords: 'js‡',
    date: '2019-08-24T23:51:40.528Z',
  },
  {
    uuid: 'noticon_m5ikmctz18t1mvxizllk',
    title: 'apollo',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566690679/noticon/m5ikmctz18t1mvxizllk.png',
    keywords: 'graphql‡',
    date: '2019-08-24T23:51:40.528Z',
  },
  {
    uuid: 'noticon_qznqorjaesrgayapt6fs',
    title: 'graphql',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566691589/noticon/qznqorjaesrgayapt6fs.png',
    keywords: '‡',
    date: '2019-08-25T00:07:01.605Z',
  },
  {
    uuid: 'noticon_yfmwxv8nhnr5aqaxhxpg',
    title: 'aws',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566777755/noticon/yfmwxv8nhnr5aqaxhxpg.png',
    keywords: '‡',
    date: '2019-08-26T00:02:40.613Z',
  },
  {
    uuid: 'noticon_rijbvun7uj2kb3z4j2sy',
    title: 'svelt',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566777880/noticon/rijbvun7uj2kb3z4j2sy.png',
    keywords: 'frontend‡',
    date: '2019-08-26T00:04:52.824Z',
  },
  {
    uuid: 'noticon_jrmv5eskgbngugutlrfl',
    title: 'spring',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566777965/noticon/jrmv5eskgbngugutlrfl.png',
    keywords: '‡',
    date: '2019-08-26T00:06:12.741Z',
  },
  {
    uuid: 'noticon_ytjm1rralodyhvuggrpu',
    title: 'spring',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566778017/noticon/ytjm1rralodyhvuggrpu.png',
    keywords: '‡',
    date: '2019-08-26T00:07:01.264Z',
  },
  {
    uuid: 'noticon_l0uiouhpeiq31huqu7ft',
    title: 'jenkins',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566778391/noticon/l0uiouhpeiq31huqu7ft.jpg',
    keywords: 'ci‡',
    date: '2019-08-26T00:13:17.442Z',
  },
  {
    uuid: 'noticon_kjaaizycfgz017qxvlnu',
    title: 'notion',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566778642/noticon/kjaaizycfgz017qxvlnu.png',
    keywords: '‡',
    date: '2019-08-26T00:17:35.324Z',
  },
  {
    uuid: 'noticon_u41qlya31tztlts7jinz',
    title: 'evernote',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566791241/noticon/u41qlya31tztlts7jinz.png',
    keywords: '‡',
    date: '2019-08-26T03:47:25.600Z',
  },
  {
    uuid: 'noticon_iqusgjw4nm8pqgkbjj5f',
    title: 'apple',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566791426/noticon/iqusgjw4nm8pqgkbjj5f.png',
    keywords: '‡',
    date: '2019-08-26T03:50:30.435Z',
  },
  {
    uuid: 'noticon_zxi0bnl5h66bszdpjaet',
    title: 'google',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566791548/noticon/zxi0bnl5h66bszdpjaet.jpg',
    keywords: '‡',
    date: '2019-08-26T03:52:32.381Z',
  },
  {
    uuid: 'noticon_nen1y11gazeqhejw7nm1',
    title: 'python',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566791609/noticon/nen1y11gazeqhejw7nm1.png',
    keywords: '‡',
    date: '2019-08-26T03:53:32.935Z',
  },
  {
    uuid: 'noticon_lku5cppzh8r7awwsmmko',
    title: 'nginx',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566798146/noticon/lku5cppzh8r7awwsmmko.png',
    keywords: 'proxy‡',
    date: '2019-08-26T05:42:30.117Z',
  },
  {
    uuid: 'noticon_gausejxkcmf7z3nok0d1',
    title: 'first img',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566798403/noticon/gausejxkcmf7z3nok0d1.gif',
    keywords: 'Android‡gif',
    date: '2019-08-26T05:47:05.357Z',
  },
  {
    uuid: 'noticon_s1118wnuadritgbmm9by',
    title: 'kakao talk',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566815760/noticon/s1118wnuadritgbmm9by.png',
    keywords: 'kakao‡',
    date: '2019-08-26T10:36:15.038Z',
  },
  {
    uuid: 'noticon_prkzlesgukupr1u3v7si',
    title: 'vscode',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566816336/noticon/prkzlesgukupr1u3v7si.svg',
    keywords: 'visual studio code‡',
    date: '2019-08-26T10:45:43.592Z',
  },
  {
    uuid: 'noticon_xxpytpyxsfim6fei8vuj',
    title: 'atom',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566816473/noticon/xxpytpyxsfim6fei8vuj.png',
    keywords: 'atom editor‡',
    date: '2019-08-26T10:48:00.444Z',
  },
  {
    uuid: 'noticon_eeybjwjmkbxwmgwqmw74',
    title: 'gg',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566865930/noticon/eeybjwjmkbxwmgwqmw74.jpg',
    keywords: '‡',
    date: '2019-08-27T00:32:23.925Z',
  },
  {
    uuid: 'noticon_ovkhkxbisnbxigs5ts5d',
    title: 'noticon',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566879203/noticon/ovkhkxbisnbxigs5ts5d.png',
    keywords: '‡',
    date: '2019-08-27T04:13:28.188Z',
  },
  {
    uuid: 'noticon_fvty9lnsbjol5lq9u3by',
    title: 'Next.js',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566879300/noticon/fvty9lnsbjol5lq9u3by.svg',
    keywords: 'nextjs‡next',
    date: '2019-08-27T04:15:04.427Z',
  },
  {
    uuid: 'noticon_slhw4nu8hybreryigopq',
    title: 'github',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566899596/noticon/slhw4nu8hybreryigopq.png',
    keywords: '‡',
    date: '2019-08-27T09:53:20.656Z',
  },
  {
    uuid: 'noticon_hkfrehfe10qizdtgiioj',
    title: 'gatsby',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566911795/noticon/hkfrehfe10qizdtgiioj.svg',
    keywords: 'gatsbyjs‡',
    date: '2019-08-27T13:16:50.225Z',
  },
  {
    uuid: 'noticon_pgp6gfml2syj2xujx5qp',
    title: 'sass',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566911998/noticon/pgp6gfml2syj2xujx5qp.png',
    keywords: 'scss‡',
    date: '2019-08-27T13:20:02.641Z',
  },
  {
    uuid: 'noticon_puksfce6wca36hes1vom',
    title: 'css',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566912109/noticon/puksfce6wca36hes1vom.png',
    keywords: '‡',
    date: '2019-08-27T13:21:52.776Z',
  },
  {
    uuid: 'noticon_kkbhzjg7hiqjjl3stwsw',
    title: 'google drive',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566912267/noticon/kkbhzjg7hiqjjl3stwsw.png',
    keywords: 'google‡drive',
    date: '2019-08-27T13:24:59.807Z',
  },
  {
    uuid: 'noticon_svm0i66bnozlxis6ekyz',
    title: 'google sheet',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566912404/noticon/svm0i66bnozlxis6ekyz.png',
    keywords: 'spread sheet‡',
    date: '2019-08-27T13:27:16.523Z',
  },
  {
    uuid: 'noticon_gryqs9nspmk18flyijsp',
    title: 'google docs',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566912466/noticon/gryqs9nspmk18flyijsp.png',
    keywords: 'document‡',
    date: '2019-08-27T13:28:00.091Z',
  },
  {
    uuid: 'noticon_jqqvnjhzhdwptlnp96p5',
    title: 'google sheet',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566912512/noticon/jqqvnjhzhdwptlnp96p5.png',
    keywords: 'spread sheet‡',
    date: '2019-08-27T13:28:41.052Z',
  },
  {
    uuid: 'noticon_oujuodqbdhngplvjbs3f',
    title: 'google presentation',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566912581/noticon/oujuodqbdhngplvjbs3f.png',
    keywords: 'powerpoint‡ppt',
    date: '2019-08-27T13:29:57.069Z',
  },
  {
    uuid: 'noticon_konazfwbuwdnn43mcqux',
    title: 'oauth',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566912632/noticon/konazfwbuwdnn43mcqux.png',
    keywords: 'oauth 2.0‡',
    date: '2019-08-27T13:30:43.238Z',
  },
  {
    uuid: 'noticon_ix6jwc1vww6hdxacncbx',
    title: 'npm',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566912768/noticon/ix6jwc1vww6hdxacncbx.jpg',
    keywords: 'node‡',
    date: '2019-08-27T13:33:02.471Z',
  },
  {
    uuid: 'noticon_cip7txxbjtlhbtmlytb7',
    title: 'yarn',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566912854/noticon/cip7txxbjtlhbtmlytb7.jpg',
    keywords: 'node package manager‡',
    date: '2019-08-27T13:34:33.565Z',
  },
  {
    uuid: 'noticon_dkmwrz8hcyghtrj2uoie',
    title: 'zsh',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566912920/noticon/dkmwrz8hcyghtrj2uoie.png',
    keywords: '‡',
    date: '2019-08-27T13:35:27.006Z',
  },
  {
    uuid: 'noticon_yuiz3tk8jejrbxz5ewp7',
    title: 'brew',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566912978/noticon/yuiz3tk8jejrbxz5ewp7.png',
    keywords: '‡',
    date: '2019-08-27T13:36:27.974Z',
  },
  {
    uuid: 'noticon_watr41yboy1ub4jfuqlq',
    title: 'intellij',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913019/noticon/watr41yboy1ub4jfuqlq.png',
    keywords: 'ide‡',
    date: '2019-08-27T13:37:08.277Z',
  },
  {
    uuid: 'noticon_yrdqqyvgofemx8ihaefl',
    title: 'php storm',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913049/noticon/yrdqqyvgofemx8ihaefl.png',
    keywords: 'ide‡',
    date: '2019-08-27T13:37:39.800Z',
  },
  {
    uuid: 'noticon_gci2ok6bmv35foix59iw',
    title: 'web storm',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913092/noticon/gci2ok6bmv35foix59iw.png',
    keywords: 'ide‡',
    date: '2019-08-27T13:38:20.158Z',
  },
  {
    uuid: 'noticon_tana13ypatttkymflhse',
    title: 'realm',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913146/noticon/tana13ypatttkymflhse.png',
    keywords: '‡',
    date: '2019-08-27T13:39:15.019Z',
  },
  {
    uuid: 'noticon_xbroxmdmksvebf3v6v8v',
    title: 'docker',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913255/noticon/xbroxmdmksvebf3v6v8v.gif',
    keywords: '‡',
    date: '2019-08-27T13:41:04.074Z',
  },
  {
    uuid: 'noticon_xyzfawahazvkwiyje7it',
    title: 'docker',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913282/noticon/xyzfawahazvkwiyje7it.png',
    keywords: '‡',
    date: '2019-08-27T13:41:26.323Z',
  },
  {
    uuid: 'noticon_uiite75rxvkvcki3mr4u',
    title: 'PostgreSQL',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913379/noticon/uiite75rxvkvcki3mr4u.png',
    keywords: 'rdb‡',
    date: '2019-08-27T13:43:12.435Z',
  },
  {
    uuid: 'noticon_xf9bevlrgugi7xj6xkhp',
    title: 'git',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913419/noticon/xf9bevlrgugi7xj6xkhp.png',
    keywords: '‡',
    date: '2019-08-27T13:43:42.806Z',
  },
  {
    uuid: 'noticon_eh4d0dnic4n1neth3fui',
    title: 'TypeScript',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913457/noticon/eh4d0dnic4n1neth3fui.png',
    keywords: 'ts‡',
    date: '2019-08-27T13:44:23.976Z',
  },
  {
    uuid: 'noticon_hjit7mgl2inale9sj9uo',
    title: 'GO',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913507/noticon/hjit7mgl2inale9sj9uo.png',
    keywords: '‡',
    date: '2019-08-27T13:45:11.737Z',
  },
  {
    uuid: 'noticon_xjarxsfmmcouhih40val',
    title: 'GO',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913552/noticon/xjarxsfmmcouhih40val.png',
    keywords: '‡',
    date: '2019-08-27T13:45:55.503Z',
  },
  {
    uuid: 'noticon_e2bd9zw78n6zw6his4bd',
    title: 'MySQL',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913591/noticon/e2bd9zw78n6zw6his4bd.png',
    keywords: '‡',
    date: '2019-08-27T13:46:34.957Z',
  },
  {
    uuid: 'noticon_rj9nd1qsykajfusei65f',
    title: 'slack',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913651/noticon/rj9nd1qsykajfusei65f.jpg',
    keywords: '‡',
    date: '2019-08-27T13:47:38.132Z',
  },
  {
    uuid: 'noticon_xlnsjihvjxllech0hawu',
    title: 'redis',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913679/noticon/xlnsjihvjxllech0hawu.png',
    keywords: '‡',
    date: '2019-08-27T13:48:02.852Z',
  },
  {
    uuid: 'noticon_urnfymudgsvon3frdzmn',
    title: 'ruby',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913727/noticon/urnfymudgsvon3frdzmn.png',
    keywords: '‡',
    date: '2019-08-27T13:48:50.856Z',
  },
  {
    uuid: 'noticon_rewwujgq5wuw2qohwta9',
    title: 'MongoDB',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913759/noticon/rewwujgq5wuw2qohwta9.png',
    keywords: 'nosql‡',
    date: '2019-08-27T13:49:32.011Z',
  },
  {
    uuid: 'noticon_xbgvzmnv8flg8wcbtr3w',
    title: 'GitLab',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913837/noticon/xbgvzmnv8flg8wcbtr3w.png',
    keywords: '‡',
    date: '2019-08-27T13:50:47.563Z',
  },
  {
    uuid: 'noticon_xbvewg1m3azbpnrzck1k',
    title: 'Java',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913897/noticon/xbvewg1m3azbpnrzck1k.png',
    keywords: '‡',
    date: '2019-08-27T13:51:40.495Z',
  },
  {
    uuid: 'noticon_uoqjdixts4lwsgtsa1pd',
    title: 'Firebase',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913958/noticon/uoqjdixts4lwsgtsa1pd.png',
    keywords: '‡',
    date: '2019-08-27T13:52:47.100Z',
  },
  {
    uuid: 'noticon_icxawcv422hod7tvr5ve',
    title: '.Net',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566914070/noticon/icxawcv422hod7tvr5ve.jpg',
    keywords: '‡',
    date: '2019-08-27T13:54:34.821Z',
  },
  {
    uuid: 'noticon_sfkxt9889wzqfnmjztdh',
    title: '.NET',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566914080/noticon/sfkxt9889wzqfnmjztdh.jpg',
    keywords: '‡',
    date: '2019-08-27T13:54:51.411Z',
  },
  {
    uuid: 'noticon_pgvzmdtmcyro8hwcx7u7',
    title: 'Scala',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566914133/noticon/pgvzmdtmcyro8hwcx7u7.png',
    keywords: '‡',
    date: '2019-08-27T13:55:40.690Z',
  },
  {
    uuid: 'noticon_kos1xkevxtr81zgwvyoe',
    title: 'Amazon EC2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566914173/noticon/kos1xkevxtr81zgwvyoe.svg',
    keywords: '‡',
    date: '2019-08-27T13:56:23.713Z',
  },
  {
    uuid: 'noticon_pqfq8nbtltjvxgh5lik3',
    title: 'ElasticSearch',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566914242/noticon/pqfq8nbtltjvxgh5lik3.png',
    keywords: '‡',
    date: '2019-08-27T13:57:49.504Z',
  },
  {
    uuid: 'noticon_vujwna6r9uzn832lascn',
    title: 'Meteor',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566914301/noticon/vujwna6r9uzn832lascn.png',
    keywords: '‡',
    date: '2019-08-27T13:58:25.904Z',
  },
  {
    uuid: 'noticon_eaj5maxvh8jwaviozt5p',
    title: 'Netlify',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566914346/noticon/eaj5maxvh8jwaviozt5p.png',
    keywords: '‡',
    date: '2019-08-27T13:59:18.228Z',
  },
  {
    uuid: 'noticon_atf6phekjzvedxbkzz8x',
    title: 'CodePen',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566914403/noticon/atf6phekjzvedxbkzz8x.png',
    keywords: '‡',
    date: '2019-08-27T14:00:12.125Z',
  },
  {
    uuid: 'noticon_pogcyufuizgdsl9m5u2w',
    title: 'Jira',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566914615/noticon/pogcyufuizgdsl9m5u2w.jpg',
    keywords: '‡',
    date: '2019-08-27T14:03:41.568Z',
  },
  {
    uuid: 'noticon_nr2jbngfvcbsiqa02utd',
    title: 'Bitbucket',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566914657/noticon/nr2jbngfvcbsiqa02utd.svg',
    keywords: '‡',
    date: '2019-08-27T14:04:23.505Z',
  },
  {
    uuid: 'noticon_e5hlgoope1fm5jrirj29',
    title: 'Unity',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566914705/noticon/e5hlgoope1fm5jrirj29.png',
    keywords: '‡',
    date: '2019-08-27T14:05:11.559Z',
  },
  {
    uuid: 'noticon_vhp8lb8spnioyebhfuiq',
    title: 'PostCSS',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566914740/noticon/vhp8lb8spnioyebhfuiq.svg',
    keywords: '‡',
    date: '2019-08-27T14:05:46.236Z',
  },
  {
    uuid: 'noticon_k2zbemz0azdzoihurrvj',
    title: 'Swagger',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566914780/noticon/k2zbemz0azdzoihurrvj.png',
    keywords: '‡',
    date: '2019-08-27T14:06:35.425Z',
  },
  {
    uuid: 'noticon_qwbwpobwhimzw1e3ip1h',
    title: 'Markdown',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566914817/noticon/qwbwpobwhimzw1e3ip1h.png',
    keywords: '‡',
    date: '2019-08-27T14:07:01.788Z',
  },
  {
    uuid: 'noticon_qlfe77nbcvdscm762prm',
    title: 'Postman',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566914838/noticon/qlfe77nbcvdscm762prm.png',
    keywords: '‡',
    date: '2019-08-27T14:07:22.861Z',
  },
  {
    uuid: 'noticon_dzj1tr4kwedxjr9apfz7',
    title: 'Insomnia',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566914876/noticon/dzj1tr4kwedxjr9apfz7.png',
    keywords: '‡',
    date: '2019-08-27T14:08:03.734Z',
  },
  {
    uuid: 'noticon_rz3wogtdk6lbpejrxsbp',
    title: 'chrome',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566915196/noticon/rz3wogtdk6lbpejrxsbp.png',
    keywords: '‡',
    date: '2019-08-27T14:13:24.264Z',
  },
  {
    uuid: 'noticon_pccanlnzselqwx30rhiw',
    title: 'safari',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566915285/noticon/pccanlnzselqwx30rhiw.png',
    keywords: '‡',
    date: '2019-08-27T14:14:51.515Z',
  },
  {
    uuid: 'noticon_ocql2qx8lr9aqe1wq2ja',
    title: 'Heroku',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566915568/noticon/ocql2qx8lr9aqe1wq2ja.png',
    keywords: '‡',
    date: '2019-08-27T14:19:35.084Z',
  },
  {
    uuid: 'noticon_gbjcnilojtgjlxxwe6xk',
    title: 'Kubernetes',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566915673/noticon/gbjcnilojtgjlxxwe6xk.png',
    keywords: 'docker‡',
    date: '2019-08-27T14:21:31.872Z',
  },
  {
    uuid: 'noticon_zbduq3macc9nkulysuq6',
    title: 'TensorFlow',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566915748/noticon/zbduq3macc9nkulysuq6.png',
    keywords: '‡',
    date: '2019-08-27T14:22:43.534Z',
  },
  {
    uuid: 'noticon_ry5spz2mlvhmabvkqznd',
    title: 'RxJS',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566915794/noticon/ry5spz2mlvhmabvkqznd.png',
    keywords: '‡',
    date: '2019-08-27T14:23:19.028Z',
  },
  {
    uuid: 'noticon_qxkz87vcd5cutzienrkm',
    title: 'Babel',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566915934/noticon/qxkz87vcd5cutzienrkm.jpg',
    keywords: '‡',
    date: '2019-08-27T14:25:41.752Z',
  },
  {
    uuid: 'noticon_yqec1z6qsjdf0fsvlh6s',
    title: 'C#',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566916079/noticon/yqec1z6qsjdf0fsvlh6s.png',
    keywords: '‡',
    date: '2019-08-27T14:28:06.064Z',
  },
  {
    uuid: 'noticon_ojpu8u7xaqrt6nexzzix',
    title: 'php',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566916128/noticon/ojpu8u7xaqrt6nexzzix.png',
    keywords: '‡',
    date: '2019-08-27T14:28:51.925Z',
  },
  {
    uuid: 'noticon_radex9otq0gxdb1ld6q5',
    title: 'NVM',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566918313/noticon/radex9otq0gxdb1ld6q5.png',
    keywords: '‡',
    date: '2019-08-27T15:05:22.669Z',
  },
  {
    uuid: 'noticon_d5urq5nje481sg1bzxld',
    title: 'discord',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566918825/noticon/d5urq5nje481sg1bzxld.jpg',
    keywords: '‡',
    date: '2019-08-27T15:14:03.859Z',
  },
  {
    uuid: 'noticon_fvlo9g4lxojigdn72l8i',
    title: 'Prettier',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566918959/noticon/fvlo9g4lxojigdn72l8i.png',
    keywords: '‡',
    date: '2019-08-27T15:16:09.091Z',
  },
  {
    uuid: 'noticon_j8sgrekdjixmpgdd7l9b',
    title: 'Android',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566919057/noticon/j8sgrekdjixmpgdd7l9b.png',
    keywords: '‡',
    date: '2019-08-27T15:17:48.601Z',
  },
  {
    uuid: 'noticon_fz6iy5qe3gtdyfxompyy',
    title: 'TypeORM',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566919128/noticon/fz6iy5qe3gtdyfxompyy.png',
    keywords: '‡',
    date: '2019-08-27T15:18:55.677Z',
  },
  {
    uuid: 'noticon_elawvghfkdnnzv1jm2el',
    title: 'Dropbox',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566919196/noticon/elawvghfkdnnzv1jm2el.svg',
    keywords: '‡',
    date: '2019-08-27T15:20:20.417Z',
  },
  {
    uuid: 'noticon_hkw3d9fdjdi2wcnkj45w',
    title: 'SQLite',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566919262/noticon/hkw3d9fdjdi2wcnkj45w.png',
    keywords: '‡',
    date: '2019-08-27T15:21:10.332Z',
  },
  {
    uuid: 'noticon_pjnpsszivn2jjfgspqj7',
    title: 'Flutter',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566919318/noticon/pjnpsszivn2jjfgspqj7.png',
    keywords: '‡',
    date: '2019-08-27T15:22:05.648Z',
  },
  {
    uuid: 'noticon_gr2nxbn8xoqdoria9mqh',
    title: 'Trello',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566919384/noticon/gr2nxbn8xoqdoria9mqh.png',
    keywords: '‡',
    date: '2019-08-27T15:23:37.532Z',
  },
  {
    uuid: 'noticon_j2h9ud10ssbihscfqlwy',
    title: 'Django',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566919539/noticon/j2h9ud10ssbihscfqlwy.png',
    keywords: '‡',
    date: '2019-08-27T15:25:50.057Z',
  },
  {
    uuid: 'noticon_umx3na3tbarre4a1gc4a',
    title: 'Rails',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566919626/noticon/umx3na3tbarre4a1gc4a.png',
    keywords: 'Ruby‡',
    date: '2019-08-27T15:27:16.150Z',
  },
  {
    uuid: 'noticon_gjxns0py6vnakzyu3msu',
    title: 'Flask',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566919737/noticon/gjxns0py6vnakzyu3msu.png',
    keywords: '‡',
    date: '2019-08-27T15:29:02.154Z',
  },
  {
    uuid: 'noticon_c5qc9a9sytsnqmi4ixjz',
    title: 'Jest',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566919905/noticon/c5qc9a9sytsnqmi4ixjz.png',
    keywords: 'Test‡',
    date: '2019-08-27T15:31:54.979Z',
  },
  {
    uuid: 'noticon_bwij1af50rjj0fiyjtci',
    title: 'Redux',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566919941/noticon/bwij1af50rjj0fiyjtci.png',
    keywords: '‡',
    date: '2019-08-27T15:32:26.916Z',
  },
  {
    uuid: 'noticon_r9gn1ilil1r8ar4w59dj',
    title: 'MariaDB',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566920129/noticon/r9gn1ilil1r8ar4w59dj.png',
    keywords: '‡',
    date: '2019-08-27T15:35:37.734Z',
  },
  {
    uuid: 'noticon_qcsmq4jurinowdajlmvm',
    title: 'Twilio',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566920207/noticon/qcsmq4jurinowdajlmvm.png',
    keywords: '‡',
    date: '2019-08-27T15:36:52.273Z',
  },
  {
    uuid: 'noticon_mwlnqwvswaln1qpz43b6',
    title: 'Noticon',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566951043/noticon/mwlnqwvswaln1qpz43b6.png',
    keywords: 'Kangaroo‡',
    date: '2019-08-28T00:10:51.942Z',
  },
  {
    uuid: 'noticon_fyec5eye4l6hyxlpfxze',
    title: 'storybook',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566952480/noticon/fyec5eye4l6hyxlpfxze.png',
    keywords: '‡',
    date: '2019-08-28T00:34:44.194Z',
  },
  {
    uuid: 'noticon_jufppyr8htislboas4ve',
    title: 'html',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566995514/noticon/jufppyr8htislboas4ve.png',
    keywords: '‡',
    date: '2019-08-28T12:32:03.277Z',
  },
  {
    uuid: 'noticon_ozi8wvb2o2qdcijs2u29',
    title: 'textured-paper',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566997355/noticon/ozi8wvb2o2qdcijs2u29.png',
    keywords: 'paper‡',
    date: '2019-08-28T13:02:49.285Z',
  },
  {
    uuid: 'noticon_aziehs8hf3w3kwinelzf',
    title: 'front-end',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567001196/noticon/aziehs8hf3w3kwinelzf.png',
    keywords: 'front-end‡frontend',
    date: '2019-08-28T14:06:46.620Z',
  },
  {
    uuid: 'noticon_qhj4e7exxzc3xaiwju4u',
    title: 'design',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567001520/noticon/qhj4e7exxzc3xaiwju4u.png',
    keywords: 'design‡ui/ux',
    date: '2019-08-28T14:12:06.974Z',
  },
  {
    uuid: 'noticon_g3iw7nlmdpchpqvkmlpf',
    title: 'design',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567001627/noticon/g3iw7nlmdpchpqvkmlpf.png',
    keywords: 'design‡ui/ux',
    date: '2019-08-28T14:13:54.159Z',
  },
  {
    uuid: 'noticon_diiednpmezesuriysvg9',
    title: 'tube',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567001785/noticon/diiednpmezesuriysvg9.jpg',
    keywords: 'tube‡tube',
    date: '2019-08-28T14:16:30.620Z',
  },
  {
    uuid: 'noticon_eirllhxf9uhd5jeagztq',
    title: '노두',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567001931/noticon/eirllhxf9uhd5jeagztq.png',
    keywords: 'node‡노드',
    date: '2019-08-28T14:19:18.215Z',
  },
  {
    uuid: 'noticon_x0bmho1upr06k3vfcpmp',
    title: 'react',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567002446/noticon/x0bmho1upr06k3vfcpmp.png',
    keywords: 'react‡react',
    date: '2019-08-28T14:27:34.165Z',
  },
  {
    uuid: 'noticon_s86gwafwryspyixfajpe',
    title: 'YouTube',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567002775/noticon/s86gwafwryspyixfajpe.png',
    keywords: 'Video‡Youtube',
    date: '2019-08-28T14:33:13.200Z',
  },
  {
    uuid: 'noticon_ctn6kpoyyaawcggjqmfj',
    title: 'Youtube',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567002882/noticon/ctn6kpoyyaawcggjqmfj.png',
    keywords: 'Youtube‡Video',
    date: '2019-08-28T14:34:53.741Z',
  },
  {
    uuid: 'noticon_acl6oznwr1sxmazpkt5t',
    title: 'react',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567003492/noticon/acl6oznwr1sxmazpkt5t.png',
    keywords: '‡',
    date: '2019-08-28T14:44:59.629Z',
  },
  {
    uuid: 'noticon_ghy5xdycjyydtyhzcqmb',
    title: 'swift',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567007151/noticon/ghy5xdycjyydtyhzcqmb.png',
    keywords: 'swift‡',
    date: '2019-08-28T15:45:59.290Z',
  },
  {
    uuid: 'noticon_zcszelqcacn0cyqpcmjm',
    title: 'sass',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567007298/noticon/zcszelqcacn0cyqpcmjm.png',
    keywords: 'sass‡',
    date: '2019-08-28T15:48:46.553Z',
  },
  {
    uuid: 'noticon_qyuispiqhlofygb9vqxo',
    title: 'less',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567007333/noticon/qyuispiqhlofygb9vqxo.png',
    keywords: 'less‡',
    date: '2019-08-28T15:48:56.815Z',
  },
  {
    uuid: 'noticon_dkswy8djdozmmzvssozj',
    title: 'ㅇㅇ',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567007430/noticon/dkswy8djdozmmzvssozj.png',
    keywords: 'ㅇㅇ‡ㅇㅇ',
    date: '2019-08-28T15:50:38.949Z',
  },
  {
    uuid: 'noticon_tb9rqxnncl5vxjd9ccyn',
    title: 'ㅇㅇ',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567007546/noticon/tb9rqxnncl5vxjd9ccyn.jpg',
    keywords: '123‡123',
    date: '2019-08-28T15:52:43.679Z',
  },
  {
    uuid: 'noticon_ehkfiih4tckd5qnwqjwl',
    title: 'toyproject',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567007879/noticon/ehkfiih4tckd5qnwqjwl.png',
    keywords: 'toyproject‡',
    date: '2019-08-28T15:58:09.578Z',
  },
  {
    uuid: 'noticon_gp7xdr7l1qpj8bcrspul',
    title: 'WebAssembly',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567008090/noticon/gp7xdr7l1qpj8bcrspul.png',
    keywords: 'webassembly‡웹어셈블리',
    date: '2019-08-28T16:01:33.448Z',
  },
  {
    uuid: 'noticon_mw0xnjgco64rfeviwqvy',
    title: 'folder',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567008133/noticon/mw0xnjgco64rfeviwqvy.png',
    keywords: 'folder‡',
    date: '2019-08-28T16:02:24.346Z',
  },
  {
    uuid: 'noticon_m4oad4rbf65fjszx0did',
    title: 'Spring Boot',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567008187/noticon/m4oad4rbf65fjszx0did.png',
    keywords: 'springboot‡스프링부트',
    date: '2019-08-28T16:03:49.243Z',
  },
  {
    uuid: 'noticon_ohybolu4ensol1gzqas1',
    title: 'JavaScript',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567008394/noticon/ohybolu4ensol1gzqas1.png',
    keywords: 'javascript‡자바스크립트',
    date: '2019-08-28T16:06:38.193Z',
  },
  {
    uuid: 'noticon_ird3id54hstap8dtokdx',
    title: 'Facebook',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567008602/noticon/ird3id54hstap8dtokdx.png',
    keywords: 'facebook‡페이스북',
    date: '2019-08-28T16:10:13.144Z',
  },
  {
    uuid: 'noticon_bqjhb6xvljt9viccy6lh',
    title: 'Instagram',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567008788/noticon/bqjhb6xvljt9viccy6lh.png',
    keywords: '인스타그램‡인스타',
    date: '2019-08-28T16:13:13.317Z',
  },
  {
    uuid: 'noticon_isuqkfju7mgcsfjxi8gf',
    title: 'Rust',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567009186/noticon/isuqkfju7mgcsfjxi8gf.png',
    keywords: 'Language‡Rust',
    date: '2019-08-28T16:19:56.080Z',
  },
  {
    uuid: 'noticon_mifj9iomj6prrmjhdjim',
    title: 'Web',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567029376/noticon/mifj9iomj6prrmjhdjim.png',
    keywords: '‡',
    date: '2019-08-28T21:56:20.988Z',
  },
  {
    uuid: 'noticon_b0wsfiru1knehunosp0j',
    title: 'Canvas',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567029509/noticon/b0wsfiru1knehunosp0j.png',
    keywords: '‡',
    date: '2019-08-28T21:58:37.521Z',
  },
  {
    uuid: 'noticon_qs9qgjwj7u73ivuyzsen',
    title: 'Parse5',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567029623/noticon/qs9qgjwj7u73ivuyzsen.png',
    keywords: '‡',
    date: '2019-08-28T22:00:29.215Z',
  },
  {
    uuid: 'noticon_xrjxyjvhb9dswrmg4wza',
    title: 'Svg',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567029828/noticon/xrjxyjvhb9dswrmg4wza.png',
    keywords: '‡',
    date: '2019-08-28T22:03:52.801Z',
  },
  {
    uuid: 'noticon_fk1jm842hd2bv4qugjsg',
    title: 'DataStructure',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567030190/noticon/fk1jm842hd2bv4qugjsg.png',
    keywords: '‡',
    date: '2019-08-28T22:09:54.491Z',
  },
  {
    uuid: 'noticon_bukv1azf58l37aachajw',
    title: 'Front-Endgame',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567030347/noticon/bukv1azf58l37aachajw.jpg',
    keywords: '‡',
    date: '2019-08-28T22:13:06.537Z',
  },
  {
    uuid: 'noticon_skjx2bjr7yjqybwxmoxc',
    title: 'react',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567003547/noticon/skjx2bjr7yjqybwxmoxc.png',
    keywords: '‡',
    date: '2019-08-29T00:13:46.449Z',
  },
  {
    uuid: 'noticon_nzyh9urmv5jynuzigrqm',
    title: 'page not found',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567039950/noticon/nzyh9urmv5jynuzigrqm.png',
    keywords: '404‡',
    date: '2019-08-29T00:52:39.710Z',
  },
  {
    uuid: 'noticon_hookiszk2lmabkkvgzht',
    title: '다른사람도올릴수있네',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567041150/noticon/hookiszk2lmabkkvgzht.jpg',
    keywords: '자동차‡빠빠빨간맛',
    date: '2019-08-29T01:12:57.815Z',
  },
  {
    uuid: 'noticon_ndyja5zxtcwljjfpxz5q',
    title: 'disconneced',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567049344/noticon/ndyja5zxtcwljjfpxz5q.gif',
    keywords: 'dinosaur‡google',
    date: '2019-08-29T03:29:36.850Z',
  },
  {
    uuid: 'noticon_orx7ruoawimdrp5gyc35',
    title: 'dotenv',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567058844/noticon/orx7ruoawimdrp5gyc35.png',
    keywords: '‡',
    date: '2019-08-29T06:07:28.554Z',
  },
  {
    uuid: 'noticon_asnzeopvjcuc50ynymrw',
    title: '병아리',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567060481/noticon/asnzeopvjcuc50ynymrw.png',
    keywords: '제비‡치킨베이비',
    date: '2019-08-29T06:34:51.823Z',
  },
  {
    uuid: 'noticon_ydyyfywuh3xxajhjx5l7',
    title: '병아리2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567060688/noticon/ydyyfywuh3xxajhjx5l7.png',
    keywords: '제비‡치킨베이비',
    date: '2019-08-29T06:38:20.354Z',
  },
  {
    uuid: 'noticon_tigciwnn53qdtsx5c0ak',
    title: '부장님이 새벽에 카톡보냄',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567060733/noticon/tigciwnn53qdtsx5c0ak.png',
    keywords: '병아리‡치킨베이비',
    date: '2019-08-29T06:39:11.358Z',
  },
  {
    uuid: 'noticon_fijdb4u09rrsbuil7va2',
    title: 'Unreal4',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567060821/noticon/fijdb4u09rrsbuil7va2.png',
    keywords: 'unreal‡ue4',
    date: '2019-08-29T06:40:39.540Z',
  },
  {
    uuid: 'noticon_eq5ripe9tprkzx1vghcb',
    title: 'Daed',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567060993/noticon/eq5ripe9tprkzx1vghcb.jpg',
    keywords: 'skull‡death',
    date: '2019-08-29T06:43:26.213Z',
  },
  {
    uuid: 'noticon_tezil01cc4scsun7d56x',
    title: 'serverless',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567061131/noticon/tezil01cc4scsun7d56x.png',
    keywords: '‡',
    date: '2019-08-29T06:45:36.963Z',
  },
  {
    uuid: 'noticon_dpv66v6aoasthmdivjdl',
    title: 'Dynamodb',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567061273/noticon/dpv66v6aoasthmdivjdl.png',
    keywords: '‡',
    date: '2019-08-29T06:48:01.318Z',
  },
  {
    uuid: 'noticon_lzcrj8bbwgu55lddwiz6',
    title: 'database',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567061412/noticon/lzcrj8bbwgu55lddwiz6.png',
    keywords: 'database‡db',
    date: '2019-08-29T06:50:18.967Z',
  },
  {
    uuid: 'noticon_tnz5tvci1qdslmibbp14',
    title: 'gmail',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567061475/noticon/tnz5tvci1qdslmibbp14.png',
    keywords: 'gmail‡google',
    date: '2019-08-29T06:51:25.844Z',
  },
  {
    uuid: 'noticon_yumefruxwlad6wtdpkfu',
    title: '계산기',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567061601/noticon/yumefruxwlad6wtdpkfu.jpg',
    keywords: '‡',
    date: '2019-08-29T06:53:25.986Z',
  },
  {
    uuid: 'noticon_ntmc9otkytjxtbrkc5ij',
    title: '알집',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567061619/noticon/ntmc9otkytjxtbrkc5ij.jpg',
    keywords: '‡',
    date: '2019-08-29T06:53:41.904Z',
  },
  {
    uuid: 'noticon_tsqrpxq4vsvrclytnahi',
    title: '도서',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567061630/noticon/tsqrpxq4vsvrclytnahi.jpg',
    keywords: '‡',
    date: '2019-08-29T06:53:57.754Z',
  },
  {
    uuid: 'noticon_tkr1iwsqu5f6vlaa1wwv',
    title: '지도',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567061648/noticon/tkr1iwsqu5f6vlaa1wwv.jpg',
    keywords: '‡',
    date: '2019-08-29T06:54:11.336Z',
  },
  {
    uuid: 'noticon_zsflwysrgmkd14jwwe7v',
    title: '메세지',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567061659/noticon/zsflwysrgmkd14jwwe7v.png',
    keywords: '‡',
    date: '2019-08-29T06:54:23.016Z',
  },
  {
    uuid: 'noticon_k8iynwcubgnnbpdewtgz',
    title: '사진',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567061670/noticon/k8iynwcubgnnbpdewtgz.jpg',
    keywords: '‡',
    date: '2019-08-29T06:54:33.838Z',
  },
  {
    uuid: 'noticon_b1nph8nhaqwxuzt4g0tr',
    title: '이거 병아리 아니고 제비입니다ㅠㅠ',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567061777/noticon/b1nph8nhaqwxuzt4g0tr.png',
    keywords: '병아리‡치킨베이비',
    date: '2019-08-29T06:56:28.554Z',
  },
  {
    uuid: 'noticon_dllj6k24v77xvyvkccl6',
    title: '그냥집에가까',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567061794/noticon/dllj6k24v77xvyvkccl6.jpg',
    keywords: '퇴사‡회사',
    date: '2019-08-29T06:56:50.793Z',
  },
  {
    uuid: 'noticon_ljwazzkjxtwhb9tganhg',
    title: 'Mac OS _ Pages',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567061913/noticon/ljwazzkjxtwhb9tganhg.jpg',
    keywords: '‡',
    date: '2019-08-29T06:58:56.645Z',
  },
  {
    uuid: 'noticon_kvyffhqruycxvwpekvyk',
    title: 'Mac OS _ Numbers',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567061945/noticon/kvyffhqruycxvwpekvyk.jpg',
    keywords: '‡',
    date: '2019-08-29T06:59:17.049Z',
  },
  {
    uuid: 'noticon_u6m2ii6ufieaxskpksf1',
    title: 'Mac OS _ Keynote',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567061968/noticon/u6m2ii6ufieaxskpksf1.jpg',
    keywords: '‡',
    date: '2019-08-29T06:59:36.751Z',
  },
  {
    uuid: 'noticon_ttan57gjenhvcrfq10yo',
    title: 'github_2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567062204/noticon/ttan57gjenhvcrfq10yo.png',
    keywords: 'git‡github',
    date: '2019-08-29T07:06:24.879Z',
  },
  {
    uuid: 'noticon_fqdjmxuq27tt7o4umaoy',
    title: '개발자',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567062612/noticon/fqdjmxuq27tt7o4umaoy.gif',
    keywords: '‡',
    date: '2019-08-29T07:10:23.359Z',
  },
  {
    uuid: 'noticon_hzdraiek2cwe52xhnvsg',
    title: 'gmail',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567063035/noticon/hzdraiek2cwe52xhnvsg.svg',
    keywords: 'gmail‡지메일',
    date: '2019-08-29T07:17:28.210Z',
  },
  {
    uuid: 'noticon_mus84uotvfhs1c3jidua',
    title: 'lecture',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567063312/noticon/mus84uotvfhs1c3jidua.png',
    keywords: 'lecture‡class',
    date: '2019-08-29T07:21:57.279Z',
  },
  {
    uuid: 'noticon_vffbtuqlyg9q1x5eilkq',
    title: '아이디어',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567063840/noticon/vffbtuqlyg9q1x5eilkq.jpg',
    keywords: '아이디어‡번뜩',
    date: '2019-08-29T07:30:56.389Z',
  },
  {
    uuid: 'noticon_f8jkniagvqzynnsia0dy',
    title: '스마트폰',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567063916/noticon/f8jkniagvqzynnsia0dy.png',
    keywords: '폰‡스마트폰',
    date: '2019-08-29T07:32:07.646Z',
  },
  {
    uuid: 'noticon_sb5llmvfubuceldbkmx8',
    title: 'S3',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567064876/noticon/sb5llmvfubuceldbkmx8.png',
    keywords: '‡',
    date: '2019-08-29T07:48:00.091Z',
  },
  {
    uuid: 'noticon_znbal6yakkwu4lzx0wu1',
    title: 'androind',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567070742/noticon/znbal6yakkwu4lzx0wu1.gif',
    keywords: '‡',
    date: '2019-08-29T09:25:46.306Z',
  },
  {
    uuid: 'noticon_oxje0jt0waezwtheleel',
    title: 'androind',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567070780/noticon/oxje0jt0waezwtheleel.gif',
    keywords: '‡',
    date: '2019-08-29T09:26:24.217Z',
  },
  {
    uuid: 'noticon_otinww0jdkhz7ninctnu',
    title: 'C',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567070889/noticon/otinww0jdkhz7ninctnu.png',
    keywords: '‡',
    date: '2019-08-29T09:28:12.911Z',
  },
  {
    uuid: 'noticon_zh3frghhsuirlc1stg2o',
    title: 'After Effects',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567070965/noticon/zh3frghhsuirlc1stg2o.png',
    keywords: 'AE‡adobe',
    date: '2019-08-29T09:29:42.659Z',
  },
  {
    uuid: 'noticon_oumyn1koxrr0clnnatit',
    title: 'Indesign',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567071016/noticon/oumyn1koxrr0clnnatit.ico',
    keywords: 'ID‡adobe',
    date: '2019-08-29T09:30:25.844Z',
  },
  {
    uuid: 'noticon_iejmx4zsu1mift60kmid',
    title: 'PhotoShop',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567071066/noticon/iejmx4zsu1mift60kmid.png',
    keywords: 'PS‡adobe',
    date: '2019-08-29T09:31:15.583Z',
  },
  {
    uuid: 'noticon_fnrfasbunxjeigx9rao9',
    title: 'Audition',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567071206/noticon/fnrfasbunxjeigx9rao9.png',
    keywords: 'AU‡adobe',
    date: '2019-08-29T09:33:35.294Z',
  },
  {
    uuid: 'noticon_devwour6klozoydttcfq',
    title: 'LightRoom',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567071246/noticon/devwour6klozoydttcfq.png',
    keywords: 'Lr‡adobe',
    date: '2019-08-29T09:34:18.676Z',
  },
  {
    uuid: 'noticon_ziwuyjozgwfr1dgsbjtf',
    title: 'Illustrator',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567071279/noticon/ziwuyjozgwfr1dgsbjtf.png',
    keywords: 'AI‡adobe',
    date: '2019-08-29T09:34:50.282Z',
  },
  {
    uuid: 'noticon_vbpc6lkhxmx5iynlnypz',
    title: 'LP Record',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567087236/noticon/vbpc6lkhxmx5iynlnypz.jpg',
    keywords: 'LP‡vinyl',
    date: '2019-08-29T14:02:04.356Z',
  },
  {
    uuid: 'noticon_nymfpvcfrg5jlfb2bc1a',
    title: 'Dart Lang',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567087457/noticon/nymfpvcfrg5jlfb2bc1a.png',
    keywords: 'Dart‡',
    date: '2019-08-29T14:04:51.308Z',
  },
  {
    uuid: 'noticon_mqlji3ycdoc2fngwvu9w',
    title: 'Logix Pro',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567087572/noticon/mqlji3ycdoc2fngwvu9w.png',
    keywords: 'apple‡DAW',
    date: '2019-08-29T14:06:31.167Z',
  },
  {
    uuid: 'noticon_orezydf9utbe61oxvgan',
    title: 'Haskell',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567088057/noticon/orezydf9utbe61oxvgan.png',
    keywords: 'language‡',
    date: '2019-08-29T14:14:36.176Z',
  },
  {
    uuid: 'noticon_sukkqgmsjyu5jiqdorgb',
    title: 'Kakao',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567097569/noticon/sukkqgmsjyu5jiqdorgb.jpg',
    keywords: '카카오‡kakao',
    date: '2019-08-29T16:52:59.424Z',
  },
  {
    uuid: 'noticon_twfkzgiveuxwsuitmrvx',
    title: 'peoplefund',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567117961/noticon/twfkzgiveuxwsuitmrvx.jpg',
    keywords: 'fintech‡',
    date: '2019-08-29T22:32:54.263Z',
  },
  {
    uuid: 'noticon_dkml9j9mk063houbeazf',
    title: 'wordpress',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567118188/noticon/dkml9j9mk063houbeazf.png',
    keywords: 'php‡',
    date: '2019-08-29T22:36:44.274Z',
  },
  {
    uuid: 'noticon_qq1lbvywlzzbe0pclfv3',
    title: 'Ridibooks',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567119783/noticon/qq1lbvywlzzbe0pclfv3.png',
    keywords: 'ebook‡',
    date: '2019-08-29T23:03:10.276Z',
  },
  {
    uuid: 'noticon_lfjrzooyhimqepjmourp',
    title: 'apache',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567128437/noticon/lfjrzooyhimqepjmourp.png',
    keywords: '‡',
    date: '2019-08-30T01:27:26.264Z',
  },
  {
    uuid: 'noticon_gpkdob34yhkxoo7cyyqv',
    title: 'Bootstrap',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567128495/noticon/gpkdob34yhkxoo7cyyqv.png',
    keywords: '‡',
    date: '2019-08-30T01:28:23.248Z',
  },
  {
    uuid: 'noticon_mksvojnxnqtvdwrhttce',
    title: 'jQuery',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567128552/noticon/mksvojnxnqtvdwrhttce.png',
    keywords: '‡',
    date: '2019-08-30T01:29:17.228Z',
  },
  {
    uuid: 'noticon_lj6j7ljgj74zf3ierumh',
    title: 'prisma',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567128618/noticon/lj6j7ljgj74zf3ierumh.jpg',
    keywords: '‡',
    date: '2019-08-30T01:30:20.486Z',
  },
  {
    uuid: 'noticon_om9okpm0rkewjxx3ub6b',
    title: 'google analytics',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567128709/noticon/om9okpm0rkewjxx3ub6b.png',
    keywords: '‡',
    date: '2019-08-30T01:31:52.780Z',
  },
  {
    uuid: 'noticon_jl50zefzwhh3gon5vgra',
    title: 'Zeit Now',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567128755/noticon/jl50zefzwhh3gon5vgra.png',
    keywords: '‡',
    date: '2019-08-30T01:32:38.493Z',
  },
  {
    uuid: 'noticon_vdepzzqblcnn1lxciaga',
    title: 'Netlify',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567128785/noticon/vdepzzqblcnn1lxciaga.png',
    keywords: '‡',
    date: '2019-08-30T01:33:07.747Z',
  },
  {
    uuid: 'noticon_osiivsvhnu4nt8doquo0',
    title: 'github',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567128822/noticon/osiivsvhnu4nt8doquo0.png',
    keywords: '‡',
    date: '2019-08-30T01:33:44.177Z',
  },
  {
    uuid: 'noticon_ekuf9zj2kopbmxtvr5rc',
    title: 'docker compose',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567128851/noticon/ekuf9zj2kopbmxtvr5rc.png',
    keywords: '‡',
    date: '2019-08-30T01:34:14.146Z',
  },
  {
    uuid: 'noticon_nk3izua6v0c6efwqkr3u',
    title: 'grunt',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567128893/noticon/nk3izua6v0c6efwqkr3u.png',
    keywords: '‡',
    date: '2019-08-30T01:34:58.069Z',
  },
  {
    uuid: 'noticon_x1biuh4oxq2hpluqo8nu',
    title: 'babel',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567128919/noticon/x1biuh4oxq2hpluqo8nu.png',
    keywords: '‡',
    date: '2019-08-30T01:35:22.360Z',
  },
  {
    uuid: 'noticon_h2qmfpppcewfgf1kpnto',
    title: 'Puppeteer',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567128964/noticon/h2qmfpppcewfgf1kpnto.png',
    keywords: '‡',
    date: '2019-08-30T01:36:07.551Z',
  },
  {
    uuid: 'noticon_dxr7at221uhysqtdtbnj',
    title: 'mocha',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567128995/noticon/dxr7at221uhysqtdtbnj.png',
    keywords: '‡',
    date: '2019-08-30T01:36:38.255Z',
  },
  {
    uuid: 'noticon_js1snigiymlj22ekryyd',
    title: 'sequelpro',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567129063/noticon/js1snigiymlj22ekryyd.png',
    keywords: '‡',
    date: '2019-08-30T01:37:46.877Z',
  },
  {
    uuid: 'noticon_c3iowgv0qarwcc10t0m4',
    title: 'querypie',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567129084/noticon/c3iowgv0qarwcc10t0m4.png',
    keywords: '‡',
    date: '2019-08-30T01:38:06.980Z',
  },
  {
    uuid: 'noticon_cg8kzyi6fogxsgcif4ri',
    title: 'MySQL workbench',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567129116/noticon/cg8kzyi6fogxsgcif4ri.jpg',
    keywords: '‡',
    date: '2019-08-30T01:38:39.383Z',
  },
  {
    uuid: 'noticon_wpr5gn9opoiy1qsajexu',
    title: 'robo 3T',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567129140/noticon/wpr5gn9opoiy1qsajexu.png',
    keywords: '‡',
    date: '2019-08-30T01:39:02.932Z',
  },
  {
    uuid: 'noticon_ah6a4syyaae5iiapmast',
    title: 'sourcetree',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567129164/noticon/ah6a4syyaae5iiapmast.png',
    keywords: '‡',
    date: '2019-08-30T01:39:27.301Z',
  },
  {
    uuid: 'noticon_yqxoj5j4csoqqiuah4xl',
    title: 'iterm',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567129196/noticon/yqxoj5j4csoqqiuah4xl.png',
    keywords: '‡',
    date: '2019-08-30T01:39:59.242Z',
  },
  {
    uuid: 'noticon_b6zcthe2blj6tu4i5f7f',
    title: 'zeplin',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567129221/noticon/b6zcthe2blj6tu4i5f7f.jpg',
    keywords: '‡',
    date: '2019-08-30T01:40:23.816Z',
  },
  {
    uuid: 'noticon_v7fz2pp7ngvi3t0hbyly',
    title: '알파프라임',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567141607/noticon/v7fz2pp7ngvi3t0hbyly.png',
    keywords: 'Alphaprime‡알파프라임',
    date: '2019-08-30T05:06:56.843Z',
  },
  {
    uuid: 'noticon_kam4dfoovp6qihqe80w5',
    title: 'learning',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567141775/noticon/kam4dfoovp6qihqe80w5.png',
    keywords: '공부‡',
    date: '2019-08-30T05:09:37.798Z',
  },
  {
    uuid: 'noticon_ozqsokzkutaz0zswd10w',
    title: '알파스퀘어',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567168298/noticon/ozqsokzkutaz0zswd10w.png',
    keywords: 'Alphasquare‡',
    date: '2019-08-30T12:31:49.575Z',
  },
  {
    uuid: 'noticon_nd9aepe58ldsbn57rohg',
    title: 'papago',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567231641/noticon/nd9aepe58ldsbn57rohg.jpg',
    keywords: 'translation‡',
    date: '2019-08-31T06:08:01.617Z',
  },
  {
    uuid: 'noticon_aahsnyrbn27tu4anfp21',
    title: 'arrow',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567235682/noticon/aahsnyrbn27tu4anfp21.png',
    keywords: 'black‡arrow',
    date: '2019-08-31T07:14:51.484Z',
  },
  {
    uuid: 'noticon_hj4olnlinzje2rbh5g0a',
    title: 'axure',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567239049/noticon/hj4olnlinzje2rbh5g0a.svg',
    keywords: '‡',
    date: '2019-08-31T08:10:56.228Z',
  },
  {
    uuid: 'noticon_xtrr5ktcaujeqfk9kf6q',
    title: 'pivotal tracker',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567258979/noticon/xtrr5ktcaujeqfk9kf6q.png',
    keywords: '‡',
    date: '2019-08-31T13:43:10.436Z',
  },
  {
    uuid: 'noticon_ijl2o3wms4acbswawxoj',
    title: 'google analytics',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567259573/noticon/ijl2o3wms4acbswawxoj.png',
    keywords: '‡',
    date: '2019-08-31T13:53:11.140Z',
  },
  {
    uuid: 'noticon_fwlmz847w6tppswuwlda',
    title: 'Beusable',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567259708/noticon/fwlmz847w6tppswuwlda.jpg',
    keywords: '‡',
    date: '2019-08-31T13:55:11.893Z',
  },
  {
    uuid: 'noticon_kykt9kixg8lwawozadcl',
    title: 'Coca-cola',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567395480/noticon/kykt9kixg8lwawozadcl.png',
    keywords: 'coke‡',
    date: '2019-09-02T03:38:08.765Z',
  },
  {
    uuid: 'noticon_f1z5vq7hxkk5fenrvdhi',
    title: 'bangbang',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567397486/noticon/f1z5vq7hxkk5fenrvdhi.png',
    keywords: 'duck‡',
    date: '2019-09-02T04:11:36.907Z',
  },
  {
    uuid: 'noticon_ynev3ykd0musp4yh5xs7',
    title: 'Kotlin',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567399456/noticon/ynev3ykd0musp4yh5xs7.png',
    keywords: 'Android‡Mobile',
    date: '2019-09-02T04:44:37.704Z',
  },
  {
    uuid: 'noticon_eh3jkpzfhchfcea5ng0u',
    title: 'Unity',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567399498/noticon/eh3jkpzfhchfcea5ng0u.png',
    keywords: 'Game‡C#',
    date: '2019-09-02T04:45:08.977Z',
  },
  {
    uuid: 'noticon_wmbdynbsqylc7bic7xz9',
    title: 'test',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567473593/noticon/wmbdynbsqylc7bic7xz9.ico',
    keywords: '‡',
    date: '2019-09-03T01:19:55.936Z',
  },
  {
    uuid: 'noticon_lyslmldnpkttwfalvgc3',
    title: 'Spark',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567574581/noticon/lyslmldnpkttwfalvgc3.png',
    keywords: 'spark‡',
    date: '2019-09-04T05:23:18.346Z',
  },
  {
    uuid: 'noticon_za5oft8gpi5yabrlvgfp',
    title: 'thinking face',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567593192/noticon/za5oft8gpi5yabrlvgfp.gif',
    keywords: 'thinking‡hmmteresting',
    date: '2019-09-04T10:33:29.478Z',
  },
  {
    uuid: 'noticon_bmjjudxjsmx7tl5a3rdq',
    title: 'Command Window',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567605826/noticon/bmjjudxjsmx7tl5a3rdq.png',
    keywords: 'command‡script',
    date: '2019-09-04T14:04:05.350Z',
  },
  {
    uuid: 'noticon_tfb59e4ml6bo9mnebptv',
    title: 'zendesk',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567607233/noticon/tfb59e4ml6bo9mnebptv.jpg',
    keywords: '‡',
    date: '2019-09-04T14:27:23.523Z',
  },
  {
    uuid: 'noticon_d9nmzoiq87zodelyh3ly',
    title: 'datagrip',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567608718/noticon/d9nmzoiq87zodelyh3ly.png',
    keywords: '‡',
    date: '2019-09-04T14:52:25.618Z',
  },
  {
    uuid: 'noticon_s71afhrwa82dxjgc6jgl',
    title: 'naver',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567608895/noticon/s71afhrwa82dxjgc6jgl.png',
    keywords: 'naver‡naverlogo',
    date: '2019-09-04T14:55:08.187Z',
  },
  {
    uuid: 'noticon_rk2ah7fnvmg1dufjmm6c',
    title: 'naver',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567608967/noticon/rk2ah7fnvmg1dufjmm6c.jpg',
    keywords: 'naverlogo‡naversymbol',
    date: '2019-09-04T14:56:22.084Z',
  },
  {
    uuid: 'noticon_zatdwjojuau9bxpabveu',
    title: 'navershopping',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567609068/noticon/zatdwjojuau9bxpabveu.jpg',
    keywords: 'naver‡shopping',
    date: '2019-09-04T14:57:56.980Z',
  },
  {
    uuid: 'noticon_wuch14qwaofo8ylsvoie',
    title: 'gdg',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567648673/noticon/wuch14qwaofo8ylsvoie.png',
    keywords: 'gdg‡',
    date: '2019-09-05T01:58:01.807Z',
  },
  {
    uuid: 'noticon_z39qovqek9f8kzdo0p26',
    title: 'MODUSIGN',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567652025/noticon/z39qovqek9f8kzdo0p26.png',
    keywords: '모두싸인‡modusign',
    date: '2019-09-05T02:54:07.894Z',
  },
  {
    uuid: 'noticon_graq1emtdnfwsxdcttvg',
    title: 'siren',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567661205/noticon/graq1emtdnfwsxdcttvg.gif',
    keywords: '‡',
    date: '2019-09-05T05:26:52.385Z',
  },
  {
    uuid: 'noticon_c9dt8qugongbr4lk9dfr',
    title: 'ironman',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567661222/noticon/c9dt8qugongbr4lk9dfr.png',
    keywords: '‡',
    date: '2019-09-05T05:27:07.328Z',
  },
  {
    uuid: 'noticon_zujqqm5y9jxcculmf2fe',
    title: 'apich',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567661387/noticon/zujqqm5y9jxcculmf2fe.gif',
    keywords: '‡',
    date: '2019-09-05T05:30:30.923Z',
  },
  {
    uuid: 'noticon_d6xy63xuq8zov57zyf43',
    title: 'analysis',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567687211/noticon/d6xy63xuq8zov57zyf43.png',
    keywords: '‡',
    date: '2019-09-05T12:40:22.350Z',
  },
  {
    uuid: 'noticon_dewi6lwh1gqixwiyfwxw',
    title: 'Confluence',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567744833/noticon/dewi6lwh1gqixwiyfwxw.png',
    keywords: 'confluence‡컨플루언스',
    date: '2019-09-06T04:40:45.415Z',
  },
  {
    uuid: 'noticon_zgdaxpaif5ojeduonygb',
    title: 'redux',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567749614/noticon/zgdaxpaif5ojeduonygb.png',
    keywords: 'redux‡Redux',
    date: '2019-09-06T06:00:49.738Z',
  },
  {
    uuid: 'noticon_zpssiysyf1tmydnaaixa',
    title: '애드맥스',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567749693/noticon/zpssiysyf1tmydnaaixa.png',
    keywords: '애드맥스‡애드맥스',
    date: '2019-09-06T06:01:43.228Z',
  },
  {
    uuid: 'noticon_czcj0z8efzlickmzpvck',
    title: 'MobX',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567752463/noticon/czcj0z8efzlickmzpvck.png',
    keywords: 'mobx‡mobX',
    date: '2019-09-06T06:47:57.374Z',
  },
  {
    uuid: 'noticon_lq2q06qxdyox28pfi1el',
    title: '구글애즈',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567753437/noticon/lq2q06qxdyox28pfi1el.jpg',
    keywords: 'google ads‡애즈',
    date: '2019-09-06T07:04:14.058Z',
  },
  {
    uuid: 'noticon_zciyee3nphuncesbsfu3',
    title: 'MDN',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567773742/noticon/zciyee3nphuncesbsfu3.png',
    keywords: 'mdn‡web',
    date: '2019-09-06T12:42:31.414Z',
  },
  {
    uuid: 'noticon_cymdbmxnnvoht3msnykg',
    title: 'MicroSoft',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567773803/noticon/cymdbmxnnvoht3msnykg.png',
    keywords: 'MS‡',
    date: '2019-09-06T12:43:31.410Z',
  },
  {
    uuid: 'noticon_r5j96kjgofenqdearmdw',
    title: 'History',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567831878/noticon/r5j96kjgofenqdearmdw.png',
    keywords: 'history‡티스토리',
    date: '2019-09-07T04:51:26.233Z',
  },
  {
    uuid: 'noticon_goedsksfjcspcjpmr1qe',
    title: 'doby',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567921244/noticon/goedsksfjcspcjpmr1qe.png',
    keywords: 'free‡',
    date: '2019-09-08T05:40:51.810Z',
  },
  {
    uuid: 'noticon_xshxdhawlhiupad0yf0d',
    title: 'Homebrew',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567940862/noticon/xshxdhawlhiupad0yf0d.png',
    keywords: 'homebrew‡홈브루',
    date: '2019-09-08T11:07:47.726Z',
  },
  {
    uuid: 'noticon_qk15u4pvw2eg5b87ky7a',
    title: 'AIC',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567953349/noticon/qk15u4pvw2eg5b87ky7a.png',
    keywords: 'AIC‡AI',
    date: '2019-09-08T14:36:00.483Z',
  },
  {
    uuid: 'noticon_ahm40l5plm7tqjdnstne',
    title: '카카오모먼트',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568013251/noticon/ahm40l5plm7tqjdnstne.jpg',
    keywords: '카카오‡마케팅',
    date: '2019-09-09T07:14:25.349Z',
  },
  {
    uuid: 'noticon_wy3lg1siyo4dmv3y1ejf',
    title: 'WATCHA',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568014668/noticon/wy3lg1siyo4dmv3y1ejf.png',
    keywords: '왓챠‡watcha',
    date: '2019-09-09T07:38:00.140Z',
  },
  {
    uuid: 'noticon_bccqj4tz8cl84iw1stxn',
    title: '퇴사 마음가짐',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568014889/noticon/bccqj4tz8cl84iw1stxn.gif',
    keywords: '퇴사‡관심 없음',
    date: '2019-09-09T07:42:13.312Z',
  },
  {
    uuid: 'noticon_ztj0soogsjihpq87vfcp',
    title: 'excel icon',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568016998/noticon/ztj0soogsjihpq87vfcp.png',
    keywords: 'excel‡엑셀',
    date: '2019-09-09T08:16:55.272Z',
  },
  {
    uuid: 'noticon_ecxjgjreiqfrjoergbxe',
    title: '매드잇',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568018276/noticon/ecxjgjreiqfrjoergbxe.png',
    keywords: '매드잇‡로고',
    date: '2019-09-09T08:37:58.704Z',
  },
  {
    uuid: 'noticon_j8caxhatys6rirhz9c2i',
    title: '모비온',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568034667/noticon/j8caxhatys6rirhz9c2i.jpg',
    keywords: '모비온‡마케팅',
    date: '2019-09-09T13:11:17.687Z',
  },
  {
    uuid: 'noticon_sbwrqld75baxuace16oi',
    title: '크리테오',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568034816/noticon/sbwrqld75baxuace16oi.png',
    keywords: '크리테오‡마케팅',
    date: '2019-09-09T13:13:44.474Z',
  },
  {
    uuid: 'noticon_tk3rtnv0ure5nfuv9zol',
    title: '브런치',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568039645/noticon/tk3rtnv0ure5nfuv9zol.png',
    keywords: '‡',
    date: '2019-09-09T14:34:08.996Z',
  },
  {
    uuid: 'noticon_dtogiujftxwprr0p8kcr',
    title: 'Yellow Bus',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568096331/noticon/dtogiujftxwprr0p8kcr.jpg',
    keywords: 'bus‡',
    date: '2019-09-10T06:18:55.112Z',
  },
  {
    uuid: 'noticon_hyq3qjcx8pnzpluk5vsg',
    title: 'wiki',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568164922/noticon/hyq3qjcx8pnzpluk5vsg.svg',
    keywords: 'wikipedia‡위키',
    date: '2019-09-11T01:22:21.511Z',
  },
  {
    uuid: 'noticon_iodu1jssf0kwe4oie2dt',
    title: 'docker',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568175385/noticon/iodu1jssf0kwe4oie2dt.png',
    keywords: '‡',
    date: '2019-09-11T04:16:30.173Z',
  },
  {
    uuid: 'noticon_tsyvc5muygrdi8scyh6c',
    title: '스티비',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568185166/noticon/tsyvc5muygrdi8scyh6c.jpg',
    keywords: '스티비‡stibee',
    date: '2019-09-11T06:59:36.881Z',
  },
  {
    uuid: 'noticon_yvmhocrae5y9w1oolkgk',
    title: 'smile',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568645916/noticon/yvmhocrae5y9w1oolkgk.png',
    keywords: 'smile‡',
    date: '2019-09-16T14:58:43.601Z',
  },
  {
    uuid: 'noticon_hkuhbyocl2mx2keas7ng',
    title: 'vue.js',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568683636/noticon/hkuhbyocl2mx2keas7ng.png',
    keywords: 'froneend‡framework',
    date: '2019-09-17T01:27:34.728Z',
  },
  {
    uuid: 'noticon_guv0uqiehnuzftlg4ifr',
    title: 'QA 변명',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568697779/noticon/guv0uqiehnuzftlg4ifr.gif',
    keywords: '버그‡대부분',
    date: '2019-09-17T05:23:21.331Z',
  },
  {
    uuid: 'noticon_vaksfcsgv88tnaygwaz4',
    title: '앱스플라이어',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568708486/noticon/vaksfcsgv88tnaygwaz4.png',
    keywords: '마케팅‡앱스플라이어',
    date: '2019-09-17T08:21:48.960Z',
  },
  {
    uuid: 'noticon_lu99we5fgqtshjumohmg',
    title: 'gts',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568771271/noticon/lu99we5fgqtshjumohmg.jpg',
    keywords: '‡',
    date: '2019-09-18T01:48:10.747Z',
  },
  {
    uuid: 'noticon_lwj3hr9v1yoheimtwc1w',
    title: 'styled components',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568851518/noticon/lwj3hr9v1yoheimtwc1w.png',
    keywords: 'react‡styling',
    date: '2019-09-19T00:05:41.174Z',
  },
  {
    uuid: 'noticon_wpkwfyq1mx9h4cvyuvne',
    title: 'airbnb',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568872248/noticon/wpkwfyq1mx9h4cvyuvne.png',
    keywords: 'airbnb‡',
    date: '2019-09-19T05:51:00.109Z',
  },
  {
    uuid: 'noticon_pqxiguiuacsl9of5ebd4',
    title: 'Latex',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568915958/noticon/pqxiguiuacsl9of5ebd4.png',
    keywords: 'latex‡sw',
    date: '2019-09-19T17:59:26.303Z',
  },
  {
    uuid: 'noticon_weu6bnrbovor9yiitsds',
    title: 'Latex',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568916015/noticon/weu6bnrbovor9yiitsds.png',
    keywords: 'latex‡sw',
    date: '2019-09-19T18:00:22.217Z',
  },
  {
    uuid: 'noticon_k2k3zdb848ej1kyucsf7',
    title: 'Lilypond',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568916057/noticon/k2k3zdb848ej1kyucsf7.png',
    keywords: 'lilypon‡ly',
    date: '2019-09-19T18:01:12.766Z',
  },
  {
    uuid: 'noticon_c47w4hvyulb1yhuxulnb',
    title: 'wiki',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568917117/noticon/c47w4hvyulb1yhuxulnb.png',
    keywords: '‡',
    date: '2019-09-19T18:18:42.484Z',
  },
  {
    uuid: 'noticon_v5klfsdatng27i0qxe3l',
    title: 'azure',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568917156/noticon/v5klfsdatng27i0qxe3l.png',
    keywords: '‡',
    date: '2019-09-19T18:19:30.080Z',
  },
  {
    uuid: 'noticon_xm5jyueyyosnabbsmzpy',
    title: 'deploy',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568917716/noticon/xm5jyueyyosnabbsmzpy.png',
    keywords: '‡',
    date: '2019-09-19T18:28:40.963Z',
  },
  {
    uuid: 'noticon_aeui5qns4zczje6eejpc',
    title: 'vs code',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568917735/noticon/aeui5qns4zczje6eejpc.png',
    keywords: '‡',
    date: '2019-09-19T18:29:03.058Z',
  },
  {
    uuid: 'noticon_stddia3lvzo8napn15ec',
    title: 'profile',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568917764/noticon/stddia3lvzo8napn15ec.png',
    keywords: '‡',
    date: '2019-09-19T18:29:37.271Z',
  },
  {
    uuid: 'noticon_hqw9j9dqz4rl5zsm86dt',
    title: 'azure',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568917968/noticon/hqw9j9dqz4rl5zsm86dt.png',
    keywords: '‡',
    date: '2019-09-19T18:32:56.926Z',
  },
  {
    uuid: 'noticon_mo7k1z7sonpsjdt5b1lw',
    title: 'Twitter',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568932725/noticon/mo7k1z7sonpsjdt5b1lw.png',
    keywords: 'twitter‡social netwo',
    date: '2019-09-19T22:39:08.055Z',
  },
  {
    uuid: 'noticon_dmtananggsvqylez5adj',
    title: 'Youtube',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568943514/noticon/dmtananggsvqylez5adj.png',
    keywords: '‡',
    date: '2019-09-20T01:38:46.293Z',
  },
  {
    uuid: 'noticon_cl60mjdj2ida3manrtgk',
    title: 'elice엘리스코딩',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568953603/noticon/cl60mjdj2ida3manrtgk.png',
    keywords: '코딩‡code',
    date: '2019-09-20T04:27:09.909Z',
  },
  {
    uuid: 'noticon_ufb0f5953bimc1njslya',
    title: 'elice 코딩',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568953741/noticon/ufb0f5953bimc1njslya.png',
    keywords: '코딩  ‡elice',
    date: '2019-09-20T04:29:17.058Z',
  },
  {
    uuid: 'noticon_bmsd6jrloxrq4zsmsbnp',
    title: 'terminal',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568959202/noticon/bmsd6jrloxrq4zsmsbnp.png',
    keywords: 'bash‡shell',
    date: '2019-09-20T06:00:15.113Z',
  },
  {
    uuid: 'noticon_gdfjchlk2joyscemeikz',
    title: 'ridi',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568962385/noticon/gdfjchlk2joyscemeikz.png',
    keywords: 'ridi‡ridibooks',
    date: '2019-09-20T06:53:10.255Z',
  },
  {
    uuid: 'noticon_jzjio5etuoidcjjnzvlv',
    title: 'Envato',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1569004282/noticon/jzjio5etuoidcjjnzvlv.png',
    keywords: 'envato‡',
    date: '2019-09-20T18:31:28.147Z',
  },
  {
    uuid: 'noticon_yubwjrkj43jpneajrdii',
    title: 'Netlify',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1569039210/noticon/yubwjrkj43jpneajrdii.png',
    keywords: 'deploy‡',
    date: '2019-09-21T04:13:53.479Z',
  },
  {
    uuid: 'noticon_gd4gpu9bem8opqrdbeqk',
    title: 'Plex',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1569044226/noticon/gd4gpu9bem8opqrdbeqk.gif',
    keywords: '‡',
    date: '2019-09-21T05:37:18.330Z',
  },
  {
    uuid: 'noticon_j7s5ha40ozkozzitjeet',
    title: 'Plex',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1569050270/noticon/j7s5ha40ozkozzitjeet.ico',
    keywords: '‡',
    date: '2019-09-21T07:17:57.603Z',
  },
  {
    uuid: 'noticon_ayksn2g3scf523ari4qm',
    title: 'aquarium',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1569079417/noticon/ayksn2g3scf523ari4qm.png',
    keywords: '‡',
    date: '2019-09-21T15:23:49.730Z',
  },
  {
    uuid: 'noticon_j9kc4zkuh9fsuvyogyuq',
    title: 'Spotify',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1569084871/noticon/j9kc4zkuh9fsuvyogyuq.png',
    keywords: '‡',
    date: '2019-09-21T16:54:35.700Z',
  },
  {
    uuid: 'noticon_emm2kyy1ometu4fuels9',
    title: 'Netflix',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1569084885/noticon/emm2kyy1ometu4fuels9.jpg',
    keywords: '‡',
    date: '2019-09-21T16:54:50.360Z',
  },
  {
    uuid: 'noticon_ujjrlnkpdus8cpkmvgxw',
    title: 'Chegg',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1569084896/noticon/ujjrlnkpdus8cpkmvgxw.jpg',
    keywords: '‡',
    date: '2019-09-21T16:55:01.883Z',
  },
  {
    uuid: 'noticon_xgcbranp79dzgrnom3sn',
    title: 'subscription',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1569087983/noticon/xgcbranp79dzgrnom3sn.png',
    keywords: '‡',
    date: '2019-09-21T17:46:32.620Z',
  },
  {
    uuid: 'noticon_ztemroyp2l83vbbre9xv',
    title: 'CMD',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1569129249/noticon/ztemroyp2l83vbbre9xv.png',
    keywords: '‡',
    date: '2019-09-22T05:14:21.434Z',
  },
  {
    uuid: 'noticon_xwasy1e70zqpn4lpzfwf',
    title: 'iCloud',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1569133231/noticon/xwasy1e70zqpn4lpzfwf.png',
    keywords: '‡',
    date: '2019-09-22T06:20:38.027Z',
  },
  {
    uuid: 'noticon_jmeuekc1zlge9wmoiw8h',
    title: 'c++',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1569171479/noticon/jmeuekc1zlge9wmoiw8h.png',
    keywords: 'c++‡c',
    date: '2019-09-22T16:58:11.145Z',
  },
  {
    uuid: 'noticon_pzqutc2e2p09otxqhk2h',
    title: 'Gregorio',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1569280061/noticon/pzqutc2e2p09otxqhk2h.png',
    keywords: 'gregorio‡chant',
    date: '2019-09-23T23:07:56.588Z',
  },
  {
    uuid: 'noticon_ljriotzldqyfq8jl8lwm',
    title: 'R',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1569289345/noticon/ljriotzldqyfq8jl8lwm.png',
    keywords: 'RR‡RRRR',
    date: '2019-09-24T01:42:30.242Z',
  },
  {
    uuid: 'noticon_mdujedvj9w8c9rz9phny',
    title: 'jwt',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1569654347/noticon/mdujedvj9w8c9rz9phny.png',
    keywords: 'auth‡',
    date: '2019-09-28T07:06:00.230Z',
  },
  {
    uuid: 'noticon_advuth0yltu0fprv8gey',
    title: 'Microsoft Exchange',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1569705674/noticon/advuth0yltu0fprv8gey.png',
    keywords: 'microsoft‡exchange',
    date: '2019-09-28T21:21:42.394Z',
  },
  {
    uuid: 'noticon_okrtgnrxry4blfc56phi',
    title: 'Windows 10',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1569810435/noticon/okrtgnrxry4blfc56phi.png',
    keywords: 'windows10‡win10',
    date: '2019-09-30T02:27:31.727Z',
  },
  {
    uuid: 'noticon_gmr1ahpuacukodpr039w',
    title: 'Travel',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1569897891/noticon/gmr1ahpuacukodpr039w.png',
    keywords: '‡',
    date: '2019-10-01T02:45:00.064Z',
  },
  {
    uuid: 'noticon_x8e3entin2axlgquvx8k',
    title: 'Muindo',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1569898129/noticon/x8e3entin2axlgquvx8k.png',
    keywords: '‡',
    date: '2019-10-01T02:48:54.754Z',
  },
  {
    uuid: 'noticon_k9dcglk0jtmgck1gww7h',
    title: 'Visual Studio',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1569989203/noticon/k9dcglk0jtmgck1gww7h.png',
    keywords: 'vs‡비주얼 스튜디오',
    date: '2019-10-02T04:07:40.758Z',
  },
  {
    uuid: 'noticon_loyafv0gqkk2xrc2dtpn',
    title: 'network',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1570008254/noticon/loyafv0gqkk2xrc2dtpn.png',
    keywords: 'net‡connect',
    date: '2019-10-02T09:24:56.733Z',
  },
  {
    uuid: 'noticon_gddvw1arpkpdfadvfqwa',
    title: 'codepen',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1570104673/noticon/gddvw1arpkpdfadvfqwa.png',
    keywords: 'codepen‡',
    date: '2019-10-03T12:11:23.626Z',
  },
  {
    uuid: 'noticon_uzmsswkie0dro1jzwyjl',
    title: 'codepen',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1570104716/noticon/uzmsswkie0dro1jzwyjl.png',
    keywords: 'codepen‡',
    date: '2019-10-03T12:12:04.895Z',
  },
  {
    uuid: 'noticon_hx52ypkqqdzjdvd8iaid',
    title: 'notion',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1570106347/noticon/hx52ypkqqdzjdvd8iaid.svg',
    keywords: 'notion‡',
    date: '2019-10-03T12:39:13.578Z',
  },
  {
    uuid: 'noticon_oim50rpx5bi5gfk0lx2g',
    title: 'Google Analytics',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1570148591/noticon/oim50rpx5bi5gfk0lx2g.svg',
    keywords: 'ga‡',
    date: '2019-10-04T00:23:29.072Z',
  },
  {
    uuid: 'noticon_izlj41f9z1jt6ykiwsyl',
    title: 'DynamoDB',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1570176339/noticon/izlj41f9z1jt6ykiwsyl.png',
    keywords: 'aws‡nosql',
    date: '2019-10-04T08:05:53.785Z',
  },
  {
    uuid: 'noticon_chsjociko3cudzqqbky3',
    title: '구글태그매니저',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1570256546/noticon/chsjociko3cudzqqbky3.svg',
    keywords: '태그매니저‡GTM',
    date: '2019-10-05T06:23:02.404Z',
  },
  {
    uuid: 'noticon_jl36nfr73kf3siyjcp56',
    title: '내 동료가 되라',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1570279036/noticon/jl36nfr73kf3siyjcp56.jpg',
    keywords: '‡',
    date: '2019-10-05T12:37:26.910Z',
  },
  {
    uuid: 'noticon_lbpvcvhvvszxrlu78vnc',
    title: 'electron',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1570521380/noticon/lbpvcvhvvszxrlu78vnc.png',
    keywords: 'electron‡일렉트론',
    date: '2019-10-08T07:56:23.406Z',
  },
  {
    uuid: 'noticon_trdbb9r4sxoeekohiwpf',
    title: 'tslint',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1570667194/noticon/trdbb9r4sxoeekohiwpf.png',
    keywords: 'lint‡TypeScript',
    date: '2019-10-10T00:26:53.980Z',
  },
  {
    uuid: 'noticon_obsmbadwaigx55tgakhd',
    title: 'wework',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1570761344/noticon/obsmbadwaigx55tgakhd.png',
    keywords: 'wework‡위워크',
    date: '2019-10-11T02:35:56.452Z',
  },
  {
    uuid: 'noticon_qgdiv5ctkcneujidjuv1',
    title: 'javascript',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1570946287/noticon/qgdiv5ctkcneujidjuv1.png',
    keywords: 'js‡',
    date: '2019-10-13T05:58:17.978Z',
  },
  {
    uuid: 'noticon_wtx3vkjmuih3o0hbqiem',
    title: 'bem',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1570961444/noticon/wtx3vkjmuih3o0hbqiem.png',
    keywords: 'bem‡',
    date: '2019-10-13T10:10:52.791Z',
  },
  {
    uuid: 'noticon_qlix0wqrr1akp9yuvj4d',
    title: 'SMACSS',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1570961537/noticon/qlix0wqrr1akp9yuvj4d.png',
    keywords: 'SMACSS‡',
    date: '2019-10-13T10:12:20.376Z',
  },
  {
    uuid: 'noticon_hmcburodydrxcanatpmk',
    title: 'OOCSS',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1570961620/noticon/hmcburodydrxcanatpmk.svg',
    keywords: 'OOCSS‡',
    date: '2019-10-13T10:13:42.946Z',
  },
  {
    uuid: 'noticon_ncoja7h401zo9ggczbnv',
    title: 'Nielsen',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1570970921/noticon/ncoja7h401zo9ggczbnv.png',
    keywords: '닐슨‡로고',
    date: '2019-10-13T12:49:04.423Z',
  },
  {
    uuid: 'noticon_txya6r9tfskiq3adkivi',
    title: '독립운동',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1571132462/noticon/txya6r9tfskiq3adkivi.jpg',
    keywords: 'daehan‡',
    date: '2019-10-15T09:41:17.218Z',
  },
  {
    uuid: 'noticon_lfcuhu0sy9ktjkmkfgzn',
    title: 'server',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1571378393/noticon/lfcuhu0sy9ktjkmkfgzn.png',
    keywords: '‡',
    date: '2019-10-18T06:00:01.083Z',
  },
  {
    uuid: 'noticon_nojgiowuteadkbab2iz5',
    title: 'e-gov',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1571616257/noticon/nojgiowuteadkbab2iz5.png',
    keywords: '‡',
    date: '2019-10-21T00:04:21.865Z',
  },
  {
    uuid: 'noticon_qruqjlmazllqx0ijdlk7',
    title: 'ubuntu',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1571635347/noticon/qruqjlmazllqx0ijdlk7.png',
    keywords: '‡',
    date: '2019-10-21T05:22:42.675Z',
  },
  {
    uuid: 'noticon_aatpviiooslxadro9vxw',
    title: 'Table',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1571791465/noticon/aatpviiooslxadro9vxw.png',
    keywords: 'Table‡',
    date: '2019-10-23T00:44:35.863Z',
  },
  {
    uuid: 'noticon_q24hoatbpgkcq4cedpjw',
    title: 'sqlscript',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1571795441/noticon/q24hoatbpgkcq4cedpjw.png',
    keywords: 'sql‡query',
    date: '2019-10-23T01:51:04.409Z',
  },
  {
    uuid: 'noticon_ncgxzfzuzo0ygwniagek',
    title: 'optimization',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1571795671/noticon/ncgxzfzuzo0ygwniagek.png',
    keywords: 'optimization‡',
    date: '2019-10-23T01:54:45.063Z',
  },
  {
    uuid: 'noticon_n94bmga5jrpl8kscivbj',
    title: 'oracle',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1571879098/noticon/n94bmga5jrpl8kscivbj.png',
    keywords: '‡',
    date: '2019-10-24T01:05:02.315Z',
  },
  {
    uuid: 'noticon_szzenyzlvdlnjwb8vrp4',
    title: 'language',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1571895421/noticon/szzenyzlvdlnjwb8vrp4.png',
    keywords: '‡',
    date: '2019-10-24T05:37:04.469Z',
  },
  {
    uuid: 'noticon_s4d85kpplaepgw0fpnhi',
    title: 'framework',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1571895517/noticon/s4d85kpplaepgw0fpnhi.jpg',
    keywords: '‡',
    date: '2019-10-24T05:38:43.716Z',
  },
  {
    uuid: 'noticon_k9kj6vcblyvdlxqkxxra',
    title: 'Configuration Manage',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1571895824/noticon/k9kj6vcblyvdlxqkxxra.jpg',
    keywords: '‡',
    date: '2019-10-24T05:43:56.275Z',
  },
  {
    uuid: 'noticon_dsgstq77eun0ark7c1oo',
    title: 'OS',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1571895910/noticon/dsgstq77eun0ark7c1oo.png',
    keywords: '‡',
    date: '2019-10-24T05:45:14.305Z',
  },
  {
    uuid: 'noticon_i1jmymlpwoe81bwzq9p1',
    title: 'FLO',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1571907165/noticon/i1jmymlpwoe81bwzq9p1.jpg',
    keywords: 'FLO‡플로',
    date: '2019-10-24T08:52:55.851Z',
  },
  {
    uuid: 'noticon_c7cfaq2qsllxmocswvil',
    title: 'vim',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1571968141/noticon/c7cfaq2qsllxmocswvil.png',
    keywords: '‡',
    date: '2019-10-25T01:49:18.888Z',
  },
  {
    uuid: 'noticon_vwmbujyl5onv3ps4tqlt',
    title: '메리츠화재',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1571981302/noticon/vwmbujyl5onv3ps4tqlt.png',
    keywords: 'Meritz‡메리츠',
    date: '2019-10-25T05:28:36.880Z',
  },
  {
    uuid: 'noticon_hqvzgdjz0mpqhzzxdqcc',
    title: 'T맵주차',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1571981613/noticon/hqvzgdjz0mpqhzzxdqcc.jpg',
    keywords: 'T맵‡T맵주차',
    date: '2019-10-25T05:33:44.722Z',
  },
  {
    uuid: 'noticon_qjgdn2sw2jposxhpv4sp',
    title: 'feconf 2019',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1572060892/noticon/qjgdn2sw2jposxhpv4sp.png',
    keywords: '‡',
    date: '2019-10-26T03:34:57.988Z',
  },
  {
    uuid: 'noticon_jhrb8puozpwttz9tdfqd',
    title: 'flyway',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1572402020/noticon/jhrb8puozpwttz9tdfqd.png',
    keywords: 'flyway‡',
    date: '2019-10-30T02:20:26.011Z',
  },
  {
    uuid: 'noticon_unrjtbtnog7uoiiejmme',
    title: '미키마우스',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1572452541/noticon/unrjtbtnog7uoiiejmme.gif',
    keywords: '미키‡디즈니',
    date: '2019-10-30T16:22:32.755Z',
  },
  {
    uuid: 'noticon_xd1qswphgts934msfkoe',
    title: '곰돌이푸',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1572452855/noticon/xd1qswphgts934msfkoe.gif',
    keywords: '푸‡디즈니',
    date: '2019-10-30T16:27:50.608Z',
  },
  {
    uuid: 'noticon_recuicc05rjfttm6b6th',
    title: '오버액션토끼',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1572454324/noticon/recuicc05rjfttm6b6th.gif',
    keywords: '토끼‡임티',
    date: '2019-10-30T16:52:25.052Z',
  },
  {
    uuid: 'noticon_gwqrquibd6qnetwz2cfx',
    title: 'gstar',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1572502601/noticon/gwqrquibd6qnetwz2cfx.png',
    keywords: '지스타‡GSTAR',
    date: '2019-10-31T06:16:51.894Z',
  },
  {
    uuid: 'noticon_lgcbwoam7doenh00xdz3',
    title: 'uid',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1573114899/noticon/lgcbwoam7doenh00xdz3.png',
    keywords: 'uid‡',
    date: '2019-11-07T08:21:44.491Z',
  },
  {
    uuid: 'noticon_x7ierwylwg0yaan37cjl',
    title: 'Sketch',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1573123705/noticon/x7ierwylwg0yaan37cjl.png',
    keywords: '‡',
    date: '2019-11-07T10:48:38.989Z',
  },
  {
    uuid: 'noticon_rnsadputnaagae4x2el8',
    title: '일러스트',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1573123777/noticon/rnsadputnaagae4x2el8.png',
    keywords: '‡',
    date: '2019-11-07T10:49:44.411Z',
  },
  {
    uuid: 'noticon_jn4bbvjmjjlaa0ekrygc',
    title: '곰',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1573179615/noticon/jn4bbvjmjjlaa0ekrygc.gif',
    keywords: '‡',
    date: '2019-11-08T02:20:29.027Z',
  },
  {
    uuid: 'noticon_yuen59reofeivvdhooi3',
    title: '카카오',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1573185009/noticon/yuen59reofeivvdhooi3.gif',
    keywords: '‡',
    date: '2019-11-08T03:50:23.139Z',
  },
  {
    uuid: 'noticon_uydcemefupin4kvi5pii',
    title: '병아리',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1573198836/noticon/uydcemefupin4kvi5pii.gif',
    keywords: '병아리‡귀여움',
    date: '2019-11-08T07:40:46.889Z',
  },
  {
    uuid: 'noticon_k0iopmklnh4fpqb8atzx',
    title: '달력',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1573273740/noticon/k0iopmklnh4fpqb8atzx.gif',
    keywords: '‡',
    date: '2019-11-09T04:29:15.024Z',
  },
  {
    uuid: 'noticon_pr2k2ngyxtvzyfges0d3',
    title: '펜돌리기',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1573273807/noticon/pr2k2ngyxtvzyfges0d3.gif',
    keywords: '‡',
    date: '2019-11-09T04:30:38.232Z',
  },
  {
    uuid: 'noticon_nh2xd3ko4k3wtnlb6sao',
    title: 'translation ko en-us',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1573375493/noticon/nh2xd3ko4k3wtnlb6sao.png',
    keywords: 'korean‡english',
    date: '2019-11-10T08:45:52.040Z',
  },
  {
    uuid: 'noticon_cjs8abp1i2kfwbrgmgc1',
    title: 'bts',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1573376039/noticon/cjs8abp1i2kfwbrgmgc1.png',
    keywords: 'korean‡boy band',
    date: '2019-11-10T08:54:08.103Z',
  },
  {
    uuid: 'noticon_oisjfebfbm6lqsptlpqc',
    title: 'Play store',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1573541767/noticon/oisjfebfbm6lqsptlpqc.png',
    keywords: 'google‡play store',
    date: '2019-11-12T06:56:21.566Z',
  },
  {
    uuid: 'noticon_tgskqwgaeg5vf2ftxgse',
    title: '만드러따',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1573656690/noticon/tgskqwgaeg5vf2ftxgse.png',
    keywords: '메롱‡약오르지',
    date: '2019-11-13T14:51:40.177Z',
  },
  {
    uuid: 'noticon_efaixcae5mgkvgc7o3ff',
    title: '또 만드러따',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1573656806/noticon/efaixcae5mgkvgc7o3ff.png',
    keywords: '리액트‡띄어쓰기 가능',
    date: '2019-11-13T14:53:35.861Z',
  },
  {
    uuid: 'noticon_nxw0ac9rkwlzv7bmvrgl',
    title: '위베어베어스',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1573657090/noticon/nxw0ac9rkwlzv7bmvrgl.gif',
    keywords: '곰‡베어 신남 룰루 랄라 ',
    date: '2019-11-13T14:58:37.013Z',
  },
  {
    uuid: 'noticon_tgrfmw5pc65z3eqstve3',
    title: 'Firefox',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1573947486/noticon/tgrfmw5pc65z3eqstve3.png',
    keywords: 'firefox‡',
    date: '2019-11-16T23:38:17.977Z',
  },
  {
    uuid: 'noticon_iez9a9jghs02fbmfeaog',
    title: 'GTA5',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1573957677/noticon/iez9a9jghs02fbmfeaog.ico',
    keywords: 'Game‡',
    date: '2019-11-17T02:28:08.447Z',
  },
  {
    uuid: 'noticon_v9mlvpzyfpi2ftqjadun',
    title: 'GTA5',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1573957750/noticon/v9mlvpzyfpi2ftqjadun.png',
    keywords: 'game‡',
    date: '2019-11-17T02:29:20.604Z',
  },
  {
    uuid: 'noticon_nzidfsfzedveggcinhi3',
    title: 'Steam',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1573957819/noticon/nzidfsfzedveggcinhi3.png',
    keywords: 'game‡',
    date: '2019-11-17T02:30:26.451Z',
  },
  {
    uuid: 'noticon_hshdltk7yee78uduf9tg',
    title: 'ONI',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1573958003/noticon/hshdltk7yee78uduf9tg.png',
    keywords: 'game‡',
    date: '2019-11-17T02:33:31.866Z',
  },
  {
    uuid: 'noticon_ggyahdagtfoiwfga160y',
    title: 'itunes',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1573958991/noticon/ggyahdagtfoiwfga160y.png',
    keywords: 'music‡apple',
    date: '2019-11-17T02:49:59.745Z',
  },
  {
    uuid: 'noticon_nekmthlxqhduyjffwgvt',
    title: 'megacmd',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1573997698/noticon/nekmthlxqhduyjffwgvt.png',
    keywords: 'tool‡',
    date: '2019-11-17T13:35:08.733Z',
  },
  {
    uuid: 'noticon_dg0kpevxagqi1lxgneav',
    title: '생활코딩',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1574079851/noticon/dg0kpevxagqi1lxgneav.png',
    keywords: '‡',
    date: '2019-11-18T12:24:17.048Z',
  },
  {
    uuid: 'noticon_zhwwcavlpqhwg0q7eelx',
    title: '인프런',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1574079902/noticon/zhwwcavlpqhwg0q7eelx.png',
    keywords: '‡',
    date: '2019-11-18T12:25:07.264Z',
  },
  {
    uuid: 'noticon_vqveh70yzyurkd7yrexb',
    title: 'fastcampus',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1574130115/noticon/vqveh70yzyurkd7yrexb.png',
    keywords: '‡',
    date: '2019-11-19T02:22:07.520Z',
  },
  {
    uuid: 'noticon_aun9na6b8htufz2lwdo0',
    title: 'sql',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1574153502/noticon/aun9na6b8htufz2lwdo0.jpg',
    keywords: '‡',
    date: '2019-11-19T08:51:46.087Z',
  },
  {
    uuid: 'noticon_d2kozen0v4hkxf6s1kng',
    title: 'centos',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1574153584/noticon/d2kozen0v4hkxf6s1kng.png',
    keywords: '‡',
    date: '2019-11-19T08:53:08.143Z',
  },
  {
    uuid: 'noticon_oetrptuzfwljvikvrzjr',
    title: 'Lightbulb',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1574220939/noticon/oetrptuzfwljvikvrzjr.png',
    keywords: 'ideas‡create',
    date: '2019-11-20T03:36:21.452Z',
  },
  {
    uuid: 'noticon_xjal9z4a8h46soi6ktgo',
    title: 'Command Window',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1574221064/noticon/xjal9z4a8h46soi6ktgo.png',
    keywords: 'code‡program',
    date: '2019-11-20T03:38:02.417Z',
  },
  {
    uuid: 'noticon_sajy1c31wrcqtxpse0u2',
    title: 'Martin Luther King J',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1574221101/noticon/sajy1c31wrcqtxpse0u2.png',
    keywords: 'MLK‡Holiday',
    date: '2019-11-20T03:38:57.921Z',
  },
  {
    uuid: 'noticon_jts9ijhbqpuasg9ddv4p',
    title: 'Disney',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1574221159/noticon/jts9ijhbqpuasg9ddv4p.png',
    keywords: '‡',
    date: '2019-11-20T03:39:34.372Z',
  },
  {
    uuid: 'noticon_wx7fodqgsnfqb9vocsa1',
    title: 'Latter-day Saints',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1574221210/noticon/wx7fodqgsnfqb9vocsa1.png',
    keywords: 'LDS‡Mormon',
    date: '2019-11-20T03:41:57.005Z',
  },
  {
    uuid: 'noticon_x9t9smlzri3emdrkuj1c',
    title: 'Meetinghouse',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1574221338/noticon/x9t9smlzri3emdrkuj1c.png',
    keywords: 'LDS‡Mormon',
    date: '2019-11-20T03:43:16.931Z',
  },
  {
    uuid: 'noticon_oazvui9fwwpmfjwnm3lj',
    title: 'ANNO1800',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1574249902/noticon/oazvui9fwwpmfjwnm3lj.png',
    keywords: 'game‡',
    date: '2019-11-20T11:38:29.466Z',
  },
  {
    uuid: 'noticon_vsoiemhqcdgssnderabu',
    title: '탈잉',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1574316960/noticon/vsoiemhqcdgssnderabu.png',
    keywords: '‡',
    date: '2019-11-21T06:16:16.790Z',
  },
  {
    uuid: 'noticon_o5wlnwdwjvdizxzk67mn',
    title: 'Regular Expression',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1574329058/noticon/o5wlnwdwjvdizxzk67mn.jpg',
    keywords: 'regex‡regular',
    date: '2019-11-21T09:38:03.935Z',
  },
  {
    uuid: 'noticon_dho3xfkjax1osnsup3ml',
    title: 'Regular Expression',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1574329122/noticon/dho3xfkjax1osnsup3ml.png',
    keywords: 'regex‡정규표현',
    date: '2019-11-21T09:38:56.704Z',
  },
  {
    uuid: 'noticon_mghx6dohxnwybvtihr0x',
    title: 'Lotte',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1574663445/noticon/mghx6dohxnwybvtihr0x.jpg',
    keywords: '롯데‡롯데로고',
    date: '2019-11-25T06:30:49.229Z',
  },
  {
    uuid: 'noticon_up950fjgyekwqizq6xa6',
    title: 'TDD',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1574740301/noticon/up950fjgyekwqizq6xa6.png',
    keywords: 'TDD‡test',
    date: '2019-11-26T03:51:52.415Z',
  },
  {
    uuid: 'noticon_hx6tdjmc5nfjzrai8ptu',
    title: 'test-driven-develop',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1574740373/noticon/hx6tdjmc5nfjzrai8ptu.png',
    keywords: 'tdd‡test',
    date: '2019-11-26T03:53:19.060Z',
  },
  {
    uuid: 'noticon_csq7amysgavskx9f1jvx',
    title: '비움',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1574924297/noticon/csq7amysgavskx9f1jvx.jpg',
    keywords: '‡',
    date: '2019-11-28T06:58:25.215Z',
  },
  {
    uuid: 'noticon_my8lajlyt2s6yl8y4sch',
    title: 'vmware',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1574994763/noticon/my8lajlyt2s6yl8y4sch.png',
    keywords: 'vmware‡',
    date: '2019-11-29T02:32:49.002Z',
  },
  {
    uuid: 'noticon_ilg2vkmfuzm4fzjnuiqk',
    title: 'yes24',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575057548/noticon/ilg2vkmfuzm4fzjnuiqk.png',
    keywords: '‡',
    date: '2019-11-29T19:59:18.368Z',
  },
  {
    uuid: 'noticon_kxsqynutrqajiiyjrrxl',
    title: 'Stamp',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575057627/noticon/kxsqynutrqajiiyjrrxl.svg',
    keywords: '‡',
    date: '2019-11-29T20:00:36.256Z',
  },
  {
    uuid: 'noticon_eukhux6abtzfv2lhwjfw',
    title: '돋보기',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575057716/noticon/eukhux6abtzfv2lhwjfw.svg',
    keywords: '‡',
    date: '2019-11-29T20:02:01.671Z',
  },
  {
    uuid: 'noticon_bfyt0t2ln6z4qppsulsn',
    title: 'music',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575057765/noticon/bfyt0t2ln6z4qppsulsn.svg',
    keywords: '‡',
    date: '2019-11-29T20:02:51.138Z',
  },
  {
    uuid: 'noticon_e4eukig4eptfib2pwhvo',
    title: 'movie',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575057793/noticon/e4eukig4eptfib2pwhvo.svg',
    keywords: '‡',
    date: '2019-11-29T20:03:16.985Z',
  },
  {
    uuid: 'noticon_u2jj5bsu05zpwm5xoq5z',
    title: 'world',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575057822/noticon/u2jj5bsu05zpwm5xoq5z.svg',
    keywords: '‡',
    date: '2019-11-29T20:03:46.480Z',
  },
  {
    uuid: 'noticon_dd26puu7mvtxldfmxedi',
    title: 'multimedia',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575057855/noticon/dd26puu7mvtxldfmxedi.svg',
    keywords: '‡',
    date: '2019-11-29T20:04:27.653Z',
  },
  {
    uuid: 'noticon_or2fml7c1zhfhvmriujx',
    title: 'headset',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575057895/noticon/or2fml7c1zhfhvmriujx.svg',
    keywords: '‡',
    date: '2019-11-29T20:05:00.481Z',
  },
  {
    uuid: 'noticon_vash52yczpargfjik267',
    title: 'map',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575058122/noticon/vash52yczpargfjik267.svg',
    keywords: '‡',
    date: '2019-11-29T20:08:51.642Z',
  },
  {
    uuid: 'noticon_eu6uhubcgqfm6f0ova6t',
    title: 'map 02',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575058160/noticon/eu6uhubcgqfm6f0ova6t.svg',
    keywords: '‡',
    date: '2019-11-29T20:09:27.730Z',
  },
  {
    uuid: 'noticon_e1p1kppbft1pswsqwdpg',
    title: 'chat',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575058206/noticon/e1p1kppbft1pswsqwdpg.svg',
    keywords: '‡',
    date: '2019-11-29T20:10:10.012Z',
  },
  {
    uuid: 'noticon_f0on7bpoojch0mh9nter',
    title: 'chat_outline',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575058243/noticon/f0on7bpoojch0mh9nter.svg',
    keywords: '‡',
    date: '2019-11-29T20:10:53.483Z',
  },
  {
    uuid: 'noticon_m8gcxe364mnpdvxh4fkx',
    title: 'shopping bag',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575058397/noticon/m8gcxe364mnpdvxh4fkx.svg',
    keywords: '‡',
    date: '2019-11-29T20:13:29.910Z',
  },
  {
    uuid: 'noticon_b7vmbdgm9krhkd6ejtjv',
    title: 'rainbow',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575058476/noticon/b7vmbdgm9krhkd6ejtjv.svg',
    keywords: '‡',
    date: '2019-11-29T20:14:44.116Z',
  },
  {
    uuid: 'noticon_c9fyq5cd9itk7kryhh8t',
    title: 'cake',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575058524/noticon/c9fyq5cd9itk7kryhh8t.svg',
    keywords: '‡',
    date: '2019-11-29T20:15:29.678Z',
  },
  {
    uuid: 'noticon_kiojkv0lwe2vde4yu8x7',
    title: 'calendar',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575058568/noticon/kiojkv0lwe2vde4yu8x7.svg',
    keywords: '‡',
    date: '2019-11-29T20:16:13.138Z',
  },
  {
    uuid: 'noticon_qjtschxwbeaorhwewl1i',
    title: 'coupon',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575058685/noticon/qjtschxwbeaorhwewl1i.svg',
    keywords: '‡',
    date: '2019-11-29T20:18:10.878Z',
  },
  {
    uuid: 'noticon_lzpqeaadx1nhvsaueyy2',
    title: 'discount',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575058721/noticon/lzpqeaadx1nhvsaueyy2.svg',
    keywords: '‡',
    date: '2019-11-29T20:18:51.960Z',
  },
  {
    uuid: 'noticon_rab71pmn6tw8qbcaxq9g',
    title: 'payment',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575058774/noticon/rab71pmn6tw8qbcaxq9g.svg',
    keywords: '‡',
    date: '2019-11-29T20:19:39.527Z',
  },
  {
    uuid: 'noticon_pqhhckv9ywafjh0we7eq',
    title: 'wheel cart',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575058829/noticon/pqhhckv9ywafjh0we7eq.svg',
    keywords: '‡',
    date: '2019-11-29T20:20:38.874Z',
  },
  {
    uuid: 'noticon_zfru6gfyux9swmonamff',
    title: 'price tag',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575058873/noticon/zfru6gfyux9swmonamff.svg',
    keywords: '‡',
    date: '2019-11-29T20:21:18.631Z',
  },
  {
    uuid: 'noticon_g7ksjeqsrck72nxqv7ox',
    title: 'cart',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575058915/noticon/g7ksjeqsrck72nxqv7ox.svg',
    keywords: '‡',
    date: '2019-11-29T20:21:59.191Z',
  },
  {
    uuid: 'noticon_vjurtam3kbjlfppz3evq',
    title: 'bag',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575058939/noticon/vjurtam3kbjlfppz3evq.svg',
    keywords: '‡',
    date: '2019-11-29T20:22:23.460Z',
  },
  {
    uuid: 'noticon_ptpbe8ymcpwjqn6eweeh',
    title: 'box',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575058963/noticon/ptpbe8ymcpwjqn6eweeh.svg',
    keywords: '‡',
    date: '2019-11-29T20:22:46.918Z',
  },
  {
    uuid: 'noticon_mnkakak8qj55uwpfnghg',
    title: 'mailbox',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575058993/noticon/mnkakak8qj55uwpfnghg.svg',
    keywords: '‡',
    date: '2019-11-29T20:23:25.947Z',
  },
  {
    uuid: 'noticon_jnzrmzy1n0bmynrho9tv',
    title: 'lightbulb',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575059122/noticon/jnzrmzy1n0bmynrho9tv.svg',
    keywords: '‡',
    date: '2019-11-29T20:25:41.709Z',
  },
  {
    uuid: 'noticon_iilaatnowf7byx6kidw2',
    title: 'hearts',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575059857/noticon/iilaatnowf7byx6kidw2.svg',
    keywords: '‡',
    date: '2019-11-29T20:37:43.959Z',
  },
  {
    uuid: 'noticon_t2vtfdxdxs57yvmkpkzu',
    title: 'location pin',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575059892/noticon/t2vtfdxdxs57yvmkpkzu.svg',
    keywords: '‡',
    date: '2019-11-29T20:38:21.767Z',
  },
  {
    uuid: 'noticon_yfravinqljxqoodhspbx',
    title: 'letter',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575059928/noticon/yfravinqljxqoodhspbx.svg',
    keywords: '‡',
    date: '2019-11-29T20:38:54.193Z',
  },
  {
    uuid: 'noticon_lfpz7g1sc4uz1qhmwr43',
    title: 'house',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575059964/noticon/lfpz7g1sc4uz1qhmwr43.svg',
    keywords: '‡',
    date: '2019-11-29T20:39:31.569Z',
  },
  {
    uuid: 'noticon_lojhfgc9u3li1inwok3g',
    title: 'document and pen',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575060039/noticon/lojhfgc9u3li1inwok3g.svg',
    keywords: '‡',
    date: '2019-11-29T20:40:51.016Z',
  },
  {
    uuid: 'noticon_wpqzgzdhfdzt5phh0hrg',
    title: 'document and pen 02',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575060077/noticon/wpqzgzdhfdzt5phh0hrg.svg',
    keywords: '‡',
    date: '2019-11-29T20:41:25.722Z',
  },
  {
    uuid: 'noticon_kkzcn5hjh5f6lq8hxea4',
    title: 'document',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575060109/noticon/kkzcn5hjh5f6lq8hxea4.svg',
    keywords: '‡',
    date: '2019-11-29T20:42:01.227Z',
  },
  {
    uuid: 'noticon_hkunixbsjynxpm5ndze6',
    title: 'checklist',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575060171/noticon/hkunixbsjynxpm5ndze6.svg',
    keywords: '‡',
    date: '2019-11-29T20:42:58.055Z',
  },
  {
    uuid: 'noticon_mwrtauxrrpjdty7hgohx',
    title: 'notepad',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575060204/noticon/mwrtauxrrpjdty7hgohx.svg',
    keywords: '‡',
    date: '2019-11-29T20:43:30.454Z',
  },
  {
    uuid: 'noticon_h9urzft3ucdaby9vhhif',
    title: 'document pie chart',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575060243/noticon/h9urzft3ucdaby9vhhif.svg',
    keywords: '‡',
    date: '2019-11-29T20:44:20.614Z',
  },
  {
    uuid: 'noticon_d53p6n2jp5iyf51jtdoi',
    title: 'document star',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575060307/noticon/d53p6n2jp5iyf51jtdoi.svg',
    keywords: '‡',
    date: '2019-11-29T20:45:15.603Z',
  },
  {
    uuid: 'noticon_ow0sh8c5td0a4nipz5dq',
    title: 'document heart',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575060333/noticon/ow0sh8c5td0a4nipz5dq.svg',
    keywords: '‡',
    date: '2019-11-29T20:45:43.216Z',
  },
  {
    uuid: 'noticon_dohple5p2r4mpua8ae21',
    title: 'FTL',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575161638/noticon/dohple5p2r4mpua8ae21.png',
    keywords: 'game‡',
    date: '2019-12-01T00:54:03.031Z',
  },
  {
    uuid: 'noticon_foonyzpf94pquusck7o8',
    title: 'study pie',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575423622/noticon/foonyzpf94pquusck7o8.png',
    keywords: '‡',
    date: '2019-12-04T01:40:32.822Z',
  },
  {
    uuid: 'noticon_cwtrhzu1mqunohrhc2pu',
    title: 'Clip Studio',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575424036/noticon/cwtrhzu1mqunohrhc2pu.jpg',
    keywords: '‡',
    date: '2019-12-04T01:47:19.446Z',
  },
  {
    uuid: 'noticon_pac7izcqpkj5nxr1lkrb',
    title: 'sketchup',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575424274/noticon/pac7izcqpkj5nxr1lkrb.png',
    keywords: '‡',
    date: '2019-12-04T01:51:32.047Z',
  },
  {
    uuid: 'noticon_i1jguaslgdb6zsra8fmm',
    title: 'asana',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575424444/noticon/i1jguaslgdb6zsra8fmm.jpg',
    keywords: '‡',
    date: '2019-12-04T01:54:11.789Z',
  },
  {
    uuid: 'noticon_eviv3wawjhjuw4jhswg7',
    title: 'sketchup',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575424613/noticon/eviv3wawjhjuw4jhswg7.jpg',
    keywords: 'sketchup‡',
    date: '2019-12-04T01:56:57.278Z',
  },
  {
    uuid: 'noticon_obkxvqfcfl6bk60s2tpb',
    title: 'jandi',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575424748/noticon/obkxvqfcfl6bk60s2tpb.png',
    keywords: 'jandi‡',
    date: '2019-12-04T01:59:11.336Z',
  },
  {
    uuid: 'noticon_gr0imx6njowlnqnyc5ly',
    title: 'photoshop',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575424931/noticon/gr0imx6njowlnqnyc5ly.png',
    keywords: 'photoshop‡',
    date: '2019-12-04T02:02:14.435Z',
  },
  {
    uuid: 'noticon_tfbaqf6ingajmsgwmlpt',
    title: 'illustrator',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575424943/noticon/tfbaqf6ingajmsgwmlpt.png',
    keywords: 'illustrator‡',
    date: '2019-12-04T02:02:30.344Z',
  },
  {
    uuid: 'noticon_vftxpc1x0h1sggcvts4o',
    title: 'Asana',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575425359/noticon/vftxpc1x0h1sggcvts4o.png',
    keywords: 'Asana‡',
    date: '2019-12-04T02:09:35.656Z',
  },
  {
    uuid: 'noticon_biyhdcg8fvectjeguc50',
    title: 'Sketchup',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575425392/noticon/biyhdcg8fvectjeguc50.png',
    keywords: 'Sketchup‡',
    date: '2019-12-04T02:10:00.118Z',
  },
  {
    uuid: 'noticon_l7fmhzdjzn7cb61be0mb',
    title: 'sketchup',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575450184/noticon/l7fmhzdjzn7cb61be0mb.png',
    keywords: 'sketchup‡',
    date: '2019-12-04T09:03:13.004Z',
  },
  {
    uuid: 'noticon_i5eacjfzdcmshu5xfqtc',
    title: '와디즈',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575521120/noticon/i5eacjfzdcmshu5xfqtc.png',
    keywords: '와디즈‡wadiz',
    date: '2019-12-05T04:45:37.333Z',
  },
  {
    uuid: 'noticon_xizeokreg40iq2pawjwx',
    title: '알파퀀트',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575617327/noticon/xizeokreg40iq2pawjwx.png',
    keywords: '알파퀀트‡',
    date: '2019-12-06T07:28:56.382Z',
  },
  {
    uuid: 'noticon_vp3gg44rariq76sgynwj',
    title: 'setting',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575680053/noticon/vp3gg44rariq76sgynwj.png',
    keywords: '‡',
    date: '2019-12-07T00:54:34.999Z',
  },
  {
    uuid: 'noticon_lrq2jshiflyhramdco4v',
    title: 'money',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1576013724/noticon/lrq2jshiflyhramdco4v.svg',
    keywords: '‡',
    date: '2019-12-10T21:35:31.451Z',
  },
  {
    uuid: 'noticon_alvrshmgc8mihbxdhvlx',
    title: '한우리',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1576032121/noticon/alvrshmgc8mihbxdhvlx.png',
    keywords: 'hanuri‡',
    date: '2019-12-11T02:42:09.357Z',
  },
  {
    uuid: 'noticon_ytk1lyw0fftakhh2resu',
    title: 'crownix',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1576199844/noticon/ytk1lyw0fftakhh2resu.png',
    keywords: 'crownix‡',
    date: '2019-12-13T01:17:57.844Z',
  },
  {
    uuid: 'noticon_rcwm9dy0hu6cbjowbfwi',
    title: 'Gradle',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1576325989/noticon/rcwm9dy0hu6cbjowbfwi.png',
    keywords: 'gradle‡',
    date: '2019-12-14T12:20:04.835Z',
  },
  {
    uuid: 'noticon_huygyql1qtvn9cssp4ij',
    title: 'html',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1576458613/noticon/huygyql1qtvn9cssp4ij.png',
    keywords: '‡',
    date: '2019-12-16T01:10:17.247Z',
  },
  {
    uuid: 'noticon_gdisdxiib5xx5unshhtd',
    title: 'html',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1576458662/noticon/gdisdxiib5xx5unshhtd.png',
    keywords: '‡',
    date: '2019-12-16T01:11:08.987Z',
  },
  {
    uuid: 'noticon_ln5xivnzmcq8yzejnsub',
    title: 'google calendar',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1576470996/noticon/ln5xivnzmcq8yzejnsub.png',
    keywords: 'GOOGLE‡calendar',
    date: '2019-12-16T04:36:52.712Z',
  },
  {
    uuid: 'noticon_lranpyrzne2qomkurizu',
    title: 'onedrive',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1576471102/noticon/lranpyrzne2qomkurizu.jpg',
    keywords: 'onedrive‡microsoft',
    date: '2019-12-16T04:38:38.418Z',
  },
  {
    uuid: 'noticon_ydjckdfw3v4ryrkgwaln',
    title: 'onedrive',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1576471173/noticon/ydjckdfw3v4ryrkgwaln.png',
    keywords: 'onedrive‡microsoft',
    date: '2019-12-16T04:39:47.968Z',
  },
  {
    uuid: 'noticon_tqbhjvflyhw5p6jajalw',
    title: 'Blazor',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1576658291/noticon/tqbhjvflyhw5p6jajalw.png',
    keywords: '.NET‡c#',
    date: '2019-12-18T08:38:49.173Z',
  },
  {
    uuid: 'noticon_cytfygu8ycqcg2vm7tte',
    title: 'tomcat',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1576681183/noticon/cytfygu8ycqcg2vm7tte.png',
    keywords: 'tomcat‡',
    date: '2019-12-18T14:59:48.785Z',
  },
  {
    uuid: 'noticon_jgtx1gks6hxgwvz5oa1l',
    title: 'leetcode',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1577118441/noticon/jgtx1gks6hxgwvz5oa1l.png',
    keywords: 'leetcode‡',
    date: '2019-12-23T16:27:24.939Z',
  },
  {
    uuid: 'noticon_gzl7ru4i4vv3phyv34y3',
    title: 'algorithm',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1577524878/noticon/gzl7ru4i4vv3phyv34y3.png',
    keywords: '알고리즘‡',
    date: '2019-12-28T09:21:32.641Z',
  },
  {
    uuid: 'noticon_a7cmr2ibsfyuwcydpvny',
    title: 'project',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1577544307/noticon/a7cmr2ibsfyuwcydpvny.png',
    keywords: '‡',
    date: '2019-12-28T14:46:57.821Z',
  },
  {
    uuid: 'noticon_jj0vrcr5pnzruriucs0h',
    title: 'book',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1577545202/noticon/jj0vrcr5pnzruriucs0h.png',
    keywords: '‡',
    date: '2019-12-28T15:00:07.864Z',
  },
  {
    uuid: 'noticon_rjhlvihgwdrhlyd7ofws',
    title: 'chat',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1577586184/noticon/rjhlvihgwdrhlyd7ofws.svg',
    keywords: '‡',
    date: '2019-12-29T02:23:15.535Z',
  },
  {
    uuid: 'noticon_uqwdjdnxeuk8sbga0emm',
    title: 'svelte',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1577603407/noticon/uqwdjdnxeuk8sbga0emm.png',
    keywords: 'svelte‡',
    date: '2019-12-29T07:10:15.745Z',
  },
  {
    uuid: 'noticon_bsrkwv6dd0ywsbzwhbir',
    title: '풀무원',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1577612022/noticon/bsrkwv6dd0ywsbzwhbir.png',
    keywords: '‡',
    date: '2019-12-29T09:33:59.091Z',
  },
  {
    uuid: 'noticon_zmdmf87vrmmyz41a86hd',
    title: 'nhn',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1577612353/noticon/zmdmf87vrmmyz41a86hd.png',
    keywords: '‡',
    date: '2019-12-29T09:39:19.277Z',
  },
  {
    uuid: 'noticon_ni37ksl5cqqawvq8xoz6',
    title: 'indesign',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1577671402/noticon/ni37ksl5cqqawvq8xoz6.png',
    keywords: '‡',
    date: '2019-12-30T02:03:29.407Z',
  },
  {
    uuid: 'noticon_vemguarhzcat3zconr4d',
    title: '디프만',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1577679353/noticon/vemguarhzcat3zconr4d.png',
    keywords: 'depromeet‡',
    date: '2019-12-30T04:16:07.584Z',
  },
  {
    uuid: 'noticon_m7laxwx6s1m5thit9ldj',
    title: 'Linkedin',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1577931228/noticon/m7laxwx6s1m5thit9ldj.png',
    keywords: '링크드인‡',
    date: '2020-01-02T02:13:50.910Z',
  },
  {
    uuid: 'noticon_sk60dpmbto5bmqdaqihb',
    title: '액슈어',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1578037748/noticon/sk60dpmbto5bmqdaqihb.svg',
    keywords: '‡',
    date: '2020-01-03T07:49:13.686Z',
  },
  {
    uuid: 'noticon_dioy9svkfb94rbzpumpr',
    title: '브러쉬',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1578535405/noticon/dioy9svkfb94rbzpumpr.png',
    keywords: '‡',
    date: '2020-01-09T02:03:29.493Z',
  },
  {
    uuid: 'noticon_lm4qwpjghtlj7bpszcab',
    title: 'color',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1578535482/noticon/lm4qwpjghtlj7bpszcab.png',
    keywords: '‡',
    date: '2020-01-09T02:04:49.526Z',
  },
  {
    uuid: 'noticon_f10qlsmed7oi56nxgq7w',
    title: 'color2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1578536047/noticon/f10qlsmed7oi56nxgq7w.png',
    keywords: '‡',
    date: '2020-01-09T02:14:15.930Z',
  },
  {
    uuid: 'noticon_bkubzbgpoz27golhjs7j',
    title: 'CKEditor5',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1578721060/noticon/bkubzbgpoz27golhjs7j.svg',
    keywords: 'editor‡richtext',
    date: '2020-01-11T05:38:07.645Z',
  },
  {
    uuid: 'noticon_tr4etvb9imzxc3xxnq3x',
    title: 'TIL',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1578807458/noticon/tr4etvb9imzxc3xxnq3x.jpg',
    keywords: 'til‡today learn',
    date: '2020-01-12T05:37:58.227Z',
  },
  {
    uuid: 'noticon_pjqbncqq0uytpfhsjaxz',
    title: 'snapshot testing',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1578835241/noticon/pjqbncqq0uytpfhsjaxz.jpg',
    keywords: 'enzyme‡',
    date: '2020-01-12T13:20:58.267Z',
  },
  {
    uuid: 'noticon_vjsag9kkvqug5kpg5jtq',
    title: 'velopert',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1578835991/noticon/vjsag9kkvqug5kpg5jtq.png',
    keywords: 'react‡frontend',
    date: '2020-01-12T13:33:25.581Z',
  },
  {
    uuid: 'noticon_babk1d6frj0npxadu5et',
    title: 'AWS Lambda',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1578836396/noticon/babk1d6frj0npxadu5et.png',
    keywords: 'lambda‡aws',
    date: '2020-01-12T13:40:07.133Z',
  },
  {
    uuid: 'noticon_jnih5fdnvkzwdjfrtbwb',
    title: 'finalcutpro',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1578875080/noticon/jnih5fdnvkzwdjfrtbwb.png',
    keywords: 'video‡finalcut',
    date: '2020-01-13T00:24:56.063Z',
  },
  {
    uuid: 'noticon_ojp6inbba9zsdamdrdet',
    title: 'tag 02',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1579259511/noticon/ojp6inbba9zsdamdrdet.png',
    keywords: '‡',
    date: '2020-01-17T11:12:14.210Z',
  },
  {
    uuid: 'noticon_uftl4h1g5ormdqakg2fx',
    title: 'inpock 인포크',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1579512546/noticon/uftl4h1g5ormdqakg2fx.png',
    keywords: '인포크‡inpock',
    date: '2020-01-20T09:29:21.399Z',
  },
  {
    uuid: 'noticon_gu1drzc58nrcjz7lon0f',
    title: 'windows',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1579514831/noticon/gu1drzc58nrcjz7lon0f.jpg',
    keywords: '‡',
    date: '2020-01-20T10:07:16.325Z',
  },
  {
    uuid: 'noticon_wmltdypwpooa8rkvpr5h',
    title: 'paino',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1579528440/noticon/wmltdypwpooa8rkvpr5h.png',
    keywords: '‡',
    date: '2020-01-20T13:54:04.071Z',
  },
  {
    uuid: 'noticon_fiyqk4ea9wxryj1j8pnz',
    title: 'zip',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1579528693/noticon/fiyqk4ea9wxryj1j8pnz.png',
    keywords: '‡',
    date: '2020-01-20T13:58:16.914Z',
  },
  {
    uuid: 'noticon_ycbfw4hrfhataijvqolk',
    title: 'clover',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1579528751/noticon/ycbfw4hrfhataijvqolk.png',
    keywords: '‡',
    date: '2020-01-20T13:59:14.391Z',
  },
  {
    uuid: 'noticon_basd2y5bygpkqjiixuqy',
    title: 'React',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1579667701/noticon/basd2y5bygpkqjiixuqy.png',
    keywords: '‡',
    date: '2020-01-22T04:35:12.275Z',
  },
  {
    uuid: 'noticon_k1amz2nqzg6pgowfuchn',
    title: 'Css Fuck',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1579705687/noticon/k1amz2nqzg6pgowfuchn.gif',
    keywords: 'Css‡',
    date: '2020-01-22T15:08:42.678Z',
  },
  {
    uuid: 'noticon_wfykhuhsg5hfddh6ok0o',
    title: 'MariaDB',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1579928281/noticon/wfykhuhsg5hfddh6ok0o.png',
    keywords: 'DB‡DB',
    date: '2020-01-25T04:58:10.222Z',
  },
  {
    uuid: 'noticon_hevksxkqrecwhxtragif',
    title: 'Task',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1580049264/noticon/hevksxkqrecwhxtragif.png',
    keywords: 'Task‡List',
    date: '2020-01-26T14:34:39.130Z',
  },
  {
    uuid: 'noticon_mpvpeudrt9udql1rtjav',
    title: 'Clipboard',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1580049395/noticon/mpvpeudrt9udql1rtjav.jpg',
    keywords: 'Task‡Clipboard',
    date: '2020-01-26T14:36:42.854Z',
  },
  {
    uuid: 'noticon_vqwymsr14rwhe7w8xl9e',
    title: 'Clipboard',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1580049443/noticon/vqwymsr14rwhe7w8xl9e.png',
    keywords: 'board‡task',
    date: '2020-01-26T14:37:30.608Z',
  },
  {
    uuid: 'noticon_jl0fn7miioudlveoeuyz',
    title: '레드벨벳',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1580129690/noticon/jl0fn7miioudlveoeuyz.png',
    keywords: '‡',
    date: '2020-01-27T12:54:54.868Z',
  },
  {
    uuid: 'noticon_c4bizvt5o4orekk8x6sf',
    title: 'wireshark',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1580177586/noticon/c4bizvt5o4orekk8x6sf.png',
    keywords: '‡',
    date: '2020-01-28T02:13:11.213Z',
  },
  {
    uuid: 'noticon_weotflnghf0tcqfshaay',
    title: 'telegram',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1580177662/noticon/weotflnghf0tcqfshaay.png',
    keywords: '‡',
    date: '2020-01-28T02:14:25.366Z',
  },
  {
    uuid: 'noticon_plcc4vvxjgutetevwklc',
    title: 'hugo',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1580177711/noticon/plcc4vvxjgutetevwklc.svg',
    keywords: '‡',
    date: '2020-01-28T02:15:30.672Z',
  },
  {
    uuid: 'noticon_nqfurwl4xyivuuvpuv7n',
    title: 'ubuntu',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1580178014/noticon/nqfurwl4xyivuuvpuv7n.jpg',
    keywords: '‡',
    date: '2020-01-28T02:20:17.931Z',
  },
  {
    uuid: 'noticon_ammun7easzpwhhywejaj',
    title: 'redis',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1580178092/noticon/ammun7easzpwhhywejaj.png',
    keywords: '‡',
    date: '2020-01-28T02:21:34.839Z',
  },
  {
    uuid: 'noticon_vdw0bnagetaq3ty93b8i',
    title: 'Korea',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1580290420/noticon/vdw0bnagetaq3ty93b8i.png',
    keywords: '‡',
    date: '2020-01-29T09:33:44.241Z',
  },
  {
    uuid: 'noticon_exuzcqnfutlnykochjjz',
    title: '라인 LINE',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1580366949/noticon/exuzcqnfutlnykochjjz.png',
    keywords: '#LINE #메신저 ‡',
    date: '2020-01-30T06:49:31.849Z',
  },
  {
    uuid: 'noticon_c8w99ajmgs3mm6vbyerv',
    title: 'nomad coder',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1580378654/noticon/c8w99ajmgs3mm6vbyerv.png',
    keywords: '코딩‡노마드코더',
    date: '2020-01-30T10:04:27.360Z',
  },
  {
    uuid: 'noticon_kfej6dhpl9sedtz1eblz',
    title: 'http definitiv guide',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1580431564/noticon/kfej6dhpl9sedtz1eblz.jpg',
    keywords: 'http‡book',
    date: '2020-01-31T00:47:18.017Z',
  },
  {
    uuid: 'noticon_tuxvcxofx5rapzfawjay',
    title: 'fastcampus',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1580467673/noticon/tuxvcxofx5rapzfawjay.png',
    keywords: '‡',
    date: '2020-01-31T10:48:01.394Z',
  },
  {
    uuid: 'noticon_abi2ckq8gvbymtgimncu',
    title: 'warning',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1580549450/noticon/abi2ckq8gvbymtgimncu.png',
    keywords: '‡',
    date: '2020-02-01T09:30:54.988Z',
  },
  {
    uuid: 'noticon_ryiqlfznzllolzu22yxh',
    title: 'idea',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1580549498/noticon/ryiqlfznzllolzu22yxh.png',
    keywords: '‡',
    date: '2020-02-01T09:31:46.163Z',
  },
  {
    uuid: 'noticon_p2otvupibfqnfyssottp',
    title: 'key',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1580549644/noticon/p2otvupibfqnfyssottp.png',
    keywords: '‡',
    date: '2020-02-01T09:34:06.674Z',
  },
  {
    uuid: 'noticon_nfjwhneuqfgeotseax4q',
    title: 'alert',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1580549700/noticon/nfjwhneuqfgeotseax4q.png',
    keywords: '‡',
    date: '2020-02-01T09:35:08.439Z',
  },
  {
    uuid: 'noticon_hqsdhg3rhwp1ta6hdddo',
    title: 'protection',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1580549890/noticon/hqsdhg3rhwp1ta6hdddo.png',
    keywords: '‡',
    date: '2020-02-01T09:38:13.264Z',
  },
  {
    uuid: 'noticon_wwj8i1keg5iciljydabo',
    title: 'male',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1580549915/noticon/wwj8i1keg5iciljydabo.png',
    keywords: '‡',
    date: '2020-02-01T09:38:38.340Z',
  },
  {
    uuid: 'noticon_qhb7ixfuird1wpawhbdi',
    title: 'female',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1580549922/noticon/qhb7ixfuird1wpawhbdi.png',
    keywords: '‡',
    date: '2020-02-01T09:38:49.513Z',
  },
  {
    uuid: 'noticon_mw8oftbmpil0ekxdtvl1',
    title: 'tea',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1580550105/noticon/mw8oftbmpil0ekxdtvl1.png',
    keywords: '‡',
    date: '2020-02-01T09:41:48.075Z',
  },
  {
    uuid: 'noticon_cgkjergoxanrhlzygftf',
    title: 'CLASS101',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1580617963/noticon/cgkjergoxanrhlzygftf.png',
    keywords: '‡',
    date: '2020-02-02T04:32:50.139Z',
  },
  {
    uuid: 'noticon_ginkuzsajbltahqmd45f',
    title: 'bert',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1580644310/noticon/ginkuzsajbltahqmd45f.jpg',
    keywords: 'nlp‡',
    date: '2020-02-02T11:51:57.431Z',
  },
  {
    uuid: 'noticon_mkgg8pvtcifnagvwhjtt',
    title: 'phython',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1580829175/noticon/mkgg8pvtcifnagvwhjtt.svg',
    keywords: 'phython‡',
    date: '2020-02-04T15:13:15.455Z',
  },
  {
    uuid: 'noticon_clgq2jt8icsmantpn4hw',
    title: 'Joins',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1580864645/noticon/clgq2jt8icsmantpn4hw.png',
    keywords: 'joongang‡joins',
    date: '2020-02-05T01:04:19.688Z',
  },
  {
    uuid: 'noticon_omqhs3lrjvhnkyrb6wta',
    title: 'Tableau',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1580887268/noticon/omqhs3lrjvhnkyrb6wta.jpg',
    keywords: '‡',
    date: '2020-02-05T07:21:19.718Z',
  },
  {
    uuid: 'noticon_azlhetud73we7xnhdkws',
    title: 'Tableau',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1580887374/noticon/azlhetud73we7xnhdkws.png',
    keywords: 'Tableau‡',
    date: '2020-02-05T07:23:03.743Z',
  },
  {
    uuid: 'noticon_owcvyw4dggdylen2ql5w',
    title: 'dancing parrot',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1580888106/noticon/owcvyw4dggdylen2ql5w.gif',
    keywords: '‡',
    date: '2020-02-05T07:35:18.933Z',
  },
  {
    uuid: 'noticon_gpl0d7gxwmvlpafoc24j',
    title: 'soom',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1580903189/noticon/gpl0d7gxwmvlpafoc24j.png',
    keywords: '‡',
    date: '2020-02-05T11:46:37.118Z',
  },
  {
    uuid: 'noticon_q9ebidinyxdsapd0o2w0',
    title: 'css',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1580959553/noticon/q9ebidinyxdsapd0o2w0.png',
    keywords: 'css‡',
    date: '2020-02-06T03:25:58.833Z',
  },
  {
    uuid: 'noticon_zyjtzn4licmgni1xut4g',
    title: 'cloudinary',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1581265714/noticon/zyjtzn4licmgni1xut4g.png',
    keywords: 'image‡storage',
    date: '2020-02-09T16:28:49.622Z',
  },
  {
    uuid: 'noticon_hcgcw7wa0xgmcxgfdqqf',
    title: 'Keststone Marketing ',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1581303985/noticon/hcgcw7wa0xgmcxgfdqqf.png',
    keywords: '‡',
    date: '2020-02-10T03:06:48.481Z',
  },
  {
    uuid: 'noticon_ooxbebivxcseent6zu40',
    title: 'Keystone',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1581305329/noticon/ooxbebivxcseent6zu40.png',
    keywords: '‡',
    date: '2020-02-10T03:29:06.521Z',
  },
  {
    uuid: 'noticon_fl758gkm1vpazb3lf0ch',
    title: 'keystone',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1581305850/noticon/fl758gkm1vpazb3lf0ch.png',
    keywords: '‡',
    date: '2020-02-10T03:37:46.511Z',
  },
  {
    uuid: 'noticon_czw8ywjmaqtfjetranvh',
    title: '하나은행',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1581318865/noticon/czw8ywjmaqtfjetranvh.png',
    keywords: 'HANA‡',
    date: '2020-02-10T07:14:35.420Z',
  },
  {
    uuid: 'noticon_gqjhvt3mcotybo7ofkgk',
    title: 'cordberg',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1581337307/noticon/gqjhvt3mcotybo7ofkgk.png',
    keywords: '‡',
    date: '2020-02-10T12:21:57.981Z',
  },
  {
    uuid: 'noticon_hbwtrewlv2xxxyqe3qpm',
    title: 'velog',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1581345292/noticon/hbwtrewlv2xxxyqe3qpm.png',
    keywords: 'velopert‡',
    date: '2020-02-10T14:35:05.182Z',
  },
  {
    uuid: 'noticon_k1rxcpkbwwsym2voudr6',
    title: 'hivelab',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1581404135/noticon/k1rxcpkbwwsym2voudr6.gif',
    keywords: 'hivelab‡',
    date: '2020-02-11T06:55:41.351Z',
  },
  {
    uuid: 'noticon_eay2aw854eml4w5vfvqp',
    title: 'p',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1581419987/noticon/eay2aw854eml4w5vfvqp.gif',
    keywords: 'p‡',
    date: '2020-02-11T11:19:52.066Z',
  },
  {
    uuid: 'noticon_pr3ptmevytis0jljtusu',
    title: 'Lisp',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1581459381/noticon/pr3ptmevytis0jljtusu.png',
    keywords: 'Lisp‡programming',
    date: '2020-02-11T22:16:51.022Z',
  },
  {
    uuid: 'noticon_teg1ooxzhglorh6rk9hs',
    title: 'check',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1581488166/noticon/teg1ooxzhglorh6rk9hs.png',
    keywords: 'check‡',
    date: '2020-02-12T06:16:17.583Z',
  },
  {
    uuid: 'noticon_kx0su51nl94d91jnghbz',
    title: '한양대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1581653050/noticon/kx0su51nl94d91jnghbz.png',
    keywords: '한양‡한양대',
    date: '2020-02-14T04:04:19.549Z',
  },
  {
    uuid: 'noticon_yfii7qiuqkx2tlhyhkid',
    title: 'CMYK',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1581654455/noticon/yfii7qiuqkx2tlhyhkid.png',
    keywords: 'CMYK‡color',
    date: '2020-02-14T04:27:45.758Z',
  },
  {
    uuid: 'noticon_nfwk7fgzi49xgturazx1',
    title: 'hive',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1581749801/noticon/nfwk7fgzi49xgturazx1.svg',
    keywords: '‡',
    date: '2020-02-15T06:56:48.839Z',
  },
  {
    uuid: 'noticon_o4czgf9qg6kzdn2b815e',
    title: 'kibana',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1581749871/noticon/o4czgf9qg6kzdn2b815e.png',
    keywords: '‡',
    date: '2020-02-15T06:57:56.915Z',
  },
  {
    uuid: 'noticon_q7kub7xnmcefvs9toxsf',
    title: 'kibana',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1581749887/noticon/q7kub7xnmcefvs9toxsf.png',
    keywords: '‡',
    date: '2020-02-15T06:58:11.738Z',
  },
  {
    uuid: 'noticon_g2czlrcmqyb2wrqqkkkh',
    title: 'archlinux',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1581824075/noticon/g2czlrcmqyb2wrqqkkkh.png',
    keywords: '‡',
    date: '2020-02-16T03:34:40.105Z',
  },
  {
    uuid: 'noticon_a5wsihnorfumuzu7ewdd',
    title: 'ubuntu',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1581824154/noticon/a5wsihnorfumuzu7ewdd.png',
    keywords: '‡',
    date: '2020-02-16T03:36:00.115Z',
  },
  {
    uuid: 'noticon_kykq60lrp8jtd3grdy3q',
    title: 'terminal',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1581824329/noticon/kykq60lrp8jtd3grdy3q.png',
    keywords: '‡',
    date: '2020-02-16T03:38:53.436Z',
  },
  {
    uuid: 'noticon_ydopzazjekijyvd5cy0j',
    title: 'tensorflow',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1581824440/noticon/ydopzazjekijyvd5cy0j.png',
    keywords: '‡',
    date: '2020-02-16T03:40:45.192Z',
  },
  {
    uuid: 'noticon_zvfgxsartgezncbtcf6o',
    title: 'hadoop',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1581824618/noticon/zvfgxsartgezncbtcf6o.png',
    keywords: '‡',
    date: '2020-02-16T03:43:42.379Z',
  },
  {
    uuid: 'noticon_hmvqgvug8zl7etwmabuq',
    title: 'MongoDB',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1581824691/noticon/hmvqgvug8zl7etwmabuq.png',
    keywords: '‡',
    date: '2020-02-16T03:44:55.878Z',
  },
  {
    uuid: 'noticon_lljsqurnxxbcvcxza24u',
    title: 'Anglur',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1581824718/noticon/lljsqurnxxbcvcxza24u.png',
    keywords: '‡',
    date: '2020-02-16T03:45:22.918Z',
  },
  {
    uuid: 'noticon_mt53yyisrysibzbvlyim',
    title: 'BlockChain',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1581993743/noticon/mt53yyisrysibzbvlyim.jpg',
    keywords: 'blockchain‡',
    date: '2020-02-18T02:42:54.225Z',
  },
  {
    uuid: 'noticon_uscyqqcug3tehivr6smd',
    title: 'momguide',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1581995278/noticon/uscyqqcug3tehivr6smd.png',
    keywords: 'momguide‡infogreen',
    date: '2020-02-18T03:08:11.017Z',
  },
  {
    uuid: 'noticon_jcyhxcpe0wjexmkkckig',
    title: '스프린트',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1582078884/noticon/jcyhxcpe0wjexmkkckig.png',
    keywords: 'sprint‡',
    date: '2020-02-19T02:21:38.980Z',
  },
  {
    uuid: 'noticon_ytsmbvhiv4ftlvp10pw4',
    title: 'lock',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1582091220/noticon/ytsmbvhiv4ftlvp10pw4.png',
    keywords: '‡',
    date: '2020-02-19T05:47:03.744Z',
  },
  {
    uuid: 'noticon_uymutrhcpsdhm8p6faps',
    title: 'ambari',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1582101422/noticon/uymutrhcpsdhm8p6faps.png',
    keywords: '‡',
    date: '2020-02-19T08:37:06.113Z',
  },
  {
    uuid: 'noticon_jwcdtaal7kff0yhbr3tf',
    title: 'nhn',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1582252030/noticon/jwcdtaal7kff0yhbr3tf.png',
    keywords: 'nhn‡',
    date: '2020-02-21T02:27:21.380Z',
  },
  {
    uuid: 'noticon_a4wi9hbkwp31pyesgqcf',
    title: 'nhn dark',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1582252848/noticon/a4wi9hbkwp31pyesgqcf.png',
    keywords: 'nhn‡',
    date: '2020-02-21T02:40:53.515Z',
  },
  {
    uuid: 'noticon_tiwtmz3y7yu2gc9y76rh',
    title: '포스타입',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1582521644/noticon/tiwtmz3y7yu2gc9y76rh.png',
    keywords: '‡',
    date: '2020-02-24T05:20:50.428Z',
  },
  {
    uuid: 'noticon_if242tp5jntgxr3xctyl',
    title: '모트모트',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1582540458/noticon/if242tp5jntgxr3xctyl.png',
    keywords: '‡',
    date: '2020-02-24T10:34:25.880Z',
  },
  {
    uuid: 'noticon_cczbpahp5od6voerbvwr',
    title: 'Swift',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1582581609/noticon/cczbpahp5od6voerbvwr.svg',
    keywords: 'Swift‡language',
    date: '2020-02-24T22:00:36.698Z',
  },
  {
    uuid: 'noticon_qlhypk70sylyuadvnlnj',
    title: 'Windows 10',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1582583152/noticon/qlhypk70sylyuadvnlnj.png',
    keywords: 'windows‡microsoft',
    date: '2020-02-24T22:26:05.261Z',
  },
  {
    uuid: 'noticon_zxbbvhiayg83iyd3gb4i',
    title: 'emacs',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1582583306/noticon/zxbbvhiayg83iyd3gb4i.jpg',
    keywords: 'editor‡',
    date: '2020-02-24T22:28:38.092Z',
  },
  {
    uuid: 'noticon_s3qeykemyzivzthzztuq',
    title: 'pharo',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1582583407/noticon/s3qeykemyzivzthzztuq.svg',
    keywords: 'Smalltalk‡Squeak',
    date: '2020-02-24T22:30:28.046Z',
  },
  {
    uuid: 'noticon_bovndos01539shne93ko',
    title: 'tortoise SVN',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1582700209/noticon/bovndos01539shne93ko.png',
    keywords: '‡',
    date: '2020-02-26T06:56:57.536Z',
  },
  {
    uuid: 'noticon_vo9gok2swrcu16qxt84f',
    title: 'gulp',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1582700237/noticon/vo9gok2swrcu16qxt84f.png',
    keywords: '‡',
    date: '2020-02-26T06:57:23.297Z',
  },
  {
    uuid: 'noticon_uajhzprsxqalydpkwuyu',
    title: '취향관',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1582787356/noticon/uajhzprsxqalydpkwuyu.png',
    keywords: '‡',
    date: '2020-02-27T07:09:21.558Z',
  },
  {
    uuid: 'noticon_w25bvhlohacffcyi6qbi',
    title: '101',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1582871708/noticon/w25bvhlohacffcyi6qbi.png',
    keywords: '‡',
    date: '2020-02-28T06:35:17.187Z',
  },
  {
    uuid: 'noticon_fofyteh6mvtjkhb5dds3',
    title: '101(2)',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1582871788/noticon/fofyteh6mvtjkhb5dds3.png',
    keywords: '‡',
    date: '2020-02-28T06:36:31.963Z',
  },
  {
    uuid: 'noticon_j2ledmsepsuskpqat2vi',
    title: '청춘여가연구소',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1582874486/noticon/j2ledmsepsuskpqat2vi.png',
    keywords: '‡',
    date: '2020-02-28T07:21:33.062Z',
  },
  {
    uuid: 'noticon_hf1izazfdlmeyo1ropm8',
    title: 'VITA',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1582963655/noticon/hf1izazfdlmeyo1ropm8.png',
    keywords: '‡',
    date: '2020-02-29T08:07:46.228Z',
  },
  {
    uuid: 'noticon_dri6ny863om8qxtics4i',
    title: 'spring boot',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583139874/noticon/dri6ny863om8qxtics4i.png',
    keywords: '스프링‡스프링부트',
    date: '2020-03-02T09:04:54.679Z',
  },
  {
    uuid: 'noticon_vtzecmjzn39cifnjtonx',
    title: 'spring boot',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583139980/noticon/vtzecmjzn39cifnjtonx.png',
    keywords: '스프링‡스프링부트',
    date: '2020-03-02T09:06:32.013Z',
  },
  {
    uuid: 'noticon_ofhx23nyass59kkwt8bx',
    title: 'database',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583166539/noticon/ofhx23nyass59kkwt8bx.png',
    keywords: 'db‡데이터베이스',
    date: '2020-03-02T16:29:08.932Z',
  },
  {
    uuid: 'noticon_fr2a8nlqtmwrdzkndu0s',
    title: 'postgresql',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583166645/noticon/fr2a8nlqtmwrdzkndu0s.jpg',
    keywords: 'postgre‡',
    date: '2020-03-02T16:31:11.976Z',
  },
  {
    uuid: 'noticon_wmdxye5yts7ncuiyb09e',
    title: 'postgresql',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583166732/noticon/wmdxye5yts7ncuiyb09e.png',
    keywords: 'postgre‡',
    date: '2020-03-02T16:33:09.639Z',
  },
  {
    uuid: 'noticon_pwp4biueacrh7hxewc9b',
    title: 'notebook',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583534504/noticon/pwp4biueacrh7hxewc9b.jpg',
    keywords: 'computer‡컴퓨터',
    date: '2020-03-06T22:42:05.423Z',
  },
  {
    uuid: 'noticon_dxtodfdur10xqbf1mcni',
    title: 'desktop',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583534572/noticon/dxtodfdur10xqbf1mcni.png',
    keywords: 'computer‡ 컴퓨터',
    date: '2020-03-06T22:43:01.593Z',
  },
  {
    uuid: 'noticon_ziwcefpsp2qfgwfesabn',
    title: 'white desktop',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583534678/noticon/ziwcefpsp2qfgwfesabn.jpg',
    keywords: 'computer‡컴퓨터',
    date: '2020-03-06T22:44:51.366Z',
  },
  {
    uuid: 'noticon_jgmwrzfma39pdtdo48eu',
    title: '이글루',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583534805/noticon/jgmwrzfma39pdtdo48eu.jpg',
    keywords: '얼음집‡igloo',
    date: '2020-03-06T22:47:40.289Z',
  },
  {
    uuid: 'noticon_stkbmrgmjfmeelobmcix',
    title: 'ms dos',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583534950/noticon/stkbmrgmjfmeelobmcix.png',
    keywords: '도스‡',
    date: '2020-03-06T22:49:19.142Z',
  },
  {
    uuid: 'noticon_u9alabw90ygcdccebxyj',
    title: '우리은행',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583663570/noticon/u9alabw90ygcdccebxyj.svg',
    keywords: '뱅킹‡',
    date: '2020-03-08T10:33:34.591Z',
  },
  {
    uuid: 'noticon_nrpnrd4bqihwprn9jvjd',
    title: '하나은행',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583663656/noticon/nrpnrd4bqihwprn9jvjd.svg',
    keywords: '뱅킹‡',
    date: '2020-03-08T10:34:28.354Z',
  },
  {
    uuid: 'noticon_yo2vrqr4gh2uvkk5phlk',
    title: '국민은행',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583663966/noticon/yo2vrqr4gh2uvkk5phlk.svg',
    keywords: '뱅킹‡',
    date: '2020-03-08T10:40:22.925Z',
  },
  {
    uuid: 'noticon_h3snynunisupwvhimu0i',
    title: '기업은행',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583664076/noticon/h3snynunisupwvhimu0i.svg',
    keywords: '뱅킹‡',
    date: '2020-03-08T12:01:29.984Z',
  },
  {
    uuid: 'noticon_vtfpriyr6xv1cltfszen',
    title: '신한은행',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583668924/noticon/vtfpriyr6xv1cltfszen.svg',
    keywords: '뱅킹‡',
    date: '2020-03-08T12:02:38.980Z',
  },
  {
    uuid: 'noticon_b9lcv7yviegcgbxpveku',
    title: '카카오뱅크',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583669430/noticon/b9lcv7yviegcgbxpveku.svg',
    keywords: '은행‡',
    date: '2020-03-08T12:10:37.339Z',
  },
  {
    uuid: 'noticon_g3dy8loyqgc1mq0l3dsj',
    title: '한화투자증권',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583669476/noticon/g3dy8loyqgc1mq0l3dsj.svg',
    keywords: '‡',
    date: '2020-03-08T12:11:30.874Z',
  },
  {
    uuid: 'noticon_ob39twivar4osxwivlyo',
    title: '유진투자증권',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583669676/noticon/ob39twivar4osxwivlyo.svg',
    keywords: '‡',
    date: '2020-03-08T12:14:41.889Z',
  },
  {
    uuid: 'noticon_zyqownbtnrw3pypmc9gn',
    title: '한국투자증권',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583669696/noticon/zyqownbtnrw3pypmc9gn.svg',
    keywords: '‡',
    date: '2020-03-08T12:15:02.791Z',
  },
  {
    uuid: 'noticon_pezdbpr585248nfoqfjz',
    title: '삼성증권',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583669714/noticon/pezdbpr585248nfoqfjz.svg',
    keywords: '‡',
    date: '2020-03-08T12:15:22.630Z',
  },
  {
    uuid: 'noticon_soqa2h0wm4i5ddbzongc',
    title: '정부',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583669900/noticon/soqa2h0wm4i5ddbzongc.svg',
    keywords: '‡',
    date: '2020-03-08T12:18:27.154Z',
  },
  {
    uuid: 'noticon_hk0m6jgahv6wjzu7jqnu',
    title: '정부 (하양 제거)',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583669974/noticon/hk0m6jgahv6wjzu7jqnu.svg',
    keywords: '‡',
    date: '2020-03-08T12:19:48.592Z',
  },
  {
    uuid: 'noticon_fojlvunhpwcxxmolu8dt',
    title: 'Microsoft Teams',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583670056/noticon/fojlvunhpwcxxmolu8dt.svg',
    keywords: '‡',
    date: '2020-03-08T12:21:04.522Z',
  },
  {
    uuid: 'noticon_i7g3cahk2co8gchwgezx',
    title: '카카오톡',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583670479/noticon/i7g3cahk2co8gchwgezx.svg',
    keywords: '‡',
    date: '2020-03-08T12:28:20.153Z',
  },
  {
    uuid: 'noticon_xzi0af1nziufq16byx9m',
    title: '카카오톡 (배경제거)',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583670517/noticon/xzi0af1nziufq16byx9m.svg',
    keywords: '‡',
    date: '2020-03-08T12:28:50.047Z',
  },
  {
    uuid: 'noticon_e3x7qpundpw4brbujnee',
    title: '서강대',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583670751/noticon/e3x7qpundpw4brbujnee.svg',
    keywords: '대학교‡',
    date: '2020-03-08T12:32:38.931Z',
  },
  {
    uuid: 'noticon_vt7lpzn0dgy6ppbqpa4x',
    title: '서울대',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583670797/noticon/vt7lpzn0dgy6ppbqpa4x.svg',
    keywords: '대학교‡',
    date: '2020-03-08T12:33:22.499Z',
  },
  {
    uuid: 'noticon_sxpiod8xunwsif7kw9y6',
    title: '연세대',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583670809/noticon/sxpiod8xunwsif7kw9y6.svg',
    keywords: '대학교‡',
    date: '2020-03-08T12:33:42.295Z',
  },
  {
    uuid: 'noticon_upr1icteejeky0tbqujs',
    title: '연세대(배경제거)',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583670865/noticon/upr1icteejeky0tbqujs.svg',
    keywords: '대학교‡',
    date: '2020-03-08T12:34:34.508Z',
  },
  {
    uuid: 'noticon_lw8j6oiu99jgfzpc7bx9',
    title: '성균관대',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583670883/noticon/lw8j6oiu99jgfzpc7bx9.svg',
    keywords: '대학교‡',
    date: '2020-03-08T12:34:53.434Z',
  },
  {
    uuid: 'noticon_ddtfb0obc3bak9zt2sgk',
    title: '성균관대(배경제거)',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583670923/noticon/ddtfb0obc3bak9zt2sgk.svg',
    keywords: '대학교‡',
    date: '2020-03-08T12:35:31.799Z',
  },
  {
    uuid: 'noticon_dzvbrysvij1x5bmummp8',
    title: '토스',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583671308/noticon/dzvbrysvij1x5bmummp8.png',
    keywords: '‡',
    date: '2020-03-08T12:41:55.485Z',
  },
  {
    uuid: 'noticon_edwubuv9ggfybjhihk4c',
    title: '뱅크샐러드',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583671337/noticon/edwubuv9ggfybjhihk4c.png',
    keywords: '‡',
    date: '2020-03-08T12:42:23.020Z',
  },
  {
    uuid: 'noticon_p9fqeccrkcorqj7h3enf',
    title: '카카오페이',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583672582/noticon/p9fqeccrkcorqj7h3enf.svg',
    keywords: '‡',
    date: '2020-03-08T13:03:06.745Z',
  },
  {
    uuid: 'noticon_fjkz0z7rsvekbrocaffp',
    title: '네이버페이',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583672594/noticon/fjkz0z7rsvekbrocaffp.svg',
    keywords: '‡',
    date: '2020-03-08T13:03:19.583Z',
  },
  {
    uuid: 'noticon_zx2ynqjxvrvige9pfsso',
    title: '네이버',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583672606/noticon/zx2ynqjxvrvige9pfsso.svg',
    keywords: '‡',
    date: '2020-03-08T13:03:34.506Z',
  },
  {
    uuid: 'noticon_sx3b1zf2khkqg0yr9utb',
    title: '페이코',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583672647/noticon/sx3b1zf2khkqg0yr9utb.png',
    keywords: '‡',
    date: '2020-03-08T13:04:11.094Z',
  },
  {
    uuid: 'noticon_no8r5n2cuwvpcudngwue',
    title: '카카오페이',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583672787/noticon/no8r5n2cuwvpcudngwue.svg',
    keywords: '‡',
    date: '2020-03-08T13:06:41.625Z',
  },
  {
    uuid: 'noticon_gg1qwbyabvt8zyq2xvfn',
    title: '카카오 T',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583672861/noticon/gg1qwbyabvt8zyq2xvfn.png',
    keywords: '‡',
    date: '2020-03-08T13:07:46.169Z',
  },
  {
    uuid: 'noticon_heggmhku3r2gmlpm28vo',
    title: '사이다뱅크',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583672918/noticon/heggmhku3r2gmlpm28vo.png',
    keywords: '은행‡',
    date: '2020-03-08T13:08:45.546Z',
  },
  {
    uuid: 'noticon_tzyetmfvl1trxqpdgv8u',
    title: '웰텀디지털뱅크',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583672966/noticon/tzyetmfvl1trxqpdgv8u.png',
    keywords: '은행‡',
    date: '2020-03-08T13:09:36.126Z',
  },
  {
    uuid: 'noticon_zrrtci7aocltpwxx7izv',
    title: '금융결제원',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583673977/noticon/zrrtci7aocltpwxx7izv.svg',
    keywords: '‡',
    date: '2020-03-08T13:26:22.640Z',
  },
  {
    uuid: 'noticon_wyy00s1rkkgcuzfiwbgu',
    title: '금융감독원',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583674134/noticon/wyy00s1rkkgcuzfiwbgu.svg',
    keywords: '‡',
    date: '2020-03-08T13:28:59.224Z',
  },
  {
    uuid: 'noticon_wvmxzg6j6cvypg4elerr',
    title: '제로페이',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583675616/noticon/wvmxzg6j6cvypg4elerr.png',
    keywords: '‡',
    date: '2020-03-08T13:53:41.509Z',
  },
  {
    uuid: 'noticon_fwj4wkthsvx3ogjpofg6',
    title: 'BC카드',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583676718/noticon/fwj4wkthsvx3ogjpofg6.svg',
    keywords: '‡',
    date: '2020-03-08T14:12:04.518Z',
  },
  {
    uuid: 'noticon_bjxanhypk16mzpxgf00e',
    title: '전북은행',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583740373/noticon/bjxanhypk16mzpxgf00e.svg',
    keywords: '뱅킹‡',
    date: '2020-03-09T07:53:32.840Z',
  },
  {
    uuid: 'noticon_sgvlgd0mn9li1p7rfywj',
    title: '농협',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583740441/noticon/sgvlgd0mn9li1p7rfywj.svg',
    keywords: '은행‡뱅킹',
    date: '2020-03-09T07:54:19.722Z',
  },
  {
    uuid: 'noticon_lotenp4apon8dsqzpwsf',
    title: '수협',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583740688/noticon/lotenp4apon8dsqzpwsf.svg',
    keywords: '은행‡뱅킹',
    date: '2020-03-09T07:58:15.343Z',
  },
  {
    uuid: 'noticon_lgysnebdvns6nveyktgp',
    title: 'SC제일은행',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583740743/noticon/lgysnebdvns6nveyktgp.svg',
    keywords: '뱅킹‡',
    date: '2020-03-09T07:59:40.594Z',
  },
  {
    uuid: 'noticon_uwjbxxvcjnq12jf4dzbn',
    title: '저축은행',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583740951/noticon/uwjbxxvcjnq12jf4dzbn.png',
    keywords: '뱅킹‡',
    date: '2020-03-09T08:02:36.215Z',
  },
  {
    uuid: 'noticon_jitzvoblujqpfbetghw3',
    title: '저축은행',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583741117/noticon/jitzvoblujqpfbetghw3.svg',
    keywords: '뱅킹‡',
    date: '2020-03-09T08:05:25.840Z',
  },
  {
    uuid: 'noticon_re8vzmtwkww5ixh2lppq',
    title: '저축은행',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583741824/noticon/re8vzmtwkww5ixh2lppq.svg',
    keywords: '‡',
    date: '2020-03-09T08:17:08.427Z',
  },
  {
    uuid: 'noticon_gzhdyboftnln8m5w6jyg',
    title: '수협',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583741836/noticon/gzhdyboftnln8m5w6jyg.svg',
    keywords: '은행‡뱅킹',
    date: '2020-03-09T08:17:25.163Z',
  },
  {
    uuid: 'noticon_o71c31vqh722w88x6wdl',
    title: 'SBI저축은행',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583742110/noticon/o71c31vqh722w88x6wdl.svg',
    keywords: '뱅킹‡',
    date: '2020-03-09T08:21:57.702Z',
  },
  {
    uuid: 'noticon_pr2ndgarrysyh8iteplp',
    title: 'braille',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583755541/noticon/pr2ndgarrysyh8iteplp.png',
    keywords: '점자‡시각장애',
    date: '2020-03-09T12:05:47.464Z',
  },
  {
    uuid: 'noticon_xpfghu5forw2bqtgv9bn',
    title: '네이버페이',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583893958/noticon/xpfghu5forw2bqtgv9bn.svg',
    keywords: '‡',
    date: '2020-03-11T02:32:46.922Z',
  },
  {
    uuid: 'noticon_a6zwzjseisnmbckgoj5d',
    title: '너굴',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583915124/noticon/a6zwzjseisnmbckgoj5d.png',
    keywords: '‡',
    date: '2020-03-11T08:25:29.196Z',
  },
  {
    uuid: 'noticon_agqallrjk0lxvfpz29yw',
    title: '나뭇잎',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583915283/noticon/agqallrjk0lxvfpz29yw.png',
    keywords: '‡',
    date: '2020-03-11T08:28:08.548Z',
  },
  {
    uuid: 'noticon_be8ziqhm46pgel9i2l05',
    title: '나뭇잎',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583915938/noticon/be8ziqhm46pgel9i2l05.png',
    keywords: '‡',
    date: '2020-03-11T08:39:01.900Z',
  },
  {
    uuid: 'noticon_vgloppysbkkpjjezfwvf',
    title: '나뭇잎',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583917420/noticon/vgloppysbkkpjjezfwvf.png',
    keywords: '‡',
    date: '2020-03-11T09:03:43.740Z',
  },
  {
    uuid: 'noticon_jlq8ykukyautp5ursenk',
    title: '나뭇잎',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583917599/noticon/jlq8ykukyautp5ursenk.png',
    keywords: '‡',
    date: '2020-03-11T09:06:44.401Z',
  },
  {
    uuid: 'noticon_fhcjvr0cgtnd7lumjyfj',
    title: '뷁',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583956153/noticon/fhcjvr0cgtnd7lumjyfj.jpg',
    keywords: '한글‡외계어',
    date: '2020-03-11T19:49:42.235Z',
  },
  {
    uuid: 'noticon_ecgjgzcqaxpvq1gy9aay',
    title: '선문대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1584013016/noticon/ecgjgzcqaxpvq1gy9aay.png',
    keywords: '선문대학교‡선문대',
    date: '2020-03-12T11:37:12.055Z',
  },
  {
    uuid: 'noticon_obsvjytzcnx5f1zmo9fz',
    title: 'pytorch',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1584079636/noticon/obsvjytzcnx5f1zmo9fz.png',
    keywords: 'torch‡pyton',
    date: '2020-03-13T06:07:34.511Z',
  },
  {
    uuid: 'noticon_ukaqxsjnw3sfpd5jg2ua',
    title: 'ㅂㄹ',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1584163462/noticon/ukaqxsjnw3sfpd5jg2ua.png',
    keywords: '‡',
    date: '2020-03-14T05:24:28.206Z',
  },
  {
    uuid: 'noticon_gciezoqbaqcshmvopctx',
    title: '빈',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1584167226/noticon/gciezoqbaqcshmvopctx.png',
    keywords: '‡',
    date: '2020-03-14T06:27:09.550Z',
  },
  {
    uuid: 'noticon_jazwysugtg8w5mhmf44j',
    title: '키움증권',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1584281638/noticon/jazwysugtg8w5mhmf44j.png',
    keywords: '‡',
    date: '2020-03-15T14:14:02.655Z',
  },
  {
    uuid: 'noticon_dqxtri9v3jpfmggoq9xk',
    title: '데이터에듀',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1584330784/noticon/dqxtri9v3jpfmggoq9xk.png',
    keywords: '‡',
    date: '2020-03-16T03:53:11.793Z',
  },
  {
    uuid: 'noticon_o3xgactph0wmbngygnkr',
    title: 'diary',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1584679774/noticon/o3xgactph0wmbngygnkr.png',
    keywords: '‡',
    date: '2020-03-20T04:49:46.876Z',
  },
  {
    uuid: 'noticon_wam6geubk8z5ghau36uy',
    title: 'Rhino3d',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1584690513/noticon/wam6geubk8z5ghau36uy.png',
    keywords: '3d‡design',
    date: '2020-03-20T07:48:38.026Z',
  },
  {
    uuid: 'noticon_oqyczyxx18sqcih2zgmj',
    title: 'xd',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1584700823/noticon/oqyczyxx18sqcih2zgmj.png',
    keywords: 'xd‡',
    date: '2020-03-20T10:40:36.550Z',
  },
  {
    uuid: 'noticon_aynoxveg4ayfonkbiyqw',
    title: 'ionic',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1584716629/noticon/aynoxveg4ayfonkbiyqw.png',
    keywords: '‡',
    date: '2020-03-20T15:03:57.877Z',
  },
  {
    uuid: 'noticon_ghfqqeyaqskfur1o28vw',
    title: '페이북',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1584759431/noticon/ghfqqeyaqskfur1o28vw.png',
    keywords: '‡',
    date: '2020-03-21T02:57:15.186Z',
  },
  {
    uuid: 'noticon_aesdunyhvkxpvbomqwjm',
    title: '프리버드',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1584795927/noticon/aesdunyhvkxpvbomqwjm.png',
    keywords: '‡',
    date: '2020-03-21T13:05:37.247Z',
  },
  {
    uuid: 'noticon_r8krkai4wku7qgaumrff',
    title: 'Alice_1',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1584844658/noticon/r8krkai4wku7qgaumrff.gif',
    keywords: 'alice‡',
    date: '2020-03-22T02:37:50.780Z',
  },
  {
    uuid: 'noticon_ywhs0ommbmvszdj7rpq7',
    title: 'Alice_2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1584844746/noticon/ywhs0ommbmvszdj7rpq7.gif',
    keywords: 'alice‡',
    date: '2020-03-22T02:39:12.637Z',
  },
  {
    uuid: 'noticon_tsj7dzxzue2sldmyy6yx',
    title: 'facebook',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1584846063/noticon/tsj7dzxzue2sldmyy6yx.png',
    keywords: 'facebook‡',
    date: '2020-03-22T03:01:09.767Z',
  },
  {
    uuid: 'noticon_bwurwjuxyzgygnpnc1gm',
    title: 'gsfresh',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1584873861/noticon/bwurwjuxyzgygnpnc1gm.png',
    keywords: 'gsfresh‡',
    date: '2020-03-22T10:44:28.963Z',
  },
  {
    uuid: 'noticon_d1pro4ukg4mo3cgcupmu',
    title: 'Alice_3',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1584881796/noticon/d1pro4ukg4mo3cgcupmu.gif',
    keywords: 'alice‡',
    date: '2020-03-22T12:56:46.517Z',
  },
  {
    uuid: 'noticon_is5shdvuumt9h4dvennr',
    title: 'kanu',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1584886449/noticon/is5shdvuumt9h4dvennr.png',
    keywords: 'coffee‡',
    date: '2020-03-22T14:14:19.058Z',
  },
  {
    uuid: 'noticon_j9qbbyx51phrgbdmqgi1',
    title: 'test',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1585047386/noticon/j9qbbyx51phrgbdmqgi1.png',
    keywords: '‡',
    date: '2020-03-24T10:56:29.556Z',
  },
  {
    uuid: 'noticon_iyzmkg5tjjyydxto1v2r',
    title: 'virtualbox',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1585296839/noticon/iyzmkg5tjjyydxto1v2r.png',
    keywords: 'virtualbox‡',
    date: '2020-03-27T08:14:07.122Z',
  },
  {
    uuid: 'noticon_dn5d07djsaivcfcvcrvn',
    title: '아주대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1585296891/noticon/dn5d07djsaivcfcvcrvn.png',
    keywords: '‡',
    date: '2020-03-27T08:14:57.565Z',
  },
  {
    uuid: 'noticon_h6ecukliyfwsbqaodb5b',
    title: '도장',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1585491619/noticon/h6ecukliyfwsbqaodb5b.svg',
    keywords: 'stamp‡in',
    date: '2020-03-29T14:21:00.072Z',
  },
  {
    uuid: 'noticon_dolr7zcrzuwogbts0pcc',
    title: '동글이',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1585534270/noticon/dolr7zcrzuwogbts0pcc.png',
    keywords: '‡',
    date: '2020-03-30T02:11:16.503Z',
  },
  {
    uuid: 'noticon_cnhzfhth9juwskfku5xl',
    title: '매운 동글이',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1585534873/noticon/cnhzfhth9juwskfku5xl.png',
    keywords: '동글이‡',
    date: '2020-03-30T02:21:21.433Z',
  },
  {
    uuid: 'noticon_xnsah2bblifurljphwjg',
    title: '왕동글이',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1585535059/noticon/xnsah2bblifurljphwjg.png',
    keywords: '동글이‡',
    date: '2020-03-30T02:24:31.350Z',
  },
  {
    uuid: 'noticon_yrlvkjrmqofvbxiyuhjx',
    title: '동글이는 참',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1585535316/noticon/yrlvkjrmqofvbxiyuhjx.png',
    keywords: '동글이‡',
    date: '2020-03-30T02:28:42.771Z',
  },
  {
    uuid: 'noticon_reddiakdgx1hiufk7ayb',
    title: '맛있동글이',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1585535741/noticon/reddiakdgx1hiufk7ayb.png',
    keywords: '동글이‡',
    date: '2020-03-30T02:35:48.252Z',
  },
  {
    uuid: 'noticon_omniewykmjpuhsswtgje',
    title: '쇼미동글이',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1585536021/noticon/omniewykmjpuhsswtgje.png',
    keywords: '동글이‡동글이',
    date: '2020-03-30T02:40:32.482Z',
  },
  {
    uuid: 'noticon_toq89dlehstshlohzb6d',
    title: '프리몬',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1585542251/noticon/toq89dlehstshlohzb6d.jpg',
    keywords: '‡',
    date: '2020-03-30T04:24:16.962Z',
  },
  {
    uuid: 'noticon_mukzassjx7xral6s1onx',
    title: '코멘토',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1585550745/noticon/mukzassjx7xral6s1onx.png',
    keywords: '‡',
    date: '2020-03-30T06:45:50.320Z',
  },
  {
    uuid: 'noticon_y7z8lqoohdzovjopigmo',
    title: 'braze',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586138281/noticon/y7z8lqoohdzovjopigmo.svg',
    keywords: '‡',
    date: '2020-04-06T01:58:12.780Z',
  },
  {
    uuid: 'noticon_j2rfvvpj4rnh7vxooneo',
    title: 'testds',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586270956/noticon/j2rfvvpj4rnh7vxooneo.gif',
    keywords: '‡',
    date: '2020-04-07T14:49:23.238Z',
  },
  {
    uuid: 'noticon_eyjidxvaivj5xh1vitnn',
    title: '커비냠',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586271105/noticon/eyjidxvaivj5xh1vitnn.gif',
    keywords: '‡',
    date: '2020-04-07T14:51:54.667Z',
  },
  {
    uuid: 'noticon_sageach1qrmmyfufwli1',
    title: '걷커비',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586271210/noticon/sageach1qrmmyfufwli1.gif',
    keywords: '‡',
    date: '2020-04-07T14:53:42.693Z',
  },
  {
    uuid: 'noticon_hhkgnvme5j2w8aieaxyt',
    title: '볼카츄',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586271392/noticon/hhkgnvme5j2w8aieaxyt.png',
    keywords: '‡',
    date: '2020-04-07T14:56:43.842Z',
  },
  {
    uuid: 'noticon_nus6dsqgee1cfqy78el1',
    title: '볼카츄',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586271553/noticon/nus6dsqgee1cfqy78el1.gif',
    keywords: '‡',
    date: '2020-04-07T14:59:24.766Z',
  },
  {
    uuid: 'noticon_g2e8rnk6ywfirsfgugvq',
    title: '옴팡',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586272312/noticon/g2e8rnk6ywfirsfgugvq.gif',
    keywords: '‡',
    date: '2020-04-07T15:12:00.246Z',
  },
  {
    uuid: 'noticon_bv6nrkzorm9zhceog71x',
    title: '옴팡',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586272386/noticon/bv6nrkzorm9zhceog71x.gif',
    keywords: '‡',
    date: '2020-04-07T15:13:12.672Z',
  },
  {
    uuid: 'noticon_kwi1nwxxapye55soanrz',
    title: '에비츄',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586272594/noticon/kwi1nwxxapye55soanrz.gif',
    keywords: '‡',
    date: '2020-04-07T15:16:49.161Z',
  },
  {
    uuid: 'noticon_b06fppj93rohucfgfeim',
    title: '옴옴',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586273424/noticon/b06fppj93rohucfgfeim.gif',
    keywords: '‡',
    date: '2020-04-07T15:30:32.006Z',
  },
  {
    uuid: 'noticon_rddzt4jb07plo2auf7yh',
    title: '다람이',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586273487/noticon/rddzt4jb07plo2auf7yh.gif',
    keywords: '‡',
    date: '2020-04-07T15:31:32.223Z',
  },
  {
    uuid: 'noticon_xzorzzwnigaatthgyork',
    title: '에비',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586273567/noticon/xzorzzwnigaatthgyork.gif',
    keywords: '‡',
    date: '2020-04-07T15:32:51.192Z',
  },
  {
    uuid: 'noticon_ftrytpbkxkeh7upkfs0m',
    title: 'ProtoPie',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586413534/noticon/ftrytpbkxkeh7upkfs0m.png',
    keywords: '‡',
    date: '2020-04-09T06:25:47.442Z',
  },
  {
    uuid: 'noticon_e6ogwt5sz8or39wmpx52',
    title: 'sendbird_old',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586599401/noticon/e6ogwt5sz8or39wmpx52.png',
    keywords: '‡',
    date: '2020-04-11T10:03:27.735Z',
  },
  {
    uuid: 'noticon_ockzmakttd5t8n3ix0qr',
    title: 'sendbird_new',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586599445/noticon/ockzmakttd5t8n3ix0qr.png',
    keywords: 'sendbird‡',
    date: '2020-04-11T10:04:15.686Z',
  },
  {
    uuid: 'noticon_konejvgicsefmjivrd6h',
    title: '카이스트',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586702769/noticon/konejvgicsefmjivrd6h.png',
    keywords: '‡',
    date: '2020-04-12T14:46:20.368Z',
  },
  {
    uuid: 'noticon_sbxtvlozz8zdgqm5oy78',
    title: 'IFTTT',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586702976/noticon/sbxtvlozz8zdgqm5oy78.png',
    keywords: '‡',
    date: '2020-04-12T14:49:42.149Z',
  },
  {
    uuid: 'noticon_q65da4em5ij6nc59900v',
    title: '레전더리',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586746507/noticon/q65da4em5ij6nc59900v.png',
    keywords: 'Legeondary‡',
    date: '2020-04-13T02:55:47.694Z',
  },
  {
    uuid: 'noticon_gdcazm14si3f7lgeukpc',
    title: 'Edge',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586762873/noticon/gdcazm14si3f7lgeukpc.png',
    keywords: 'edge‡엣지',
    date: '2020-04-13T07:28:09.921Z',
  },
  {
    uuid: 'noticon_trkhtdn2sv9l4pal51op',
    title: '한국기술교육대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586871918/noticon/trkhtdn2sv9l4pal51op.png',
    keywords: '한기대‡코리아텍',
    date: '2020-04-14T13:45:37.740Z',
  },
  {
    uuid: 'noticon_kfp9agqq0zxaxbk79mxq',
    title: '한국기술교육대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586871964/noticon/kfp9agqq0zxaxbk79mxq.png',
    keywords: '한기대‡코리아텍',
    date: '2020-04-14T13:46:20.971Z',
  },
  {
    uuid: 'noticon_lcki2g3fvsch25lupxhp',
    title: 'Cpp',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586916081/noticon/lcki2g3fvsch25lupxhp.png',
    keywords: 'cpp‡씨쁠쁠',
    date: '2020-04-15T02:01:33.723Z',
  },
  {
    uuid: 'noticon_wtoggcgz361wi0v0l07l',
    title: 'Debian',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586953043/noticon/wtoggcgz361wi0v0l07l.jpg',
    keywords: 'debian‡',
    date: '2020-04-15T12:17:34.875Z',
  },
  {
    uuid: 'noticon_mdwic988kzln4qxlmxtn',
    title: 'Debian',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586953402/noticon/mdwic988kzln4qxlmxtn.png',
    keywords: 'debian‡',
    date: '2020-04-15T12:23:30.574Z',
  },
  {
    uuid: 'noticon_kfol9twe5m9kolttjniq',
    title: 'switch',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586982647/noticon/kfol9twe5m9kolttjniq.png',
    keywords: '‡',
    date: '2020-04-15T20:30:49.759Z',
  },
  {
    uuid: 'noticon_zzveywat4ubn9useltnx',
    title: 'switch',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586993353/noticon/zzveywat4ubn9useltnx.png',
    keywords: 'nintendo‡',
    date: '2020-04-15T23:29:15.473Z',
  },
  {
    uuid: 'noticon_kbmduw6srbmzxmu9vbez',
    title: '딜앱',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1587085958/noticon/kbmduw6srbmzxmu9vbez.png',
    keywords: '금융‡어플',
    date: '2020-04-17T01:12:40.919Z',
  },
  {
    uuid: 'noticon_egalzzd012l1uhdvdzyr',
    title: '이니스프리',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1587288834/noticon/egalzzd012l1uhdvdzyr.png',
    keywords: 'innisfree‡',
    date: '2020-04-19T09:33:56.797Z',
  },
  {
    uuid: 'noticon_bkqv4lg5gxi054pa2nuv',
    title: '한성대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1587624672/noticon/bkqv4lg5gxi054pa2nuv.png',
    keywords: '‡',
    date: '2020-04-23T06:51:14.081Z',
  },
  {
    uuid: 'noticon_wtmtnjhks148fo7hfx1x',
    title: '한성대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1587624891/noticon/wtmtnjhks148fo7hfx1x.png',
    keywords: '‡',
    date: '2020-04-23T06:54:53.056Z',
  },
  {
    uuid: 'noticon_hk0m6mdxpw5t3aauw6je',
    title: 'ariel',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1587791667/noticon/hk0m6mdxpw5t3aauw6je.png',
    keywords: '인어공주‡애리얼',
    date: '2020-04-25T05:14:29.466Z',
  },
  {
    uuid: 'noticon_vahu2nvrzwvpnfvvz53y',
    title: 'ariel',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1587791712/noticon/vahu2nvrzwvpnfvvz53y.png',
    keywords: '인어공주‡애리얼',
    date: '2020-04-25T05:15:14.943Z',
  },
  {
    uuid: 'noticon_ebfak4m7g3hliejmey1i',
    title: 'ariel',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1587791743/noticon/ebfak4m7g3hliejmey1i.png',
    keywords: '인어공주‡애리얼',
    date: '2020-04-25T05:15:45.273Z',
  },
  {
    uuid: 'noticon_jx0anqsztbsafr4wo1qe',
    title: 'ariel',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1587791851/noticon/jx0anqsztbsafr4wo1qe.png',
    keywords: '인어공주‡애리얼',
    date: '2020-04-25T05:17:34.177Z',
  },
  {
    uuid: 'noticon_fluvla2jdecirzbypxkn',
    title: 'ariel',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1587791944/noticon/fluvla2jdecirzbypxkn.png',
    keywords: '인어공주‡애리얼',
    date: '2020-04-25T05:19:06.455Z',
  },
  {
    uuid: 'noticon_z1rqltbe5iyz85pnciab',
    title: '3P바인더',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1588214763/noticon/z1rqltbe5iyz85pnciab.png',
    keywords: '3P‡',
    date: '2020-04-30T02:46:05.667Z',
  },
  {
    uuid: 'noticon_qn6dt59giazn0iib040c',
    title: 'Drone CI',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1588299294/noticon/qn6dt59giazn0iib040c.png',
    keywords: 'drone-ci‡drone',
    date: '2020-05-01T02:14:55.683Z',
  },
  {
    uuid: 'noticon_m1ie8ljqbmegjgwbjflc',
    title: 'Grammarly',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1588299317/noticon/m1ie8ljqbmegjgwbjflc.png',
    keywords: '‡',
    date: '2020-05-01T02:15:18.931Z',
  },
  {
    uuid: 'noticon_kiyfjnifnnyi4qagqv7z',
    title: 'Spacemacs',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1588299523/noticon/kiyfjnifnnyi4qagqv7z.png',
    keywords: 'emacs‡',
    date: '2020-05-01T02:18:46.268Z',
  },
  {
    uuid: 'noticon_n4uvtrlilgiyhm88nuww',
    title: 'Gnome',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1588299700/noticon/n4uvtrlilgiyhm88nuww.png',
    keywords: '‡',
    date: '2020-05-01T02:21:41.896Z',
  },
  {
    uuid: 'noticon_acz3dl4araepqlbgno6t',
    title: 'KDE',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1588299712/noticon/acz3dl4araepqlbgno6t.png',
    keywords: 'wm‡',
    date: '2020-05-01T02:21:54.425Z',
  },
  {
    uuid: 'noticon_udnzge5qsyvtfthsfve1',
    title: 'i3',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1588299727/noticon/udnzge5qsyvtfthsfve1.png',
    keywords: 'wm‡',
    date: '2020-05-01T02:22:09.056Z',
  },
  {
    uuid: 'noticon_e4ri2edhduimkckz21xf',
    title: 'Awesome WM',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1588299787/noticon/e4ri2edhduimkckz21xf.png',
    keywords: 'wm‡',
    date: '2020-05-01T02:23:09.160Z',
  },
  {
    uuid: 'noticon_fa6xajkffjmgpbmpuxkr',
    title: 'µTorrent',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1588300570/noticon/fa6xajkffjmgpbmpuxkr.png',
    keywords: '‡',
    date: '2020-05-01T02:36:12.141Z',
  },
  {
    uuid: 'noticon_calblsndr5zdj4kala67',
    title: 'TW',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1588323186/noticon/calblsndr5zdj4kala67.png',
    keywords: '씽크와이즈‡',
    date: '2020-05-01T08:53:08.778Z',
  },
  {
    uuid: 'noticon_rmbkeyap75d6u6v0kjdj',
    title: 'Apple',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1588562735/noticon/rmbkeyap75d6u6v0kjdj.png',
    keywords: 'apple logo‡computer',
    date: '2020-05-04T03:25:36.487Z',
  },
  {
    uuid: 'noticon_xrziq3zvtswqhqq2kskx',
    title: 'Bear',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1588575122/noticon/xrziq3zvtswqhqq2kskx.png',
    keywords: 'apple‡note',
    date: '2020-05-04T06:52:03.659Z',
  },
  {
    uuid: 'noticon_ztot6sl79iyznygzkkp2',
    title: 'YouTube Premium',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1588663300/noticon/ztot6sl79iyznygzkkp2.png',
    keywords: 'YouTube‡Google',
    date: '2020-05-05T07:21:42.354Z',
  },
  {
    uuid: 'noticon_xu2tfos5rncrjw5h797e',
    title: 'wox',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1588940274/noticon/xu2tfos5rncrjw5h797e.png',
    keywords: '‡',
    date: '2020-05-08T12:17:57.182Z',
  },
  {
    uuid: 'noticon_fctdvgzneb5s1f5fslhw',
    title: 'netflix',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1588942648/noticon/fctdvgzneb5s1f5fslhw.png',
    keywords: '‡',
    date: '2020-05-08T12:57:31.079Z',
  },
  {
    uuid: 'noticon_fkfz44mok7imw6juuh1d',
    title: '캡처도구',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1588943400/noticon/fkfz44mok7imw6juuh1d.png',
    keywords: '‡',
    date: '2020-05-08T13:10:03.326Z',
  },
  {
    uuid: 'noticon_hfcemrutbjex7zuqt6q1',
    title: 'Nuxt, finally',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1589358623/noticon/hfcemrutbjex7zuqt6q1.png',
    keywords: 'nuxt‡vue',
    date: '2020-05-13T08:30:26.124Z',
  },
  {
    uuid: 'noticon_twh4xddrsrdlf4xfve8n',
    title: 'adobe',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1589374892/noticon/twh4xddrsrdlf4xfve8n.png',
    keywords: '‡',
    date: '2020-05-13T13:01:34.186Z',
  },
  {
    uuid: 'noticon_n4amvy5ynexjkywitxfy',
    title: '어도비',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1589375083/noticon/n4amvy5ynexjkywitxfy.png',
    keywords: '‡',
    date: '2020-05-13T13:04:44.827Z',
  },
  {
    uuid: 'noticon_v6wd8jsidu5tsi8bsrrm',
    title: 'deno',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1589948805/noticon/v6wd8jsidu5tsi8bsrrm.png',
    keywords: 'deno‡deno',
    date: '2020-05-20T04:26:48.056Z',
  },
  {
    uuid: 'noticon_en40lrbvstlvqibmaocm',
    title: 'deno',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1589948807/noticon/en40lrbvstlvqibmaocm.png',
    keywords: 'deno‡deno',
    date: '2020-05-20T04:26:49.569Z',
  },
  {
    uuid: 'noticon_jk007ijuyhng153rzxnf',
    title: 'deno',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1589948807/noticon/jk007ijuyhng153rzxnf.png',
    keywords: 'deno‡deno',
    date: '2020-05-20T04:26:50.445Z',
  },
  {
    uuid: 'noticon_dwjda4l45wkxfpergyce',
    title: 'deno',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1589948808/noticon/dwjda4l45wkxfpergyce.png',
    keywords: 'deno‡deno',
    date: '2020-05-20T04:26:51.651Z',
  },
  {
    uuid: 'noticon_wrt0a8xvy2q7elsp9f7j',
    title: 'deno',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1589948808/noticon/wrt0a8xvy2q7elsp9f7j.png',
    keywords: 'deno‡deno',
    date: '2020-05-20T04:26:52.578Z',
  },
  {
    uuid: 'noticon_gzkuobylopx6vsmyo47j',
    title: 'deno',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1589948808/noticon/gzkuobylopx6vsmyo47j.png',
    keywords: 'deno‡deno',
    date: '2020-05-20T04:26:53.398Z',
  },
  {
    uuid: 'noticon_kys92d51a9lq52wxkzfn',
    title: '',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1589948809/noticon/kys92d51a9lq52wxkzfn.png',
    keywords: '‡',
    date: '2020-05-20T04:26:54.151Z',
  },
  {
    uuid: 'noticon_kh7eo6zh1pdp2gtsarpi',
    title: '',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1589948809/noticon/kh7eo6zh1pdp2gtsarpi.png',
    keywords: '‡',
    date: '2020-05-20T04:26:55.071Z',
  },
  {
    uuid: 'noticon_tavdyowvleqekkrjwqhu',
    title: 'web',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1590040494/noticon/tavdyowvleqekkrjwqhu.png',
    keywords: 'web‡',
    date: '2020-05-21T05:54:57.132Z',
  },
  {
    uuid: 'noticon_xe5nasyjil6mn6vk8c4s',
    title: 'www',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1590043914/noticon/xe5nasyjil6mn6vk8c4s.png',
    keywords: 'web‡www',
    date: '2020-05-21T06:51:56.544Z',
  },
  {
    uuid: 'noticon_sklerdskrtwe538ycagi',
    title: 'server',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1590044205/noticon/sklerdskrtwe538ycagi.png',
    keywords: 'server‡',
    date: '2020-05-21T06:56:47.740Z',
  },
  {
    uuid: 'noticon_b0bczf0sbvld25offafu',
    title: 'server',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1590044968/noticon/b0bczf0sbvld25offafu.png',
    keywords: 'server‡',
    date: '2020-05-21T07:09:30.974Z',
  },
  {
    uuid: 'noticon_ahscj3hfpk6kddt8fbdu',
    title: '폴라리스 오피스',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1590108503/noticon/ahscj3hfpk6kddt8fbdu.png',
    keywords: 'sw‡',
    date: '2020-05-22T00:48:25.030Z',
  },
  {
    uuid: 'noticon_itvese9qyuxrdcwvp3a6',
    title: '마이크로소프트 365',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1590108618/noticon/itvese9qyuxrdcwvp3a6.png',
    keywords: 'sw‡',
    date: '2020-05-22T00:50:20.427Z',
  },
  {
    uuid: 'noticon_wxxriuesadrjockoijqi',
    title: '티페이',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1590132040/noticon/wxxriuesadrjockoijqi.png',
    keywords: '‡',
    date: '2020-05-22T07:20:42.519Z',
  },
  {
    uuid: 'noticon_dod2pxappxmm56e9yudh',
    title: '티페이',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1590132134/noticon/dod2pxappxmm56e9yudh.png',
    keywords: '‡',
    date: '2020-05-22T07:22:15.852Z',
  },
  {
    uuid: 'noticon_q1zymdcpcedbjr0wusy0',
    title: 'tPay',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1590132171/noticon/q1zymdcpcedbjr0wusy0.png',
    keywords: '‡',
    date: '2020-05-22T07:22:52.948Z',
  },
  {
    uuid: 'noticon_jki5quwkt0qcopnzouet',
    title: 'etc',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1590205905/noticon/jki5quwkt0qcopnzouet.png',
    keywords: '‡',
    date: '2020-05-23T03:51:47.049Z',
  },
  {
    uuid: 'noticon_lpqocrkxekktqtyabgm8',
    title: 'suspension point',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1590240447/noticon/lpqocrkxekktqtyabgm8.png',
    keywords: '‡',
    date: '2020-05-23T13:27:28.920Z',
  },
  {
    uuid: 'noticon_y0ru3kcjvsgm9lzoqxfn',
    title: 'OpenCV ',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1590305837/noticon/y0ru3kcjvsgm9lzoqxfn.png',
    keywords: 'opencv ‡image',
    date: '2020-05-24T07:37:19.869Z',
  },
  {
    uuid: 'noticon_njpgfglyr5dv5v5ldbxc',
    title: 'china',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1590373887/noticon/njpgfglyr5dv5v5ldbxc.png',
    keywords: '‡',
    date: '2020-05-25T02:31:29.562Z',
  },
  {
    uuid: 'noticon_c6ljrtrvkfnxofg4smfb',
    title: 'Business Insider',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1590429398/noticon/c6ljrtrvkfnxofg4smfb.png',
    keywords: 'News‡Murung',
    date: '2020-05-25T17:56:40.567Z',
  },
  {
    uuid: 'noticon_fqyctlljclid973yrs5k',
    title: '케어네이션',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1590545357/noticon/fqyctlljclid973yrs5k.png',
    keywords: '‡',
    date: '2020-05-27T02:09:19.824Z',
  },
  {
    uuid: 'noticon_uui8goajtdjsfa6yr8vr',
    title: '케어네이션',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1590545423/noticon/uui8goajtdjsfa6yr8vr.png',
    keywords: '‡',
    date: '2020-05-27T02:10:24.799Z',
  },
  {
    uuid: 'noticon_h7umzxrof4skyzwyuucy',
    title: 'ballet shoes',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1591158203/noticon/h7umzxrof4skyzwyuucy.png',
    keywords: 'ballet‡shoes',
    date: '2020-06-03T04:23:25.176Z',
  },
  {
    uuid: 'noticon_ikr2rajjnuzlw0rm1eqh',
    title: '브랜드 워터멜론',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1591259615/noticon/ikr2rajjnuzlw0rm1eqh.png',
    keywords: '‡',
    date: '2020-06-04T08:33:36.870Z',
  },
  {
    uuid: 'noticon_bcwydwvcfyhe6qp2yfqp',
    title: '넥스터즈',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1591451130/noticon/bcwydwvcfyhe6qp2yfqp.png',
    keywords: 'NEXTERS‡',
    date: '2020-06-06T13:45:31.927Z',
  },
  {
    uuid: 'noticon_wnyqt5i01cq1ljcemlni',
    title: 'NEXTERS_16',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1591451205/noticon/wnyqt5i01cq1ljcemlni.png',
    keywords: 'NEXTERS‡넥스터즈',
    date: '2020-06-06T13:46:48.061Z',
  },
  {
    uuid: 'noticon_d4ptvqbrdi7tcbwmrajx',
    title: 'NestJS',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1591496102/noticon/d4ptvqbrdi7tcbwmrajx.png',
    keywords: 'nest‡',
    date: '2020-06-07T02:15:05.524Z',
  },
  {
    uuid: 'noticon_va0xmi1wsesmjfyxrksf',
    title: 'GSM',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1591849996/noticon/va0xmi1wsesmjfyxrksf.png',
    keywords: 'GSM‡gsm',
    date: '2020-06-11T04:33:18.197Z',
  },
  {
    uuid: 'noticon_ri6ojlybibb5p0cx5chx',
    title: 'NXP',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1592030114/noticon/ri6ojlybibb5p0cx5chx.png',
    keywords: 'NXP‡MCU',
    date: '2020-06-13T06:35:16.128Z',
  },
  {
    uuid: 'noticon_rftecleiqr9hfae0purg',
    title: '동국대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1592041196/noticon/rftecleiqr9hfae0purg.png',
    keywords: '대학교‡',
    date: '2020-06-13T09:39:58.278Z',
  },
  {
    uuid: 'noticon_y9gxv83truwhxvxcypry',
    title: '세종대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1592041243/noticon/y9gxv83truwhxvxcypry.png',
    keywords: '대학교‡세종',
    date: '2020-06-13T09:40:45.496Z',
  },
  {
    uuid: 'noticon_miarefknyt8tmn9neo3p',
    title: 'Moai',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1592041365/noticon/miarefknyt8tmn9neo3p.png',
    keywords: '‡',
    date: '2020-06-13T09:42:46.563Z',
  },
  {
    uuid: 'noticon_tmrgapklzcxnkjn2jhmh',
    title: '넷플릭스',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1592102093/noticon/tmrgapklzcxnkjn2jhmh.png',
    keywords: '‡',
    date: '2020-06-14T02:34:56.148Z',
  },
  {
    uuid: 'noticon_rjvdbmydnv3pbib4qjc9',
    title: 'Input',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1592103745/noticon/rjvdbmydnv3pbib4qjc9.png',
    keywords: 'Input‡Freepik',
    date: '2020-06-14T03:02:26.890Z',
  },
  {
    uuid: 'noticon_rxixc7p1uixuoggdz27u',
    title: 'Output',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1592103939/noticon/rxixc7p1uixuoggdz27u.png',
    keywords: 'Output‡Freepik',
    date: '2020-06-14T03:05:41.333Z',
  },
  {
    uuid: 'noticon_c9frbz4svknhr23vtwmg',
    title: 'TAEYEON',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1592153517/noticon/c9frbz4svknhr23vtwmg.png',
    keywords: '‡',
    date: '2020-06-14T16:51:59.591Z',
  },
  {
    uuid: 'noticon_z0s5osjhwlxpeo6pxslv',
    title: 'jsp',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1592435019/noticon/z0s5osjhwlxpeo6pxslv.png',
    keywords: 'jsp‡java',
    date: '2020-06-17T23:03:41.353Z',
  },
  {
    uuid: 'noticon_fxihf9erzlrlinozxn9i',
    title: 'eclipse',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1592435210/noticon/fxihf9erzlrlinozxn9i.png',
    keywords: 'eclipse‡에디터',
    date: '2020-06-17T23:06:52.470Z',
  },
  {
    uuid: 'noticon_judba41udt3wtirdj4ek',
    title: 'mybatis',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1592435324/noticon/judba41udt3wtirdj4ek.png',
    keywords: 'mybatis‡마이바티스',
    date: '2020-06-17T23:08:46.855Z',
  },
  {
    uuid: 'noticon_ovcserf615eo3sbcbv8b',
    title: 'thymeleaf',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1592435734/noticon/ovcserf615eo3sbcbv8b.png',
    keywords: 'thymeleaf‡',
    date: '2020-06-17T23:15:36.759Z',
  },
  {
    uuid: 'noticon_esf2cmdypfvbv5dtjbdl',
    title: 'vutify',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1592436226/noticon/esf2cmdypfvbv5dtjbdl.png',
    keywords: 'vutify‡뷰티파이',
    date: '2020-06-17T23:23:49.327Z',
  },
  {
    uuid: 'noticon_yucvpr6jzidhqlja5zxq',
    title: 'error',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1592437592/noticon/yucvpr6jzidhqlja5zxq.png',
    keywords: 'error‡에러',
    date: '2020-06-17T23:46:34.090Z',
  },
  {
    uuid: 'noticon_jrceaey2xuantdbgwkci',
    title: 'SwiftUI',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1592446596/noticon/jrceaey2xuantdbgwkci.png',
    keywords: 'SwiftUI‡',
    date: '2020-06-18T02:16:37.874Z',
  },
  {
    uuid: 'noticon_fx4tfnyku4yyjj5ehyuq',
    title: 'SwiftUI',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1592446943/noticon/fx4tfnyku4yyjj5ehyuq.png',
    keywords: 'SwiftUI‡',
    date: '2020-06-18T02:22:26.054Z',
  },
  {
    uuid: 'noticon_fpzqhx0zzl7nmrmqngw6',
    title: 'file',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1592468654/noticon/fpzqhx0zzl7nmrmqngw6.png',
    keywords: '‡',
    date: '2020-06-18T08:24:15.914Z',
  },
  {
    uuid: 'noticon_mexcsjupsjgrmsoikhpj',
    title: 'folder',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1592468667/noticon/mexcsjupsjgrmsoikhpj.png',
    keywords: '‡',
    date: '2020-06-18T08:24:29.255Z',
  },
  {
    uuid: 'noticon_kk6iutwacbgt1yazuhmo',
    title: 'BeMeal',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1592633998/noticon/kk6iutwacbgt1yazuhmo.png',
    keywords: '#BeMeal‡#Live',
    date: '2020-06-20T06:20:00.689Z',
  },
  {
    uuid: 'noticon_hbuvlxniv2u5krwoh9tq',
    title: 'Dacota',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1592634234/noticon/hbuvlxniv2u5krwoh9tq.png',
    keywords: '#다코타‡#Dacota',
    date: '2020-06-20T06:23:56.137Z',
  },
  {
    uuid: 'noticon_sauhljgmuvope0uof2py',
    title: '7floor',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1592635596/noticon/sauhljgmuvope0uof2py.png',
    keywords: '‡',
    date: '2020-06-20T06:46:38.075Z',
  },
  {
    uuid: 'noticon_cpwbxn83wstynsmfno9v',
    title: 'typescript',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1592637005/noticon/cpwbxn83wstynsmfno9v.png',
    keywords: 'ts‡',
    date: '2020-06-20T07:10:07.550Z',
  },
  {
    uuid: 'noticon_tc8oxicmdchkdptn2j0w',
    title: 'typescript',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1592637044/noticon/tc8oxicmdchkdptn2j0w.png',
    keywords: 'ts‡',
    date: '2020-06-20T07:10:46.227Z',
  },
  {
    uuid: 'noticon_dpcfeuqlupv9ehpin2vs',
    title: '클로버추얼패션',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1592643215/noticon/dpcfeuqlupv9ehpin2vs.png',
    keywords: '‡',
    date: '2020-06-20T08:53:37.460Z',
  },
  {
    uuid: 'noticon_hmhg8iayyphom57lbay3',
    title: '공맛지',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1592787825/noticon/hmhg8iayyphom57lbay3.png',
    keywords: '공무원맛집지도‡',
    date: '2020-06-22T01:03:47.447Z',
  },
  {
    uuid: 'noticon_zr8slmntfeqdar9au6mg',
    title: '비행기',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1592902537/noticon/zr8slmntfeqdar9au6mg.png',
    keywords: '‡',
    date: '2020-06-23T08:55:39.575Z',
  },
  {
    uuid: 'noticon_xhtjgiviiuizcw2utbya',
    title: 'MCU',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1592962590/noticon/xhtjgiviiuizcw2utbya.png',
    keywords: 'MCU‡micro',
    date: '2020-06-24T01:36:32.741Z',
  },
  {
    uuid: 'noticon_truempyjkt9abppfnqai',
    title: 'MCU2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1592962661/noticon/truempyjkt9abppfnqai.png',
    keywords: 'mcu‡micro',
    date: '2020-06-24T01:37:43.631Z',
  },
  {
    uuid: 'noticon_yllouhpfzytowgn4rksx',
    title: 'C언어',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1592962806/noticon/yllouhpfzytowgn4rksx.png',
    keywords: 'C‡C++',
    date: '2020-06-24T01:40:09.030Z',
  },
  {
    uuid: 'noticon_xyhkyyzqvhjn0frwndhk',
    title: 'Clock',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1592962875/noticon/xyhkyyzqvhjn0frwndhk.png',
    keywords: 'Clock‡',
    date: '2020-06-24T01:41:16.997Z',
  },
  {
    uuid: 'noticon_usq8oli96tyert1bnvb8',
    title: 'GPIO',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1592962942/noticon/usq8oli96tyert1bnvb8.png',
    keywords: 'gpio‡input/output',
    date: '2020-06-24T01:42:24.496Z',
  },
  {
    uuid: 'noticon_pmzp291bdshznm0nfpcr',
    title: 'misra-c',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1593040487/noticon/pmzp291bdshznm0nfpcr.png',
    keywords: 'misra‡',
    date: '2020-06-24T23:14:49.056Z',
  },
  {
    uuid: 'noticon_gbn9dhzriudemzs4qd3a',
    title: 'MISRA',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1593040540/noticon/gbn9dhzriudemzs4qd3a.png',
    keywords: 'MISRA‡',
    date: '2020-06-24T23:15:42.995Z',
  },
  {
    uuid: 'noticon_vkq87mykcizjfugurkzs',
    title: 'BOOK',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1593040634/noticon/vkq87mykcizjfugurkzs.png',
    keywords: 'book‡용어집',
    date: '2020-06-24T23:17:15.829Z',
  },
  {
    uuid: 'noticon_dizq8px8toqzldoh4wqu',
    title: 'BOOK',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1593040672/noticon/dizq8px8toqzldoh4wqu.png',
    keywords: 'book‡',
    date: '2020-06-24T23:17:54.389Z',
  },
  {
    uuid: 'noticon_uts4vbntu8ejsaxdtj1l',
    title: 'GCP',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1593062577/noticon/uts4vbntu8ejsaxdtj1l.png',
    keywords: 'GCP‡google',
    date: '2020-06-25T05:22:59.311Z',
  },
  {
    uuid: 'noticon_telhk1hekcrwljnlaung',
    title: 'oracle',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1593062766/noticon/telhk1hekcrwljnlaung.png',
    keywords: 'oracle‡cloud',
    date: '2020-06-25T05:26:08.009Z',
  },
  {
    uuid: 'noticon_cpitjeqwiq08sfonez70',
    title: 'akamai',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1593062867/noticon/cpitjeqwiq08sfonez70.png',
    keywords: 'akamai‡CDN',
    date: '2020-06-25T05:27:48.863Z',
  },
  {
    uuid: 'noticon_jirdvszqhjbjkdqezakt',
    title: 'alibaba',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1593062943/noticon/jirdvszqhjbjkdqezakt.png',
    keywords: 'alibaba‡cloud',
    date: '2020-06-25T05:29:04.853Z',
  },
  {
    uuid: 'noticon_acgeziifv4y7tzyuzgpj',
    title: 'tencent',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1593063057/noticon/acgeziifv4y7tzyuzgpj.png',
    keywords: 'tencent‡cloud',
    date: '2020-06-25T05:30:59.042Z',
  },
  {
    uuid: 'noticon_v54j0lavn52l6ff61sga',
    title: 'AWS',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1593063747/noticon/v54j0lavn52l6ff61sga.png',
    keywords: 'AWS‡amazon',
    date: '2020-06-25T05:42:29.139Z',
  },
  {
    uuid: 'noticon_rfmu2sxyd2ox94nxf8c9',
    title: 'ADC',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1593068447/noticon/rfmu2sxyd2ox94nxf8c9.png',
    keywords: 'ADC‡analog',
    date: '2020-06-25T07:00:49.966Z',
  },
  {
    uuid: 'noticon_hp0milkfjgewvpqekypj',
    title: 'author',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1593074861/noticon/hp0milkfjgewvpqekypj.png',
    keywords: 'author‡writing',
    date: '2020-06-25T08:47:43.406Z',
  },
  {
    uuid: 'noticon_sjeakcxa5ujcylmrlnvd',
    title: 'Bulb',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1593075007/noticon/sjeakcxa5ujcylmrlnvd.png',
    keywords: 'Bulb‡idea',
    date: '2020-06-25T08:50:09.021Z',
  },
  {
    uuid: 'noticon_yzpsc5sb4l9rm7esftqe',
    title: 'MZC',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1593134849/noticon/yzpsc5sb4l9rm7esftqe.png',
    keywords: 'MZC‡메가존클라우드',
    date: '2020-06-26T01:27:31.382Z',
  },
  {
    uuid: 'noticon_ejk6onvydsto7eff3kt9',
    title: '태연',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1593136563/noticon/ejk6onvydsto7eff3kt9.png',
    keywords: '태연‡소녀시대',
    date: '2020-06-26T01:56:06.280Z',
  },
  {
    uuid: 'noticon_xmudzlguiuwsxfi3wjkj',
    title: '열일(?)하는 라이언',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1593397832/noticon/xmudzlguiuwsxfi3wjkj.png',
    keywords: '‡',
    date: '2020-06-29T02:30:34.201Z',
  },
  {
    uuid: 'noticon_ax6zcewdkzpklgdjwhnd',
    title: 'SAP',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1593406842/noticon/ax6zcewdkzpklgdjwhnd.png',
    keywords: 'sap‡',
    date: '2020-06-29T05:00:44.080Z',
  },
  {
    uuid: 'noticon_xchd5kkrgkmcmbmjkxyt',
    title: 'Dolphin Smalltalk',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1593474823/noticon/xchd5kkrgkmcmbmjkxyt.png',
    keywords: 'Object Arts‡Smalltalk',
    date: '2020-06-29T23:53:46.184Z',
  },
  {
    uuid: 'noticon_tajykvzyezygd41rdhzw',
    title: 'Bluetooth',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1593516215/noticon/tajykvzyezygd41rdhzw.png',
    keywords: '블루투스‡',
    date: '2020-06-30T11:23:38.342Z',
  },
  {
    uuid: 'noticon_ekerk3nsvtqukgsxpamx',
    title: 'innodep',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1593564884/noticon/ekerk3nsvtqukgsxpamx.png',
    keywords: 'innodep‡',
    date: '2020-07-01T00:54:46.349Z',
  },
  {
    uuid: 'noticon_rk3yynsehvwk5pwmrkkp',
    title: 'to-do',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1593607605/noticon/rk3yynsehvwk5pwmrkkp.png',
    keywords: '‡',
    date: '2020-07-01T12:46:47.989Z',
  },
  {
    uuid: 'noticon_akugnmerzoovbco56uxc',
    title: '한국외대',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1593611981/noticon/akugnmerzoovbco56uxc.png',
    keywords: '‡',
    date: '2020-07-01T13:59:43.695Z',
  },
  {
    uuid: 'noticon_cvyclaivpjfu5nhcagdc',
    title: '한국외국어대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1593612034/noticon/cvyclaivpjfu5nhcagdc.png',
    keywords: '‡',
    date: '2020-07-01T14:00:35.849Z',
  },
  {
    uuid: 'noticon_qhi0p3f8pnshuzfwl4us',
    title: 'hufs',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1593612110/noticon/qhi0p3f8pnshuzfwl4us.png',
    keywords: '‡',
    date: '2020-07-01T14:01:51.921Z',
  },
  {
    uuid: 'noticon_gwgco3ibedbflbywecka',
    title: '멋쟁이사자처럼',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1593668989/noticon/gwgco3ibedbflbywecka.png',
    keywords: '멋사‡',
    date: '2020-07-02T05:49:51.773Z',
  },
  {
    uuid: 'noticon_qcmvvfl0ztz8ryckxvf9',
    title: '멋쟁이사자처럼',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1593669053/noticon/qcmvvfl0ztz8ryckxvf9.png',
    keywords: '멋사‡',
    date: '2020-07-02T05:50:56.463Z',
  },
  {
    uuid: 'noticon_s8sy4zr9lvdpxyytvvca',
    title: 'alibaba',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1593744131/noticon/s8sy4zr9lvdpxyytvvca.png',
    keywords: 'alibaba‡cloud',
    date: '2020-07-03T02:42:12.966Z',
  },
  {
    uuid: 'noticon_vpzmcvutmdbw2eygr6tl',
    title: 'akamai',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1593744313/noticon/vpzmcvutmdbw2eygr6tl.png',
    keywords: 'akamai‡cdn',
    date: '2020-07-03T02:45:14.608Z',
  },
  {
    uuid: 'noticon_tewt8xstafqoyh4wmlpn',
    title: 'hyunu',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1593753371/noticon/tewt8xstafqoyh4wmlpn.png',
    keywords: '‡',
    date: '2020-07-03T05:16:13.954Z',
  },
  {
    uuid: 'noticon_u7kgcm3ik6jkxdvewban',
    title: 'Objective-C',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1593837963/noticon/u7kgcm3ik6jkxdvewban.png',
    keywords: 'ObjC‡Apple',
    date: '2020-07-04T04:46:05.989Z',
  },
  {
    uuid: 'noticon_b09iolxfymuogseiqx9q',
    title: 'GSMA',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1593934731/noticon/b09iolxfymuogseiqx9q.png',
    keywords: 'GSMA‡',
    date: '2020-07-05T07:38:53.679Z',
  },
  {
    uuid: 'noticon_qxtwy1wtmvxzagk04lbf',
    title: 'Shiftee',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1593967295/noticon/qxtwy1wtmvxzagk04lbf.png',
    keywords: '‡',
    date: '2020-07-05T16:41:38.072Z',
  },
  {
    uuid: 'noticon_hja979jptznsxaeai1ha',
    title: 'slack_transparent',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1593967353/noticon/hja979jptznsxaeai1ha.png',
    keywords: '‡',
    date: '2020-07-05T16:42:35.023Z',
  },
  {
    uuid: 'noticon_rgtoooviiqkoouct9frb',
    title: 'slack_tranparent',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1593967399/noticon/rgtoooviiqkoouct9frb.png',
    keywords: '‡',
    date: '2020-07-05T16:43:21.818Z',
  },
  {
    uuid: 'noticon_nf9u4qlddfwmh14ubzuz',
    title: 'lucidchart',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1593973336/noticon/nf9u4qlddfwmh14ubzuz.png',
    keywords: '‡',
    date: '2020-07-05T18:22:19.159Z',
  },
  {
    uuid: 'noticon_rlgpjrytm3rrbh80zkn8',
    title: '세일즈포스',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1594101757/noticon/rlgpjrytm3rrbh80zkn8.png',
    keywords: 'salesforce‡세일즈포스',
    date: '2020-07-07T06:02:39.150Z',
  },
  {
    uuid: 'noticon_qkhqb2ouad5aepqa0tct',
    title: 'Graphcore',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1594110507/noticon/qkhqb2ouad5aepqa0tct.png',
    keywords: 'Graphcore‡ai',
    date: '2020-07-07T08:28:29.256Z',
  },
  {
    uuid: 'noticon_l8in8j0uhbgbmezjs2pi',
    title: 'NewRelic',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1594111674/noticon/l8in8j0uhbgbmezjs2pi.png',
    keywords: '‡',
    date: '2020-07-07T08:47:56.476Z',
  },
  {
    uuid: 'noticon_uu5u6k500rb0omgh2qim',
    title: 'NewRelice2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1594111763/noticon/uu5u6k500rb0omgh2qim.png',
    keywords: '‡',
    date: '2020-07-07T08:49:25.320Z',
  },
  {
    uuid: 'noticon_nkavwad4gacvtiykofch',
    title: '다음 공식 팬카페',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1594114270/noticon/nkavwad4gacvtiykofch.png',
    keywords: '‡',
    date: '2020-07-07T09:31:12.202Z',
  },
  {
    uuid: 'noticon_rttps6yjb3xctwkvvbzs',
    title: '다음 공식 팬카페',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1594114430/noticon/rttps6yjb3xctwkvvbzs.png',
    keywords: '다음‡팬카페',
    date: '2020-07-07T09:33:51.646Z',
  },
  {
    uuid: 'noticon_tndj7p9tybjfl559jbdz',
    title: 'kc인증',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1594284084/noticon/tndj7p9tybjfl559jbdz.png',
    keywords: '‡',
    date: '2020-07-09T08:41:26.382Z',
  },
  {
    uuid: 'noticon_d7ha16w0cozijvkvp8mg',
    title: '택배 상자',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1594557611/noticon/d7ha16w0cozijvkvp8mg.png',
    keywords: '박스‡box',
    date: '2020-07-12T12:40:13.709Z',
  },
  {
    uuid: 'noticon_g4atfdzgbz0buy21yfin',
    title: '택배 상자',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1594559233/noticon/g4atfdzgbz0buy21yfin.png',
    keywords: '소포‡box',
    date: '2020-07-12T13:07:16.883Z',
  },
  {
    uuid: 'noticon_hjxrdv0nljqquhox0kb6',
    title: 'todoist',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1594626184/noticon/hjxrdv0nljqquhox0kb6.png',
    keywords: 'todo‡투두이스트',
    date: '2020-07-13T07:43:06.795Z',
  },
  {
    uuid: 'noticon_sh4byrpghzlniwwiwxud',
    title: 'The Economist',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1594635466/noticon/sh4byrpghzlniwwiwxud.png',
    keywords: '‡',
    date: '2020-07-13T10:17:48.424Z',
  },
  {
    uuid: 'noticon_tqkrp8g7thrsjvsvakgu',
    title: 'The Verge',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1594639653/noticon/tqkrp8g7thrsjvsvakgu.png',
    keywords: '‡',
    date: '2020-07-13T11:27:35.806Z',
  },
  {
    uuid: 'noticon_jhouqfcxrwwcpllcrxik',
    title: 'The Washington Post',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1594639949/noticon/jhouqfcxrwwcpllcrxik.png',
    keywords: '워싱턴포스트‡',
    date: '2020-07-13T11:32:31.657Z',
  },
  {
    uuid: 'noticon_kzql2392ktbkwgoxzkgd',
    title: 'MBC',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1594640497/noticon/kzql2392ktbkwgoxzkgd.png',
    keywords: '엠비씨‡',
    date: '2020-07-13T11:41:40.305Z',
  },
  {
    uuid: 'noticon_ik1jjziworqdbnyevuxy',
    title: 'Brunch',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1594643026/noticon/ik1jjziworqdbnyevuxy.png',
    keywords: '브런치‡',
    date: '2020-07-13T12:23:48.474Z',
  },
  {
    uuid: 'noticon_ytp5mwv2trzlaqevfxce',
    title: 'Foreign Policy',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1594643065/noticon/ytp5mwv2trzlaqevfxce.png',
    keywords: '포린폴리시‡',
    date: '2020-07-13T12:24:27.314Z',
  },
  {
    uuid: 'noticon_fkwl27swldp36ldb3hj4',
    title: 'BBC',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1594643177/noticon/fkwl27swldp36ldb3hj4.png',
    keywords: '‡',
    date: '2020-07-13T12:26:19.884Z',
  },
  {
    uuid: 'noticon_rnqqwlvh4p3sfshu3wuu',
    title: 'Red Hat',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1594643473/noticon/rnqqwlvh4p3sfshu3wuu.png',
    keywords: '레드햇‡',
    date: '2020-07-13T12:31:16.082Z',
  },
  {
    uuid: 'noticon_ssypyccle9iw4ic5uyj6',
    title: 'Red Hat',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1594643529/noticon/ssypyccle9iw4ic5uyj6.png',
    keywords: '레드햇‡',
    date: '2020-07-13T12:32:12.228Z',
  },
  {
    uuid: 'noticon_umdl4j8pqsetaoc4cwy6',
    title: '서울신문',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1594646749/noticon/umdl4j8pqsetaoc4cwy6.png',
    keywords: '‡',
    date: '2020-07-13T13:25:53.090Z',
  },
  {
    uuid: 'noticon_qfg5idw99fyq2b4ry6wn',
    title: '연합뉴스',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1594648084/noticon/qfg5idw99fyq2b4ry6wn.png',
    keywords: '‡',
    date: '2020-07-13T13:48:07.090Z',
  },
  {
    uuid: 'noticon_z8sfwiaodg4plv71eclx',
    title: '인벤',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1594648509/noticon/z8sfwiaodg4plv71eclx.png',
    keywords: '‡',
    date: '2020-07-13T13:55:11.718Z',
  },
  {
    uuid: 'noticon_h05jjqboq2t7xcdwfhc5',
    title: 'Medium',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1594649439/noticon/h05jjqboq2t7xcdwfhc5.png',
    keywords: '미디엄‡',
    date: '2020-07-13T14:10:44.090Z',
  },
  {
    uuid: 'noticon_yp2hxge6opdurxspxmw9',
    title: 'lambda',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1594825036/noticon/yp2hxge6opdurxspxmw9.png',
    keywords: '람다‡',
    date: '2020-07-15T14:57:19.734Z',
  },
  {
    uuid: 'noticon_g65br4maylvgfpcnxqbo',
    title: 'vmware',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1594963312/noticon/g65br4maylvgfpcnxqbo.png',
    keywords: 'vmware‡vm',
    date: '2020-07-17T05:21:55.125Z',
  },
  {
    uuid: 'noticon_djlraapysqizu94qvw5e',
    title: 'bespin',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1594963523/noticon/djlraapysqizu94qvw5e.png',
    keywords: 'bespin‡베스핀',
    date: '2020-07-17T05:25:25.140Z',
  },
  {
    uuid: 'noticon_h5f5dlugmnwgbt3dvrzx',
    title: 'terraform',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1594969872/noticon/h5f5dlugmnwgbt3dvrzx.png',
    keywords: '‡',
    date: '2020-07-17T07:11:13.764Z',
  },
  {
    uuid: 'noticon_fr0fs24cq1kzq6yvbsfc',
    title: '대신증권',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1595091488/noticon/fr0fs24cq1kzq6yvbsfc.png',
    keywords: '‡',
    date: '2020-07-18T16:58:10.820Z',
  },
  {
    uuid: 'noticon_ecunjo99aelktw47hemi',
    title: '대신증권',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1595091799/noticon/ecunjo99aelktw47hemi.png',
    keywords: '‡',
    date: '2020-07-18T17:03:22.306Z',
  },
  {
    uuid: 'noticon_mx8kjqohh9qrugf1x4y1',
    title: 'https://may-i.io',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1595202937/noticon/mx8kjqohh9qrugf1x4y1.png',
    keywords: 'may-i‡goobong',
    date: '2020-07-19T23:55:39.954Z',
  },
  {
    uuid: 'noticon_fqx4ojxfvgp1932vzkvn',
    title: 'bomb',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1595206485/noticon/fqx4ojxfvgp1932vzkvn.png',
    keywords: 'mine‡',
    date: '2020-07-20T00:54:47.773Z',
  },
  {
    uuid: 'noticon_vrf7jl7cjyllcjd4meh4',
    title: 'GS',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1595312267/noticon/vrf7jl7cjyllcjd4meh4.png',
    keywords: 'neotek‡네오텍',
    date: '2020-07-21T06:17:49.846Z',
  },
  {
    uuid: 'noticon_cxi8wmggmpihzy2icnel',
    title: 'celery',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1595398958/noticon/cxi8wmggmpihzy2icnel.png',
    keywords: '‡',
    date: '2020-07-22T06:22:40.731Z',
  },
  {
    uuid: 'noticon_osp3gjduhihpy2jx8y0p',
    title: 'Wall Street Journal',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1595434501/noticon/osp3gjduhihpy2jx8y0p.png',
    keywords: '월스트리트저널‡',
    date: '2020-07-22T16:15:04.803Z',
  },
  {
    uuid: 'noticon_w8bjt5hfmrb3meye7lgk',
    title: '웅진',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1595490059/noticon/w8bjt5hfmrb3meye7lgk.png',
    keywords: '웅진‡woongjin',
    date: '2020-07-23T07:41:01.917Z',
  },
  {
    uuid: 'noticon_ip6wtnxwkkx7vneygh2x',
    title: 'oracle cloud',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1595490471/noticon/ip6wtnxwkkx7vneygh2x.png',
    keywords: 'oracle‡오라클',
    date: '2020-07-23T07:47:54.030Z',
  },
  {
    uuid: 'noticon_xkpni0jqwgknvrm8fnds',
    title: 'GoogleCalendar NO BG',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1595515332/noticon/xkpni0jqwgknvrm8fnds.png',
    keywords: 'calendar‡google',
    date: '2020-07-23T14:42:17.031Z',
  },
  {
    uuid: 'noticon_wjiaaudvo6lp72pa0g2e',
    title: '42seoul',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1595584395/noticon/wjiaaudvo6lp72pa0g2e.png',
    keywords: '42seoul‡',
    date: '2020-07-24T09:53:18.934Z',
  },
  {
    uuid: 'noticon_e0mk5e2b1nnj3esi61jp',
    title: '메가존',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1595834505/noticon/e0mk5e2b1nnj3esi61jp.png',
    keywords: 'megazone‡mz',
    date: '2020-07-27T07:21:47.558Z',
  },
  {
    uuid: 'noticon_f7lgnhqkur1l8kpqlezk',
    title: 'amazon',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1595917675/noticon/f7lgnhqkur1l8kpqlezk.png',
    keywords: 'amazon‡',
    date: '2020-07-28T06:27:57.379Z',
  },
  {
    uuid: 'noticon_efearnovepxtabl3fts5',
    title: 'wizard cookie',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1595917804/noticon/efearnovepxtabl3fts5.png',
    keywords: 'wizard‡cookierun',
    date: '2020-07-28T06:30:06.766Z',
  },
  {
    uuid: 'noticon_k8bxpd1g0w2ixvt2ocui',
    title: 'apps script',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1595924138/noticon/k8bxpd1g0w2ixvt2ocui.png',
    keywords: 'google‡',
    date: '2020-07-28T08:15:39.996Z',
  },
  {
    uuid: 'noticon_nwjwtun5wxw5acnbciwn',
    title: 'arduino',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1595979197/noticon/nwjwtun5wxw5acnbciwn.png',
    keywords: 'arduino‡',
    date: '2020-07-28T23:33:20.290Z',
  },
  {
    uuid: 'noticon_otq1n45fefnpap67e1wr',
    title: '스캐너',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1596027092/noticon/otq1n45fefnpap67e1wr.png',
    keywords: 'scanner‡',
    date: '2020-07-29T12:51:35.055Z',
  },
  {
    uuid: 'noticon_k1zolgw6pkll0s85h8gn',
    title: '중세 그림',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1596027419/noticon/k1zolgw6pkll0s85h8gn.png',
    keywords: 'middle ages‡medieval age',
    date: '2020-07-29T12:57:02.044Z',
  },
  {
    uuid: 'noticon_c0fglbzoedkaqegyoon6',
    title: '한마음한몸운동본부',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1596027692/noticon/c0fglbzoedkaqegyoon6.png',
    keywords: '천주교‡가톨릭',
    date: '2020-07-29T13:01:34.459Z',
  },
  {
    uuid: 'noticon_nioxh630ih7kyuojlmxw',
    title: '천주교 서울대교구',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1596027917/noticon/nioxh630ih7kyuojlmxw.png',
    keywords: '천주교‡가톨릭',
    date: '2020-07-29T13:05:19.806Z',
  },
  {
    uuid: 'noticon_d7dtvqiyhbfzzbpmse5o',
    title: '십자가',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1596027963/noticon/d7dtvqiyhbfzzbpmse5o.png',
    keywords: '개신교‡',
    date: '2020-07-29T13:06:05.826Z',
  },
  {
    uuid: 'noticon_kpkbhgfmrttdqdt2lhay',
    title: '책',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1596028069/noticon/kpkbhgfmrttdqdt2lhay.png',
    keywords: 'books‡',
    date: '2020-07-29T13:07:51.848Z',
  },
  {
    uuid: 'noticon_hdm6e0ewnzffvmyul0v7',
    title: '책',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1596028161/noticon/hdm6e0ewnzffvmyul0v7.png',
    keywords: 'books‡',
    date: '2020-07-29T13:09:23.363Z',
  },
  {
    uuid: 'noticon_s7gqcft4gbhtixh13xnk',
    title: 'webMSX',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1596028290/noticon/s7gqcft4gbhtixh13xnk.png',
    keywords: 'MSX‡',
    date: '2020-07-29T13:11:32.787Z',
  },
  {
    uuid: 'noticon_lbkus12wtptsyvz41w05',
    title: 'Evernote',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1596028500/noticon/lbkus12wtptsyvz41w05.png',
    keywords: '에버노트‡',
    date: '2020-07-29T13:15:02.679Z',
  },
  {
    uuid: 'noticon_b5l7yiyb4rtoyujkujn3',
    title: 'ThinkWise',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1596028679/noticon/b5l7yiyb4rtoyujkujn3.png',
    keywords: '씽크와이즈‡TW',
    date: '2020-07-29T13:18:02.571Z',
  },
  {
    uuid: 'noticon_pjtaninycm6ve6cd1jgr',
    title: '평범한한글',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1596028779/noticon/pjtaninycm6ve6cd1jgr.png',
    keywords: '‡',
    date: '2020-07-29T13:19:41.247Z',
  },
  {
    uuid: 'noticon_rcu1lsyran7kfueziz8t',
    title: 'Workflowy',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1596030135/noticon/rcu1lsyran7kfueziz8t.png',
    keywords: '워크플로위‡',
    date: '2020-07-29T13:42:19.556Z',
  },
  {
    uuid: 'noticon_ucbmg8hplkixu09opjw6',
    title: 'Ansible',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1596100115/noticon/ucbmg8hplkixu09opjw6.png',
    keywords: 'green‡',
    date: '2020-07-30T09:08:37.378Z',
  },
  {
    uuid: 'noticon_d06v59qvkqyu2k16mypn',
    title: 'Ansible',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1596100161/noticon/d06v59qvkqyu2k16mypn.png',
    keywords: 'BlackOutline‡',
    date: '2020-07-30T09:09:23.464Z',
  },
  {
    uuid: 'noticon_ftnshyhcy3ljfdxcr98y',
    title: 'Ansible',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1596100206/noticon/ftnshyhcy3ljfdxcr98y.png',
    keywords: 'red‡',
    date: '2020-07-30T09:10:08.240Z',
  },
  {
    uuid: 'noticon_gskyzdmsmczc37slkowa',
    title: 'Ansible',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1596100219/noticon/gskyzdmsmczc37slkowa.png',
    keywords: 'black‡',
    date: '2020-07-30T09:10:21.263Z',
  },
  {
    uuid: 'noticon_lzgjxebk0ohon6otig1y',
    title: 'Ansible',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1596100321/noticon/lzgjxebk0ohon6otig1y.png',
    keywords: 'WhiteOutline‡',
    date: '2020-07-30T09:12:03.447Z',
  },
  {
    uuid: 'noticon_nuxrqqkw787ub9fpplqi',
    title: 'norton',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1596556054/noticon/nuxrqqkw787ub9fpplqi.png',
    keywords: 'norton‡t',
    date: '2020-08-04T15:47:36.247Z',
  },
  {
    uuid: 'noticon_s1hu9e63gmettiwgwmoy',
    title: 'Bitcoin',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1596697566/noticon/s1hu9e63gmettiwgwmoy.png',
    keywords: '‡',
    date: '2020-08-06T07:06:09.702Z',
  },
  {
    uuid: 'noticon_s7r3ivfijsuyaoewvw1f',
    title: 'Bitcoin',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1596697763/noticon/s7r3ivfijsuyaoewvw1f.png',
    keywords: '‡',
    date: '2020-08-06T07:09:26.802Z',
  },
  {
    uuid: 'noticon_sk2xelgefvoanor3vjjn',
    title: '라라벨',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1596763737/noticon/sk2xelgefvoanor3vjjn.png',
    keywords: '라라벨‡laravel',
    date: '2020-08-07T01:28:59.397Z',
  },
  {
    uuid: 'noticon_icyumt1lozt6bqjtm4oz',
    title: 'DayOne',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1596767232/noticon/icyumt1lozt6bqjtm4oz.png',
    keywords: '데이원‡일기',
    date: '2020-08-07T02:27:13.944Z',
  },
  {
    uuid: 'noticon_kss73uibidqf0l43ht0k',
    title: '코끼리',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1596947995/noticon/kss73uibidqf0l43ht0k.png',
    keywords: '코끼리‡kokkiri',
    date: '2020-08-09T04:39:57.022Z',
  },
  {
    uuid: 'noticon_vemyxc0hfgsj4ygtnump',
    title: '시몬스',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1596949202/noticon/vemyxc0hfgsj4ygtnump.png',
    keywords: '시몬스‡simmons',
    date: '2020-08-09T05:00:04.404Z',
  },
  {
    uuid: 'noticon_bkodf2vpu77erwnbb6yb',
    title: '시몬스',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1596949414/noticon/bkodf2vpu77erwnbb6yb.png',
    keywords: '시몬스‡',
    date: '2020-08-09T05:03:36.923Z',
  },
  {
    uuid: 'noticon_bzhmuxl3lmhu8cemhxot',
    title: 'kakao page',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1597142730/noticon/bzhmuxl3lmhu8cemhxot.png',
    keywords: '카카오‡kakao',
    date: '2020-08-11T10:45:33.311Z',
  },
  {
    uuid: 'noticon_x3cvjgckecon4xru7d6x',
    title: '리멤버',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1597211060/noticon/x3cvjgckecon4xru7d6x.png',
    keywords: 'remember‡Remember',
    date: '2020-08-12T05:44:22.649Z',
  },
  {
    uuid: 'noticon_yx4pbpbp6mtqo0yrinzk',
    title: 'history',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1597455632/noticon/yx4pbpbp6mtqo0yrinzk.png',
    keywords: '역사‡',
    date: '2020-08-15T01:40:34.399Z',
  },
  {
    uuid: 'noticon_m9x6mei2mo39iesqulm9',
    title: 'Sequelize',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1597622693/noticon/m9x6mei2mo39iesqulm9.png',
    keywords: 'sequelize‡orm',
    date: '2020-08-17T00:04:55.482Z',
  },
  {
    uuid: 'noticon_avedhz3pvaij65k3ztar',
    title: 'Express',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1597622806/noticon/avedhz3pvaij65k3ztar.png',
    keywords: 'express‡Express',
    date: '2020-08-17T00:06:48.089Z',
  },
  {
    uuid: 'noticon_yv79c466y66rbtrag4rt',
    title: '세븐일레븐',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1597652586/noticon/yv79c466y66rbtrag4rt.png',
    keywords: 'lotte‡seven eleven',
    date: '2020-08-17T08:23:07.756Z',
  },
  {
    uuid: 'noticon_bmjlplh6gv3plao5fsdc',
    title: '대학내일',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1597886596/noticon/bmjlplh6gv3plao5fsdc.png',
    keywords: '‡',
    date: '2020-08-20T01:23:18.466Z',
  },
  {
    uuid: 'noticon_bh8ph7z7cprug7mngane',
    title: '강장송안정_강',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1597917647/noticon/bh8ph7z7cprug7mngane.png',
    keywords: '강장송안정‡',
    date: '2020-08-20T10:00:49.439Z',
  },
  {
    uuid: 'noticon_ljvosawq01favs5mx4l3',
    title: '강장송안정_송',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1597917699/noticon/ljvosawq01favs5mx4l3.png',
    keywords: '강장송안정‡',
    date: '2020-08-20T10:01:41.250Z',
  },
  {
    uuid: 'noticon_pcctctrgbsrgwr1vx6l9',
    title: '강장송안정_안',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1597917713/noticon/pcctctrgbsrgwr1vx6l9.png',
    keywords: '강장송안정‡',
    date: '2020-08-20T10:01:55.236Z',
  },
  {
    uuid: 'noticon_aajpeehkwbhjrm82sf0l',
    title: '강장송안정_장',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1597917723/noticon/aajpeehkwbhjrm82sf0l.png',
    keywords: '강장송안정‡',
    date: '2020-08-20T10:02:05.355Z',
  },
  {
    uuid: 'noticon_mbzmhjvperfsfi7cmsaz',
    title: '강장송안정_정',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1597917733/noticon/mbzmhjvperfsfi7cmsaz.png',
    keywords: '강장송안정‡',
    date: '2020-08-20T10:02:15.869Z',
  },
  {
    uuid: 'noticon_pmuv2yqs1safwxpmt5rr',
    title: '대학내일',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1597977457/noticon/pmuv2yqs1safwxpmt5rr.png',
    keywords: '‡',
    date: '2020-08-21T02:37:39.242Z',
  },
  {
    uuid: 'noticon_suz7tzyhocs0jaynoalk',
    title: '을지대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1597987112/noticon/suz7tzyhocs0jaynoalk.png',
    keywords: '을지‡eulji',
    date: '2020-08-21T05:18:34.720Z',
  },
  {
    uuid: 'noticon_hordy8gddxte2ugzut9n',
    title: '을지대학교빅',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1597987220/noticon/hordy8gddxte2ugzut9n.png',
    keywords: '을지‡eulji',
    date: '2020-08-21T05:20:22.249Z',
  },
  {
    uuid: 'noticon_u5n8zy1mkcbukluz7b0r',
    title: '케어네이션',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1597997507/noticon/u5n8zy1mkcbukluz7b0r.png',
    keywords: '‡',
    date: '2020-08-21T08:11:49.047Z',
  },
  {
    uuid: 'noticon_iwlpbpipnuj5bgjkykov',
    title: '새마을금고',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1598027919/noticon/iwlpbpipnuj5bgjkykov.png',
    keywords: '‡',
    date: '2020-08-21T16:38:41.855Z',
  },
  {
    uuid: 'noticon_waa5rrzgzd54hdrphmo6',
    title: 'Up bank',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1598028063/noticon/waa5rrzgzd54hdrphmo6.png',
    keywords: '‡',
    date: '2020-08-21T16:41:05.040Z',
  },
  {
    uuid: 'noticon_vxemnmgycuqt416dsayz',
    title: 'Netflix',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1598028330/noticon/vxemnmgycuqt416dsayz.png',
    keywords: '‡',
    date: '2020-08-21T16:45:32.517Z',
  },
  {
    uuid: 'noticon_ce0ayk5njxcycypi38lq',
    title: 'KT',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1598028431/noticon/ce0ayk5njxcycypi38lq.png',
    keywords: '‡',
    date: '2020-08-21T16:47:16.455Z',
  },
  {
    uuid: 'noticon_mytuklfidwofd9sbmxvr',
    title: 'kfc',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1598167584/noticon/mytuklfidwofd9sbmxvr.png',
    keywords: '‡',
    date: '2020-08-23T07:26:26.872Z',
  },
  {
    uuid: 'noticon_vfnzhw56hmdtwhjpmsvh',
    title: '웨이브',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1598191373/noticon/vfnzhw56hmdtwhjpmsvh.png',
    keywords: 'Wavve‡웨이브',
    date: '2020-08-23T14:02:55.597Z',
  },
  {
    uuid: 'noticon_wkpgz0bjgv0omd9abkkc',
    title: 'penguin',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1598424029/noticon/wkpgz0bjgv0omd9abkkc.png',
    keywords: 'penguin‡animal',
    date: '2020-08-26T06:40:32.381Z',
  },
  {
    uuid: 'noticon_x5khvftyqtntkbmbyhaa',
    title: 'penguin',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1598424056/noticon/x5khvftyqtntkbmbyhaa.png',
    keywords: 'penguin‡animal',
    date: '2020-08-26T06:40:58.851Z',
  },
  {
    uuid: 'noticon_xqyvamducf8s65m9xoky',
    title: 'penguin',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1598424076/noticon/xqyvamducf8s65m9xoky.png',
    keywords: 'penguin‡animal',
    date: '2020-08-26T06:41:18.601Z',
  },
  {
    uuid: 'noticon_gilcbwyf1ktirzenmskp',
    title: 'penguin',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1598424097/noticon/gilcbwyf1ktirzenmskp.png',
    keywords: 'penguin‡animal',
    date: '2020-08-26T06:41:39.199Z',
  },
  {
    uuid: 'noticon_urg7ng6rrglez36cguns',
    title: '이화여대',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1598424204/noticon/urg7ng6rrglez36cguns.png',
    keywords: '이대‡대학교',
    date: '2020-08-26T06:43:26.325Z',
  },
  {
    uuid: 'noticon_haf6wb70zntuhfvfc53j',
    title: '리디북스',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1598535507/noticon/haf6wb70zntuhfvfc53j.png',
    keywords: 'ridibooks‡',
    date: '2020-08-27T13:38:30.309Z',
  },
  {
    uuid: 'noticon_rnyf8i2l18srfimarwjf',
    title: 'computer',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1598596808/noticon/rnyf8i2l18srfimarwjf.png',
    keywords: '컴퓨터‡desktop',
    date: '2020-08-28T06:40:10.783Z',
  },
  {
    uuid: 'noticon_k6hdyxwyzaqpl0hzio8c',
    title: 'Liner',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1598597131/noticon/k6hdyxwyzaqpl0hzio8c.png',
    keywords: 'liner‡',
    date: '2020-08-28T06:45:33.159Z',
  },
  {
    uuid: 'noticon_cbn3i4hjspzzq11dwr0f',
    title: 'Apple iWorks',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1598622363/noticon/cbn3i4hjspzzq11dwr0f.png',
    keywords: 'Keynote‡Numbers',
    date: '2020-08-28T13:46:05.026Z',
  },
  {
    uuid: 'noticon_ufsfl5qp7wf0nuokpdn5',
    title: 'chicken',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1598716851/noticon/ufsfl5qp7wf0nuokpdn5.png',
    keywords: '‡',
    date: '2020-08-29T16:00:52.965Z',
  },
  {
    uuid: 'noticon_cfh8c3tbngrjl2vtfsr9',
    title: 'bebe',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1598788894/noticon/cfh8c3tbngrjl2vtfsr9.png',
    keywords: '‡',
    date: '2020-08-30T12:01:36.555Z',
  },
  {
    uuid: 'noticon_xdgoowy9r1kvmwoci2vi',
    title: 'green dot',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1598833363/noticon/xdgoowy9r1kvmwoci2vi.png',
    keywords: 'green‡',
    date: '2020-08-31T00:22:45.202Z',
  },
  {
    uuid: 'noticon_yuuxsroba4v7dkcsb5oe',
    title: 'linear',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1598885349/noticon/yuuxsroba4v7dkcsb5oe.png',
    keywords: '‡',
    date: '2020-08-31T14:49:11.097Z',
  },
  {
    uuid: 'noticon_tnzjkh6jqtqrpe2yorx1',
    title: 'english',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1598885427/noticon/tnzjkh6jqtqrpe2yorx1.png',
    keywords: '‡',
    date: '2020-08-31T14:50:29.459Z',
  },
  {
    uuid: 'noticon_cqfpl0uptvlh3oy3uq3i',
    title: 'alegro',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1598885469/noticon/cqfpl0uptvlh3oy3uq3i.png',
    keywords: '‡',
    date: '2020-08-31T14:51:11.912Z',
  },
  {
    uuid: 'noticon_zowhucpf32h4afi8kmuq',
    title: 'company',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1598885598/noticon/zowhucpf32h4afi8kmuq.png',
    keywords: '‡',
    date: '2020-08-31T14:53:20.044Z',
  },
  {
    uuid: 'noticon_aj8qsplfrlkhen6oulqh',
    title: 'web',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1598885735/noticon/aj8qsplfrlkhen6oulqh.png',
    keywords: '‡',
    date: '2020-08-31T14:55:37.016Z',
  },
  {
    uuid: 'noticon_oyng33ynqmsn9djtvsjr',
    title: '원격 데스크톱',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1598917400/noticon/oyng33ynqmsn9djtvsjr.png',
    keywords: 'remove deskt‡',
    date: '2020-08-31T23:43:23.251Z',
  },
  {
    uuid: 'noticon_norycjnps9lonjcu89yj',
    title: 'selman',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1598977323/noticon/norycjnps9lonjcu89yj.png',
    keywords: '‡',
    date: '2020-09-01T16:22:06.154Z',
  },
  {
    uuid: 'noticon_c5cyndudltka3mddobj5',
    title: 'kafka',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1599014155/noticon/c5cyndudltka3mddobj5.png',
    keywords: '‡',
    date: '2020-09-02T02:35:57.551Z',
  },
  {
    uuid: 'noticon_td9xnk1y0beqn2z5csvw',
    title: 'Xd',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1599037072/noticon/td9xnk1y0beqn2z5csvw.png',
    keywords: 'Adobe‡prototyping',
    date: '2020-09-02T08:57:54.711Z',
  },
  {
    uuid: 'noticon_jjoun0buw8pc6fknpczn',
    title: 'crop',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1599040324/noticon/jjoun0buw8pc6fknpczn.png',
    keywords: '‡',
    date: '2020-09-02T09:52:06.334Z',
  },
  {
    uuid: 'noticon_zgobbpyogyiqzpzylr7k',
    title: 'Emacs',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1599058450/noticon/zgobbpyogyiqzpzylr7k.png',
    keywords: 'numix‡',
    date: '2020-09-02T14:54:12.739Z',
  },
  {
    uuid: 'noticon_rhsjertzv2j7hhp7qcrp',
    title: 'run',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1599063637/noticon/rhsjertzv2j7hhp7qcrp.gif',
    keywords: '‡',
    date: '2020-09-02T16:20:40.317Z',
  },
  {
    uuid: 'noticon_dtot8lmybpstzcgaxvpp',
    title: 'ebox',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1599102691/noticon/dtot8lmybpstzcgaxvpp.png',
    keywords: '‡',
    date: '2020-09-03T03:11:33.903Z',
  },
  {
    uuid: 'noticon_e00mh8ro3exaiudyu1n7',
    title: '안랩',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1599120832/noticon/e00mh8ro3exaiudyu1n7.png',
    keywords: '‡',
    date: '2020-09-03T08:13:54.509Z',
  },
  {
    uuid: 'noticon_i01fgpeee8vxysyf0eev',
    title: 'gridsome',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1599130751/noticon/i01fgpeee8vxysyf0eev.png',
    keywords: '‡',
    date: '2020-09-03T10:59:13.299Z',
  },
  {
    uuid: 'noticon_do7zcpgklaggkcuq2zqy',
    title: 'SVG',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1599131471/noticon/do7zcpgklaggkcuq2zqy.png',
    keywords: 'W3C SVG‡https://www.w3.org/2009/08/svg-logos.html',
    date: '2020-09-03T11:11:13.910Z',
  },
  {
    uuid: 'noticon_sufrvjdeksyn1zmc6aqi',
    title: 'SVG',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1599135940/noticon/sufrvjdeksyn1zmc6aqi.png',
    keywords:
      'https://www.w3.org/Graphics/SVG/‡https://www.w3.org/Graphics/SVG/svglogo.svg',
    date: '2020-09-03T12:25:49.951Z',
  },
  {
    uuid: 'noticon_yarpwlpicofn5fuazrsb',
    title: 'bubble',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1599295216/noticon/yarpwlpicofn5fuazrsb.png',
    keywords: '‡',
    date: '2020-09-05T08:40:19.296Z',
  },
  {
    uuid: 'noticon_phsft90fvptmy3izf8k6',
    title: 'marceline',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1599488198/noticon/phsft90fvptmy3izf8k6.png',
    keywords: '‡',
    date: '2020-09-07T14:16:41.675Z',
  },
  {
    uuid: 'noticon_vpnvn0koakboafa4q5ra',
    title: '포항공과대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1599545793/noticon/vpnvn0koakboafa4q5ra.png',
    keywords: 'postech, 포스텍‡',
    date: '2020-09-08T06:16:35.580Z',
  },
  {
    uuid: 'noticon_xvxk96xzmsxoxjq95dfw',
    title: '배달의민족',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1599555979/noticon/xvxk96xzmsxoxjq95dfw.png',
    keywords: '‡',
    date: '2020-09-08T09:06:22.781Z',
  },
  {
    uuid: 'noticon_aujyuoe65dcp1ufeaucg',
    title: '플로',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1599627978/noticon/aujyuoe65dcp1ufeaucg.png',
    keywords: '‡',
    date: '2020-09-09T05:06:19.967Z',
  },
  {
    uuid: 'noticon_zc7lbetlq9qi96zhbnux',
    title: '코오롱몰',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1599695453/noticon/zc7lbetlq9qi96zhbnux.png',
    keywords: '‡',
    date: '2020-09-09T23:50:55.131Z',
  },
  {
    uuid: 'noticon_rrcjxi7u1expnd3pc0cd',
    title: '다다픽',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1599695543/noticon/rrcjxi7u1expnd3pc0cd.png',
    keywords: '‡',
    date: '2020-09-09T23:52:25.242Z',
  },
  {
    uuid: 'noticon_pwlqjrbxez0dbitikn0h',
    title: '코오롱',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1599714472/noticon/pwlqjrbxez0dbitikn0h.png',
    keywords: '‡',
    date: '2020-09-10T05:07:54.182Z',
  },
  {
    uuid: 'noticon_vxfzylyicvntj7au8mha',
    title: 'naver',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1599714667/noticon/vxfzylyicvntj7au8mha.png',
    keywords: '‡',
    date: '2020-09-10T05:11:09.187Z',
  },
  {
    uuid: 'noticon_c9dgkhp3m5rxmzn3fnp9',
    title: 'eslint',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1599890132/noticon/c9dgkhp3m5rxmzn3fnp9.png',
    keywords: 'javascript‡EsLint',
    date: '2020-09-12T05:55:34.670Z',
  },
  {
    uuid: 'noticon_qujndrnqdqwvctniw1nd',
    title: '경희대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1599898177/noticon/qujndrnqdqwvctniw1nd.png',
    keywords: '대학교‡',
    date: '2020-09-12T08:09:39.309Z',
  },
  {
    uuid: 'noticon_e4md9wisedegurzyjfa6',
    title: '헤이조이스',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1599979819/noticon/e4md9wisedegurzyjfa6.png',
    keywords: '‡',
    date: '2020-09-13T06:50:20.907Z',
  },
  {
    uuid: 'noticon_u1usysi1vykya9i9u6rj',
    title: 'Raspberry Pi',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1600077454/noticon/u1usysi1vykya9i9u6rj.png',
    keywords: 'Raspberry‡RPI',
    date: '2020-09-14T09:57:36.824Z',
  },
  {
    uuid: 'noticon_lgmtgktbikunxj65xfxd',
    title: 'CSV',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1600077852/noticon/lgmtgktbikunxj65xfxd.png',
    keywords: 'CSV‡CSV',
    date: '2020-09-14T10:04:14.863Z',
  },
  {
    uuid: 'noticon_t4fn9cla4dfwijnjtegq',
    title: 'Riot Games',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1600078210/noticon/t4fn9cla4dfwijnjtegq.png',
    keywords: '‡',
    date: '2020-09-14T10:10:13.093Z',
  },
  {
    uuid: 'noticon_aam0ipxeeopuvl0l90yr',
    title: 'adbrix',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1600179944/noticon/aam0ipxeeopuvl0l90yr.png',
    keywords: '‡',
    date: '2020-09-15T14:25:47.016Z',
  },
  {
    uuid: 'noticon_ayvhqsqwqbfr0dauelcv',
    title: 'brainjs',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1600597433/noticon/ayvhqsqwqbfr0dauelcv.png',
    keywords: '‡',
    date: '2020-09-20T10:23:55.209Z',
  },
  {
    uuid: 'noticon_hk60kbfbqnedpguy0gbb',
    title: 'NestJS',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1600658982/noticon/hk60kbfbqnedpguy0gbb.png',
    keywords: 'NestJS‡nest.js',
    date: '2020-09-21T03:29:44.055Z',
  },
  {
    uuid: 'noticon_fwipwwecog8ni8ip38rz',
    title: 'ADA',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1600744482/noticon/fwipwwecog8ni8ip38rz.png',
    keywords: '‡',
    date: '2020-09-22T03:14:44.269Z',
  },
  {
    uuid: 'noticon_h8idsn5pakygfsgyglpq',
    title: 'LG',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1600754034/noticon/h8idsn5pakygfsgyglpq.png',
    keywords: '엘지‡',
    date: '2020-09-22T05:53:56.593Z',
  },
  {
    uuid: 'noticon_qreyezxkjkizie43tguj',
    title: 'sentry',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1600767958/noticon/qreyezxkjkizie43tguj.png',
    keywords: 'log‡',
    date: '2020-09-22T09:46:00.836Z',
  },
  {
    uuid: 'noticon_z8dxfey3j7hyt2ooewuf',
    title: 'azar',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1600768656/noticon/z8dxfey3j7hyt2ooewuf.png',
    keywords: '‡',
    date: '2020-09-22T09:57:39.166Z',
  },
  {
    uuid: 'noticon_zaimlnhgqhxyx6z75rls',
    title: 'anchor',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1600848252/noticon/zaimlnhgqhxyx6z75rls.png',
    keywords: '‡',
    date: '2020-09-23T08:04:15.046Z',
  },
  {
    uuid: 'noticon_werffx6izvmf0ude03js',
    title: '비모',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1600848589/noticon/werffx6izvmf0ude03js.png',
    keywords: '‡',
    date: '2020-09-23T08:09:52.062Z',
  },
  {
    uuid: 'noticon_mwz0mmcxd2fpdrzrn11e',
    title: 'timeline',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1601360261/noticon/mwz0mmcxd2fpdrzrn11e.png',
    keywords: 'timeline‡',
    date: '2020-09-29T06:17:43.916Z',
  },
  {
    uuid: 'noticon_otchiljqx0q336gff3no',
    title: 'js',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1601426629/noticon/otchiljqx0q336gff3no.png',
    keywords: '‡',
    date: '2020-09-30T00:43:53.657Z',
  },
  {
    uuid: 'noticon_l6t6zqfacfgmeogmwmkl',
    title: 'css3',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1601427023/noticon/l6t6zqfacfgmeogmwmkl.png',
    keywords: 'css3‡',
    date: '2020-09-30T00:50:25.997Z',
  },
  {
    uuid: 'noticon_ykxboxbc32tzcufx7uio',
    title: '오토레이아웃-가로바향',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1601854638/noticon/ykxboxbc32tzcufx7uio.png',
    keywords: '‡',
    date: '2020-10-04T23:37:20.049Z',
  },
  {
    uuid: 'noticon_d8it0iw1fl50fo92slub',
    title: 'codeblocks',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1601885504/noticon/d8it0iw1fl50fo92slub.png',
    keywords: '‡',
    date: '2020-10-05T08:11:46.265Z',
  },
  {
    uuid: 'noticon_ygpqxlkijrib3o8u9gwf',
    title: 'd3js',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1602046966/noticon/ygpqxlkijrib3o8u9gwf.png',
    keywords: 'd3‡d3js',
    date: '2020-10-07T05:02:49.121Z',
  },
  {
    uuid: 'noticon_lcr8q6ifthttj6my3a7b',
    title: 'lodash',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1602047034/noticon/lcr8q6ifthttj6my3a7b.png',
    keywords: 'lodash‡',
    date: '2020-10-07T05:03:56.410Z',
  },
  {
    uuid: 'noticon_b2lyg2vutf2yagk9tgpp',
    title: '수피온 soopion',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1602059507/noticon/b2lyg2vutf2yagk9tgpp.png',
    keywords: '수피온‡soopion',
    date: '2020-10-07T08:31:49.046Z',
  },
  {
    uuid: 'noticon_qbmcbrf3tbjmjlrzkanz',
    title: '네이버 카페',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1602059626/noticon/qbmcbrf3tbjmjlrzkanz.png',
    keywords: '네이버 카페‡naver cafe',
    date: '2020-10-07T08:33:48.576Z',
  },
  {
    uuid: 'noticon_f5snagl6dlcgmwzt7lhw',
    title: '네이버 블로그',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1602059656/noticon/f5snagl6dlcgmwzt7lhw.png',
    keywords: '네이버 블로그‡naver blog',
    date: '2020-10-07T08:34:18.343Z',
  },
  {
    uuid: 'noticon_cqdbwlm9q8qk1brtes3a',
    title: 'Dillema',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1602069942/noticon/cqdbwlm9q8qk1brtes3a.png',
    keywords: 'Dillema‡Dillema',
    date: '2020-10-07T11:25:44.350Z',
  },
  {
    uuid: 'noticon_gx3mfhnred0cubw7v4xz',
    title: 'king sejong',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1602115433/noticon/gx3mfhnred0cubw7v4xz.png',
    keywords: '한글,hangul‡korean',
    date: '2020-10-08T00:03:55.480Z',
  },
  {
    uuid: 'noticon_owhrsm7fwznd39eli3d6',
    title: 'Photoshop',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1602172134/noticon/owhrsm7fwznd39eli3d6.png',
    keywords: 'Adobe‡',
    date: '2020-10-08T15:48:56.304Z',
  },
  {
    uuid: 'noticon_kmx6nplaimdedwzjpbl0',
    title: 'Illustrator',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1602172177/noticon/kmx6nplaimdedwzjpbl0.png',
    keywords: 'Adobe‡',
    date: '2020-10-08T15:49:39.459Z',
  },
  {
    uuid: 'noticon_euhouinhmkhkkxqxmozj',
    title: 'Lightroom',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1602172206/noticon/euhouinhmkhkkxqxmozj.png',
    keywords: 'Adobe‡',
    date: '2020-10-08T15:50:08.404Z',
  },
  {
    uuid: 'noticon_ydc3axyoodglmu4mtmg1',
    title: 'Premiere Pro',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1602172237/noticon/ydc3axyoodglmu4mtmg1.png',
    keywords: 'Adobe‡',
    date: '2020-10-08T15:50:39.980Z',
  },
  {
    uuid: 'noticon_s7pj4yoqubi9u54b7pnw',
    title: 'InDesign',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1602172332/noticon/s7pj4yoqubi9u54b7pnw.png',
    keywords: 'Adobe‡',
    date: '2020-10-08T15:52:14.410Z',
  },
  {
    uuid: 'noticon_bicxcwiqhb1kezetfuc8',
    title: 'After Effects',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1602172366/noticon/bicxcwiqhb1kezetfuc8.png',
    keywords: 'Adobe‡',
    date: '2020-10-08T15:52:48.635Z',
  },
  {
    uuid: 'noticon_l1ncbm0otyteut7xnjml',
    title: 'Spark',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1602172714/noticon/l1ncbm0otyteut7xnjml.png',
    keywords: 'Adobe‡KKI',
    date: '2020-10-08T15:58:36.203Z',
  },
  {
    uuid: 'noticon_jggtp4pm6dybara41sv4',
    title: 'Excel',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1602173012/noticon/jggtp4pm6dybara41sv4.png',
    keywords: 'Microsoft Office‡KKI',
    date: '2020-10-08T16:03:34.635Z',
  },
  {
    uuid: 'noticon_hxsskyzrqldzatkqtsx9',
    title: 'Word',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1602173039/noticon/hxsskyzrqldzatkqtsx9.png',
    keywords: 'Microsoft Office‡KKI',
    date: '2020-10-08T16:04:02.842Z',
  },
  {
    uuid: 'noticon_qxvc8rykdemiguiqozwd',
    title: 'PowerPoint',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1602173097/noticon/qxvc8rykdemiguiqozwd.png',
    keywords: 'Microsoft Office‡KKI',
    date: '2020-10-08T16:04:59.127Z',
  },
  {
    uuid: 'noticon_sjqe4oye5gwu2qyivtw9',
    title: 'Outlook',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1602173128/noticon/sjqe4oye5gwu2qyivtw9.png',
    keywords: 'Microsoft Office‡KKI',
    date: '2020-10-08T16:05:30.327Z',
  },
  {
    uuid: 'noticon_dgk1lfkhjyzyzjoabmvk',
    title: 'Google Sites',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1602173995/noticon/dgk1lfkhjyzyzjoabmvk.png',
    keywords: 'Google‡KKI',
    date: '2020-10-08T16:19:58.480Z',
  },
  {
    uuid: 'noticon_bwnxowsh7qutuzpn3eu9',
    title: 'Google Forms',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1602174106/noticon/bwnxowsh7qutuzpn3eu9.png',
    keywords: 'Google‡KKI',
    date: '2020-10-08T16:21:49.053Z',
  },
  {
    uuid: 'noticon_lbkfuhyc6repgyiip8b2',
    title: 'Google Ads',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1602174427/noticon/lbkfuhyc6repgyiip8b2.png',
    keywords: '구글‡KKI',
    date: '2020-10-08T16:27:09.885Z',
  },
  {
    uuid: 'noticon_ctwz9jamllhxajjx3c2f',
    title: '한글 2020',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1602175630/noticon/ctwz9jamllhxajjx3c2f.png',
    keywords: '한컴 오피스‡KKI',
    date: '2020-10-08T16:47:12.727Z',
  },
  {
    uuid: 'noticon_slz2ohjw1vyfizcjlytp',
    title: 'Spark AR',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1602176367/noticon/slz2ohjw1vyfizcjlytp.png',
    keywords: 'Facebook‡KKI',
    date: '2020-10-08T16:59:30.235Z',
  },
  {
    uuid: 'noticon_cckgj2obqc6xsezo6zgd',
    title: 'IFTTT',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1602176584/noticon/cckgj2obqc6xsezo6zgd.png',
    keywords: '‡KKI',
    date: '2020-10-08T17:03:06.556Z',
  },
  {
    uuid: 'noticon_uh6rl7yipjtwt4qrj6vd',
    title: 'Eisenhower',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1602278414/noticon/uh6rl7yipjtwt4qrj6vd.png',
    keywords: '‡',
    date: '2020-10-09T21:20:17.449Z',
  },
  {
    uuid: 'noticon_fn594es3myqc6psj5ted',
    title: 'Step',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1602280145/noticon/fn594es3myqc6psj5ted.png',
    keywords: '‡',
    date: '2020-10-09T21:49:08.580Z',
  },
  {
    uuid: 'noticon_ptvgtrasmao9rytq0dd2',
    title: 'step2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1602280299/noticon/ptvgtrasmao9rytq0dd2.png',
    keywords: '‡',
    date: '2020-10-09T21:51:42.213Z',
  },
  {
    uuid: 'noticon_kmmq4tea9emvc0qcwl0u',
    title: 'Plan',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1602338370/noticon/kmmq4tea9emvc0qcwl0u.png',
    keywords: 'Plan‡Plan',
    date: '2020-10-10T13:59:32.162Z',
  },
  {
    uuid: 'noticon_qrsmk8pitzmkulkrdid2',
    title: '크리에이터클럽',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1602416151/noticon/qrsmk8pitzmkulkrdid2.png',
    keywords: '크클‡passionoil',
    date: '2020-10-11T11:35:54.050Z',
  },
  {
    uuid: 'noticon_qagrrmevs0oekkwtvdpu',
    title: 'dd',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1602726385/noticon/qagrrmevs0oekkwtvdpu.gif',
    keywords: 'dd‡dd',
    date: '2020-10-15T01:46:28.557Z',
  },
  {
    uuid: 'noticon_qbpdhkyq4yb9oodrlkgf',
    title: 'intro',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1602751961/noticon/qbpdhkyq4yb9oodrlkgf.png',
    keywords: 'ready‡',
    date: '2020-10-15T08:52:43.401Z',
  },
  {
    uuid: 'noticon_wfyb5mf27do4w7erzvau',
    title: 'subtitle',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1602752070/noticon/wfyb5mf27do4w7erzvau.png',
    keywords: '자막‡',
    date: '2020-10-15T08:54:32.364Z',
  },
  {
    uuid: 'noticon_suqqo6n9pz8jfd5wbhcv',
    title: 'controller',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1602752247/noticon/suqqo6n9pz8jfd5wbhcv.png',
    keywords: '컨트롤러‡',
    date: '2020-10-15T08:57:29.804Z',
  },
  {
    uuid: 'noticon_phtvgkav7umzx4ae8lec',
    title: 'watcha',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1602812088/noticon/phtvgkav7umzx4ae8lec.png',
    keywords: '왓챠‡play',
    date: '2020-10-16T01:34:50.185Z',
  },
  {
    uuid: 'noticon_nzp7kp9mlrnbwa9kwh9t',
    title: 'noticon guide',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1602812272/noticon/nzp7kp9mlrnbwa9kwh9t.gif',
    keywords: 'how to use‡',
    date: '2020-10-16T01:37:55.091Z',
  },
  {
    uuid: 'noticon_r2mztov2tu8kfqa58nrm',
    title: 'flink',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603179522/noticon/r2mztov2tu8kfqa58nrm.png',
    keywords: '‡',
    date: '2020-10-20T07:38:44.353Z',
  },
  {
    uuid: 'noticon_n3eiiai6sjcqgldyzwmb',
    title: 'jobplanet',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603251885/noticon/n3eiiai6sjcqgldyzwmb.png',
    keywords: '‡',
    date: '2020-10-21T03:44:47.621Z',
  },
  {
    uuid: 'noticon_xjhzh83kc9dcl23wjt7o',
    title: '스토리잼',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603258055/noticon/xjhzh83kc9dcl23wjt7o.png',
    keywords: 'storyjam‡',
    date: '2020-10-21T05:27:37.722Z',
  },
  {
    uuid: 'noticon_hn81l3ow7lkmtk1wpmtz',
    title: 'naru_하품',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603261622/noticon/hn81l3ow7lkmtk1wpmtz.gif',
    keywords: '#나르 #하품해 #귀여워‡',
    date: '2020-10-21T06:27:05.101Z',
  },
  {
    uuid: 'noticon_on4zce55y3uctgbnauyf',
    title: '11번가',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603261780/noticon/on4zce55y3uctgbnauyf.png',
    keywords: '십일번가‡11street',
    date: '2020-10-21T06:29:42.161Z',
  },
  {
    uuid: 'noticon_gx3uofzuap9mt3zri18p',
    title: '렝가_인싸',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603261912/noticon/gx3uofzuap9mt3zri18p.gif',
    keywords: '렝가너무귀여웡‡노션이 조금 귀여워졌읍니다',
    date: '2020-10-21T06:31:56.221Z',
  },
  {
    uuid: 'noticon_lfwtrcwjsxczvsoaoyep',
    title: '11번가',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603261923/noticon/lfwtrcwjsxczvsoaoyep.png',
    keywords: '십일번가‡11street',
    date: '2020-10-21T06:32:05.611Z',
  },
  {
    uuid: 'noticon_wamvxiy6fvyjuqyugn6n',
    title: '11번가',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603262009/noticon/wamvxiy6fvyjuqyugn6n.png',
    keywords: '십일번가‡11street',
    date: '2020-10-21T06:33:31.599Z',
  },
  {
    uuid: 'noticon_xrcdgjh26nldc13grpv0',
    title: 'FANCIM',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603262044/noticon/xrcdgjh26nldc13grpv0.png',
    keywords: '‡',
    date: '2020-10-21T06:34:06.421Z',
  },
  {
    uuid: 'noticon_kwt5kctetxuhulzo1qst',
    title: '핑구',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603269857/noticon/kwt5kctetxuhulzo1qst.png',
    keywords: '핑구‡안녕히계세요',
    date: '2020-10-21T08:44:20.390Z',
  },
  {
    uuid: 'noticon_skwhrxwlgxaetg2ehslf',
    title: '퇴사각',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603269900/noticon/skwhrxwlgxaetg2ehslf.png',
    keywords: '퇴사‡퇴사하자',
    date: '2020-10-21T08:45:02.680Z',
  },
  {
    uuid: 'noticon_p725qec3mt25asx1gokh',
    title: 'google analytics',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603362178/noticon/p725qec3mt25asx1gokh.png',
    keywords: 'google‡',
    date: '2020-10-22T10:23:01.227Z',
  },
  {
    uuid: 'noticon_ma7cflvc8l7an6wtyvei',
    title: 'reactor',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603422531/noticon/ma7cflvc8l7an6wtyvei.png',
    keywords: 'project reactor‡project reactor',
    date: '2020-10-23T03:08:54.031Z',
  },
  {
    uuid: 'noticon_snx80yunsrqtxnijopnh',
    title: 'lombok',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603422708/noticon/snx80yunsrqtxnijopnh.png',
    keywords: 'project lombok‡project lombok',
    date: '2020-10-23T03:11:50.222Z',
  },
  {
    uuid: 'noticon_az0cvs28lm7gxoowlsva',
    title: 'mysql',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603423163/noticon/az0cvs28lm7gxoowlsva.png',
    keywords: 'mysql‡mysql',
    date: '2020-10-23T03:19:26.067Z',
  },
  {
    uuid: 'noticon_s3sridqyw5xalrxrnreu',
    title: 'ss test',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603672003/noticon/s3sridqyw5xalrxrnreu.png',
    keywords: '‡',
    date: '2020-10-26T00:26:45.632Z',
  },
  {
    uuid: 'noticon_q2wwvzia8s5eg7fvfjoc',
    title: 'partydoge',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603679075/noticon/q2wwvzia8s5eg7fvfjoc.gif',
    keywords: '‡',
    date: '2020-10-26T02:24:37.303Z',
  },
  {
    uuid: 'noticon_itvs5d1d3vzplxuysdtt',
    title: 'fatdoge',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603679125/noticon/itvs5d1d3vzplxuysdtt.png',
    keywords: '‡',
    date: '2020-10-26T02:25:27.504Z',
  },
  {
    uuid: 'noticon_rfgzeyojg7miwxekxebp',
    title: 'doge2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603679176/noticon/rfgzeyojg7miwxekxebp.png',
    keywords: '‡',
    date: '2020-10-26T02:26:18.883Z',
  },
  {
    uuid: 'noticon_tw10pbuc7czrznrxbbri',
    title: 'screamdoge',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603679236/noticon/tw10pbuc7czrznrxbbri.png',
    keywords: '‡',
    date: '2020-10-26T02:27:21.801Z',
  },
  {
    uuid: 'noticon_dcvetqndre7gda3ttijy',
    title: 'partydoge',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603679366/noticon/dcvetqndre7gda3ttijy.gif',
    keywords: '‡',
    date: '2020-10-26T02:29:28.834Z',
  },
  {
    uuid: 'noticon_hybzzqipun5hoqiabvbo',
    title: 'load cat',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603679525/noticon/hybzzqipun5hoqiabvbo.gif',
    keywords: '‡',
    date: '2020-10-26T02:32:08.265Z',
  },
  {
    uuid: 'noticon_dzpae1wmwahljrckiw1z',
    title: 'issue',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603679563/noticon/dzpae1wmwahljrckiw1z.gif',
    keywords: '‡',
    date: '2020-10-26T02:32:45.878Z',
  },
  {
    uuid: 'noticon_sc2yu8spfq69pirulsyz',
    title: 'coffin_dance',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603679608/noticon/sc2yu8spfq69pirulsyz.gif',
    keywords: '‡',
    date: '2020-10-26T02:33:31.056Z',
  },
  {
    uuid: 'noticon_nzqrvl0zwugomhzqmmfm',
    title: 'dumdfox',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603679648/noticon/nzqrvl0zwugomhzqmmfm.gif',
    keywords: '‡',
    date: '2020-10-26T02:34:11.634Z',
  },
  {
    uuid: 'noticon_g16oddfpbk4wci2ec7nr',
    title: 'letmeout',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603679690/noticon/g16oddfpbk4wci2ec7nr.gif',
    keywords: '‡',
    date: '2020-10-26T02:34:52.635Z',
  },
  {
    uuid: 'noticon_scjbaolxl0t5fvopv28z',
    title: 'google analytics',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603706706/noticon/scjbaolxl0t5fvopv28z.png',
    keywords: 'google‡',
    date: '2020-10-26T10:05:08.018Z',
  },
  {
    uuid: 'noticon_zubtpwp9sd8u7mr8rqtv',
    title: 'neptune1',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603851842/noticon/zubtpwp9sd8u7mr8rqtv.png',
    keywords: 'neptune‡',
    date: '2020-10-28T02:24:06.012Z',
  },
  {
    uuid: 'noticon_f2wajdotzrucn3gpcaan',
    title: 'icon_23',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603851930/noticon/f2wajdotzrucn3gpcaan.png',
    keywords: '브붕콘‡',
    date: '2020-10-28T02:25:31.929Z',
  },
  {
    uuid: 'noticon_n8ljqpyipbbnr794vubg',
    title: '힘의차이',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603852083/noticon/n8ljqpyipbbnr794vubg.png',
    keywords: '브붕콘‡',
    date: '2020-10-28T02:28:04.946Z',
  },
  {
    uuid: 'noticon_aawxo09iryutmtcukouz',
    title: 'nope',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603852118/noticon/aawxo09iryutmtcukouz.gif',
    keywords: 'nope‡',
    date: '2020-10-28T02:28:41.830Z',
  },
  {
    uuid: 'noticon_iwbd31aaoxcxh1ololsi',
    title: '니예니예알게쯥니다',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603852170/noticon/iwbd31aaoxcxh1ololsi.png',
    keywords: '‡',
    date: '2020-10-28T02:29:32.477Z',
  },
  {
    uuid: 'noticon_vxvmlhxsykestqpfxsks',
    title: '박수짝짝',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603852307/noticon/vxvmlhxsykestqpfxsks.png',
    keywords: '‡',
    date: '2020-10-28T02:31:49.382Z',
  },
  {
    uuid: 'noticon_vq2qnfpgny4yepkcztc1',
    title: '윤수달',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603852458/noticon/vq2qnfpgny4yepkcztc1.gif',
    keywords: '‡',
    date: '2020-10-28T02:34:22.644Z',
  },
  {
    uuid: 'noticon_kr9ytjdznz8lwurmmzmu',
    title: 'quasar',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603875415/noticon/kr9ytjdznz8lwurmmzmu.png',
    keywords: '퀘이사‡',
    date: '2020-10-28T08:56:57.879Z',
  },
  {
    uuid: 'noticon_gnexntadmknpplejs71x',
    title: 'Clickhouse',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603934281/noticon/gnexntadmknpplejs71x.png',
    keywords: '‡',
    date: '2020-10-29T01:18:03.470Z',
  },
  {
    uuid: 'noticon_nkwjmxbhpru9oi7ihvkl',
    title: 'ArangoDB',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603934408/noticon/nkwjmxbhpru9oi7ihvkl.png',
    keywords: '‡',
    date: '2020-10-29T01:20:10.675Z',
  },
  {
    uuid: 'noticon_ph5ne71gtsgwn57jev6l',
    title: 'Vitess',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603934498/noticon/ph5ne71gtsgwn57jev6l.png',
    keywords: '‡',
    date: '2020-10-29T01:21:40.030Z',
  },
  {
    uuid: 'noticon_ysmq6khladc3xwv5h2uw',
    title: '카카오워크',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1604042708/noticon/ysmq6khladc3xwv5h2uw.png',
    keywords: '카카오‡팀메신저',
    date: '2020-10-30T07:25:10.804Z',
  },
  {
    uuid: 'noticon_d9f3rjna9wttdvudhhbb',
    title: 'dancing',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1604312662/noticon/d9f3rjna9wttdvudhhbb.gif',
    keywords: 'tom‡jerry',
    date: '2020-11-02T10:24:25.757Z',
  },
  {
    uuid: 'noticon_ylzyscsplpx4ojdnar3p',
    title: '발싸!',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1604312707/noticon/ylzyscsplpx4ojdnar3p.png',
    keywords: '람쥐‡다람쥐',
    date: '2020-11-02T10:25:09.819Z',
  },
  {
    uuid: 'noticon_lszixeliofxavafeg4ld',
    title: 'crying_cat',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1604312756/noticon/lszixeliofxavafeg4ld.png',
    keywords: 'cat‡meme',
    date: '2020-11-02T10:26:09.639Z',
  },
  {
    uuid: 'noticon_y4iyyjgmlojqoribwl5a',
    title: 'C#',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1604312798/noticon/y4iyyjgmlojqoribwl5a.png',
    keywords: 'C‡C#',
    date: '2020-11-02T10:26:40.739Z',
  },
  {
    uuid: 'noticon_jh85ckmzn0ubj7vkizd1',
    title: 'dancing_dog',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1604312855/noticon/jh85ckmzn0ubj7vkizd1.gif',
    keywords: 'dancing‡dog',
    date: '2020-11-02T10:27:38.559Z',
  },
  {
    uuid: 'noticon_bg4klxlvn0p7j6097vfe',
    title: 'wow',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1604312889/noticon/bg4klxlvn0p7j6097vfe.png',
    keywords: 'dog‡wow',
    date: '2020-11-02T10:28:11.259Z',
  },
  {
    uuid: 'noticon_hilj9cdgj1ceedjexccc',
    title: 'thank_you',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1604312942/noticon/hilj9cdgj1ceedjexccc.gif',
    keywords: 'jerry‡thankyou',
    date: '2020-11-02T10:29:06.331Z',
  },
  {
    uuid: 'noticon_i2pmnydjfz51jcxrifns',
    title: 'amongus',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1604312972/noticon/i2pmnydjfz51jcxrifns.png',
    keywords: 'amongus‡amongus',
    date: '2020-11-02T10:29:34.836Z',
  },
  {
    uuid: 'noticon_q33oaqpazumjvrbvivdu',
    title: 'dogs',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1604313044/noticon/q33oaqpazumjvrbvivdu.gif',
    keywords: 'dog‡dogs',
    date: '2020-11-02T10:30:47.147Z',
  },
  {
    uuid: 'noticon_slgr5mvfizcgaumux3yw',
    title: 'what',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1604313068/noticon/slgr5mvfizcgaumux3yw.gif',
    keywords: 'what‡wtf',
    date: '2020-11-02T10:31:12.814Z',
  },
  {
    uuid: 'noticon_ff5cnw9a8nsldrgd8skf',
    title: 'funny',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1604313527/noticon/ff5cnw9a8nsldrgd8skf.png',
    keywords: 'funny‡즐겁다',
    date: '2020-11-02T10:38:50.000Z',
  },
  {
    uuid: 'noticon_asomsmkch6ttqtqocryp',
    title: 'coex',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1604331392/noticon/asomsmkch6ttqtqocryp.png',
    keywords: '‡',
    date: '2020-11-02T15:36:37.447Z',
  },
  {
    uuid: 'noticon_ztz1begvsvur6e4avetn',
    title: 'coex',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1604331547/noticon/ztz1begvsvur6e4avetn.png',
    keywords: '‡',
    date: '2020-11-02T15:39:10.795Z',
  },
  {
    uuid: 'noticon_rf5dix0rafktmazwolr1',
    title: '한동대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1604413733/noticon/rf5dix0rafktmazwolr1.png',
    keywords: '#한동‡',
    date: '#한동‡',
  },
  {
    uuid: 'noticon_isco3jbwbuwlxitpwrxn',
    title: 'dasvader',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1604485316/noticon/isco3jbwbuwlxitpwrxn.png',
    keywords: '‡',
    date: '2020-11-04T10:21:59.514Z',
  },
  {
    uuid: 'noticon_s1qvpjwfeim5gqbvm2cl',
    title: 'vader',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1604485453/noticon/s1qvpjwfeim5gqbvm2cl.png',
    keywords: '‡',
    date: '2020-11-04T10:24:15.257Z',
  },
  {
    uuid: 'noticon_fconydrvn2os8ooifnq1',
    title: 'GOODAC',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1604633459/noticon/fconydrvn2os8ooifnq1.png',
    keywords: '‡',
    date: '2020-11-06T03:31:01.193Z',
  },
  {
    uuid: 'noticon_r6v5uruvkov4pfj4biwy',
    title: 'sera',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1604633494/noticon/r6v5uruvkov4pfj4biwy.png',
    keywords: '‡',
    date: '2020-11-06T03:31:36.162Z',
  },
  {
    uuid: 'noticon_xgd5hhbwwdqlmyqeb9oo',
    title: 'dreamhack',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1604731278/noticon/xgd5hhbwwdqlmyqeb9oo.png',
    keywords: '‡',
    date: '2020-11-07T06:41:20.201Z',
  },
  {
    uuid: 'noticon_jgnikgwf6mnfndt8x5sv',
    title: 'mailman',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1604817922/noticon/jgnikgwf6mnfndt8x5sv.png',
    keywords: '‡',
    date: '2020-11-08T06:45:24.053Z',
  },
  {
    uuid: 'noticon_x9tsqpuptqoechex0yfg',
    title: 'lerna',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1604907825/noticon/x9tsqpuptqoechex0yfg.png',
    keywords: '‡',
    date: '2020-11-09T07:43:47.228Z',
  },
  {
    uuid: 'noticon_t0d6euyuyr2jy8gy7ap7',
    title: '숙명여대',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1604999467/noticon/t0d6euyuyr2jy8gy7ap7.png',
    keywords: '숙명여자대학교‡숙대',
    date: '2020-11-10T09:11:09.393Z',
  },
  {
    uuid: 'noticon_x2vkuek0ytmpuw136jgj',
    title: 'ozkiz',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1605235578/noticon/x2vkuek0ytmpuw136jgj.png',
    keywords: '‡',
    date: '2020-11-13T02:46:20.054Z',
  },
  {
    uuid: 'noticon_pajonkqvphhftlmte8bo',
    title: 'OZ',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1605236070/noticon/pajonkqvphhftlmte8bo.png',
    keywords: '‡',
    date: '2020-11-13T02:54:32.241Z',
  },
  {
    uuid: 'noticon_vhhoya5albodg7b12hd0',
    title: 'JIRA',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1605245099/noticon/vhhoya5albodg7b12hd0.png',
    keywords: 'jira‡',
    date: '2020-11-13T05:25:01.567Z',
  },
  {
    uuid: 'noticon_uacsqcg7lwkmd8o7sk3v',
    title: 'KBO',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1605416431/noticon/uacsqcg7lwkmd8o7sk3v.png',
    keywords: '‡',
    date: '2020-11-15T05:00:33.083Z',
  },
  {
    uuid: 'noticon_nor1zr2tpdpqq0epmi9z',
    title: 'HWBI',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1605432440/noticon/nor1zr2tpdpqq0epmi9z.png',
    keywords: '‡',
    date: '2020-11-15T09:27:22.623Z',
  },
  {
    uuid: 'noticon_eatooedg6mbplhnvvvyk',
    title: '포옹',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1605620825/noticon/eatooedg6mbplhnvvvyk.png',
    keywords: '포옹‡',
    date: '2020-11-17T13:47:07.588Z',
  },
  {
    uuid: 'noticon_lov2urdyonkquno7dijz',
    title: '코스트코',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1605698178/noticon/lov2urdyonkquno7dijz.png',
    keywords: 'costco‡마트',
    date: '2020-11-18T11:16:21.631Z',
  },
  {
    uuid: 'noticon_a9dagmzhtoxi6mqosy63',
    title: '스타벅스',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1605698937/noticon/a9dagmzhtoxi6mqosy63.png',
    keywords: 'starbucks‡카페',
    date: '2020-11-18T11:29:00.294Z',
  },
  {
    uuid: 'noticon_sglhfnk5boqkpaw8eavb',
    title: '자동차 핸들',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1605717199/noticon/sglhfnk5boqkpaw8eavb.png',
    keywords: 'handle‡car',
    date: '2020-11-18T16:33:21.473Z',
  },
  {
    uuid: 'noticon_pk6vnx3uv2bkrxilp8f1',
    title: '체중계',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1605718108/noticon/pk6vnx3uv2bkrxilp8f1.png',
    keywords: '저울‡weight scale',
    date: '2020-11-18T16:48:32.640Z',
  },
  {
    uuid: 'noticon_ynuuuu6jgwswj9xwui3b',
    title: '탱크',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1605718642/noticon/ynuuuu6jgwswj9xwui3b.png',
    keywords: 'tank‡군대',
    date: '2020-11-18T16:57:24.630Z',
  },
  {
    uuid: 'noticon_chwawqtycx70mxje4lzt',
    title: '권투 글러브',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1605726766/noticon/chwawqtycx70mxje4lzt.png',
    keywords: '장갑‡운동',
    date: '2020-11-18T19:12:48.723Z',
  },
  {
    uuid: 'noticon_ghe5rbiotrvdtz2d53lr',
    title: '이상한마케팅',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1605784224/noticon/ghe5rbiotrvdtz2d53lr.png',
    keywords: '이상한마케팅‡이상한마케팅',
    date: '2020-11-19T11:10:26.639Z',
  },
  {
    uuid: 'noticon_kfunf2yrb7zou6wovo3o',
    title: '옷걸이',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1605817211/noticon/kfunf2yrb7zou6wovo3o.png',
    keywords: '행거‡hanger',
    date: '2020-11-19T20:20:13.170Z',
  },
  {
    uuid: 'noticon_xjfuztxaw96bkefumtql',
    title: '이마트',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1605817306/noticon/xjfuztxaw96bkefumtql.png',
    keywords: 'emart‡',
    date: '2020-11-19T20:21:48.929Z',
  },
  {
    uuid: 'noticon_ye903bkupcitlvsieqmw',
    title: 'oss',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1605887257/noticon/ye903bkupcitlvsieqmw.gif',
    keywords: '‡',
    date: '2020-11-20T15:47:40.313Z',
  },
  {
    uuid: 'noticon_ydfszdnubsd0eczqffwf',
    title: 'tistory',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1605925693/noticon/ydfszdnubsd0eczqffwf.png',
    keywords: '‡',
    date: '2020-11-21T02:28:15.914Z',
  },
  {
    uuid: 'noticon_ku5wj788ubjwba7pecrw',
    title: 'tistory',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1605926847/noticon/ku5wj788ubjwba7pecrw.png',
    keywords: '‡',
    date: '2020-11-21T02:47:29.879Z',
  },
  {
    uuid: 'noticon_ujninzh3dsa5f8qkb4tj',
    title: 'ux',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1605940236/noticon/ujninzh3dsa5f8qkb4tj.png',
    keywords: 'uiux‡',
    date: '2020-11-21T06:30:38.818Z',
  },
  {
    uuid: 'noticon_clc4yngbauu7w7qnqqsr',
    title: 'Travis CI',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1605943917/noticon/clc4yngbauu7w7qnqqsr.png',
    keywords: 'travis‡ci',
    date: '2020-11-21T07:31:59.672Z',
  },
  {
    uuid: 'noticon_hmlnxpjaw2jmfgqc78zn',
    title: 'TikTok',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1606218229/noticon/hmlnxpjaw2jmfgqc78zn.png',
    keywords: '‡',
    date: '2020-11-24T11:43:51.158Z',
  },
  {
    uuid: 'noticon_tuevajcqvmqxasypgbbs',
    title: 'harry portter',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1606270934/noticon/tuevajcqvmqxasypgbbs.png',
    keywords: 'hp‡movie',
    date: '2020-11-25T02:22:15.959Z',
  },
  {
    uuid: 'noticon_v2aqeergilmnxm0wkwcj',
    title: '현대카드',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1606333006/noticon/v2aqeergilmnxm0wkwcj.png',
    keywords: '‡',
    date: '2020-11-25T19:36:49.162Z',
  },
  {
    uuid: 'noticon_mrizg0quwaqle8ycul0h',
    title: 'Hibernate',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1606368420/noticon/mrizg0quwaqle8ycul0h.png',
    keywords: 'hibernate‡',
    date: '2020-11-26T05:27:03.009Z',
  },
  {
    uuid: 'noticon_kenub5almuxjhgh1uea7',
    title: 'linux',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1606371542/noticon/kenub5almuxjhgh1uea7.png',
    keywords: 'linux‡',
    date: '2020-11-26T06:19:03.841Z',
  },
  {
    uuid: 'noticon_dhfcgilgz0umqxkvyqfa',
    title: 'linux',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1606371655/noticon/dhfcgilgz0umqxkvyqfa.png',
    keywords: 'linux‡',
    date: '2020-11-26T06:20:57.429Z',
  },
  {
    uuid: 'noticon_ahdafbo604qrqaw3tcbf',
    title: 'emotion',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1606640723/noticon/ahdafbo604qrqaw3tcbf.png',
    keywords: '이모션‡css',
    date: '2020-11-29T09:05:25.452Z',
  },
  {
    uuid: 'noticon_t9q03gvdqchuvg7m4gka',
    title: '우체국',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1606804956/noticon/t9q03gvdqchuvg7m4gka.png',
    keywords: 'post office‡',
    date: '2020-12-01T06:42:38.650Z',
  },
  {
    uuid: 'noticon_tvxwnc0q46bsfbpzokzx',
    title: 'CGV',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1606805205/noticon/tvxwnc0q46bsfbpzokzx.png',
    keywords: 'movie‡ticket',
    date: '2020-12-01T06:46:47.764Z',
  },
  {
    uuid: 'noticon_a2x5omdoovmv1gbq4moi',
    title: 'internet explorer',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1606811079/noticon/a2x5omdoovmv1gbq4moi.png',
    keywords: '인터넷 익스플로러‡ie',
    date: '2020-12-01T08:24:41.713Z',
  },
  {
    uuid: 'noticon_w6xbyrdljofcuxhk1wml',
    title: '트레바리',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1606889460/noticon/w6xbyrdljofcuxhk1wml.gif',
    keywords: 'trevari‡',
    date: '2020-12-02T06:11:03.169Z',
  },
  {
    uuid: 'noticon_ljjbh2jcjygthqlkzfue',
    title: '트레바리 읽고쓰고대화하고친해져요',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1606889818/noticon/ljjbh2jcjygthqlkzfue.gif',
    keywords: '책‡트레바리',
    date: '2020-12-02T06:17:00.323Z',
  },
  {
    uuid: 'noticon_ylarlmuzxlrqadhnlswo',
    title: '트레바리',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1606889847/noticon/ylarlmuzxlrqadhnlswo.gif',
    keywords: '지적 성장!‡',
    date: '2020-12-02T06:17:29.586Z',
  },
  {
    uuid: 'noticon_c2ggzek1iwfd0yccf62r',
    title: '쓰기',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1606889875/noticon/c2ggzek1iwfd0yccf62r.gif',
    keywords: '트레바리‡',
    date: '2020-12-02T06:17:57.225Z',
  },
  {
    uuid: 'noticon_yekcfoujs241wrhzjhft',
    title: 'google chat',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1606894177/noticon/yekcfoujs241wrhzjhft.png',
    keywords: 'google‡',
    date: '2020-12-02T07:29:39.625Z',
  },
  {
    uuid: 'noticon_cffnbxeed08p0l4u44ru',
    title: 'gmail',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1606895317/noticon/cffnbxeed08p0l4u44ru.png',
    keywords: 'google‡',
    date: '2020-12-02T07:48:39.778Z',
  },
  {
    uuid: 'noticon_rwz9gucuo0pl6rtbbx9r',
    title: 'google meet',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1606895343/noticon/rwz9gucuo0pl6rtbbx9r.png',
    keywords: '‡',
    date: '2020-12-02T07:49:05.263Z',
  },
  {
    uuid: 'noticon_kzevlidxyaexdwpt6jrk',
    title: '스마트스토어',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1607058876/noticon/kzevlidxyaexdwpt6jrk.png',
    keywords: 'smartstore‡',
    date: '2020-12-04T05:14:38.977Z',
  },
  {
    uuid: 'noticon_yebozbyozlqzjftggz9a',
    title: '명지나무',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1607091329/noticon/yebozbyozlqzjftggz9a.png',
    keywords: '명지대‡myoungji',
    date: '2020-12-04T14:15:32.958Z',
  },
  {
    uuid: 'noticon_oewzmhmusi4mdjthsyp3',
    title: '명지대학교_흰',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1607091374/noticon/oewzmhmusi4mdjthsyp3.png',
    keywords: '명지대‡myoungji',
    date: '2020-12-04T14:16:16.437Z',
  },
  {
    uuid: 'noticon_i6tamvjfj51zwu9w0xpn',
    title: '명지대학교_엠블럼',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1607091401/noticon/i6tamvjfj51zwu9w0xpn.png',
    keywords: '명지대‡myoungji',
    date: '2020-12-04T14:16:43.570Z',
  },
  {
    uuid: 'noticon_ll5clveblapxjftrc38z',
    title: '채널톡',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1607172281/noticon/ll5clveblapxjftrc38z.png',
    keywords: 'channel‡channeltalk',
    date: '2020-12-05T12:44:43.850Z',
  },
  {
    uuid: 'noticon_nqqwdlbjdjqekhvktwy8',
    title: '데이블',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1607225250/noticon/nqqwdlbjdjqekhvktwy8.png',
    keywords: '‡',
    date: '2020-12-06T03:27:32.786Z',
  },
  {
    uuid: 'noticon_oghwsguwxkjiel3eymq9',
    title: '엔트리',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1607636269/noticon/oghwsguwxkjiel3eymq9.png',
    keywords: '‡',
    date: '2020-12-10T21:37:51.608Z',
  },
  {
    uuid: 'noticon_sfj5hzvi0nqiepcc8jqg',
    title: '초등학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1607636880/noticon/sfj5hzvi0nqiepcc8jqg.png',
    keywords: '‡',
    date: '2020-12-10T21:48:03.452Z',
  },
  {
    uuid: 'noticon_ke2duv2faz5oju9nra5y',
    title: '온라인 수업',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1607637075/noticon/ke2duv2faz5oju9nra5y.png',
    keywords: '‡',
    date: '2020-12-10T21:51:17.620Z',
  },
  {
    uuid: 'noticon_hzgqv7cqa8qofjs7cqay',
    title: '온라인 수업',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1607637173/noticon/hzgqv7cqa8qofjs7cqay.png',
    keywords: '‡',
    date: '2020-12-10T21:52:55.035Z',
  },
  {
    uuid: 'noticon_u8d3g9smbn3hlpk5feqz',
    title: '리스트',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1607654668/noticon/u8d3g9smbn3hlpk5feqz.png',
    keywords: '‡',
    date: '2020-12-11T02:44:30.503Z',
  },
  {
    uuid: 'noticon_ixl4plfcdvhyszne2whm',
    title: 'WhiteShip',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1607675644/noticon/ixl4plfcdvhyszne2whm.png',
    keywords: '‡',
    date: '2020-12-11T08:34:06.274Z',
  },
  {
    uuid: 'noticon_lelevslrdcsgug1qlmnq',
    title: 'weenu',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1607677712/noticon/lelevslrdcsgug1qlmnq.png',
    keywords: '‡',
    date: '2020-12-11T09:08:34.128Z',
  },
  {
    uuid: 'noticon_dfwzjgowyq7ccpko3x1g',
    title: 'Google Cloud',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1607786761/noticon/dfwzjgowyq7ccpko3x1g.png',
    keywords: '구글클라우드‡',
    date: '2020-12-12T15:26:03.261Z',
  },
  {
    uuid: 'noticon_zzwm9twhyma8eprmkhfa',
    title: 'IT World',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1607787544/noticon/zzwm9twhyma8eprmkhfa.png',
    keywords: '‡',
    date: '2020-12-12T15:39:06.615Z',
  },
  {
    uuid: 'noticon_z4z7rhksevllrm53az58',
    title: 'v8',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1607805029/noticon/z4z7rhksevllrm53az58.png',
    keywords: 'chrome‡engine',
    date: '2020-12-12T20:30:31.595Z',
  },
  {
    uuid: 'noticon_zowrfq6t13gnv2kf6f3b',
    title: 'mockito',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1607863771/noticon/zowrfq6t13gnv2kf6f3b.png',
    keywords: 'TESTq‡tdd',
    date: '2020-12-13T12:49:33.043Z',
  },
  {
    uuid: 'noticon_mwlqtroa8cgmnxa9lazc',
    title: 'HTTP',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1608018488/noticon/mwlqtroa8cgmnxa9lazc.png',
    keywords: 'www‡internet',
    date: '2020-12-15T07:48:10.684Z',
  },
  {
    uuid: 'noticon_ayitzpsyvmxcpspwnx25',
    title: 'twitter',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1608108852/noticon/ayitzpsyvmxcpspwnx25.png',
    keywords: 'twitter‡',
    date: '2020-12-16T08:54:14.183Z',
  },
  {
    uuid: 'noticon_dnnfcofbuxrtl3lpydye',
    title: 'twitter',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1608109286/noticon/dnnfcofbuxrtl3lpydye.png',
    keywords: 'twitter‡',
    date: '2020-12-16T09:01:28.239Z',
  },
  {
    uuid: 'noticon_xtyk7rrchy8uagtzlnav',
    title: 'Xcode',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1608113588/noticon/xtyk7rrchy8uagtzlnav.png',
    keywords: '‡',
    date: '2020-12-16T10:13:11.072Z',
  },
  {
    uuid: 'noticon_ieuyypbrkqkvo3xaqjop',
    title: 'openlayers',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1608179892/noticon/ieuyypbrkqkvo3xaqjop.png',
    keywords: 'openlayers‡',
    date: '2020-12-17T04:38:15.181Z',
  },
  {
    uuid: 'noticon_a0fgk99dgqtyrwwmqsbt',
    title: 'figma',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1608448196/noticon/a0fgk99dgqtyrwwmqsbt.png',
    keywords: '‡',
    date: '2020-12-20T07:10:00.870Z',
  },
  {
    uuid: 'noticon_bymxzneszzmr5xdgoaje',
    title: '클래스101',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1608517566/noticon/bymxzneszzmr5xdgoaje.png',
    keywords: '‡class101',
    date: '2020-12-21T02:26:08.148Z',
  },
  {
    uuid: 'noticon_xajwwwc0oxoey35yydqe',
    title: 'monday',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1608599260/noticon/xajwwwc0oxoey35yydqe.png',
    keywords: '‡',
    date: '2020-12-22T01:07:42.793Z',
  },
  {
    uuid: 'noticon_mxw3xv36zjkmlz36moye',
    title: 'monday',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1608599629/noticon/mxw3xv36zjkmlz36moye.png',
    keywords: '‡',
    date: '2020-12-22T01:13:52.176Z',
  },
  {
    uuid: 'noticon_kxpkngbeaiedefbeekxa',
    title: 'tuesday',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1608599669/noticon/kxpkngbeaiedefbeekxa.png',
    keywords: '‡',
    date: '2020-12-22T01:14:31.931Z',
  },
  {
    uuid: 'noticon_thawlqlv9xqq4ncg6wmv',
    title: 'wednesday',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1608599748/noticon/thawlqlv9xqq4ncg6wmv.png',
    keywords: '‡',
    date: '2020-12-22T01:15:50.098Z',
  },
  {
    uuid: 'noticon_aiwd3aeqgf0wjsn8wc0p',
    title: 'thursday',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1608599813/noticon/aiwd3aeqgf0wjsn8wc0p.png',
    keywords: '‡',
    date: '2020-12-22T01:16:57.157Z',
  },
  {
    uuid: 'noticon_xt0nx8nnz4qwjctftx2n',
    title: 'friday',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1608599849/noticon/xt0nx8nnz4qwjctftx2n.png',
    keywords: '‡',
    date: '2020-12-22T01:17:31.962Z',
  },
  {
    uuid: 'noticon_sm8b7xom15cozm684bxg',
    title: 'lottie',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1608633953/noticon/sm8b7xom15cozm684bxg.png',
    keywords: '‡',
    date: '2020-12-22T10:45:55.571Z',
  },
  {
    uuid: 'noticon_ygjwb1yfq0htsdyywhc5',
    title: '우아한형제들',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1608759169/noticon/ygjwb1yfq0htsdyywhc5.png',
    keywords: 'woowa‡배달의 민족',
    date: '2020-12-23T21:32:51.861Z',
  },
  {
    uuid: 'noticon_jxoo6sg01e9xrvh1wljy',
    title: '도그메이트',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1608860565/noticon/jxoo6sg01e9xrvh1wljy.png',
    keywords: '‡',
    date: '2020-12-25T01:42:48.167Z',
  },
  {
    uuid: 'noticon_gkcjchloc7f7khlsyyyy',
    title: 'JPA',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1609094551/noticon/gkcjchloc7f7khlsyyyy.png',
    keywords: 'JPA‡',
    date: '2020-12-27T18:42:33.489Z',
  },
  {
    uuid: 'noticon_uyszwysj1jdixbbbbfil',
    title: 'Capacitor',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1609137197/noticon/uyszwysj1jdixbbbbfil.png',
    keywords: 'ionic‡',
    date: '2020-12-28T06:33:18.788Z',
  },
  {
    uuid: 'noticon_o7xeilzvh9kmompnk1an',
    title: 'codeigniter',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1609220359/noticon/o7xeilzvh9kmompnk1an.png',
    keywords: 'codeigniter‡',
    date: '2020-12-29T05:39:35.840Z',
  },
  {
    uuid: 'noticon_e9auotasga6nk5hwqzis',
    title: 'codeigniter',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1609220517/noticon/e9auotasga6nk5hwqzis.png',
    keywords: 'codeigniter‡',
    date: '2020-12-29T05:41:58.781Z',
  },
  {
    uuid: 'noticon_oyo23yrstcp0rbd4uiqp',
    title: 'spark',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1609287743/noticon/oyo23yrstcp0rbd4uiqp.png',
    keywords: 'spark‡start',
    date: '2020-12-30T00:22:24.831Z',
  },
  {
    uuid: 'noticon_xgbmvnxym2r5wanjl17t',
    title: 'tailwindcss',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1609289674/noticon/xgbmvnxym2r5wanjl17t.png',
    keywords: 'tailwind‡css',
    date: '2020-12-30T00:54:36.458Z',
  },
  {
    uuid: 'noticon_l3yiemxfpxywoqyxb0rm',
    title: 'sk',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1609292037/noticon/l3yiemxfpxywoqyxb0rm.png',
    keywords: 'sk‡skt',
    date: '2020-12-30T01:34:00.881Z',
  },
  {
    uuid: 'noticon_ql8bgxsyylshheg0hpz3',
    title: '폴더',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1609355592/noticon/ql8bgxsyylshheg0hpz3.png',
    keywords: '‡',
    date: '2020-12-30T19:13:14.657Z',
  },
  {
    uuid: 'noticon_zgll88mta6ljmwqlejvk',
    title: 'Think young',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1609490170/noticon/zgll88mta6ljmwqlejvk.png',
    keywords: '대학내일‡',
    date: '2021-01-01T08:36:12.816Z',
  },
  {
    uuid: 'noticon_lhlgosx69kacy2pylxt8',
    title: '국정원',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1609593864/noticon/lhlgosx69kacy2pylxt8.png',
    keywords: '국가정보원‡',
    date: '2021-01-02T13:24:26.796Z',
  },
  {
    uuid: 'noticon_u72iewvnxreyi56nrxk9',
    title: 'sinon.js',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1609735874/noticon/u72iewvnxreyi56nrxk9.png',
    keywords: 'sinon‡sinon.js',
    date: '2021-01-04T04:51:16.603Z',
  },
  {
    uuid: 'noticon_c8hr3exxtn2dmub2dpnl',
    title: '안녕~',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1609745043/noticon/c8hr3exxtn2dmub2dpnl.png',
    keywords: '‡',
    date: '2021-01-04T07:24:05.608Z',
  },
  {
    uuid: 'noticon_lcivfbml4bo6aqdnh1i4',
    title: '집단지성',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1609745482/noticon/lcivfbml4bo6aqdnh1i4.png',
    keywords: '‡',
    date: '2021-01-04T07:31:23.923Z',
  },
  {
    uuid: 'noticon_kz5ymcos41wpu0bxqjtu',
    title: '지성합니다',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1609745568/noticon/kz5ymcos41wpu0bxqjtu.png',
    keywords: '‡',
    date: '2021-01-04T07:32:49.960Z',
  },
  {
    uuid: 'noticon_emdpnxargj5eb0bcihgf',
    title: 'opa',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1609919232/noticon/emdpnxargj5eb0bcihgf.png',
    keywords: 'kubernetes‡k8s',
    date: '2021-01-06T07:47:15.813Z',
  },
  {
    uuid: 'noticon_qwztn9hwookwz0o2iutk',
    title: '코기',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1609936268/noticon/qwztn9hwookwz0o2iutk.png',
    keywords: '강아지‡',
    date: '2021-01-06T12:31:10.772Z',
  },
  {
    uuid: 'noticon_ubinyjwcygbkopihvnec',
    title: 'obsidian',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1609982186/noticon/ubinyjwcygbkopihvnec.png',
    keywords: 'obsidian‡',
    date: '2021-01-07T01:16:28.749Z',
  },
  {
    uuid: 'noticon_zuwrekbp9dzolpioefrt',
    title: '부스트코스',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1609987008/noticon/zuwrekbp9dzolpioefrt.png',
    keywords: '개발‡',
    date: '2021-01-07T02:36:50.522Z',
  },
  {
    uuid: 'noticon_n4ddtnnzcc6hbwnrfrvk',
    title: 'mimogy',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1610081775/noticon/n4ddtnnzcc6hbwnrfrvk.gif',
    keywords: '‡',
    date: '2021-01-08T04:56:19.658Z',
  },
  {
    uuid: 'noticon_v0hc8bqcrukvypt5iyyp',
    title: '배찌',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1610209798/noticon/v0hc8bqcrukvypt5iyyp.png',
    keywords: '배찌‡배찌',
    date: '2021-01-09T16:30:00.318Z',
  },
  {
    uuid: 'noticon_rfxipcsvjnknvql0gmay',
    title: '배찌',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1610209919/noticon/rfxipcsvjnknvql0gmay.png',
    keywords: '배찌‡배찌',
    date: '2021-01-09T16:32:00.943Z',
  },
  {
    uuid: 'noticon_n158n2lpsrqydrom4xer',
    title: 'YMCA',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1610285395/noticon/n158n2lpsrqydrom4xer.png',
    keywords: 'YMCA‡와이엠씨에이',
    date: '2021-01-10T13:29:56.787Z',
  },
  {
    uuid: 'noticon_nmy3an0kvkyrxhwv9ubn',
    title: '쿠팡',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1610335385/noticon/nmy3an0kvkyrxhwv9ubn.png',
    keywords: '쿠팡 coupang‡',
    date: '2021-01-11T03:23:08.548Z',
  },
  {
    uuid: 'noticon_ljihypohbrygarie65bj',
    title: '삼산텍',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1610337636/noticon/ljihypohbrygarie65bj.png',
    keywords: 'samsantech‡스타트업',
    date: '2021-01-11T04:00:39.071Z',
  },
  {
    uuid: 'noticon_l3xlm6ynxaoopchvecy5',
    title: 'penguin',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1610346675/noticon/l3xlm6ynxaoopchvecy5.png',
    keywords: 'study‡studying penguin',
    date: '2021-01-11T06:31:17.631Z',
  },
  {
    uuid: 'noticon_gfagjf2lblnrjhznmhvr',
    title: 'TechCrunch',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1610390669/noticon/gfagjf2lblnrjhznmhvr.png',
    keywords: '‡',
    date: '2021-01-11T18:44:32.033Z',
  },
  {
    uuid: 'noticon_dpxowdqcrxyipzhsb0y1',
    title: 'oracle logo circle',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1610429880/noticon/dpxowdqcrxyipzhsb0y1.png',
    keywords: 'oracle‡',
    date: '2021-01-12T05:38:02.805Z',
  },
  {
    uuid: 'noticon_pn6eadkbs3pnutnrlkoh',
    title: 'megazone logo',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1610430100/noticon/pn6eadkbs3pnutnrlkoh.png',
    keywords: 'megazone‡cloud',
    date: '2021-01-12T05:41:52.635Z',
  },
  {
    uuid: 'noticon_c685t77bqqje1r4xzall',
    title: '디비버',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1610503976/noticon/c685t77bqqje1r4xzall.png',
    keywords: 'dbeaver‡dbeaver',
    date: '2021-01-13T02:13:00.510Z',
  },
  {
    uuid: 'noticon_g9krjypdjubfzpobl774',
    title: '에이블리',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1610509758/noticon/g9krjypdjubfzpobl774.png',
    keywords: '‡',
    date: '2021-01-13T03:49:20.129Z',
  },
  {
    uuid: 'noticon_lrwylg0qjbuev8hd0ovq',
    title: '무신사',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1610509842/noticon/lrwylg0qjbuev8hd0ovq.png',
    keywords: '‡',
    date: '2021-01-13T03:50:44.722Z',
  },
  {
    uuid: 'noticon_t86jiub8tily5logitn6',
    title: 'january',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1610605254/noticon/t86jiub8tily5logitn6.png',
    keywords: 'january‡1월',
    date: '2021-01-14T06:20:56.598Z',
  },
  {
    uuid: 'noticon_tgrdtei3qhjhofgfycij',
    title: 'april',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1610607269/noticon/tgrdtei3qhjhofgfycij.png',
    keywords: 'april‡4월',
    date: '2021-01-14T06:54:31.641Z',
  },
  {
    uuid: 'noticon_plhaj8lzlmcbwe6xvw1k',
    title: 'january',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1610607320/noticon/plhaj8lzlmcbwe6xvw1k.png',
    keywords: 'january‡1월',
    date: '2021-01-14T06:55:23.579Z',
  },
  {
    uuid: 'noticon_b3j9reu0euifdj1f9gwj',
    title: '1',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1610607364/noticon/b3j9reu0euifdj1f9gwj.png',
    keywords: '1‡1',
    date: '2021-01-14T06:56:06.514Z',
  },
  {
    uuid: 'noticon_olaobe63cxwf5yp4unsp',
    title: '2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1610608401/noticon/olaobe63cxwf5yp4unsp.png',
    keywords: '2‡2',
    date: '2021-01-14T07:13:23.677Z',
  },
  {
    uuid: 'noticon_ax7x5daz3mec8zrmlfc5',
    title: '3',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1610608415/noticon/ax7x5daz3mec8zrmlfc5.png',
    keywords: '3‡3',
    date: '2021-01-14T07:13:37.121Z',
  },
  {
    uuid: 'noticon_x9h1xua1hglobzqultgt',
    title: '4',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1610608430/noticon/x9h1xua1hglobzqultgt.png',
    keywords: '4‡4',
    date: '2021-01-14T07:13:52.767Z',
  },
  {
    uuid: 'noticon_hi4c82t3gudcp0nlxcbh',
    title: '5',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1610608446/noticon/hi4c82t3gudcp0nlxcbh.png',
    keywords: '5‡5',
    date: '2021-01-14T07:14:08.219Z',
  },
  {
    uuid: 'noticon_hlxrerhjzpjtibozz8ur',
    title: '마켓컬리',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1610865854/noticon/hlxrerhjzpjtibozz8ur.png',
    keywords: 'market kurly‡마켓 컬리',
    date: '2021-01-17T06:44:16.393Z',
  },
  {
    uuid: 'noticon_cheypu9sf7bnppcsam9s',
    title: 'ee',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1610956684/noticon/cheypu9sf7bnppcsam9s.gif',
    keywords: '‡',
    date: '2021-01-18T07:58:06.627Z',
  },
  {
    uuid: 'noticon_i5y5retucdmubxechpcd',
    title: 'zoom',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611022528/noticon/i5y5retucdmubxechpcd.png',
    keywords: '‡',
    date: '2021-01-19T02:15:31.071Z',
  },
  {
    uuid: 'noticon_oxl1p0iauzp8fptjqvzu',
    title: 'atlassian',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611075003/noticon/oxl1p0iauzp8fptjqvzu.png',
    keywords: 'atlassian‡atlassian',
    date: '2021-01-19T16:50:06.013Z',
  },
  {
    uuid: 'noticon_ib9zntoc4vyvstw26p09',
    title: 'NYU',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611099535/noticon/ib9zntoc4vyvstw26p09.png',
    keywords: '뉴욕대학교‡',
    date: '2021-01-19T23:38:57.607Z',
  },
  {
    uuid: 'noticon_uakjqkj5ulsnoi3bjwod',
    title: 'ki',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611108453/noticon/uakjqkj5ulsnoi3bjwod.png',
    keywords: '‡',
    date: '2021-01-20T02:07:35.067Z',
  },
  {
    uuid: 'noticon_rrrsr2twed1vudu3vkfz',
    title: 'idus',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611111708/noticon/rrrsr2twed1vudu3vkfz.png',
    keywords: 'app‡',
    date: '2021-01-20T03:01:50.338Z',
  },
  {
    uuid: 'noticon_mqtmrlx8ay994ssycev3',
    title: '밀리의 서재',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611155740/noticon/mqtmrlx8ay994ssycev3.png',
    keywords: '밀리‡millie',
    date: '2021-01-20T15:15:42.294Z',
  },
  {
    uuid: 'noticon_hjebl15bzppb0cuoi5ut',
    title: '당근마켓',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611155951/noticon/hjebl15bzppb0cuoi5ut.png',
    keywords: '당근‡중고',
    date: '2021-01-20T15:19:13.692Z',
  },
  {
    uuid: 'noticon_rdyjdhta27ylwjaob0eq',
    title: '오늘의집',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611156036/noticon/rdyjdhta27ylwjaob0eq.png',
    keywords: '오늘‡인테리어',
    date: '2021-01-20T15:20:38.376Z',
  },
  {
    uuid: 'noticon_ucudbrtn0wqsdztjx5tm',
    title: '스타일쉐어',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611156123/noticon/ucudbrtn0wqsdztjx5tm.png',
    keywords: '스쉐‡옷',
    date: '2021-01-20T15:22:04.855Z',
  },
  {
    uuid: 'noticon_r2mgavudj7ocv63a4j2n',
    title: '스파르타 코딩 클럽',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611156179/noticon/r2mgavudj7ocv63a4j2n.png',
    keywords: '코딩‡프로그래밍',
    date: '2021-01-20T15:23:01.650Z',
  },
  {
    uuid: 'noticon_tbrixd2sznayt14jlf8a',
    title: '스픽',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611156280/noticon/tbrixd2sznayt14jlf8a.png',
    keywords: '영어‡원어민',
    date: '2021-01-20T15:24:43.008Z',
  },
  {
    uuid: 'noticon_qkz0gul9gr56h8sio7rq',
    title: '화해',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611156351/noticon/qkz0gul9gr56h8sio7rq.png',
    keywords: '화장품‡피부',
    date: '2021-01-20T15:25:52.911Z',
  },
  {
    uuid: 'noticon_yb6ghyeungpr6s27qvf1',
    title: '펫프렌즈',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611156671/noticon/yb6ghyeungpr6s27qvf1.png',
    keywords: '애완동물‡반려동물',
    date: '2021-01-20T15:31:14.289Z',
  },
  {
    uuid: 'noticon_h6mfwwbduhnj1ogaw8t3',
    title: 'Bigin',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611186097/noticon/h6mfwwbduhnj1ogaw8t3.png',
    keywords: 'BigInsight‡startup',
    date: '2021-01-20T23:41:39.632Z',
  },
  {
    uuid: 'noticon_hdxfcn2iajrrx1mar20j',
    title: 'kubernetes',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611190863/noticon/hdxfcn2iajrrx1mar20j.png',
    keywords: '‡',
    date: '2021-01-21T01:01:06.164Z',
  },
  {
    uuid: 'noticon_rmaptq8chft9voqj5he0',
    title: 'Keras',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611240419/noticon/rmaptq8chft9voqj5he0.png',
    keywords: '‡',
    date: '2021-01-21T14:47:02.563Z',
  },
  {
    uuid: 'noticon_ccwdsugnwhkkeimndhyy',
    title: 'ㅂㅁㅅ',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611305745/noticon/ccwdsugnwhkkeimndhyy.png',
    keywords: '‡',
    date: '2021-01-22T08:55:47.264Z',
  },
  {
    uuid: 'noticon_dee2ph0qqkhoaqruwhku',
    title: '지마켓',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611327460/noticon/dee2ph0qqkhoaqruwhku.png',
    keywords: '커머스‡gmarket',
    date: '2021-01-22T14:57:42.672Z',
  },
  {
    uuid: 'noticon_mh3tizqlzuf24eqcv5gw',
    title: '런데이',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611327542/noticon/mh3tizqlzuf24eqcv5gw.png',
    keywords: 'runday‡운동',
    date: '2021-01-22T14:59:04.668Z',
  },
  {
    uuid: 'noticon_l1tmweiiqlya92ecvz9u',
    title: '티몬',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611327608/noticon/l1tmweiiqlya92ecvz9u.png',
    keywords: '커머스‡tmon',
    date: '2021-01-22T15:00:10.834Z',
  },
  {
    uuid: 'noticon_q3qgifoj6uyyxcripq57',
    title: '런드리고',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611327682/noticon/q3qgifoj6uyyxcripq57.png',
    keywords: '세탁‡laundrygo',
    date: '2021-01-22T15:01:24.445Z',
  },
  {
    uuid: 'noticon_i1tc9erzijqczihm9xwh',
    title: '벅스',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611327774/noticon/i1tc9erzijqczihm9xwh.png',
    keywords: 'bugs‡음악',
    date: '2021-01-22T15:02:56.738Z',
  },
  {
    uuid: 'noticon_sl8jo3mx1u8msssfhkuz',
    title: '메일리',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611327847/noticon/sl8jo3mx1u8msssfhkuz.png',
    keywords: 'maily‡뉴스레터',
    date: '2021-01-22T15:04:09.216Z',
  },
  {
    uuid: 'noticon_o9uzzgfu9qquuzvbok3c',
    title: '퍼블리',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611410132/noticon/o9uzzgfu9qquuzvbok3c.png',
    keywords: 'publy‡콘텐츠',
    date: '2021-01-23T13:55:34.059Z',
  },
  {
    uuid: 'noticon_dgf4wdx0j0dbbgfuzlur',
    title: '트레이더스',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611472576/noticon/dgf4wdx0j0dbbgfuzlur.png',
    keywords: '‡',
    date: '2021-01-24T07:16:18.723Z',
  },
  {
    uuid: 'noticon_oiv2hvdgfnjkuuyoztob',
    title: '빅토리_황소 01',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611551592/noticon/oiv2hvdgfnjkuuyoztob.png',
    keywords: '‡',
    date: '2021-01-25T05:13:13.991Z',
  },
  {
    uuid: 'noticon_byuctlrilt5g5aatjnyi',
    title: '빅토리_황소 02',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611551612/noticon/byuctlrilt5g5aatjnyi.png',
    keywords: '‡',
    date: '2021-01-25T05:13:34.436Z',
  },
  {
    uuid: 'noticon_apwvd3zrofyxyoau17sf',
    title: '빅토리_황소 03',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611551637/noticon/apwvd3zrofyxyoau17sf.png',
    keywords: '‡',
    date: '2021-01-25T05:13:59.105Z',
  },
  {
    uuid: 'noticon_q3lpkibvgcsdblt13qab',
    title: '빅토리_젖소 01',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611551770/noticon/q3lpkibvgcsdblt13qab.png',
    keywords: '‡',
    date: '2021-01-25T05:16:12.320Z',
  },
  {
    uuid: 'noticon_epo6abhw0ri3apmphxt4',
    title: '빅토리 01',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611551789/noticon/epo6abhw0ri3apmphxt4.png',
    keywords: '‡',
    date: '2021-01-25T05:16:31.004Z',
  },
  {
    uuid: 'noticon_jt5gxyjtc91yn0zkhdhx',
    title: '빅토리 02',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611551805/noticon/jt5gxyjtc91yn0zkhdhx.png',
    keywords: '‡',
    date: '2021-01-25T05:16:47.077Z',
  },
  {
    uuid: 'noticon_vgg4tpxdrgcfcpg5qhfd',
    title: '빅토리 03',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611551819/noticon/vgg4tpxdrgcfcpg5qhfd.png',
    keywords: '‡',
    date: '2021-01-25T05:17:01.293Z',
  },
  {
    uuid: 'noticon_f9oqoertbziiy3jewerh',
    title: '빅토리 04',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611551843/noticon/f9oqoertbziiy3jewerh.png',
    keywords: '‡',
    date: '2021-01-25T05:17:25.087Z',
  },
  {
    uuid: 'noticon_exmh9e749k6i8mb6zfy5',
    title: '빅토리 05',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611551859/noticon/exmh9e749k6i8mb6zfy5.png',
    keywords: '‡',
    date: '2021-01-25T05:17:40.722Z',
  },
  {
    uuid: 'noticon_wixo1re4087rtydkvkte',
    title: '빅토리 07',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611551877/noticon/wixo1re4087rtydkvkte.png',
    keywords: '‡',
    date: '2021-01-25T05:17:59.191Z',
  },
  {
    uuid: 'noticon_hir4ju4nzs55rmhdpq8p',
    title: '빅토리 08',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611551899/noticon/hir4ju4nzs55rmhdpq8p.png',
    keywords: '‡',
    date: '2021-01-25T05:18:20.593Z',
  },
  {
    uuid: 'noticon_iqg1rfbdbeaufcptuqgf',
    title: 'kakaotalk',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611574965/noticon/iqg1rfbdbeaufcptuqgf.png',
    keywords: '‡',
    date: '2021-01-25T11:42:47.093Z',
  },
  {
    uuid: 'noticon_hgrdy8kwdmcejysejuw4',
    title: 'CNN',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611614338/noticon/hgrdy8kwdmcejysejuw4.png',
    keywords: 'cnn‡',
    date: '2021-01-25T22:39:00.641Z',
  },
  {
    uuid: 'noticon_kgjiqun5az4ltypk7w8y',
    title: 'Apple M1',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611633923/noticon/kgjiqun5az4ltypk7w8y.png',
    keywords: 'Apple silicon‡애플 실리콘',
    date: '2021-01-26T04:05:25.269Z',
  },
  {
    uuid: 'noticon_uiy9vqemox8v5ciduchv',
    title: 'newspaper',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611634044/noticon/uiy9vqemox8v5ciduchv.png',
    keywords: '신문‡',
    date: '2021-01-26T04:07:26.044Z',
  },
  {
    uuid: 'noticon_cvs54o0f0wblhhepnaeq',
    title: 'ohouse',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611643708/noticon/cvs54o0f0wblhhepnaeq.png',
    keywords: '‡',
    date: '2021-01-26T06:48:30.078Z',
  },
  {
    uuid: 'noticon_zdet1wplwo9jtwpijpej',
    title: 'five',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611643771/noticon/zdet1wplwo9jtwpijpej.png',
    keywords: '‡',
    date: '2021-01-26T06:49:33.306Z',
  },
  {
    uuid: 'noticon_peksledyninhlpahziyy',
    title: 'safe',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611643815/noticon/peksledyninhlpahziyy.png',
    keywords: '‡',
    date: '2021-01-26T06:50:17.522Z',
  },
  {
    uuid: 'noticon_clbolc77xeeukucx7e4b',
    title: 'c101',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611643858/noticon/clbolc77xeeukucx7e4b.png',
    keywords: '‡',
    date: '2021-01-26T06:51:00.409Z',
  },
  {
    uuid: 'noticon_ejmbzcm7857gdrkxmpg8',
    title: 'idus',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611643891/noticon/ejmbzcm7857gdrkxmpg8.png',
    keywords: '‡',
    date: '2021-01-26T06:51:32.767Z',
  },
  {
    uuid: 'noticon_ipwx2exbghu7qqs5khhs',
    title: 'ab180',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611643951/noticon/ipwx2exbghu7qqs5khhs.png',
    keywords: '‡',
    date: '2021-01-26T06:52:33.258Z',
  },
  {
    uuid: 'noticon_y1ttshuvdfwi7litazj2',
    title: 'onehealth',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611644007/noticon/y1ttshuvdfwi7litazj2.png',
    keywords: '‡',
    date: '2021-01-26T06:53:29.151Z',
  },
  {
    uuid: 'noticon_obrmw9gxpq0i257venni',
    title: 'wisely',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611644054/noticon/obrmw9gxpq0i257venni.png',
    keywords: '‡',
    date: '2021-01-26T06:54:16.644Z',
  },
  {
    uuid: 'noticon_chitdnggi0i7gybq4rw5',
    title: 'socar',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611644076/noticon/chitdnggi0i7gybq4rw5.png',
    keywords: '‡',
    date: '2021-01-26T06:54:38.707Z',
  },
  {
    uuid: 'noticon_rpqgcncks0mlkjr4js1u',
    title: 'careet',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611644125/noticon/rpqgcncks0mlkjr4js1u.png',
    keywords: '‡',
    date: '2021-01-26T06:55:27.030Z',
  },
  {
    uuid: 'noticon_gm8pqz6sl7btwnjsc3mp',
    title: 'ikea',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611650371/noticon/gm8pqz6sl7btwnjsc3mp.png',
    keywords: '‡',
    date: '2021-01-26T08:39:33.144Z',
  },
  {
    uuid: 'noticon_olwcmnhvzb5dbekgf4zm',
    title: 'fastfive',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611653348/noticon/olwcmnhvzb5dbekgf4zm.png',
    keywords: '‡',
    date: '2021-01-26T09:29:10.494Z',
  },
  {
    uuid: 'noticon_rfvll0kg6oz6c0dq9h98',
    title: '청양알프스마을',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611661110/noticon/rfvll0kg6oz6c0dq9h98.png',
    keywords: '‡',
    date: '2021-01-26T11:38:32.589Z',
  },
  {
    uuid: 'noticon_wwiob1gncbib7gksww7c',
    title: 'amazon',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611709691/noticon/wwiob1gncbib7gksww7c.png',
    keywords: '아마존‡aws, 아마존',
    date: '2021-01-27T01:08:12.813Z',
  },
  {
    uuid: 'noticon_niycn7md6kautu59or8h',
    title: 'amazon',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611709794/noticon/niycn7md6kautu59or8h.png',
    keywords: '아마존‡aws',
    date: '2021-01-27T01:09:55.608Z',
  },
  {
    uuid: 'noticon_szv75x8vgi6axjwjfvd6',
    title: 'JSON',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611712681/noticon/szv75x8vgi6axjwjfvd6.png',
    keywords: 'json‡javascript',
    date: '2021-01-27T01:58:03.068Z',
  },
  {
    uuid: 'noticon_byrjqw02bmb8ztrxl0c9',
    title: 'mu',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611830923/noticon/byrjqw02bmb8ztrxl0c9.png',
    keywords: '‡',
    date: '2021-01-28T10:48:45.893Z',
  },
  {
    uuid: 'noticon_ljimwhzyfy2axndvfufq',
    title: 'beautifulsoup',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611900647/noticon/ljimwhzyfy2axndvfufq.png',
    keywords: 'beautiful, soup‡',
    date: '2021-01-29T06:10:49.363Z',
  },
  {
    uuid: 'noticon_qczugygo5huzizt6baig',
    title: 'bigin',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611901190/noticon/qczugygo5huzizt6baig.png',
    keywords: 'bigin‡white',
    date: '2021-01-29T06:19:52.363Z',
  },
  {
    uuid: 'noticon_acugoqtrlxoz129pz1kq',
    title: 'keywe',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1611938380/noticon/acugoqtrlxoz129pz1kq.png',
    keywords: 'smartlock‡doolock',
    date: '2021-01-29T16:39:43.269Z',
  },
  {
    uuid: 'noticon_hmywkb49avibtx506yfq',
    title: 'selenium',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1612154705/noticon/hmywkb49avibtx506yfq.png',
    keywords: 'selenium‡',
    date: '2021-02-01T04:45:07.709Z',
  },
  {
    uuid: 'noticon_bucm9f7nz4bpisteswf8',
    title: 'premo',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1612160544/noticon/bucm9f7nz4bpisteswf8.png',
    keywords: 'premo_b‡',
    date: '2021-02-01T06:22:26.148Z',
  },
  {
    uuid: 'noticon_ynorwy9dmzzamzblbiig',
    title: 'YOUTUBE',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1612177246/noticon/ynorwy9dmzzamzblbiig.png',
    keywords: '‡',
    date: '2021-02-01T11:00:48.509Z',
  },
  {
    uuid: 'noticon_th9vkeejosjuci1nuy1r',
    title: 'SINAE',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1612178460/noticon/th9vkeejosjuci1nuy1r.png',
    keywords: '‡',
    date: '2021-02-01T11:21:02.862Z',
  },
  {
    uuid: 'noticon_xd3p4uhne4e2aeczwflf',
    title: 'wrt',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1612179068/noticon/xd3p4uhne4e2aeczwflf.png',
    keywords: '‡',
    date: '2021-02-01T11:31:10.885Z',
  },
  {
    uuid: 'noticon_petlnbvq9hbh6k3mguxx',
    title: 'ym',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1612179112/noticon/petlnbvq9hbh6k3mguxx.png',
    keywords: '‡',
    date: '2021-02-01T11:31:54.640Z',
  },
  {
    uuid: 'noticon_vei19dze9thnkgop8gvy',
    title: 'Cube',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1612271913/noticon/vei19dze9thnkgop8gvy.png',
    keywords: '큐브‡',
    date: '2021-02-02T13:18:35.292Z',
  },
  {
    uuid: 'noticon_j8w7htafy2rgmpc06vlw',
    title: 'cursor',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1612282650/noticon/j8w7htafy2rgmpc06vlw.png',
    keywords: 'mouse‡',
    date: '2021-02-02T16:17:34.445Z',
  },
  {
    uuid: 'noticon_uyaazau6rkpww0rhs7kq',
    title: 'ncafe',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1612408390/noticon/uyaazau6rkpww0rhs7kq.png',
    keywords: '‡',
    date: '2021-02-04T03:13:13.142Z',
  },
  {
    uuid: 'noticon_zsf9t0ivekzp1anic7ju',
    title: 'shopify',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1612432242/noticon/zsf9t0ivekzp1anic7ju.png',
    keywords: '쇼피파이‡shopify',
    date: '2021-02-04T09:50:44.176Z',
  },
  {
    uuid: 'noticon_qzbwx7y0qegw1gmwfz6a',
    title: 'rollup',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1612606185/noticon/qzbwx7y0qegw1gmwfz6a.png',
    keywords: 'bundler‡',
    date: '2021-02-06T10:09:48.572Z',
  },
  {
    uuid: 'noticon_icbycbtoexdohbavard7',
    title: 'SDK',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1612606255/noticon/icbycbtoexdohbavard7.png',
    keywords: '‡',
    date: '2021-02-06T10:10:58.242Z',
  },
  {
    uuid: 'noticon_jtea7q0s9whblxbo34y5',
    title: '레뷰',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1612760866/noticon/jtea7q0s9whblxbo34y5.png',
    keywords: 'Revu‡',
    date: '2021-02-08T05:07:48.966Z',
  },
  {
    uuid: 'noticon_qjoy1nf9tiiwt8frj4lt',
    title: 'VRcardboard',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1612923099/noticon/qjoy1nf9tiiwt8frj4lt.png',
    keywords: 'vr‡',
    date: '2021-02-10T02:11:43.088Z',
  },
  {
    uuid: 'noticon_m7lmsuy2xdsdvo91xcry',
    title: 'VRcardboard',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1612923283/noticon/m7lmsuy2xdsdvo91xcry.png',
    keywords: 'vr‡',
    date: '2021-02-10T02:14:45.858Z',
  },
  {
    uuid: 'noticon_rmbrgjajkbuycconv9fy',
    title: 'yaml',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613030573/noticon/rmbrgjajkbuycconv9fy.png',
    keywords: 'yaml‡yml',
    date: '2021-02-11T08:02:56.192Z',
  },
  {
    uuid: 'noticon_yhypxcngmm3rpbwupqgq',
    title: '지구본',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613042222/noticon/yhypxcngmm3rpbwupqgq.png',
    keywords: '‡',
    date: '2021-02-11T11:17:06.015Z',
  },
  {
    uuid: 'noticon_pcu8hm2nz32r5rv4ijz2',
    title: 'pen',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613042851/noticon/pcu8hm2nz32r5rv4ijz2.png',
    keywords: '‡',
    date: '2021-02-11T11:27:42.001Z',
  },
  {
    uuid: 'noticon_s3rk0c6rkpdkrxwhb4hv',
    title: 'react-router',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613067325/noticon/s3rk0c6rkpdkrxwhb4hv.png',
    keywords: 'react-router‡react',
    date: '2021-02-11T18:15:28.109Z',
  },
  {
    uuid: 'noticon_nusn2zkdp60e7ee90wdi',
    title: 'redux-saga',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613067441/noticon/nusn2zkdp60e7ee90wdi.png',
    keywords: 'redux-saga‡redux',
    date: '2021-02-11T18:17:24.242Z',
  },
  {
    uuid: 'noticon_tbdu9pr4fyqkhcs1gu0u',
    title: 'parcel',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613067539/noticon/tbdu9pr4fyqkhcs1gu0u.png',
    keywords: 'parcel‡parceljs',
    date: '2021-02-11T18:19:01.355Z',
  },
  {
    uuid: 'noticon_kfgecapcc3zo9ob2djyl',
    title: 'jest',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613067760/noticon/kfgecapcc3zo9ob2djyl.png',
    keywords: 'jest‡testing',
    date: '2021-02-11T18:22:42.501Z',
  },
  {
    uuid: 'noticon_lfsddzaoa0f2vfifhdfb',
    title: 'http',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613067938/noticon/lfsddzaoa0f2vfifhdfb.png',
    keywords: 'http‡http',
    date: '2021-02-11T18:25:41.015Z',
  },
  {
    uuid: 'noticon_pmy6bu8e51sb3qz9a7ft',
    title: 'agile',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613068061/noticon/pmy6bu8e51sb3qz9a7ft.png',
    keywords: 'scrum‡kanban',
    date: '2021-02-11T18:27:43.227Z',
  },
  {
    uuid: 'noticon_lkoafjraw2zfwaczlhyw',
    title: 'agile',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613068147/noticon/lkoafjraw2zfwaczlhyw.png',
    keywords: 'agile‡scrum',
    date: '2021-02-11T18:29:09.037Z',
  },
  {
    uuid: 'noticon_xl3lhld6ndk1qv0xkyri',
    title: 'agile',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613068261/noticon/xl3lhld6ndk1qv0xkyri.png',
    keywords: 'scrum‡agile',
    date: '2021-02-11T18:31:03.209Z',
  },
  {
    uuid: 'noticon_iy9cdrxr475pnxjwddq3',
    title: 'code splitting',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613068369/noticon/iy9cdrxr475pnxjwddq3.png',
    keywords: 'code split‡split',
    date: '2021-02-11T18:32:52.012Z',
  },
  {
    uuid: 'noticon_aeuf7i5ixzwltckpa8pt',
    title: 'hook',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613068436/noticon/aeuf7i5ixzwltckpa8pt.png',
    keywords: 'react hook‡hooks',
    date: '2021-02-11T18:33:58.353Z',
  },
  {
    uuid: 'noticon_untnu4io7fja061ptzbt',
    title: 'babel',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613068709/noticon/untnu4io7fja061ptzbt.png',
    keywords: 'babel‡babel',
    date: '2021-02-11T18:38:31.747Z',
  },
  {
    uuid: 'noticon_mctlhyjhckpnrwujhdrz',
    title: 'webpack',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613068796/noticon/mctlhyjhckpnrwujhdrz.png',
    keywords: '‡',
    date: '2021-02-11T18:39:58.933Z',
  },
  {
    uuid: 'noticon_ugcstxkq5uzhbhknrr80',
    title: 'react native',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613069004/noticon/ugcstxkq5uzhbhknrr80.png',
    keywords: '‡',
    date: '2021-02-11T18:43:26.218Z',
  },
  {
    uuid: 'noticon_nzkev3bnxzyskvgllhcf',
    title: 'react native',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613069086/noticon/nzkev3bnxzyskvgllhcf.png',
    keywords: '‡',
    date: '2021-02-11T18:44:48.433Z',
  },
  {
    uuid: 'noticon_wegykx73dabroreeruxr',
    title: 'react',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613069247/noticon/wegykx73dabroreeruxr.png',
    keywords: '‡',
    date: '2021-02-11T18:47:29.148Z',
  },
  {
    uuid: 'noticon_u6iaixiuw61qezrrf6si',
    title: 'react',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613069320/noticon/u6iaixiuw61qezrrf6si.png',
    keywords: '‡',
    date: '2021-02-11T18:48:42.415Z',
  },
  {
    uuid: 'noticon_zojzxxg3cycnbadxnfdu',
    title: 'loader',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613069508/noticon/zojzxxg3cycnbadxnfdu.png',
    keywords: 'wait‡suspense',
    date: '2021-02-11T18:51:50.115Z',
  },
  {
    uuid: 'noticon_l8663zqujq7ktjcnxn8k',
    title: 'chat',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613070259/noticon/l8663zqujq7ktjcnxn8k.png',
    keywords: '‡',
    date: '2021-02-11T19:04:22.004Z',
  },
  {
    uuid: 'noticon_rr1nu47zrepynsprieg4',
    title: 'code',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613070456/noticon/rr1nu47zrepynsprieg4.png',
    keywords: '‡',
    date: '2021-02-11T19:07:38.129Z',
  },
  {
    uuid: 'noticon_tz8qeycjqrbyreoydm4c',
    title: 'code review',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613070559/noticon/tz8qeycjqrbyreoydm4c.png',
    keywords: 'code‡',
    date: '2021-02-11T19:09:22.181Z',
  },
  {
    uuid: 'noticon_jz1uj9vz3qkmaydmpnjm',
    title: 'TOEIC',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613126126/noticon/jz1uj9vz3qkmaydmpnjm.png',
    keywords: 'TEST‡',
    date: '2021-02-12T10:35:28.941Z',
  },
  {
    uuid: 'noticon_x8cr2ree3dofpvqhp7y2',
    title: 'select',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613194502/noticon/x8cr2ree3dofpvqhp7y2.png',
    keywords: '‡',
    date: '2021-02-13T05:35:04.453Z',
  },
  {
    uuid: 'noticon_t7ziat1wxkl5uerqmvp4',
    title: '육군',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613244800/noticon/t7ziat1wxkl5uerqmvp4.png',
    keywords: '‡',
    date: '2021-02-13T19:33:21.908Z',
  },
  {
    uuid: 'noticon_rxvvmagjztc5taawi2kt',
    title: 'ttoogi',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613280992/noticon/rxvvmagjztc5taawi2kt.png',
    keywords: '또오기‡',
    date: '2021-02-14T05:36:34.946Z',
  },
  {
    uuid: 'noticon_qm7uo9ogmrjryrptr5m2',
    title: '프로젝트썸원',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613292619/noticon/qm7uo9ogmrjryrptr5m2.png',
    keywords: 'projectsomeone‡',
    date: '2021-02-14T08:50:22.263Z',
  },
  {
    uuid: 'noticon_o3n8vb4nkx8jblpjvm4w',
    title: 'spotify',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613345743/noticon/o3n8vb4nkx8jblpjvm4w.png',
    keywords: '‡',
    date: '2021-02-14T23:35:45.426Z',
  },
  {
    uuid: 'noticon_wqon5slaxcrs0omqqgk0',
    title: 'solved.ac',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613401545/noticon/wqon5slaxcrs0omqqgk0.png',
    keywords: 'boj‡',
    date: '2021-02-15T15:05:47.777Z',
  },
  {
    uuid: 'noticon_unxi7ermxgrkvvv3xrh8',
    title: 'woowabros',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613447352/noticon/unxi7ermxgrkvvv3xrh8.png',
    keywords: '‡',
    date: '2021-02-16T03:49:14.770Z',
  },
  {
    uuid: 'noticon_ga55xphbepu1goudfesk',
    title: 'docusaurus',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613467585/noticon/ga55xphbepu1goudfesk.png',
    keywords: '‡',
    date: '2021-02-16T09:26:27.587Z',
  },
  {
    uuid: 'noticon_woixiik7mhk8ahqc0g6m',
    title: 'Angry Puppy',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613639147/noticon/woixiik7mhk8ahqc0g6m.png',
    keywords: '‡',
    date: '2021-02-18T09:05:50.149Z',
  },
  {
    uuid: 'noticon_mais4jctqzzzswxxqnby',
    title: 'pengsoo',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613713282/noticon/mais4jctqzzzswxxqnby.gif',
    keywords: '‡',
    date: '2021-02-19T05:41:26.488Z',
  },
  {
    uuid: 'noticon_n7gwxfeqdeuzlcruox6e',
    title: '밥뭐먹지',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613713484/noticon/n7gwxfeqdeuzlcruox6e.png',
    keywords: '‡',
    date: '2021-02-19T05:44:46.165Z',
  },
  {
    uuid: 'noticon_wzwvam28rdxoaomvk1xr',
    title: 'job search',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613715545/noticon/wzwvam28rdxoaomvk1xr.png',
    keywords: '‡',
    date: '2021-02-19T06:19:29.638Z',
  },
  {
    uuid: 'noticon_zvmmww7wxae3flagnkk1',
    title: 'stitch',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613727841/noticon/zvmmww7wxae3flagnkk1.png',
    keywords: '‡',
    date: '2021-02-19T09:44:03.856Z',
  },
  {
    uuid: 'noticon_mshhmt49mj5qu9aeibko',
    title: 'person1',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613735253/noticon/mshhmt49mj5qu9aeibko.png',
    keywords: 'owwners‡',
    date: '2021-02-19T11:47:36.187Z',
  },
  {
    uuid: 'noticon_bj3ik6yhfdxgut0odhpx',
    title: 'person2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613735311/noticon/bj3ik6yhfdxgut0odhpx.png',
    keywords: 'owwners‡',
    date: '2021-02-19T11:48:34.093Z',
  },
  {
    uuid: 'noticon_rsehi7at2o6zuwg6cbub',
    title: 'person3',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613735339/noticon/rsehi7at2o6zuwg6cbub.png',
    keywords: 'owwners‡',
    date: '2021-02-19T11:49:01.350Z',
  },
  {
    uuid: 'noticon_bldjxjeyiultsfpo1ppk',
    title: 'person4',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613735367/noticon/bldjxjeyiultsfpo1ppk.png',
    keywords: 'owwners‡',
    date: '2021-02-19T11:49:29.294Z',
  },
  {
    uuid: 'noticon_ggaqjh4wfjf0miavt4dc',
    title: 'person5',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613735392/noticon/ggaqjh4wfjf0miavt4dc.png',
    keywords: 'owwners‡',
    date: '2021-02-19T11:49:54.432Z',
  },
  {
    uuid: 'noticon_dfzcwdbtls4cs6bpsoqk',
    title: 'person6',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613735418/noticon/dfzcwdbtls4cs6bpsoqk.png',
    keywords: 'owwners‡',
    date: '2021-02-19T11:50:20.485Z',
  },
  {
    uuid: 'noticon_bt7ndop1q2rwh7voavs2',
    title: '할투',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613963005/noticon/bt7ndop1q2rwh7voavs2.png',
    keywords: '주식‡퀀트',
    date: '2021-02-22T03:03:26.988Z',
  },
  {
    uuid: 'noticon_appkeo2ps19srgy7dber',
    title: 'team lead',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613981711/noticon/appkeo2ps19srgy7dber.png',
    keywords: '‡',
    date: '2021-02-22T08:15:13.830Z',
  },
  {
    uuid: 'noticon_z80mrz472hp26fb2bsef',
    title: '슬램덩크',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1614003014/noticon/z80mrz472hp26fb2bsef.png',
    keywords: '‡',
    date: '2021-02-22T14:10:41.580Z',
  },
  {
    uuid: 'noticon_utpqoubr2nlj1sinmsgh',
    title: '차트',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1614006654/noticon/utpqoubr2nlj1sinmsgh.png',
    keywords: '‡',
    date: '2021-02-22T15:10:56.383Z',
  },
  {
    uuid: 'noticon_xcrjmmrr4eed4tismyf1',
    title: 'PyPI',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1614063328/noticon/xcrjmmrr4eed4tismyf1.png',
    keywords: 'python‡pypi',
    date: '2021-02-23T06:55:31.524Z',
  },
  {
    uuid: 'noticon_kmwkdhydsrayzob38tln',
    title: 'dancin_frog',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1614151180/noticon/kmwkdhydsrayzob38tln.gif',
    keywords: 'dancing‡',
    date: '2021-02-24T07:19:46.720Z',
  },
  {
    uuid: 'noticon_rl7tegezl7ebr12mhgex',
    title: '알혼섬',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1614450550/noticon/rl7tegezl7ebr12mhgex.png',
    keywords: '‡',
    date: '2021-02-27T18:29:12.775Z',
  },
  {
    uuid: 'noticon_u37hegwthbp9bvamcer6',
    title: 'sunrise',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1614450702/noticon/u37hegwthbp9bvamcer6.png',
    keywords: '‡',
    date: '2021-02-27T18:31:44.280Z',
  },
  {
    uuid: 'noticon_xj3iv61tv14xco9xyexq',
    title: '브레멘음악대',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1614450996/noticon/xj3iv61tv14xco9xyexq.png',
    keywords: '‡',
    date: '2021-02-27T18:36:39.374Z',
  },
  {
    uuid: 'noticon_hrvozu4pch9fzvzkpith',
    title: 'react testing library',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1614507179/noticon/hrvozu4pch9fzvzkpith.png',
    keywords: '‡',
    date: '2021-02-28T10:13:01.472Z',
  },
  {
    uuid: 'noticon_lsohbmusd1dvwhdojy4p',
    title: 'tutoring',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1614764055/noticon/lsohbmusd1dvwhdojy4p.png',
    keywords: '‡',
    date: '2021-03-03T09:34:17.538Z',
  },
  {
    uuid: 'noticon_huquuirfylhnaoonrcub',
    title: 'PDF',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1614767021/noticon/huquuirfylhnaoonrcub.png',
    keywords: 'PDF‡PDF',
    date: '2021-03-03T10:23:43.098Z',
  },
  {
    uuid: 'noticon_agqwlf2sxtljlhttjqaj',
    title: 'goormide',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1614791202/noticon/agqwlf2sxtljlhttjqaj.png',
    keywords: 'goormide‡',
    date: '2021-03-03T17:06:44.808Z',
  },
  {
    uuid: 'noticon_kn284gq14vuajigbjeym',
    title: 'Expo',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1614791745/noticon/kn284gq14vuajigbjeym.png',
    keywords: 'Expo‡',
    date: '2021-03-03T17:15:48.322Z',
  },
  {
    uuid: 'noticon_uwvwosjamc8z5k1vjbvg',
    title: '큐넷',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1614791960/noticon/uwvwosjamc8z5k1vjbvg.png',
    keywords: '큐넷‡',
    date: '2021-03-03T17:19:22.951Z',
  },
  {
    uuid: 'noticon_fyi6gsefstlee52h8hwb',
    title: '스마일파일',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1614818190/noticon/fyi6gsefstlee52h8hwb.png',
    keywords: 'file‡file',
    date: '2021-03-04T00:36:32.445Z',
  },
  {
    uuid: 'noticon_fpxuoupazjo93kupryfo',
    title: 'centos',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1614921223/noticon/fpxuoupazjo93kupryfo.png',
    keywords: 'linux‡',
    date: '2021-03-05T05:13:45.232Z',
  },
  {
    uuid: 'noticon_wlawgo4jruyvkedvqzgo',
    title: '미래에셋대우',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1615013891/noticon/wlawgo4jruyvkedvqzgo.png',
    keywords: '‡',
    date: '2021-03-06T06:58:13.420Z',
  },
  {
    uuid: 'noticon_v2tjcikeykmqo9kytpwb',
    title: 'KB증권',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1615013954/noticon/v2tjcikeykmqo9kytpwb.png',
    keywords: '‡',
    date: '2021-03-06T06:59:16.481Z',
  },
  {
    uuid: 'noticon_vdgnwctuhm3mk74ykifp',
    title: '한국투자증권',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1615014059/noticon/vdgnwctuhm3mk74ykifp.png',
    keywords: '‡',
    date: '2021-03-06T07:01:01.332Z',
  },
  {
    uuid: 'noticon_ncneaoz8a92s3mdoq1ro',
    title: '미래에셋대우',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1615014115/noticon/ncneaoz8a92s3mdoq1ro.png',
    keywords: '‡',
    date: '2021-03-06T07:01:57.349Z',
  },
  {
    uuid: 'noticon_mfj1hncc5glvkwlz1j77',
    title: '대신증권',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1615014160/noticon/mfj1hncc5glvkwlz1j77.png',
    keywords: '‡',
    date: '2021-03-06T07:02:41.847Z',
  },
  {
    uuid: 'noticon_zrao8lroaolbtlr7acrq',
    title: '삼성증권',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1615014199/noticon/zrao8lroaolbtlr7acrq.png',
    keywords: '‡',
    date: '2021-03-06T07:03:22.008Z',
  },
  {
    uuid: 'noticon_clnggdlkmhdpwbw8nv0i',
    title: 'IBK투자증권',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1615014246/noticon/clnggdlkmhdpwbw8nv0i.png',
    keywords: '‡',
    date: '2021-03-06T07:04:08.215Z',
  },
  {
    uuid: 'noticon_roeeg9cehq4cvg7ofqi6',
    title: '키움증권',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1615014303/noticon/roeeg9cehq4cvg7ofqi6.png',
    keywords: '‡',
    date: '2021-03-06T07:05:05.322Z',
  },
  {
    uuid: 'noticon_cfcxznmn4lcncrnfbw9g',
    title: 'NH투자증권',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1615014351/noticon/cfcxznmn4lcncrnfbw9g.png',
    keywords: '모바일 증권 나무‡',
    date: '2021-03-06T07:05:53.418Z',
  },
  {
    uuid: 'noticon_ksyri69td2odciuusqga',
    title: '신한금융투자',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1615014401/noticon/ksyri69td2odciuusqga.png',
    keywords: '‡',
    date: '2021-03-06T07:06:43.138Z',
  },
  {
    uuid: 'noticon_qudqsrqztj1gelwjhmxz',
    title: '하나금융투자',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1615015261/noticon/qudqsrqztj1gelwjhmxz.png',
    keywords: '‡',
    date: '2021-03-06T07:21:04.593Z',
  },
  {
    uuid: 'noticon_vkd4advqy1cf9oxtvjvw',
    title: 'DB금융투자',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1615015307/noticon/vkd4advqy1cf9oxtvjvw.png',
    keywords: '‡',
    date: '2021-03-06T07:21:50.791Z',
  },
  {
    uuid: 'noticon_dztqgm2ywuzpq6sbt2zj',
    title: 'SK증권',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1615015349/noticon/dztqgm2ywuzpq6sbt2zj.png',
    keywords: '‡',
    date: '2021-03-06T07:22:32.471Z',
  },
  {
    uuid: 'noticon_pk7khrzvmauv2f8iwnss',
    title: '유안타증권',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1615015386/noticon/pk7khrzvmauv2f8iwnss.png',
    keywords: '‡',
    date: '2021-03-06T07:23:08.801Z',
  },
  {
    uuid: 'noticon_r5tasfbhafihtresipnq',
    title: '솔루엠',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1615015600/noticon/r5tasfbhafihtresipnq.png',
    keywords: '‡',
    date: '2021-03-06T07:26:42.115Z',
  },
  {
    uuid: 'noticon_saki5ridsc6dmkmt1yha',
    title: '신영증권',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1615187101/noticon/saki5ridsc6dmkmt1yha.png',
    keywords: '‡',
    date: '2021-03-08T07:05:03.149Z',
  },
  {
    uuid: 'noticon_f9qc2qy9gum3nhucwtdc',
    title: 'UpBox',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1615192379/noticon/f9qc2qy9gum3nhucwtdc.png',
    keywords: 'upbox‡reco',
    date: '2021-03-08T08:33:02.506Z',
  },
  {
    uuid: 'noticon_wefbqwjng0xmemqrefid',
    title: 'Reco',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1615192404/noticon/wefbqwjng0xmemqrefid.png',
    keywords: 'Reco‡Upbox',
    date: '2021-03-08T08:33:26.539Z',
  },
  {
    uuid: 'noticon_ntl130pw3oiqsznuizke',
    title: 'google translation',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1615194498/noticon/ntl130pw3oiqsznuizke.png',
    keywords: '번역‡',
    date: '2021-03-08T09:08:20.886Z',
  },
  {
    uuid: 'noticon_dpfw7u34hlisvfhyrqyw',
    title: 'pandas',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1615279849/noticon/dpfw7u34hlisvfhyrqyw.png',
    keywords: 'python‡',
    date: '2021-03-09T08:50:51.172Z',
  },
  {
    uuid: 'noticon_webdbrepa8an9dwupokv',
    title: '42seoul_nav',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1615472905/noticon/webdbrepa8an9dwupokv.png',
    keywords: '42seoul‡',
    date: '2021-03-11T14:28:27.243Z',
  },
  {
    uuid: 'noticon_tvmmmxrjvk3qnb9lcdhb',
    title: 'kakaopay',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1615502319/noticon/tvmmmxrjvk3qnb9lcdhb.png',
    keywords: 'kakao‡pay',
    date: '2021-03-11T22:38:41.403Z',
  },
  {
    uuid: 'noticon_geqiddevnvqmjwyggmp7',
    title: 'minion_wow',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1615531502/noticon/geqiddevnvqmjwyggmp7.gif',
    keywords: 'minion‡yellow',
    date: '2021-03-12T06:45:07.529Z',
  },
  {
    uuid: 'noticon_o0o9serznfdrjkmjwdz9',
    title: '네롤리',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1615602851/noticon/o0o9serznfdrjkmjwdz9.png',
    keywords: 'neroli‡',
    date: '2021-03-13T02:34:13.892Z',
  },
  {
    uuid: 'noticon_ovfboouyksxq7qfamvtf',
    title: '원노트',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1615760104/noticon/ovfboouyksxq7qfamvtf.png',
    keywords: '원노트‡원노트',
    date: '2021-03-14T22:15:06.223Z',
  },
  {
    uuid: 'noticon_okjibzttx9rdvroz2i5m',
    title: '원노트(배경제거)',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1615760195/noticon/okjibzttx9rdvroz2i5m.png',
    keywords: '원노트(배경제거)‡원노트(배경제거)',
    date: '2021-03-14T22:16:38.172Z',
  },
  {
    uuid: 'noticon_xk6ddwe9iuyxmrxmjpvb',
    title: '투팍미디어',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1615774279/noticon/xk6ddwe9iuyxmrxmjpvb.png',
    keywords: '‡',
    date: '2021-03-15T02:11:21.396Z',
  },
  {
    uuid: 'noticon_dv34ognurq13m2bu9skw',
    title: 'PL/SQL',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1615872517/noticon/dv34ognurq13m2bu9skw.png',
    keywords: 'sql‡plsql',
    date: '2021-03-16T05:28:39.907Z',
  },
  {
    uuid: 'noticon_bovvqfqpuxj31gmlgqh6',
    title: 'never',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1615958364/noticon/bovvqfqpuxj31gmlgqh6.png',
    keywords: 'give‡up',
    date: '2021-03-17T05:19:26.885Z',
  },
  {
    uuid: 'noticon_m8cz4o1r8u7qomifpemt',
    title: 'Vault',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1615970225/noticon/m8cz4o1r8u7qomifpemt.png',
    keywords: '‡',
    date: '2021-03-17T08:37:07.990Z',
  },
  {
    uuid: 'noticon_xogl7wkrxjgxe0ahip9f',
    title: 'Cloud Compute',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1615971745/noticon/xogl7wkrxjgxe0ahip9f.png',
    keywords: '‡',
    date: '2021-03-17T09:02:27.859Z',
  },
  {
    uuid: 'noticon_s0zrhrin17eqzvtu2mqc',
    title: 'Netty',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1616037279/noticon/s0zrhrin17eqzvtu2mqc.png',
    keywords: 'Netty‡netty',
    date: '2021-03-18T03:14:42.566Z',
  },
  {
    uuid: 'noticon_a6innsrzpdrbdubw3iql',
    title: 'Change Data Capture',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1616050437/noticon/a6innsrzpdrbdubw3iql.png',
    keywords: '‡',
    date: '2021-03-18T06:54:00.142Z',
  },
  {
    uuid: 'noticon_ad1m2slr5beo78gzog59',
    title: 'debezium',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1616050522/noticon/ad1m2slr5beo78gzog59.png',
    keywords: '‡',
    date: '2021-03-18T06:55:24.761Z',
  },
  {
    uuid: 'noticon_oqleeqhw3gax9k8jtoac',
    title: 'fork',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1616120076/noticon/oqleeqhw3gax9k8jtoac.png',
    keywords: '포크‡git',
    date: '2021-03-19T02:14:39.501Z',
  },
  {
    uuid: 'noticon_dmvwf1ul6zyijvegv44l',
    title: 'payco',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1616120968/noticon/dmvwf1ul6zyijvegv44l.png',
    keywords: '페이코‡',
    date: '2021-03-19T02:29:37.471Z',
  },
  {
    uuid: 'noticon_xmdd5kjh0onr65cvoao4',
    title: 'judy',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1616137558/noticon/xmdd5kjh0onr65cvoao4.gif',
    keywords: 'zotopia‡',
    date: '2021-03-19T07:06:02.066Z',
  },
  {
    uuid: 'noticon_mllppshbmymxfgbm1jod',
    title: 'judy_happy',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1616137592/noticon/mllppshbmymxfgbm1jod.gif',
    keywords: 'zootopia‡',
    date: '2021-03-19T07:06:35.127Z',
  },
  {
    uuid: 'noticon_xx3mtv9nzcvq3eyey0u5',
    title: 'judy_hum',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1616138543/noticon/xx3mtv9nzcvq3eyey0u5.gif',
    keywords: 'zootopia‡',
    date: '2021-03-19T07:22:26.518Z',
  },
  {
    uuid: 'noticon_owiwvskmxvvcwjdr4ft4',
    title: 'Node',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1616225521/noticon/owiwvskmxvvcwjdr4ft4.png',
    keywords: '‡',
    date: '2021-03-20T07:32:04.152Z',
  },
  {
    uuid: 'noticon_nywoxfzjk0hmqc7xmswi',
    title: 'BOX25',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1616415194/noticon/nywoxfzjk0hmqc7xmswi.png',
    keywords: '‡',
    date: '2021-03-22T12:13:18.739Z',
  },
  {
    uuid: 'noticon_fv7faqft5imsnei4k7rg',
    title: 'FRESHCODE',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1616415333/noticon/fv7faqft5imsnei4k7rg.png',
    keywords: '‡',
    date: '2021-03-22T12:15:35.816Z',
  },
  {
    uuid: 'noticon_sahj7yjafnhd1cmyyrwf',
    title: 'FRESHCODE',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1616415385/noticon/sahj7yjafnhd1cmyyrwf.png',
    keywords: '‡',
    date: '2021-03-22T12:16:27.478Z',
  },
  {
    uuid: 'noticon_ktid6fhdwtqb1plvthlx',
    title: 'FRESHCODE',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1616415411/noticon/ktid6fhdwtqb1plvthlx.png',
    keywords: '‡',
    date: '2021-03-22T12:16:53.733Z',
  },
  {
    uuid: 'noticon_s1dvzlmrpic7uu3uizyk',
    title: '식권대장',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1616415646/noticon/s1dvzlmrpic7uu3uizyk.png',
    keywords: '‡',
    date: '2021-03-22T12:20:48.464Z',
  },
  {
    uuid: 'noticon_qjdvzc0kh4ux2kqjfj93',
    title: 'Nexus Registry',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1616456670/noticon/qjdvzc0kh4ux2kqjfj93.png',
    keywords: '‡',
    date: '2021-03-22T23:44:33.283Z',
  },
  {
    uuid: 'noticon_ipubxwijm8ldq1xbayz8',
    title: 'Portainer',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1616563477/noticon/ipubxwijm8ldq1xbayz8.png',
    keywords: '‡',
    date: '2021-03-24T05:24:40.507Z',
  },
  {
    uuid: 'noticon_oi5rwxrkdbm4uyi8xmto',
    title: '궁예퉤',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1616593631/noticon/oi5rwxrkdbm4uyi8xmto.gif',
    keywords: '궁예‡',
    date: '2021-03-24T13:47:14.533Z',
  },
  {
    uuid: 'noticon_ucqvbxuzxtamwktcbczo',
    title: '멍멍이',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1616593702/noticon/ucqvbxuzxtamwktcbczo.gif',
    keywords: '‡',
    date: '2021-03-24T13:48:26.532Z',
  },
  {
    uuid: 'noticon_lcugxam6owivokgw1psc',
    title: 'Grafana',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1616658979/noticon/lcugxam6owivokgw1psc.png',
    keywords: '‡',
    date: '2021-03-25T07:56:22.697Z',
  },
  {
    uuid: 'noticon_ojfgwrainlqgbtw5lxhs',
    title: 'Prometheus',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1616659095/noticon/ojfgwrainlqgbtw5lxhs.png',
    keywords: '‡',
    date: '2021-03-25T07:58:17.502Z',
  },
  {
    uuid: 'noticon_vqrqju7rv3iyhswycbf1',
    title: 'argo',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1616661231/noticon/vqrqju7rv3iyhswycbf1.png',
    keywords: '‡',
    date: '2021-03-25T08:33:54.744Z',
  },
  {
    uuid: 'noticon_aw5na8k2acxybsshcatp',
    title: 'helm',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1616661279/noticon/aw5na8k2acxybsshcatp.png',
    keywords: '‡',
    date: '2021-03-25T08:34:41.034Z',
  },
  {
    uuid: 'noticon_rcryzmqeoof9pltn1okp',
    title: 'Harbor',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1616661394/noticon/rcryzmqeoof9pltn1okp.png',
    keywords: '‡',
    date: '2021-03-25T08:36:36.949Z',
  },
  {
    uuid: 'noticon_ob4sadikcimfespny1bk',
    title: 'penguin',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1616741465/noticon/ob4sadikcimfespny1bk.png',
    keywords: 'cheerleading‡',
    date: '2021-03-26T06:51:07.747Z',
  },
  {
    uuid: 'noticon_sn8u9way9whghckmaaso',
    title: 'sprata',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1616862340/noticon/sn8u9way9whghckmaaso.png',
    keywords: 'sparta, 스파르타‡스파르타',
    date: '2021-03-27T16:25:42.821Z',
  },
  {
    uuid: 'noticon_kenneksytv1jgzuhjmvk',
    title: 'zebra',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1617066390/noticon/kenneksytv1jgzuhjmvk.png',
    keywords: 'animal‡',
    date: '2021-03-30T01:06:32.577Z',
  },
  {
    uuid: 'noticon_z8qvcwz14ow4byut1fhn',
    title: 'aks',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1617079516/noticon/z8qvcwz14ow4byut1fhn.png',
    keywords: 'aks‡azure',
    date: '2021-03-30T04:45:19.244Z',
  },
  {
    uuid: 'noticon_gxsvalavn3lyggoilpuh',
    title: '변신',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1617087073/noticon/gxsvalavn3lyggoilpuh.gif',
    keywords: '꺅‡끼약',
    date: '2021-03-30T06:51:16.355Z',
  },
  {
    uuid: 'noticon_az0boaymsltnzsapyogy',
    title: '오쪼라궁',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1617087166/noticon/az0boaymsltnzsapyogy.gif',
    keywords: '‡',
    date: '2021-03-30T06:52:48.986Z',
  },
  {
    uuid: 'noticon_jsvsrtbppaprmksqaulz',
    title: '현기증',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1617087287/noticon/jsvsrtbppaprmksqaulz.gif',
    keywords: '‡',
    date: '2021-03-30T06:54:50.561Z',
  },
  {
    uuid: 'noticon_ccfnewdq68nuu8pz0zvv',
    title: '꼬엑',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1617087392/noticon/ccfnewdq68nuu8pz0zvv.gif',
    keywords: '‡',
    date: '2021-03-30T06:56:35.496Z',
  },
  {
    uuid: 'noticon_natyv4w6eklhwzyompiy',
    title: '어쩜좋아',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1617087426/noticon/natyv4w6eklhwzyompiy.gif',
    keywords: '‡',
    date: '2021-03-30T06:57:10.422Z',
  },
  {
    uuid: 'noticon_uedixpon6rcvcqbtuf0c',
    title: '꺄아아아아',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1617087525/noticon/uedixpon6rcvcqbtuf0c.gif',
    keywords: '‡',
    date: '2021-03-30T06:58:48.660Z',
  },
  {
    uuid: 'noticon_cznt0rbw203gahpfxdmc',
    title: '신나는응가타임',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1617087611/noticon/cznt0rbw203gahpfxdmc.gif',
    keywords: '‡',
    date: '2021-03-30T07:00:14.994Z',
  },
  {
    uuid: 'noticon_kshb1rtkvuzezmal3yyk',
    title: '화나뚬',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1617087686/noticon/kshb1rtkvuzezmal3yyk.gif',
    keywords: '‡',
    date: '2021-03-30T07:01:30.187Z',
  },
  {
    uuid: 'noticon_cpmokhmv4ghi8dsz1i8n',
    title: '세상에',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1617087790/noticon/cpmokhmv4ghi8dsz1i8n.gif',
    keywords: '‡',
    date: '2021-03-30T07:03:14.145Z',
  },
  {
    uuid: 'noticon_spe2bc6vu8h6toqzfe3y',
    title: '듣고있어듣고있어',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1617087814/noticon/spe2bc6vu8h6toqzfe3y.gif',
    keywords: '‡',
    date: '2021-03-30T07:03:36.841Z',
  },
  {
    uuid: 'noticon_vsg7zo5crpwckmhch3wf',
    title: '거어마워어엉',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1617087964/noticon/vsg7zo5crpwckmhch3wf.gif',
    keywords: '‡',
    date: '2021-03-30T07:06:07.422Z',
  },
  {
    uuid: 'noticon_ekd6et01yfa7yz91p0hj',
    title: '패스트 벤처스',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1617674040/noticon/ekd6et01yfa7yz91p0hj.png',
    keywords: 'fast ventures‡FV',
    date: '2021-04-06T01:54:02.023Z',
  },
  {
    uuid: 'noticon_swyg164tjlehbth1wpac',
    title: '유리스나잇',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1617854540/noticon/swyg164tjlehbth1wpac.png',
    keywords: '‡',
    date: '2021-04-08T04:02:23.726Z',
  },
  {
    uuid: 'noticon_obbaryguhpzfiosxa7u3',
    title: '성심당',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1618135134/noticon/obbaryguhpzfiosxa7u3.png',
    keywords: '‡',
    date: '2021-04-11T09:58:56.940Z',
  },
  {
    uuid: 'noticon_orwe0ctpcegcdiebccru',
    title: 'kmong',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1618157449/noticon/orwe0ctpcegcdiebccru.png',
    keywords: '‡kmong_black',
    date: '2021-04-11T16:10:51.120Z',
  },
  {
    uuid: 'noticon_uulpfaneunxifupswyjv',
    title: 'kmong_yellow',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1618157479/noticon/uulpfaneunxifupswyjv.png',
    keywords: '‡kmong_yellow',
    date: '2021-04-11T16:11:25.644Z',
  },
  {
    uuid: 'noticon_rdcjmtlvxy6fnaama1gs',
    title: 'SSL인증서',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1618191002/noticon/rdcjmtlvxy6fnaama1gs.png',
    keywords: 'SSL인증서‡',
    date: '2021-04-12T01:30:04.718Z',
  },
  {
    uuid: 'noticon_n5yf9fedjdueb2nyhipc',
    title: 'UEL',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1618222056/noticon/n5yf9fedjdueb2nyhipc.png',
    keywords: '무인탐사연구소‡UEL:무인탐사연구소',
    date: '2021-04-12T10:07:39.234Z',
  },
  {
    uuid: 'noticon_uo5etrsh9iryvjdv6ubc',
    title: 'maven',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1618392109/noticon/uo5etrsh9iryvjdv6ubc.png',
    keywords: '‡',
    date: '2021-04-14T09:21:52.075Z',
  },
  {
    uuid: 'noticon_uxishu8mbjugcil2jr2t',
    title: '시리즈',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1618551496/noticon/uxishu8mbjugcil2jr2t.png',
    keywords: 'Series‡네이버',
    date: '2021-04-16T05:38:18.102Z',
  },
  {
    uuid: 'noticon_jpefov73nk9hzhjtzmcs',
    title: 'apple_gray',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1618750433/noticon/jpefov73nk9hzhjtzmcs.png',
    keywords: '‡',
    date: '2021-04-18T12:53:55.376Z',
  },
  {
    uuid: 'noticon_ujtkys8nyz1tt0hlyogd',
    title: '로스트아크',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1618909051/noticon/ujtkys8nyz1tt0hlyogd.png',
    keywords: 'Game‡',
    date: '2021-04-20T08:57:33.890Z',
  },
  {
    uuid: 'noticon_n0vohalsicusiasaezsx',
    title: 'NumPy',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1618920753/noticon/n0vohalsicusiasaezsx.png',
    keywords: 'NumPy‡NumPy',
    date: '2021-04-20T12:12:35.992Z',
  },
  {
    uuid: 'noticon_nlgsj72yi97m9mst1rma',
    title: 'Matplotlib',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1618921391/noticon/nlgsj72yi97m9mst1rma.png',
    keywords: '‡',
    date: '2021-04-20T12:23:14.319Z',
  },
  {
    uuid: 'noticon_kulrrpq9z4irkzztaacx',
    title: 'Seaborn',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1618921514/noticon/kulrrpq9z4irkzztaacx.png',
    keywords: '‡',
    date: '2021-04-20T12:25:17.157Z',
  },
  {
    uuid: 'noticon_cby22qfbdk91tvmvdk7r',
    title: 'NumPy',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1618921553/noticon/cby22qfbdk91tvmvdk7r.png',
    keywords: '‡',
    date: '2021-04-20T12:25:55.383Z',
  },
  {
    uuid: 'noticon_speubbjodnyzjdibu1og',
    title: 'wifi',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1619066436/noticon/speubbjodnyzjdibu1og.png',
    keywords: '‡',
    date: '2021-04-22T04:40:39.988Z',
  },
  {
    uuid: 'noticon_ejhwqq41r4dmbtq1o981',
    title: 'Assembly',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1619066624/noticon/ejhwqq41r4dmbtq1o981.png',
    keywords: '어셈블리어‡',
    date: '2021-04-22T04:43:46.280Z',
  },
  {
    uuid: 'noticon_d4cwf78qo0zydxcqdrtu',
    title: 'artificial intelligence',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1619066883/noticon/d4cwf78qo0zydxcqdrtu.png',
    keywords: '인공지능‡',
    date: '2021-04-22T04:48:05.943Z',
  },
  {
    uuid: 'noticon_gtfphr1thwnjhtkll0d3',
    title: 'Anaconda',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1619086309/noticon/gtfphr1thwnjhtkll0d3.png',
    keywords: '‡',
    date: '2021-04-22T10:11:50.980Z',
  },
  {
    uuid: 'noticon_nggi4xdvzsvz9k8c4ucd',
    title: 'bigin',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1619509552/noticon/nggi4xdvzsvz9k8c4ucd.png',
    keywords: '‡',
    date: '2021-04-27T07:45:54.825Z',
  },
  {
    uuid: 'noticon_urcfxoausyy60vfxv7x5',
    title: '삼성',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1619540240/noticon/urcfxoausyy60vfxv7x5.png',
    keywords: 'samsung‡',
    date: '2021-04-27T16:17:22.721Z',
  },
  {
    uuid: 'noticon_qfpsbkcrri1i4x4kqi5o',
    title: '10km',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1619546983/noticon/qfpsbkcrri1i4x4kqi5o.png',
    keywords: '‡',
    date: '2021-04-27T18:09:46.062Z',
  },
  {
    uuid: 'noticon_hw9uxgdznrncipylwsqb',
    title: 'singularity',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1619951445/noticon/hw9uxgdznrncipylwsqb.png',
    keywords: 'container‡',
    date: '2021-05-02T10:30:48.632Z',
  },
  {
    uuid: 'noticon_rvfzzrxhkieeau6badox',
    title: 'tistory',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1619968332/noticon/rvfzzrxhkieeau6badox.png',
    keywords: '‡',
    date: '2021-05-02T15:12:14.813Z',
  },
  {
    uuid: 'noticon_mohy8ld4qt2a5ldq20hk',
    title: 'gk',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1620200532/noticon/mohy8ld4qt2a5ldq20hk.png',
    keywords: '‡',
    date: '2021-05-05T07:42:14.656Z',
  },
  {
    uuid: 'noticon_vjibs3ym1l3igq4mfp9d',
    title: '코드스쿼드',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1620258947/noticon/vjibs3ym1l3igq4mfp9d.png',
    keywords: '코드스쿼드‡codesquard',
    date: '2021-05-05T23:55:49.555Z',
  },
  {
    uuid: 'noticon_m8zqlrdxothrgtjzvxwd',
    title: '기글즈',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1620361330/noticon/m8zqlrdxothrgtjzvxwd.png',
    keywords: '‡',
    date: '2021-05-07T04:22:12.590Z',
  },
  {
    uuid: 'noticon_qep3clp2xpx4d5sajalg',
    title: '기글즈2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1620361390/noticon/qep3clp2xpx4d5sajalg.png',
    keywords: '‡',
    date: '2021-05-07T04:23:13.041Z',
  },
  {
    uuid: 'noticon_e7amgvckfsh2hzjmhlbi',
    title: '기글즈3',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1620361446/noticon/e7amgvckfsh2hzjmhlbi.png',
    keywords: '‡',
    date: '2021-05-07T04:24:08.365Z',
  },
  {
    uuid: 'noticon_huzuzn7brn8p0cbjy4ws',
    title: 'Human Resources',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1620378299/noticon/huzuzn7brn8p0cbjy4ws.png',
    keywords: 'HR‡Recruiting',
    date: '2021-05-07T09:05:01.952Z',
  },
  {
    uuid: 'noticon_cuazwjrqzp96ois87hew',
    title: 'Software Maestro',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1620458685/noticon/cuazwjrqzp96ois87hew.png',
    keywords: 'software‡maestro',
    date: '2021-05-08T07:24:46.999Z',
  },
  {
    uuid: 'noticon_m3vvuqn1v594t6ygztiu',
    title: '하잇하잇',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1620550021/noticon/m3vvuqn1v594t6ygztiu.gif',
    keywords: '123‡123',
    date: '2021-05-09T08:47:03.110Z',
  },
  {
    uuid: 'noticon_r0dcanhswftwvdujrqk6',
    title: '부경대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1620551216/noticon/r0dcanhswftwvdujrqk6.png',
    keywords: '학교‡대학교',
    date: '2021-05-09T09:06:58.161Z',
  },
  {
    uuid: 'noticon_wenmqaboowkai6aam1gv',
    title: 'flower',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1620551317/noticon/wenmqaboowkai6aam1gv.png',
    keywords: 'flower‡튤립',
    date: '2021-05-09T09:08:39.599Z',
  },
  {
    uuid: 'noticon_mp90w9dm6jrxyupbp8bg',
    title: 'flower',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1620551394/noticon/mp90w9dm6jrxyupbp8bg.png',
    keywords: 'flower‡flower',
    date: '2021-05-09T09:09:56.477Z',
  },
  {
    uuid: 'noticon_mi4dbyablpdx7bgspbnx',
    title: '퓨처스킬',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1620557300/noticon/mi4dbyablpdx7bgspbnx.png',
    keywords: '‡',
    date: '2021-05-09T10:48:24.025Z',
  },
  {
    uuid: 'noticon_nsbkrtullyoety58ezwc',
    title: 'mapstruct',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1620797240/noticon/nsbkrtullyoety58ezwc.png',
    keywords: 'mapstruct‡mapper',
    date: '2021-05-12T05:27:22.142Z',
  },
  {
    uuid: 'noticon_ucjzjhr7x4ichjpirr4u',
    title: 'laser',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1621235208/noticon/ucjzjhr7x4ichjpirr4u.png',
    keywords: '레이저‡',
    date: '2021-05-17T07:06:49.970Z',
  },
  {
    uuid: 'noticon_v3pcpusajohadldxvm7k',
    title: 'QueryDSL',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1621236120/noticon/v3pcpusajohadldxvm7k.png',
    keywords: 'querydsl‡query',
    date: '2021-05-17T07:22:02.907Z',
  },
  {
    uuid: 'noticon_yhijw9mvyrw2ej1rua16',
    title: 'map protocol',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1621237725/noticon/yhijw9mvyrw2ej1rua16.png',
    keywords: 'map‡marcopolo',
    date: '2021-05-17T07:48:46.884Z',
  },
  {
    uuid: 'noticon_loyrp55a3s0mxebd4vgj',
    title: 'Dockerfile',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1621237736/noticon/loyrp55a3s0mxebd4vgj.png',
    keywords: 'dockerfile‡',
    date: '2021-05-17T07:48:59.875Z',
  },
  {
    uuid: 'noticon_jb2mfzt89tqpcvjfb6p2',
    title: 'leo',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1621249299/noticon/jb2mfzt89tqpcvjfb6p2.png',
    keywords: 'strong‡corgi',
    date: '2021-05-17T11:01:42.272Z',
  },
  {
    uuid: 'noticon_k0awjmzwdmhkqqsgqw7c',
    title: 'HYUNDAI',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1621405877/noticon/k0awjmzwdmhkqqsgqw7c.png',
    keywords: '현대, 현대자동차, hyundai‡',
    date: '2021-05-19T06:31:19.211Z',
  },
  {
    uuid: 'noticon_tbsjhgb3oujefk0uoxsz',
    title: '캐롯',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1621435971/noticon/tbsjhgb3oujefk0uoxsz.png',
    keywords: '캐롯‡캐롯손보',
    date: '2021-05-19T14:52:54.283Z',
  },
  {
    uuid: 'noticon_fjokyg3uubno68o4uj0u',
    title: 'Interpark',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1621451642/noticon/fjokyg3uubno68o4uj0u.png',
    keywords: 'interpark‡인터파크',
    date: '2021-05-19T19:14:04.915Z',
  },
  {
    uuid: 'noticon_dap8y4qqjf4dbqsxcpmr',
    title: 'NCSOFT',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1621451744/noticon/dap8y4qqjf4dbqsxcpmr.png',
    keywords: 'ncsoft‡엔씨소프트',
    date: '2021-05-19T19:15:47.055Z',
  },
  {
    uuid: 'noticon_wbx6sz7ouccpnmbmvf3k',
    title: 'programmers',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1621451894/noticon/wbx6sz7ouccpnmbmvf3k.png',
    keywords: '프로그래머스‡',
    date: '2021-05-19T19:18:16.529Z',
  },
  {
    uuid: 'noticon_pv4gizu6vrs3l1eevply',
    title: 'EA',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1621452012/noticon/pv4gizu6vrs3l1eevply.png',
    keywords: 'electronic arts‡',
    date: '2021-05-19T19:20:16.903Z',
  },
  {
    uuid: 'noticon_vous8vuh9zeb9dv79ybz',
    title: 'piano',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1621780560/noticon/vous8vuh9zeb9dv79ybz.png',
    keywords: '‡',
    date: '2021-05-23T14:36:02.096Z',
  },
  {
    uuid: 'noticon_qeqhujksy9r0r5zdxboc',
    title: 'piano2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1621780650/noticon/qeqhujksy9r0r5zdxboc.png',
    keywords: '‡',
    date: '2021-05-23T14:37:33.271Z',
  },
  {
    uuid: 'noticon_raq2azdx6m2ychex2kcd',
    title: 'adoptopenjdk',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1621806872/noticon/raq2azdx6m2ychex2kcd.png',
    keywords: '‡',
    date: '2021-05-23T21:54:34.292Z',
  },
  {
    uuid: 'noticon_xkvbbctvg4dudbfnlgvb',
    title: '1000grusoop',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1621921470/noticon/xkvbbctvg4dudbfnlgvb.png',
    keywords: '천그루숲 캐릭터 도톨이‡도서출판 천그루숲',
    date: '2021-05-25T05:44:32.717Z',
  },
  {
    uuid: 'noticon_pk9wgkneotwzdqlhctd8',
    title: '천그루숲 도톨이에오🌰',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1621921608/noticon/pk9wgkneotwzdqlhctd8.png',
    keywords: '도서출판 천그루숲 캐릭터 도톨이‡',
    date: '2021-05-25T05:46:50.163Z',
  },
  {
    uuid: 'noticon_lja39vhbm0a32yfqhzvb',
    title: 'Onemillimore',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1622185957/noticon/lja39vhbm0a32yfqhzvb.png',
    keywords: '‡',
    date: '2021-05-28T07:12:39.373Z',
  },
  {
    uuid: 'noticon_qwvot1hwgwh0shnzumww',
    title: '1mm_more',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1622186006/noticon/qwvot1hwgwh0shnzumww.png',
    keywords: '‡',
    date: '2021-05-28T07:13:28.546Z',
  },
  {
    uuid: 'noticon_s5bhe328k5o8jhcpqtrq',
    title: 'TeamH4C',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1622358065/noticon/s5bhe328k5o8jhcpqtrq.png',
    keywords: '‡',
    date: '2021-05-30T07:01:07.187Z',
  },
  {
    uuid: 'noticon_rxsm1xn9galey5ic6mcy',
    title: '헤럴드경제',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1622478402/noticon/rxsm1xn9galey5ic6mcy.png',
    keywords: '코리아헤럴드‡뉴스',
    date: '2021-05-31T16:26:45.048Z',
  },
  {
    uuid: 'noticon_jxbxgoljfpkz2rwt9knc',
    title: '현대 모터 그룹',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1622478573/noticon/jxbxgoljfpkz2rwt9knc.png',
    keywords: 'hyundai‡자동차',
    date: '2021-05-31T16:29:36.556Z',
  },
  {
    uuid: 'noticon_ywdda0kpuhk1nnxzg8ju',
    title: '뉴스와이어',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1622478607/noticon/ywdda0kpuhk1nnxzg8ju.png',
    keywords: 'news‡',
    date: '2021-05-31T16:30:09.017Z',
  },
  {
    uuid: 'noticon_i7bne3kuq9df4er4jz9i',
    title: 'ET News',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1622478884/noticon/i7bne3kuq9df4er4jz9i.png',
    keywords: '이티‡전자신문',
    date: '2021-05-31T16:34:46.573Z',
  },
  {
    uuid: 'noticon_drdev9fnfpbn1cklxoyi',
    title: 'KT bizmeka EZ',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1622533247/noticon/drdev9fnfpbn1cklxoyi.png',
    keywords: '‡',
    date: '2021-06-01T07:40:49.755Z',
  },
  {
    uuid: 'noticon_ejtlcm4kjfbahkufibgr',
    title: 'unlimeat_black',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1622534155/noticon/ejtlcm4kjfbahkufibgr.png',
    keywords: 'zikooin‡beyondmeat',
    date: '2021-06-01T07:55:59.010Z',
  },
  {
    uuid: 'noticon_j5ebanfx66rv8zjad7rt',
    title: 'unlimeat_white',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1622534204/noticon/j5ebanfx66rv8zjad7rt.png',
    keywords: 'impossible‡beyond',
    date: '2021-06-01T07:56:46.118Z',
  },
  {
    uuid: 'noticon_ccnxuhd9txwayi7fnqri',
    title: 'bob1',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1622536638/noticon/ccnxuhd9txwayi7fnqri.png',
    keywords: 'bob1‡bob1',
    date: '2021-06-01T08:37:20.850Z',
  },
  {
    uuid: 'noticon_vh7irerudyzlhekh9ydb',
    title: 'bob2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1622536663/noticon/vh7irerudyzlhekh9ydb.png',
    keywords: 'bob2‡bob2',
    date: '2021-06-01T08:37:45.449Z',
  },
  {
    uuid: 'noticon_pb5d1c7mkvsjkfzzowkr',
    title: 'bob3',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1622537079/noticon/pb5d1c7mkvsjkfzzowkr.png',
    keywords: 'bob3‡bob3',
    date: '2021-06-01T08:44:42.075Z',
  },
  {
    uuid: 'noticon_zdf5bjtf0u21qsfc90vj',
    title: 'baby',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1622537518/noticon/zdf5bjtf0u21qsfc90vj.gif',
    keywords: 'baby‡',
    date: '2021-06-01T08:52:03.377Z',
  },
  {
    uuid: 'noticon_nkjxp1ixppz9lhtn28xb',
    title: '알다',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1622548774/noticon/nkjxp1ixppz9lhtn28xb.png',
    keywords: '팀윙크‡alda',
    date: '2021-06-01T11:59:36.267Z',
  },
  {
    uuid: 'noticon_n8zjoyusrzrzgyifxnbe',
    title: '메타몽',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1622560614/noticon/n8zjoyusrzrzgyifxnbe.png',
    keywords: 'metamong‡포켓몬',
    date: '2021-06-01T15:16:56.924Z',
  },
  {
    uuid: 'noticon_uq8anxpkbahldvb9gha4',
    title: '지구인컴퍼니',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1622597431/noticon/uq8anxpkbahldvb9gha4.png',
    keywords: '원형‡zikooin',
    date: '2021-06-02T01:30:34.411Z',
  },
  {
    uuid: 'noticon_ojrai6858ye3y28argas',
    title: '지구인컴퍼니',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1622597455/noticon/ojrai6858ye3y28argas.png',
    keywords: '사각‡zikooin',
    date: '2021-06-02T01:30:57.589Z',
  },
  {
    uuid: 'noticon_xevywdylsbzj2qandkw8',
    title: '지구인컴퍼니',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1622597480/noticon/xevywdylsbzj2qandkw8.png',
    keywords: 'zikooin‡unlimeat',
    date: '2021-06-02T01:31:22.393Z',
  },
  {
    uuid: 'noticon_upv3b2pr5aqco2c99q2a',
    title: '롯데리아',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1622679386/noticon/upv3b2pr5aqco2c99q2a.png',
    keywords: '롯데리아‡lotteria',
    date: '2021-06-03T00:16:29.417Z',
  },
  {
    uuid: 'noticon_dlq88x31qrnbd5c3wtkp',
    title: '현대 자동자 그룹',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1622726833/noticon/dlq88x31qrnbd5c3wtkp.png',
    keywords: 'hyundai‡자동차',
    date: '2021-06-03T13:27:16.029Z',
  },
  {
    uuid: 'noticon_kakndsc5wpxxlopsw0f8',
    title: 'ET 뉴스',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1622726863/noticon/kakndsc5wpxxlopsw0f8.png',
    keywords: '전자신문‡',
    date: '2021-06-03T13:27:45.767Z',
  },
  {
    uuid: 'noticon_jtbkem1oqk1ro1yrpuls',
    title: '헤럴드 경제',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1622726879/noticon/jtbkem1oqk1ro1yrpuls.png',
    keywords: '뉴스‡',
    date: '2021-06-03T13:28:01.863Z',
  },
  {
    uuid: 'noticon_exjodth7nm0ffv8q1zvo',
    title: '뉴스 와이어',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1622726900/noticon/exjodth7nm0ffv8q1zvo.png',
    keywords: 'news‡',
    date: '2021-06-03T13:28:22.528Z',
  },
  {
    uuid: 'noticon_kaony4jqrdxwzvnfyd0t',
    title: '탐잇',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1622965407/noticon/kaony4jqrdxwzvnfyd0t.png',
    keywords: '‡',
    date: '2021-06-06T07:43:28.731Z',
  },
  {
    uuid: 'noticon_dfixujl03lyuuscwbbrg',
    title: 'picar',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1622970821/noticon/dfixujl03lyuuscwbbrg.png',
    keywords: '전기차‡',
    date: '2021-06-06T09:13:43.627Z',
  },
  {
    uuid: 'noticon_embcmftdykqgjtu0aewr',
    title: '플렉스',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1623041070/noticon/embcmftdykqgjtu0aewr.png',
    keywords: '‡',
    date: '2021-06-07T04:44:31.882Z',
  },
  {
    uuid: 'noticon_fnz11uc5tgfjcz9qrbls',
    title: '숭실대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1623047066/noticon/fnz11uc5tgfjcz9qrbls.png',
    keywords: '숭실‡대학교',
    date: '2021-06-07T06:24:28.658Z',
  },
  {
    uuid: 'noticon_adl8cg4266exejnzha95',
    title: 'Flask',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1623067614/noticon/adl8cg4266exejnzha95.png',
    keywords: 'flask‡python',
    date: '2021-06-07T12:06:56.845Z',
  },
  {
    uuid: 'noticon_ui6uahze14h1vwneotpg',
    title: "You're Invited",
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1623202472/noticon/ui6uahze14h1vwneotpg.png',
    keywords: '1000grusoop‡CNHstudio',
    date: '2021-06-09T01:34:34.350Z',
  },
  {
    uuid: 'noticon_s4izkpchgowt0r48nufg',
    title: '대덕소프트웨어마이스터고등학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1623248629/noticon/s4izkpchgowt0r48nufg.png',
    keywords: '고등학교‡',
    date: '2021-06-09T14:23:53.101Z',
  },
  {
    uuid: 'noticon_dwhdor3qcwlynwmnqsxy',
    title: 'ajax',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1623252802/noticon/dwhdor3qcwlynwmnqsxy.png',
    keywords: '에이잭스‡에이젝스',
    date: '2021-06-09T15:33:25.285Z',
  },
  {
    uuid: 'noticon_h6rwxmwdik9kg8heewvl',
    title: '다람',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1623388501/noticon/h6rwxmwdik9kg8heewvl.gif',
    keywords: '다람‡다람',
    date: '2021-06-11T05:15:04.016Z',
  },
  {
    uuid: 'noticon_q39odp8pm2zz4guzjjwy',
    title: 'matter',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1623504140/noticon/q39odp8pm2zz4guzjjwy.png',
    keywords: '‡',
    date: '2021-06-12T13:22:22.216Z',
  },
  {
    uuid: 'noticon_fgzxr0rkkh2pq4kprf6t',
    title: 'Fastapi',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1623629039/noticon/fgzxr0rkkh2pq4kprf6t.png',
    keywords: '‡',
    date: '2021-06-14T00:04:02.141Z',
  },
  {
    uuid: 'noticon_wji24lstvvv00v78sobj',
    title: 'AI',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1623629564/noticon/wji24lstvvv00v78sobj.png',
    keywords: '‡',
    date: '2021-06-14T00:12:46.577Z',
  },
  {
    uuid: 'noticon_rmzul3z90pwofsnqkezq',
    title: 'NLP',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1623629596/noticon/rmzul3z90pwofsnqkezq.png',
    keywords: '‡',
    date: '2021-06-14T00:13:18.194Z',
  },
  {
    uuid: 'noticon_hwkrlmss2xfp6znom2bo',
    title: '팀윙크',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1623725511/noticon/hwkrlmss2xfp6znom2bo.png',
    keywords: '팀윙크‡알다',
    date: '2021-06-15T02:51:53.376Z',
  },
  {
    uuid: 'noticon_siyqxoe4s3xd13auax4z',
    title: 'Dacon',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1623808333/noticon/siyqxoe4s3xd13auax4z.png',
    keywords: '‡',
    date: '2021-06-16T01:52:16.335Z',
  },
  {
    uuid: 'noticon_wbbtjsv3rhvqednul0ff',
    title: 'Deeplearning',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1623808358/noticon/wbbtjsv3rhvqednul0ff.png',
    keywords: '‡',
    date: '2021-06-16T01:52:40.170Z',
  },
  {
    uuid: 'noticon_kewqiivvhgvktibgdrlc',
    title: 'Machine learning',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1623808380/noticon/kewqiivvhgvktibgdrlc.png',
    keywords: '‡',
    date: '2021-06-16T01:53:02.180Z',
  },
  {
    uuid: 'noticon_ybaend1mpmzcokzjvsid',
    title: '반도체',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1623808396/noticon/ybaend1mpmzcokzjvsid.png',
    keywords: '‡',
    date: '2021-06-16T01:53:18.235Z',
  },
  {
    uuid: 'noticon_xmwlaair6yj8znmtxegy',
    title: '캐글 코리아',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1623808761/noticon/xmwlaair6yj8znmtxegy.png',
    keywords: '‡',
    date: '2021-06-16T01:59:23.444Z',
  },
  {
    uuid: 'noticon_r1lmsm8cx9ld74vntfa1',
    title: '단정한 빡공이',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1623855511/noticon/r1lmsm8cx9ld74vntfa1.png',
    keywords: '빡공단‡베어유',
    date: '2021-06-16T14:58:37.833Z',
  },
  {
    uuid: 'noticon_dvk8i9waoroveljl4dbo',
    title: '왓챠',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1623941317/noticon/dvk8i9waoroveljl4dbo.png',
    keywords: 'Watcha‡Movie',
    date: '2021-06-17T14:48:39.441Z',
  },
  {
    uuid: 'noticon_djt7dkmsrpnhtwkcupyf',
    title: '왓챠피디아',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1623941479/noticon/djt7dkmsrpnhtwkcupyf.png',
    keywords: 'watcha pedia‡movie',
    date: '2021-06-17T14:51:22.270Z',
  },
  {
    uuid: 'noticon_m30bx6z2uv7xy3296yap',
    title: 'koreatech',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1623952446/noticon/m30bx6z2uv7xy3296yap.png',
    keywords: '‡',
    date: '2021-06-17T17:54:09.726Z',
  },
  {
    uuid: 'noticon_lxp2socitgjuoo7l8kin',
    title: 'PINPOINT',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1623997668/noticon/lxp2socitgjuoo7l8kin.png',
    keywords: 'Naver PINPOINT‡PINPOINT APM',
    date: '2021-06-18T06:27:50.055Z',
  },
  {
    uuid: 'noticon_vhvdizulwuzk1xbmocip',
    title: '흠터레스팅',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1624034531/noticon/vhvdizulwuzk1xbmocip.png',
    keywords: 'thinking_face‡emoji',
    date: '2021-06-18T16:42:13.158Z',
  },
  {
    uuid: 'noticon_vhb5dww6leaz7ylcbg54',
    title: 'XML',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1624164317/noticon/vhb5dww6leaz7ylcbg54.png',
    keywords: '‡',
    date: '2021-06-20T04:45:19.140Z',
  },
  {
    uuid: 'noticon_yb7vydrae8yubsnfx02n',
    title: 'eye',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1624169046/noticon/yb7vydrae8yubsnfx02n.png',
    keywords: '‡',
    date: '2021-06-20T06:04:09.488Z',
  },
  {
    uuid: 'noticon_xqwdee33rsnp3u9xb0ht',
    title: 'eye',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1624169248/noticon/xqwdee33rsnp3u9xb0ht.png',
    keywords: '‡',
    date: '2021-06-20T06:07:29.939Z',
  },
  {
    uuid: 'noticon_kfkaupdif0bd1eqfp7gl',
    title: 'CJ ONSTYLE',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1624336725/noticon/kfkaupdif0bd1eqfp7gl.png',
    keywords: '‡',
    date: '2021-06-22T04:38:47.952Z',
  },
  {
    uuid: 'noticon_pozl9m4fmmlwicqlrtkz',
    title: '블라인드',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1624365730/noticon/pozl9m4fmmlwicqlrtkz.png',
    keywords: '블라인드‡매체',
    date: '2021-06-22T12:42:12.951Z',
  },
  {
    uuid: 'noticon_scrgeifb2zuikl9tzxia',
    title: 'TNK',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1624426143/noticon/scrgeifb2zuikl9tzxia.png',
    keywords: 'TNK‡티엔케이',
    date: '2021-06-23T05:29:05.221Z',
  },
  {
    uuid: 'noticon_xdkmafvk1vawh1s318kw',
    title: 'connection',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1624512256/noticon/xdkmafvk1vawh1s318kw.png',
    keywords: '‡',
    date: '2021-06-24T05:24:18.336Z',
  },
  {
    uuid: 'noticon_fhiwu31v6hto9xbo1txy',
    title: 'HelloNewWorld',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1624550209/noticon/fhiwu31v6hto9xbo1txy.png',
    keywords: '‡',
    date: '2021-06-24T15:56:50.911Z',
  },
  {
    uuid: 'noticon_dtalafco8unvel5vshgh',
    title: '유튜브',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1624711651/noticon/dtalafco8unvel5vshgh.png',
    keywords: '‡',
    date: '2021-06-26T12:47:33.617Z',
  },
  {
    uuid: 'noticon_nir9972nx7ma69ytgcnf',
    title: '네이버 블로그',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1624712159/noticon/nir9972nx7ma69ytgcnf.png',
    keywords: '‡',
    date: '2021-06-26T12:56:01.378Z',
  },
  {
    uuid: 'noticon_xmnq7wao5o9curiffp9n',
    title: '태블로',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1624776021/noticon/xmnq7wao5o9curiffp9n.png',
    keywords: '‡',
    date: '2021-06-27T06:40:23.169Z',
  },
  {
    uuid: 'noticon_ratqkpzs9e61yrkxw9gx',
    title: 'call',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1624802086/noticon/ratqkpzs9e61yrkxw9gx.png',
    keywords: 'call‡phone',
    date: '2021-06-27T13:54:49.110Z',
  },
  {
    uuid: 'noticon_lvft3jpzuzn1qnk7o6kq',
    title: 'kredit job',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1624877087/noticon/lvft3jpzuzn1qnk7o6kq.png',
    keywords: 'kredit job‡kredit job',
    date: '2021-06-28T10:44:48.925Z',
  },
  {
    uuid: 'noticon_wcqnc2ysxsmk0wlvq2vp',
    title: 'Ray',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1624881973/noticon/wcqnc2ysxsmk0wlvq2vp.png',
    keywords: '‡',
    date: '2021-06-28T12:06:15.388Z',
  },
  {
    uuid: 'noticon_nsvsrxomqvuymtxphndf',
    title: 'selenium',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1624882515/noticon/nsvsrxomqvuymtxphndf.png',
    keywords: 'crawling‡',
    date: '2021-06-28T12:15:17.584Z',
  },
  {
    uuid: 'noticon_ukmnmfu2dvfmoubltyvr',
    title: 'Putty',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1625544842/noticon/ukmnmfu2dvfmoubltyvr.png',
    keywords: 'Putty‡푸티',
    date: '2021-07-06T04:14:04.711Z',
  },
  {
    uuid: 'noticon_ov1tgrsdjgvn7xgwnqld',
    title: '알라딘',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1625724326/noticon/ov1tgrsdjgvn7xgwnqld.png',
    keywords: 'aladin‡서점',
    date: '2021-07-08T06:05:28.417Z',
  },
  {
    uuid: 'noticon_csztwpepunjukwbsv9jb',
    title: '알라딘 ebook',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1625724653/noticon/csztwpepunjukwbsv9jb.png',
    keywords: 'ebook‡알라딘',
    date: '2021-07-08T06:10:56.315Z',
  },
  {
    uuid: 'noticon_krktyxfzk7oieo9trcml',
    title: '교보 ebook',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1625724690/noticon/krktyxfzk7oieo9trcml.png',
    keywords: '교보문고‡ebook',
    date: '2021-07-08T06:11:33.150Z',
  },
  {
    uuid: 'noticon_kikgcizrfymsjmpjymql',
    title: '교보문고',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1625724785/noticon/kikgcizrfymsjmpjymql.png',
    keywords: '교보앱‡교보',
    date: '2021-07-08T06:13:07.900Z',
  },
  {
    uuid: 'noticon_q0i4aoxjw9rgfcsorbrp',
    title: '에이비일팔공',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626080209/noticon/q0i4aoxjw9rgfcsorbrp.png',
    keywords: 'AB180‡',
    date: '2021-07-12T08:56:51.873Z',
  },
  {
    uuid: 'noticon_uqui2rrxtt26ngudnhdu',
    title: 'jupyter',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626170585/noticon/uqui2rrxtt26ngudnhdu.png',
    keywords: 'jupyter‡notebook',
    date: '2021-07-13T10:03:10.438Z',
  },
  {
    uuid: 'noticon_otmec8gic3zshoni0qwt',
    title: 'hansalim',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626231174/noticon/otmec8gic3zshoni0qwt.png',
    keywords: 'hansalim‡',
    date: '2021-07-14T02:52:56.537Z',
  },
  {
    uuid: 'noticon_f0l1ra1ku6rn3sdxrzga',
    title: 'ELECON',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626399192/noticon/f0l1ra1ku6rn3sdxrzga.png',
    keywords: '‡',
    date: '2021-07-16T01:33:14.098Z',
  },
  {
    uuid: 'noticon_dc1h6ls0ipnnbsuwswgn',
    title: 'KOISTUDY',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626403512/noticon/dc1h6ls0ipnnbsuwswgn.png',
    keywords: '‡',
    date: '2021-07-16T02:45:14.373Z',
  },
  {
    uuid: 'noticon_feeqgfhrr7krghbit1uu',
    title: 'ELECON',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626406214/noticon/feeqgfhrr7krghbit1uu.png',
    keywords: '‡',
    date: '2021-07-16T03:30:16.980Z',
  },
  {
    uuid: 'noticon_jphy1fqlfrrrd62wkg9j',
    title: 'ELECON logo',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626406255/noticon/jphy1fqlfrrrd62wkg9j.png',
    keywords: '‡',
    date: '2021-07-16T03:30:57.237Z',
  },
  {
    uuid: 'noticon_ikaacptqt1lbwhfcg8f2',
    title: '부스트캠프',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626416868/noticon/ikaacptqt1lbwhfcg8f2.png',
    keywords: 'boostcamp‡부스트캠프',
    date: '2021-07-16T06:27:50.944Z',
  },
  {
    uuid: 'noticon_ohklfyagczqrp7xvlkxd',
    title: '네이버페이(흰배경)',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626436386/noticon/ohklfyagczqrp7xvlkxd.png',
    keywords: 'NAVER PAY‡NPAY',
    date: '2021-07-16T11:53:08.413Z',
  },
  {
    uuid: 'noticon_ix5w2omqemckdmyoozen',
    title: '네이버페이(투명배경)',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626436410/noticon/ix5w2omqemckdmyoozen.png',
    keywords: 'NAVER PAY‡N PAY',
    date: '2021-07-16T11:53:32.181Z',
  },
  {
    uuid: 'noticon_dyy5naus5c2fokrrvkkr',
    title: '코인원',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626436669/noticon/dyy5naus5c2fokrrvkkr.png',
    keywords: 'coinone‡암호화폐',
    date: '2021-07-16T11:57:51.531Z',
  },
  {
    uuid: 'noticon_exbyaobbkjnlbudggyhb',
    title: '빗썸',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626436688/noticon/exbyaobbkjnlbudggyhb.png',
    keywords: 'bithumb‡암호화폐',
    date: '2021-07-16T11:58:10.096Z',
  },
  {
    uuid: 'noticon_e22yr6insjot8bwx5gph',
    title: '케이뱅크',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626436827/noticon/e22yr6insjot8bwx5gph.png',
    keywords: 'kbank‡은행',
    date: '2021-07-16T12:00:29.915Z',
  },
  {
    uuid: 'noticon_uxhlgth5bporyryppjxw',
    title: '쿠페이',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626436919/noticon/uxhlgth5bporyryppjxw.png',
    keywords: 'coupay‡쿠팡',
    date: '2021-07-16T12:02:01.003Z',
  },
  {
    uuid: 'noticon_vp2v0uzblch6dj5l7c8i',
    title: '멜론',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626437290/noticon/vp2v0uzblch6dj5l7c8i.png',
    keywords: 'melon‡음원',
    date: '2021-07-16T12:08:13.368Z',
  },
  {
    uuid: 'noticon_eotlkjelkzhuxfhqcjlf',
    title: '마이크로소프트',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626437493/noticon/eotlkjelkzhuxfhqcjlf.png',
    keywords: 'microsoft‡마소',
    date: '2021-07-16T12:11:35.429Z',
  },
  {
    uuid: 'noticon_ou1lkaanpvjkub7nfqvx',
    title: '나무위키',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626438330/noticon/ou1lkaanpvjkub7nfqvx.png',
    keywords: 'namu wiki‡',
    date: '2021-07-16T12:25:33.334Z',
  },
  {
    uuid: 'noticon_vh0zejyjdohg6vaxfxnu',
    title: '넥슨',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626438411/noticon/vh0zejyjdohg6vaxfxnu.png',
    keywords: 'nexon‡게임',
    date: '2021-07-16T12:26:53.833Z',
  },
  {
    uuid: 'noticon_yqrpglivxamupdqfs9cs',
    title: 'SBS',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626438487/noticon/yqrpglivxamupdqfs9cs.png',
    keywords: '에스비에스‡방송',
    date: '2021-07-16T12:28:09.196Z',
  },
  {
    uuid: 'noticon_kxsn7tkmwoc9hspfnvwa',
    title: '가온차트',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626438653/noticon/kxsn7tkmwoc9hspfnvwa.png',
    keywords: 'gaon‡',
    date: '2021-07-16T12:30:55.953Z',
  },
  {
    uuid: 'noticon_kdijqzmihszrtccoffwp',
    title: '다음',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626438762/noticon/kdijqzmihszrtccoffwp.png',
    keywords: 'daum‡',
    date: '2021-07-16T12:32:44.842Z',
  },
  {
    uuid: 'noticon_wc7w90ji1hck5akw3e3e',
    title: '다이소',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626438850/noticon/wc7w90ji1hck5akw3e3e.png',
    keywords: 'daiso‡',
    date: '2021-07-16T12:34:12.243Z',
  },
  {
    uuid: 'noticon_pv3qljjfhrt4wjd5flwq',
    title: '옥션',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626438916/noticon/pv3qljjfhrt4wjd5flwq.png',
    keywords: 'auction‡',
    date: '2021-07-16T12:35:18.339Z',
  },
  {
    uuid: 'noticon_fo8neiehgcpyj2tg5gyy',
    title: '위메프',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626439012/noticon/fo8neiehgcpyj2tg5gyy.png',
    keywords: 'wemakeprice‡',
    date: '2021-07-16T12:36:54.820Z',
  },
  {
    uuid: 'noticon_shjnbsrf4ommthly49sb',
    title: '인터파크',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626439128/noticon/shjnbsrf4ommthly49sb.png',
    keywords: 'interpark‡',
    date: '2021-07-16T12:38:50.275Z',
  },
  {
    uuid: 'noticon_tyvwksoprqpbu5mzdkbg',
    title: 'KBS',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626439208/noticon/tyvwksoprqpbu5mzdkbg.png',
    keywords: '케이비에스‡방송',
    date: '2021-07-16T12:40:10.451Z',
  },
  {
    uuid: 'noticon_ai9dhthzmsa9ucgfqb4m',
    title: '다나와',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626439277/noticon/ai9dhthzmsa9ucgfqb4m.png',
    keywords: 'danawa‡',
    date: '2021-07-16T12:41:19.096Z',
  },
  {
    uuid: 'noticon_o4pptrasnyfgk4a1soig',
    title: '지니 뮤직',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626439369/noticon/o4pptrasnyfgk4a1soig.png',
    keywords: 'genie‡',
    date: '2021-07-16T12:42:51.184Z',
  },
  {
    uuid: 'noticon_wyqfr8ckir7lymnkusex',
    title: 'Mnet',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626439515/noticon/wyqfr8ckir7lymnkusex.png',
    keywords: '엠넷‡',
    date: '2021-07-16T12:45:18.892Z',
  },
  {
    uuid: 'noticon_ydyvhzbaibeoofrvqyp3',
    title: '더쿠',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626439705/noticon/ydyvhzbaibeoofrvqyp3.png',
    keywords: 'theqoo‡',
    date: '2021-07-16T12:48:27.641Z',
  },
  {
    uuid: 'noticon_faj8sesmejwp8wtbhkhr',
    title: '위버스',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626439821/noticon/faj8sesmejwp8wtbhkhr.png',
    keywords: 'weverse‡',
    date: '2021-07-16T12:50:23.196Z',
  },
  {
    uuid: 'noticon_w3har3kchv0kpsfjclsq',
    title: '할리스 커피',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626439947/noticon/w3har3kchv0kpsfjclsq.png',
    keywords: 'hollys‡카페',
    date: '2021-07-16T12:52:29.417Z',
  },
  {
    uuid: 'noticon_n0uceandaqtchkv3yxlz',
    title: '한샘',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626440024/noticon/n0uceandaqtchkv3yxlz.png',
    keywords: 'hanssem‡',
    date: '2021-07-16T12:53:47.006Z',
  },
  {
    uuid: 'noticon_f9pof4hcdwn4cfhnajqk',
    title: 'nvidia',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626440096/noticon/f9pof4hcdwn4cfhnajqk.png',
    keywords: '엔비디아‡nvda',
    date: '2021-07-16T12:54:59.067Z',
  },
  {
    uuid: 'noticon_btclcyz1vnctyyx7vsrg',
    title: '알바몬',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626440191/noticon/btclcyz1vnctyyx7vsrg.png',
    keywords: 'albamon‡',
    date: '2021-07-16T12:56:33.260Z',
  },
  {
    uuid: 'noticon_ksa2vqrgnveokzxjylsc',
    title: '엠브레인',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626440251/noticon/ksa2vqrgnveokzxjylsc.png',
    keywords: 'embrain‡',
    date: '2021-07-16T12:57:32.909Z',
  },
  {
    uuid: 'noticon_uysfgqx8jkmzvgvqx71a',
    title: 'yes24',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626440287/noticon/uysfgqx8jkmzvgvqx71a.png',
    keywords: '예스24‡',
    date: '2021-07-16T12:58:10.245Z',
  },
  {
    uuid: 'noticon_v9hxpqjjzzksm2odptme',
    title: 'T',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626441284/noticon/v9hxpqjjzzksm2odptme.png',
    keywords: 'skt‡',
    date: '2021-07-16T13:14:47.279Z',
  },
  {
    uuid: 'noticon_wc41jnjftf9zgg9zdqml',
    title: '하나티켓',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626441897/noticon/wc41jnjftf9zgg9zdqml.png',
    keywords: 'hana ticket‡',
    date: '2021-07-16T13:24:59.774Z',
  },
  {
    uuid: 'noticon_jaqim6bawzktrmrrhzu4',
    title: 'paypal',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626442091/noticon/jaqim6bawzktrmrrhzu4.png',
    keywords: '페이팔‡',
    date: '2021-07-16T13:28:14.275Z',
  },
  {
    uuid: 'noticon_thxyqrd7vj1hplgzg7yy',
    title: '넷마블',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626443331/noticon/thxyqrd7vj1hplgzg7yy.png',
    keywords: 'netmarble‡게임',
    date: '2021-07-16T13:48:54.898Z',
  },
  {
    uuid: 'noticon_ets1sgmvnor3timbzncu',
    title: '한게임',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626443872/noticon/ets1sgmvnor3timbzncu.png',
    keywords: 'hangame‡',
    date: '2021-07-16T13:57:54.575Z',
  },
  {
    uuid: 'noticon_jk4yz2s8zfbluzipjvkq',
    title: 'nate',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626443996/noticon/jk4yz2s8zfbluzipjvkq.png',
    keywords: '네이트‡',
    date: '2021-07-16T13:59:58.362Z',
  },
  {
    uuid: 'noticon_mzgwz7tntadxsefrjuax',
    title: 'idus',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626444088/noticon/mzgwz7tntadxsefrjuax.png',
    keywords: '아이디어스‡',
    date: '2021-07-16T14:01:30.092Z',
  },
  {
    uuid: 'noticon_lvf3zmoukebnfkegcyyd',
    title: '한국갤럽',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626444224/noticon/lvf3zmoukebnfkegcyyd.png',
    keywords: 'gallup‡',
    date: '2021-07-16T14:03:46.803Z',
  },
  {
    uuid: 'noticon_x2t3j3gospkuzxfujibc',
    title: '성신여자대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626620881/noticon/x2t3j3gospkuzxfujibc.png',
    keywords: '성신여대‡성신',
    date: '2021-07-18T15:08:03.181Z',
  },
  {
    uuid: 'noticon_dsgtrgmi0njdoxqo8pnv',
    title: '성신여대 앰블럼',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626621003/noticon/dsgtrgmi0njdoxqo8pnv.png',
    keywords: '성신여자대학교‡성신여대',
    date: '2021-07-18T15:10:05.563Z',
  },
  {
    uuid: 'noticon_ipoweinrg2mkwhuge6kv',
    title: 'mother fucker',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626632187/noticon/ipoweinrg2mkwhuge6kv.png',
    keywords: '‡',
    date: '2021-07-18T18:16:29.543Z',
  },
  {
    uuid: 'noticon_ruujuv1nrhxacokoctth',
    title: 'Yami Black Clover',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626632241/noticon/ruujuv1nrhxacokoctth.png',
    keywords: '‡',
    date: '2021-07-18T18:17:23.676Z',
  },
  {
    uuid: 'noticon_jgzmjcqpkrslzwf9zvr0',
    title: '아모레퍼시픽',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626684816/noticon/jgzmjcqpkrslzwf9zvr0.png',
    keywords: 'Amore‡Amore Pacific',
    date: '2021-07-19T08:53:38.987Z',
  },
  {
    uuid: 'noticon_v49hghegvmtwb8ymdvbm',
    title: '에브리타임',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626686103/noticon/v49hghegvmtwb8ymdvbm.png',
    keywords: 'everytime‡시계',
    date: '2021-07-19T09:15:04.785Z',
  },
  {
    uuid: 'noticon_imnuqknc50stpz0xf87s',
    title: '캠퍼스픽',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626686152/noticon/imnuqknc50stpz0xf87s.png',
    keywords: 'campuspick‡',
    date: '2021-07-19T09:15:54.612Z',
  },
  {
    uuid: 'noticon_qi5vrnppgxme60ds7h8e',
    title: 'trevari_happy',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626765428/noticon/qi5vrnppgxme60ds7h8e.png',
    keywords: 'trevari‡happy',
    date: '2021-07-20T07:17:10.587Z',
  },
  {
    uuid: 'noticon_hz0rjxoqodlkmqza4myc',
    title: 'trevari_smile',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626765462/noticon/hz0rjxoqodlkmqza4myc.png',
    keywords: 'trevari‡트레바리',
    date: '2021-07-20T07:17:44.587Z',
  },
  {
    uuid: 'noticon_wvlezbhds0bzajnuonxh',
    title: 'trevari_heart',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626765501/noticon/wvlezbhds0bzajnuonxh.png',
    keywords: 'trevari‡트레바리',
    date: '2021-07-20T07:18:23.001Z',
  },
  {
    uuid: 'noticon_x3klaw80oyuiifbtwpfh',
    title: 'trevari_speak',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626765527/noticon/x3klaw80oyuiifbtwpfh.png',
    keywords: 'trevari‡트레바리',
    date: '2021-07-20T07:18:48.985Z',
  },
  {
    uuid: 'noticon_b0diwnfuqnqmbzujvqtu',
    title: 'trevari_speak_2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626765792/noticon/b0diwnfuqnqmbzujvqtu.png',
    keywords: 'trevari‡트레바리',
    date: '2021-07-20T07:23:15.740Z',
  },
  {
    uuid: 'noticon_mpyse3r6bwekcye70p5o',
    title: 'trevai_here',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626765925/noticon/mpyse3r6bwekcye70p5o.png',
    keywords: 'trevari‡트레바리',
    date: '2021-07-20T07:25:27.770Z',
  },
  {
    uuid: 'noticon_rldofd77aukmkfzanygi',
    title: 'trevari_smile_2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626766230/noticon/rldofd77aukmkfzanygi.png',
    keywords: 'trevari‡트레바리',
    date: '2021-07-20T07:30:32.501Z',
  },
  {
    uuid: 'noticon_yhhoom11dkxkilancmcs',
    title: 'trevari_happy',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626766333/noticon/yhhoom11dkxkilancmcs.png',
    keywords: 'trevari‡트레바리',
    date: '2021-07-20T07:32:15.069Z',
  },
  {
    uuid: 'noticon_c6poy8mmedhhoihsqels',
    title: 'trevari_book',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626766429/noticon/c6poy8mmedhhoihsqels.png',
    keywords: 'trevari‡트레바리',
    date: '2021-07-20T07:33:51.501Z',
  },
  {
    uuid: 'noticon_g6xgdwtkbtfbwdl6ydgw',
    title: 'trevari_write',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626766557/noticon/g6xgdwtkbtfbwdl6ydgw.png',
    keywords: 'trevari‡트레바리',
    date: '2021-07-20T07:35:59.131Z',
  },
  {
    uuid: 'noticon_rsrwlzrl4aktswpqne6g',
    title: '딸기잼',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626848471/noticon/rsrwlzrl4aktswpqne6g.png',
    keywords: 'jam‡',
    date: '2021-07-21T06:21:13.937Z',
  },
  {
    uuid: 'noticon_tb1e99sxn8riawe9gb5d',
    title: 'slipp',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1627273236/noticon/tb1e99sxn8riawe9gb5d.png',
    keywords: 'slipp‡',
    date: '2021-07-26T04:20:38.769Z',
  },
  {
    uuid: 'noticon_opivjqvqxo7hccrybn9k',
    title: 'slippStudy',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1627273365/noticon/opivjqvqxo7hccrybn9k.png',
    keywords: 'slipp‡',
    date: '2021-07-26T04:22:47.482Z',
  },
  {
    uuid: 'noticon_qybtzgqcp92zlsqc1kj4',
    title: 'Junit',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1627370220/noticon/qybtzgqcp92zlsqc1kj4.png',
    keywords: 'junit‡test',
    date: '2021-07-27T07:17:03.413Z',
  },
  {
    uuid: 'noticon_borgffzujc0jae6pkbo9',
    title: 'CATCHTABLE',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1627565405/noticon/borgffzujc0jae6pkbo9.png',
    keywords: 'Catchtable‡캐치테이블',
    date: '2021-07-29T13:30:08.543Z',
  },
  {
    uuid: 'noticon_grjjztshzu9fbma5bc9q',
    title: 'CATCHTABLE',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1627565528/noticon/grjjztshzu9fbma5bc9q.png',
    keywords: 'Catchtable‡캐치테이블',
    date: '2021-07-29T13:32:11.148Z',
  },
  {
    uuid: 'noticon_hbkapye30wpzyebi6cit',
    title: '29cm',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1627610349/noticon/hbkapye30wpzyebi6cit.png',
    keywords: '29cm‡aplusb',
    date: '2021-07-30T01:59:12.441Z',
  },
  {
    uuid: 'noticon_uyo69owtctx6vmjkqhko',
    title: '메이아이',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1627862324/noticon/uyo69owtctx6vmjkqhko.png',
    keywords: '‡',
    date: '2021-08-01T23:58:46.861Z',
  },
  {
    uuid: 'noticon_eiuhbtozipih8iizo0ak',
    title: '카페베네',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1627967003/noticon/eiuhbtozipih8iizo0ak.png',
    keywords: 'cafe_bene‡cafebene',
    date: '2021-08-03T05:03:26.131Z',
  },
  {
    uuid: 'noticon_ybu8xjb8kqg14a2fbv8b',
    title: 'trevari_speak3',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1628038147/noticon/ybu8xjb8kqg14a2fbv8b.png',
    keywords: '트레바리‡',
    date: '2021-08-04T00:49:09.675Z',
  },
  {
    uuid: 'noticon_r8gvyvrxxw1c6mubnngl',
    title: 'ejs',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1628119696/noticon/r8gvyvrxxw1c6mubnngl.png',
    keywords: 'ejs‡ejs',
    date: '2021-08-04T23:28:18.738Z',
  },
  {
    uuid: 'noticon_s3ok8wcypvq1xxglmfkv',
    title: '이더리움',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1628136024/noticon/s3ok8wcypvq1xxglmfkv.png',
    keywords: 'ether‡',
    date: '2021-08-05T04:00:26.361Z',
  },
  {
    uuid: 'noticon_bheks8js49ezz1o8jlkn',
    title: '비트코인',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1628136093/noticon/bheks8js49ezz1o8jlkn.png',
    keywords: 'bitcoin‡',
    date: '2021-08-05T04:01:35.576Z',
  },
  {
    uuid: 'noticon_xpamoxta5ltcz6k33zka',
    title: 'personal management',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1628239586/noticon/xpamoxta5ltcz6k33zka.png',
    keywords: 'productivity‡output',
    date: '2021-08-06T08:46:30.002Z',
  },
  {
    uuid: 'noticon_n4jpboygvpuawmcncqba',
    title: 'Roadmap',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1628241606/noticon/n4jpboygvpuawmcncqba.png',
    keywords: 'roadmap‡planning',
    date: '2021-08-06T09:20:08.925Z',
  },
  {
    uuid: 'noticon_qd47kwkzgqzqxcbc8irz',
    title: 'Showreel',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1628241829/noticon/qd47kwkzgqzqxcbc8irz.png',
    keywords: '‡',
    date: '2021-08-06T09:23:51.588Z',
  },
  {
    uuid: 'noticon_wo57kd4pvn1dyidrojlq',
    title: 'Team Review',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1628241934/noticon/wo57kd4pvn1dyidrojlq.png',
    keywords: '‡',
    date: '2021-08-06T09:25:36.703Z',
  },
  {
    uuid: 'noticon_atppyvhkhxa9ttyu9vmh',
    title: 'kanban',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1628242086/noticon/atppyvhkhxa9ttyu9vmh.png',
    keywords: '‡',
    date: '2021-08-06T09:28:08.604Z',
  },
  {
    uuid: 'noticon_lm7oaocnqlm1sc73plo9',
    title: 'honey',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1628344946/noticon/lm7oaocnqlm1sc73plo9.png',
    keywords: 'honey‡honey',
    date: '2021-08-07T14:02:28.719Z',
  },
  {
    uuid: 'noticon_zj7nr5b4mfbpkzsbiffp',
    title: 'react',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1628485820/noticon/zj7nr5b4mfbpkzsbiffp.png',
    keywords: '‡',
    date: '2021-08-09T05:10:22.420Z',
  },
  {
    uuid: 'noticon_s1ox77idvetdn9ews5k3',
    title: 'react',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1628485852/noticon/s1ox77idvetdn9ews5k3.png',
    keywords: '‡',
    date: '2021-08-09T05:10:54.776Z',
  },
  {
    uuid: 'noticon_vfqdntu4hacxxyvypnai',
    title: 'react',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1628486152/noticon/vfqdntu4hacxxyvypnai.png',
    keywords: '‡',
    date: '2021-08-09T05:15:54.900Z',
  },
  {
    uuid: 'noticon_anqfbrahus6i9jyhvi05',
    title: 'traefik',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1628557898/noticon/anqfbrahus6i9jyhvi05.png',
    keywords: 'traefik‡',
    date: '2021-08-10T01:11:40.530Z',
  },
  {
    uuid: 'noticon_hnotwedfm3d62d8nzi4o',
    title: 'traefik',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1628558135/noticon/hnotwedfm3d62d8nzi4o.png',
    keywords: 'traefik‡',
    date: '2021-08-10T01:15:37.656Z',
  },
  {
    uuid: 'noticon_mzvbkxjbquxnev7aa1rp',
    title: 'load_balancer',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1628559235/noticon/mzvbkxjbquxnev7aa1rp.png',
    keywords: 'load_balancer‡',
    date: '2021-08-10T01:33:57.630Z',
  },
  {
    uuid: 'noticon_eneparpdl1ynsyaljpgb',
    title: 'HAProxy',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1628559318/noticon/eneparpdl1ynsyaljpgb.png',
    keywords: 'HAProxy‡',
    date: '2021-08-10T01:35:22.102Z',
  },
  {
    uuid: 'noticon_yjwxbydlz8g0rlru8shk',
    title: 'lets_ecnrypt',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1628559474/noticon/yjwxbydlz8g0rlru8shk.png',
    keywords: 'lets_ecnrypt‡',
    date: '2021-08-10T01:37:57.120Z',
  },
  {
    uuid: 'noticon_fmr6qz9qf5dwhejtpaaf',
    title: 'ejabberd',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1628559721/noticon/fmr6qz9qf5dwhejtpaaf.png',
    keywords: 'ejabberd‡',
    date: '2021-08-10T01:42:03.642Z',
  },
  {
    uuid: 'noticon_jzgjijnyxnwqjkbst7qp',
    title: 'erlang',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1628559881/noticon/jzgjijnyxnwqjkbst7qp.png',
    keywords: 'erlang‡',
    date: '2021-08-10T01:44:43.736Z',
  },
  {
    uuid: 'noticon_lk9utdmbhqqm6mcrsj2j',
    title: 'miro',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1628594643/noticon/lk9utdmbhqqm6mcrsj2j.png',
    keywords: '‡',
    date: '2021-08-10T11:24:04.957Z',
  },
  {
    uuid: 'noticon_htuai6nvhtomhzhai7jp',
    title: 'fastpages',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1628770034/noticon/htuai6nvhtomhzhai7jp.png',
    keywords: '‡',
    date: '2021-08-12T12:07:17.349Z',
  },
  {
    uuid: 'noticon_b2oqdm06slr4cwuablrt',
    title: 'swea',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1628772936/noticon/b2oqdm06slr4cwuablrt.png',
    keywords: '‡',
    date: '2021-08-12T12:55:38.368Z',
  },
  {
    uuid: 'noticon_dgniinkkd6kdhcgwbtgo',
    title: 'SWEA',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1628773174/noticon/dgniinkkd6kdhcgwbtgo.png',
    keywords: '‡',
    date: '2021-08-12T12:59:36.357Z',
  },
  {
    uuid: 'noticon_icooufnsm31pwr1fc7ei',
    title: '롯데 로고',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1628833346/noticon/icooufnsm31pwr1fc7ei.png',
    keywords: '롯데‡lotte',
    date: '2021-08-13T05:42:28.845Z',
  },
  {
    uuid: 'noticon_ka5rxrchshw7bampqqzh',
    title: 'EOS',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1628836874/noticon/ka5rxrchshw7bampqqzh.png',
    keywords: '‡',
    date: '2021-08-13T06:41:16.661Z',
  },
  {
    uuid: 'noticon_efkdqnhlghr8b75xyvz6',
    title: '온라이트',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629101358/noticon/efkdqnhlghr8b75xyvz6.gif',
    keywords: '온라이트‡로고',
    date: '2021-08-16T08:09:20.853Z',
  },
  {
    uuid: 'noticon_b2nwxillblijkq17otuo',
    title: '본다빈치',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629104288/noticon/b2nwxillblijkq17otuo.png',
    keywords: '본다빈치‡로고',
    date: '2021-08-16T08:58:10.872Z',
  },
  {
    uuid: 'noticon_iefdal9mus0o7xxxbkoa',
    title: '지니 뮤직',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629104798/noticon/iefdal9mus0o7xxxbkoa.gif',
    keywords: 'ginie‡music',
    date: '2021-08-16T09:06:40.073Z',
  },
  {
    uuid: 'noticon_hbwli5vvzei7gddrspgr',
    title: 'konkuk_university',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629174705/noticon/hbwli5vvzei7gddrspgr.png',
    keywords: '건국대‡건국',
    date: '2021-08-17T04:31:47.732Z',
  },
  {
    uuid: 'noticon_e5qcqp4cgos2f65z3vhb',
    title: '건국대',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629174775/noticon/e5qcqp4cgos2f65z3vhb.png',
    keywords: '건국‡건국대',
    date: '2021-08-17T04:32:57.326Z',
  },
  {
    uuid: 'noticon_qopgwljhqw2ezqxnfjpe',
    title: 'Javascript',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629279836/noticon/qopgwljhqw2ezqxnfjpe.png',
    keywords: '‡',
    date: '2021-08-18T09:43:59.219Z',
  },
  {
    uuid: 'noticon_ggaxbarhnxqczgeodc2k',
    title: 'koa',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629479590/noticon/ggaxbarhnxqczgeodc2k.png',
    keywords: '‡',
    date: '2021-08-20T17:13:12.543Z',
  },
  {
    uuid: 'noticon_nl39ai52svonxo1narau',
    title: 'metaverse',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629687189/noticon/nl39ai52svonxo1narau.png',
    keywords: '‡',
    date: '2021-08-23T02:53:12.655Z',
  },
  {
    uuid: 'noticon_xtuat4glpmefinnonjh5',
    title: 'quantum',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629687223/noticon/xtuat4glpmefinnonjh5.png',
    keywords: '‡',
    date: '2021-08-23T02:53:44.861Z',
  },
  {
    uuid: 'noticon_bg1xfsag2r70skfzqcko',
    title: 'math',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629687400/noticon/bg1xfsag2r70skfzqcko.png',
    keywords: '‡',
    date: '2021-08-23T02:56:42.154Z',
  },
  {
    uuid: 'noticon_zpugi8iobshrafguc7eq',
    title: 'statistics',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629687415/noticon/zpugi8iobshrafguc7eq.png',
    keywords: '‡',
    date: '2021-08-23T02:56:57.830Z',
  },
  {
    uuid: 'noticon_ghfexqlq3u4q7bz1ohsf',
    title: 'geekble',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629858182/noticon/ghfexqlq3u4q7bz1ohsf.png',
    keywords: '‡',
    date: '2021-08-25T02:23:04.521Z',
  },
  {
    uuid: 'noticon_uhaxls970frlpf0zrqya',
    title: 'alertnow',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629971577/noticon/uhaxls970frlpf0zrqya.png',
    keywords: 'alert‡bespin',
    date: '2021-08-26T09:52:59.705Z',
  },
  {
    uuid: 'noticon_dvtpeoqb0lnw7xh5oa3b',
    title: 'newrelic',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629971623/noticon/dvtpeoqb0lnw7xh5oa3b.png',
    keywords: '‡',
    date: '2021-08-26T09:53:44.987Z',
  },
  {
    uuid: 'noticon_s8xmj5klmoiq7um1wcff',
    title: 'ahnlab',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629971643/noticon/s8xmj5klmoiq7um1wcff.png',
    keywords: '안랩‡',
    date: '2021-08-26T09:54:04.655Z',
  },
  {
    uuid: 'noticon_rwajawftelb1cjlqhewg',
    title: 'apache',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629971661/noticon/rwajawftelb1cjlqhewg.png',
    keywords: '‡',
    date: '2021-08-26T09:54:22.794Z',
  },
  {
    uuid: 'noticon_l2d210hcs4hpeme3gob7',
    title: 'ansible',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629971675/noticon/l2d210hcs4hpeme3gob7.png',
    keywords: '‡',
    date: '2021-08-26T09:54:37.789Z',
  },
  {
    uuid: 'noticon_ekgsz2bxwksz9xrgwgvx',
    title: 'apache_tomcat',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629971717/noticon/ekgsz2bxwksz9xrgwgvx.png',
    keywords: 'apache‡tomcat',
    date: '2021-08-26T09:55:19.892Z',
  },
  {
    uuid: 'noticon_ryo2qrmxyoyrzvlilcyx',
    title: 'azure',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629971734/noticon/ryo2qrmxyoyrzvlilcyx.png',
    keywords: 'ms‡',
    date: '2021-08-26T09:55:36.714Z',
  },
  {
    uuid: 'noticon_bajmsmeeygxgf7qrbhxy',
    title: 'ca',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629971757/noticon/bajmsmeeygxgf7qrbhxy.png',
    keywords: 'ca_uim‡',
    date: '2021-08-26T09:55:58.752Z',
  },
  {
    uuid: 'noticon_gbfyawi4im5m8lrqzlgc',
    title: 'cka',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629971773/noticon/gbfyawi4im5m8lrqzlgc.png',
    keywords: '‡',
    date: '2021-08-26T09:56:15.208Z',
  },
  {
    uuid: 'noticon_dedqm4slvaamvoo1et3f',
    title: 'ckad',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629971795/noticon/dedqm4slvaamvoo1et3f.png',
    keywords: 'kubernetes‡',
    date: '2021-08-26T09:56:37.250Z',
  },
  {
    uuid: 'noticon_yfbbmkzd9ykcbdojlp5d',
    title: 'cks',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629971816/noticon/yfbbmkzd9ykcbdojlp5d.png',
    keywords: 'kubernetes‡',
    date: '2021-08-26T09:56:57.830Z',
  },
  {
    uuid: 'noticon_obfbjnpbkoxz79bkvugi',
    title: 'datadog',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629971830/noticon/obfbjnpbkoxz79bkvugi.png',
    keywords: '‡',
    date: '2021-08-26T09:57:12.280Z',
  },
  {
    uuid: 'noticon_crjjlhchk9mxrflhqf8n',
    title: 'docker',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629971846/noticon/crjjlhchk9mxrflhqf8n.png',
    keywords: '‡',
    date: '2021-08-26T09:57:27.936Z',
  },
  {
    uuid: 'noticon_iog1iw2dtnq2grlzusci',
    title: 'freshservice',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629971894/noticon/iog1iw2dtnq2grlzusci.png',
    keywords: '‡',
    date: '2021-08-26T09:58:16.041Z',
  },
  {
    uuid: 'noticon_hfdukrpp3ibghncm9dy9',
    title: 'whatap',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629971951/noticon/hfdukrpp3ibghncm9dy9.png',
    keywords: 'monitoring‡',
    date: '2021-08-26T09:59:13.377Z',
  },
  {
    uuid: 'noticon_bgioj0brggjehjy1rqsp',
    title: 'azure_ad',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629971998/noticon/bgioj0brggjehjy1rqsp.png',
    keywords: 'activedirectory‡azure',
    date: '2021-08-26T09:59:59.948Z',
  },
  {
    uuid: 'noticon_msnfa0h6o32dpi7gipyv',
    title: 'grafana',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629972026/noticon/msnfa0h6o32dpi7gipyv.png',
    keywords: 'monitoring‡visual',
    date: '2021-08-26T10:00:28.568Z',
  },
  {
    uuid: 'noticon_uhlx0ddln1ygz7kxhkjw',
    title: 'prometheus',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629972087/noticon/uhlx0ddln1ygz7kxhkjw.png',
    keywords: 'monitoring‡',
    date: '2021-08-26T10:01:29.172Z',
  },
  {
    uuid: 'noticon_wy073s83hzswaau4ykqj',
    title: 'prometheus+grafana',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629972128/noticon/wy073s83hzswaau4ykqj.png',
    keywords: 'prometheus‡grafana',
    date: '2021-08-26T10:02:10.173Z',
  },
  {
    uuid: 'noticon_icoskojfeqd065ukmv3b',
    title: 'eventviewer',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629972159/noticon/icoskojfeqd065ukmv3b.png',
    keywords: 'event‡viewer',
    date: '2021-08-26T10:02:41.228Z',
  },
  {
    uuid: 'noticon_qlhz3rrzxohha7vc1yti',
    title: 'eventviewer',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629972179/noticon/qlhz3rrzxohha7vc1yti.png',
    keywords: 'event‡viewer',
    date: '2021-08-26T10:03:01.188Z',
  },
  {
    uuid: 'noticon_vgvbhxae6jrvqpcnu0vb',
    title: 'github',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629972215/noticon/vgvbhxae6jrvqpcnu0vb.png',
    keywords: 'git‡',
    date: '2021-08-26T10:03:36.914Z',
  },
  {
    uuid: 'noticon_en1kcjwgillnuhhlubmv',
    title: 'wsl',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629972304/noticon/en1kcjwgillnuhhlubmv.png',
    keywords: '‡',
    date: '2021-08-26T10:05:07.371Z',
  },
  {
    uuid: 'noticon_ers4idxtnvd5vipzrncf',
    title: 'oss',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629972344/noticon/ers4idxtnvd5vipzrncf.png',
    keywords: 'opensource‡',
    date: '2021-08-26T10:05:46.437Z',
  },
  {
    uuid: 'noticon_i2jwwhqs0mdbcddxrl9i',
    title: 'redeploy',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629972464/noticon/i2jwwhqs0mdbcddxrl9i.png',
    keywords: 'hammer‡',
    date: '2021-08-26T10:07:46.600Z',
  },
  {
    uuid: 'noticon_htwpjnfc0hlr1teypbjo',
    title: 'java',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629972500/noticon/htwpjnfc0hlr1teypbjo.png',
    keywords: '‡',
    date: '2021-08-26T10:08:21.977Z',
  },
  {
    uuid: 'noticon_ws6g7qr5odqzfhjmxaqk',
    title: 'kubeadm',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629972577/noticon/ws6g7qr5odqzfhjmxaqk.png',
    keywords: 'kubernetes‡kube',
    date: '2021-08-26T10:09:38.752Z',
  },
  {
    uuid: 'noticon_rewas806olq5gkko4z5b',
    title: 'windows',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629972840/noticon/rewas806olq5gkko4z5b.png',
    keywords: '‡',
    date: '2021-08-26T10:14:03.273Z',
  },
  {
    uuid: 'noticon_easfqnhhztzfjjeaqhdm',
    title: 'iis',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629972977/noticon/easfqnhhztzfjjeaqhdm.png',
    keywords: 'microsoft‡',
    date: '2021-08-26T10:16:19.508Z',
  },
  {
    uuid: 'noticon_o0ua9qgyuuoazjqwwvas',
    title: 'Amazon EC2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629987467/noticon/o0ua9qgyuuoazjqwwvas.png',
    keywords: 'ec2‡aws',
    date: '2021-08-26T14:17:48.967Z',
  },
  {
    uuid: 'noticon_zsixatwcqdvzb8lngubn',
    title: 'sendgrid',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629987617/noticon/zsixatwcqdvzb8lngubn.png',
    keywords: '‡',
    date: '2021-08-26T14:20:20.317Z',
  },
  {
    uuid: 'noticon_wlqjmhv8c7cyfv4aji4c',
    title: 'sql_server',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629987676/noticon/wlqjmhv8c7cyfv4aji4c.png',
    keywords: 'sql‡',
    date: '2021-08-26T14:21:18.594Z',
  },
  {
    uuid: 'noticon_u9ewmgf7xxic5us7pnhn',
    title: 'MongoDB',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629987704/noticon/u9ewmgf7xxic5us7pnhn.png',
    keywords: '‡',
    date: '2021-08-26T14:21:45.595Z',
  },
  {
    uuid: 'noticon_utlnfwdciwmqqmyrddqb',
    title: 'zabbix',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629987729/noticon/utlnfwdciwmqqmyrddqb.png',
    keywords: '‡',
    date: '2021-08-26T14:22:11.002Z',
  },
  {
    uuid: 'noticon_ejtqaghkk9xos0hm0gwe',
    title: 'opennaru',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629987774/noticon/ejtqaghkk9xos0hm0gwe.png',
    keywords: 'monitoring‡',
    date: '2021-08-26T14:22:56.623Z',
  },
  {
    uuid: 'noticon_qxvhd6gnagplyp6crw33',
    title: 'vscode',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629987802/noticon/qxvhd6gnagplyp6crw33.png',
    keywords: '‡',
    date: '2021-08-26T14:23:24.448Z',
  },
  {
    uuid: 'noticon_znq7gjkkfpohsqoagt9a',
    title: 'opsnow',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629987838/noticon/znq7gjkkfpohsqoagt9a.png',
    keywords: 'bespin‡',
    date: '2021-08-26T14:24:00.335Z',
  },
  {
    uuid: 'noticon_lbslvvvqllcfdkmkmw2p',
    title: 'docker+kube',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629987980/noticon/lbslvvvqllcfdkmkmw2p.png',
    keywords: 'docker‡kubernetes',
    date: '2021-08-26T14:26:22.318Z',
  },
  {
    uuid: 'noticon_wfmbldodvyzgx3m5aisn',
    title: 'oracle_db',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629988105/noticon/wfmbldodvyzgx3m5aisn.png',
    keywords: 'oracle‡db',
    date: '2021-08-26T14:28:27.260Z',
  },
  {
    uuid: 'noticon_rn76zq24h8e0dlpxejfa',
    title: 'kubespray',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629994944/noticon/rn76zq24h8e0dlpxejfa.png',
    keywords: 'kubernetes‡kube',
    date: '2021-08-26T16:22:26.310Z',
  },
  {
    uuid: 'noticon_vdxfmwp1hea13e6v3zrd',
    title: 'helm',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629994966/noticon/vdxfmwp1hea13e6v3zrd.png',
    keywords: 'kubernetes‡kube',
    date: '2021-08-26T16:22:47.655Z',
  },
  {
    uuid: 'noticon_zq75xhbudtfqc61ak9e8',
    title: 'kops',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629995032/noticon/zq75xhbudtfqc61ak9e8.png',
    keywords: 'kubernetes‡kube',
    date: '2021-08-26T16:23:54.665Z',
  },
  {
    uuid: 'noticon_fa9leh5hu1j9ihtqarzj',
    title: 'tichemy',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1630173011/noticon/fa9leh5hu1j9ihtqarzj.png',
    keywords: 'tichemy‡',
    date: '2021-08-28T17:50:13.318Z',
  },
  {
    uuid: 'noticon_kkksn36bstain4wq1miw',
    title: '카카오 엔터프라이즈',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1630175105/noticon/kkksn36bstain4wq1miw.png',
    keywords: 'kakao enterprise‡카카오',
    date: '2021-08-28T18:25:07.380Z',
  },
  {
    uuid: 'noticon_oiq5mtmugsv5qfzkpqop',
    title: 'PowerBI',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1630210714/noticon/oiq5mtmugsv5qfzkpqop.png',
    keywords: '‡',
    date: '2021-08-29T04:18:37.013Z',
  },
  {
    uuid: 'noticon_hitlbiihqxn4jymxq10v',
    title: 'PowerBI',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1630210736/noticon/hitlbiihqxn4jymxq10v.png',
    keywords: '‡',
    date: '2021-08-29T04:18:57.708Z',
  },
  {
    uuid: 'noticon_ahpesz8cks05zyuusbwi',
    title: 'PowerBI',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1630210752/noticon/ahpesz8cks05zyuusbwi.png',
    keywords: '‡',
    date: '2021-08-29T04:19:14.439Z',
  },
  {
    uuid: 'noticon_cq26ybpuh3fvrue60i53',
    title: '추천시스템',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1630214221/noticon/cq26ybpuh3fvrue60i53.png',
    keywords: '‡',
    date: '2021-08-29T05:17:05.030Z',
  },
  {
    uuid: 'noticon_vhgfb7kgqg70jzyrsdzo',
    title: 'jenkins',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1630298653/noticon/vhgfb7kgqg70jzyrsdzo.png',
    keywords: '‡',
    date: '2021-08-30T04:44:15.223Z',
  },
  {
    uuid: 'noticon_nugje2cvfexv1szergeh',
    title: 'kudu',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1630328763/noticon/nugje2cvfexv1szergeh.png',
    keywords: 'kudu‡',
    date: '2021-08-30T13:06:05.639Z',
  },
  {
    uuid: 'noticon_nsbug9evon8x776qdeaa',
    title: 'Doosan',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1630407718/noticon/nsbug9evon8x776qdeaa.png',
    keywords: '두산‡',
    date: '2021-08-31T11:02:00.515Z',
  },
  {
    uuid: 'noticon_bdqbcupbxvjnawrneoxn',
    title: 'Udemy',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1630412274/noticon/bdqbcupbxvjnawrneoxn.png',
    keywords: '‡',
    date: '2021-08-31T12:17:57.390Z',
  },
  {
    uuid: 'noticon_u5rqsl4euwelf9tekouu',
    title: 'blue-point',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1630461969/noticon/u5rqsl4euwelf9tekouu.png',
    keywords: 'point‡blue',
    date: '2021-09-01T02:06:10.965Z',
  },
  {
    uuid: 'noticon_tqqndfwrxaid17dae6vh',
    title: 'sky-point',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1630462377/noticon/tqqndfwrxaid17dae6vh.png',
    keywords: 'point‡sky',
    date: '2021-09-01T02:12:59.507Z',
  },
  {
    uuid: 'noticon_cqjkysgrxefow7dm9iyn',
    title: '교원',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1630471118/noticon/cqjkysgrxefow7dm9iyn.png',
    keywords: '‡',
    date: '2021-09-01T04:38:40.764Z',
  },
  {
    uuid: 'noticon_tfcllopcapl3tictyw72',
    title: 'pyqt',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1630472945/noticon/tfcllopcapl3tictyw72.png',
    keywords: '‡',
    date: '2021-09-01T05:09:08.084Z',
  },
  {
    uuid: 'noticon_av3whbndwgc9p1rher3h',
    title: 'airflow',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1630567842/noticon/av3whbndwgc9p1rher3h.png',
    keywords: '‡',
    date: '2021-09-02T07:30:45.298Z',
  },
  {
    uuid: 'noticon_dtfoghhfrtv4fajyx7ni',
    title: 'mlflow',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1630567859/noticon/dtfoghhfrtv4fajyx7ni.png',
    keywords: '‡',
    date: '2021-09-02T07:31:01.295Z',
  },
  {
    uuid: 'noticon_ayqal6daiv3si7jmvcr4',
    title: 'kubeflow',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1630567875/noticon/ayqal6daiv3si7jmvcr4.png',
    keywords: '‡',
    date: '2021-09-02T07:31:17.549Z',
  },
  {
    uuid: 'noticon_dxsnsgs0yxwse0ckqgbu',
    title: '버블',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1630822802/noticon/dxsnsgs0yxwse0ckqgbu.png',
    keywords: '‡',
    date: '2021-09-05T06:20:04.607Z',
  },
  {
    uuid: 'noticon_hsvcu5fbrpuymmqc6i2y',
    title: 'yuqi',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1630844634/noticon/hsvcu5fbrpuymmqc6i2y.png',
    keywords: 'kpop‡(g)idle',
    date: '2021-09-05T12:23:56.657Z',
  },
  {
    uuid: 'noticon_tkm7q6bcy8q9cmsmp67u',
    title: '백신',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1630974185/noticon/tkm7q6bcy8q9cmsmp67u.png',
    keywords: '‡',
    date: '2021-09-07T00:23:07.866Z',
  },
  {
    uuid: 'noticon_ccrojdn7b4406d2qlqyu',
    title: 'honey1',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1631000395/noticon/ccrojdn7b4406d2qlqyu.png',
    keywords: 'honey1‡honey1',
    date: '2021-09-07T07:39:57.581Z',
  },
  {
    uuid: 'noticon_rpcwv6lqueawhbeo9j2c',
    title: 'honey2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1631000414/noticon/rpcwv6lqueawhbeo9j2c.png',
    keywords: 'honey2‡honey2',
    date: '2021-09-07T07:40:15.625Z',
  },
  {
    uuid: 'noticon_zoxqqvuqpoql15nkhpwq',
    title: 'honey-soldier',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1631000467/noticon/zoxqqvuqpoql15nkhpwq.png',
    keywords: 'honey-soldier‡honey-soldier',
    date: '2021-09-07T07:41:09.691Z',
  },
  {
    uuid: 'noticon_hhtityrbazmg6dhujw4s',
    title: 'sos-red',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1631000495/noticon/hhtityrbazmg6dhujw4s.png',
    keywords: 'sos-red‡sos-red',
    date: '2021-09-07T07:41:36.605Z',
  },
  {
    uuid: 'noticon_walcxqscue4mkji07gpx',
    title: '케이뱅크(new)',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1631033671/noticon/walcxqscue4mkji07gpx.png',
    keywords: 'kbank‡',
    date: '2021-09-07T16:54:33.456Z',
  },
  {
    uuid: 'noticon_pyae6rr9jvjdpvtbm9id',
    title: 'BankSalad',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1631334367/noticon/pyae6rr9jvjdpvtbm9id.png',
    keywords: '‡',
    date: '2021-09-11T04:26:09.097Z',
  },
  {
    uuid: 'noticon_jgfgc2z7bxy0bsto9kaa',
    title: 'NaverWebtoon',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1631334450/noticon/jgfgc2z7bxy0bsto9kaa.png',
    keywords: '‡',
    date: '2021-09-11T04:27:32.782Z',
  },
  {
    uuid: 'noticon_rzw47kgwbpugqh3vlumx',
    title: 'Blender',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1631505158/noticon/rzw47kgwbpugqh3vlumx.png',
    keywords: '블렌더‡',
    date: '2021-09-13T03:52:40.832Z',
  },
  {
    uuid: 'noticon_zwush4y3u0mgamlck9bq',
    title: 'React Query',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1631622784/noticon/zwush4y3u0mgamlck9bq.png',
    keywords: 'react query‡react',
    date: '2021-09-14T12:33:06.483Z',
  },
  {
    uuid: 'noticon_kmxhymokvwmzrnazw1zs',
    title: '매쉬',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1631685733/noticon/kmxhymokvwmzrnazw1zs.png',
    keywords: 'mAsh‡mAsh Board',
    date: '2021-09-15T06:02:16.509Z',
  },
  {
    uuid: 'noticon_nms0aavhxdj7bce9c90x',
    title: 'polar chart',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1631710170/noticon/nms0aavhxdj7bce9c90x.png',
    keywords: '‡',
    date: '2021-09-15T12:49:32.712Z',
  },
  {
    uuid: 'noticon_pjuccnbauuvfbf8chqlt',
    title: 'nano',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1631785865/noticon/pjuccnbauuvfbf8chqlt.png',
    keywords: 'editor‡',
    date: '2021-09-16T09:51:08.045Z',
  },
  {
    uuid: 'noticon_q4gbwdq0xkik6xiybdmp',
    title: 'framer',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1631854824/noticon/q4gbwdq0xkik6xiybdmp.png',
    keywords: '‡',
    date: '2021-09-17T05:00:26.401Z',
  },
  {
    uuid: 'noticon_sulndtevazxyzuprippz',
    title: 'Clean code',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1631965830/noticon/sulndtevazxyzuprippz.png',
    keywords: '‡',
    date: '2021-09-18T11:50:31.982Z',
  },
  {
    uuid: 'noticon_grmdwkgmtaxddiw4gtqd',
    title: 'Continuous integration',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1631966126/noticon/grmdwkgmtaxddiw4gtqd.png',
    keywords: '‡',
    date: '2021-09-18T11:55:28.089Z',
  },
  {
    uuid: 'noticon_s8gnnzoy0x9xlwkcn4k8',
    title: 'grpc',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1632067907/noticon/s8gnnzoy0x9xlwkcn4k8.png',
    keywords: 'grpc‡',
    date: '2021-09-19T16:11:49.686Z',
  },
  {
    uuid: 'noticon_jam5crx0odnyrewjsdiy',
    title: 'gin-gonic',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1632068835/noticon/jam5crx0odnyrewjsdiy.png',
    keywords: 'golang‡',
    date: '2021-09-19T16:27:18.306Z',
  },
  {
    uuid: 'noticon_hhtfggl2uroruklhyh1b',
    title: 'protocol buffer',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1632069098/noticon/hhtfggl2uroruklhyh1b.png',
    keywords: '‡',
    date: '2021-09-19T16:31:40.684Z',
  },
  {
    uuid: 'noticon_xxpktompyafewevsvebm',
    title: '어피치',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1632325327/noticon/xxpktompyafewevsvebm.png',
    keywords: '황당‡',
    date: '2021-09-22T15:42:09.690Z',
  },
  {
    uuid: 'noticon_puw7ewvs87ndly1pamzt',
    title: '소심 어피치',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1632325348/noticon/puw7ewvs87ndly1pamzt.png',
    keywords: '‡',
    date: '2021-09-22T15:42:29.609Z',
  },
  {
    uuid: 'noticon_ccbsv8zl1szd4jtkwikm',
    title: '어피치 꽃받침',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1632325416/noticon/ccbsv8zl1szd4jtkwikm.png',
    keywords: '‡',
    date: '2021-09-22T15:43:38.152Z',
  },
  {
    uuid: 'noticon_kgf08d15pj0z5psf0rjb',
    title: 'todoist-alpha',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1632803764/noticon/kgf08d15pj0z5psf0rjb.png',
    keywords: 'alpha‡',
    date: '2021-09-28T04:36:05.774Z',
  },
  {
    uuid: 'noticon_lr4xszuo5uxuxhj46vhz',
    title: 'colab',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1632907451/noticon/lr4xszuo5uxuxhj46vhz.png',
    keywords: '‡',
    date: '2021-09-29T09:24:13.858Z',
  },
  {
    uuid: 'noticon_pfuxrnnf8pfr1fh0hao1',
    title: 'pycharm',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1632907475/noticon/pfuxrnnf8pfr1fh0hao1.png',
    keywords: '‡',
    date: '2021-09-29T09:24:37.734Z',
  },
  {
    uuid: 'noticon_ejibqlqyvcpb1rk2u5m0',
    title: 'pycharm',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1632907571/noticon/ejibqlqyvcpb1rk2u5m0.png',
    keywords: '‡',
    date: '2021-09-29T09:26:13.159Z',
  },
  {
    uuid: 'noticon_hlmv3zqa9er8puerap1t',
    title: 'bentoML',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1632923011/noticon/hlmv3zqa9er8puerap1t.png',
    keywords: '‡',
    date: '2021-09-29T13:43:33.866Z',
  },
  {
    uuid: 'noticon_poie8luryuvfdacytesb',
    title: 'oop',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1632965689/noticon/poie8luryuvfdacytesb.png',
    keywords: '‡',
    date: '2021-09-30T01:34:50.869Z',
  },
  {
    uuid: 'noticon_gx6ocwwdq8atppczam8j',
    title: 'tmux',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1632966159/noticon/gx6ocwwdq8atppczam8j.png',
    keywords: '‡',
    date: '2021-09-30T01:42:40.870Z',
  },
  {
    uuid: 'noticon_y0kl4yrpauajnijkiahh',
    title: 'podman',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1632974742/noticon/y0kl4yrpauajnijkiahh.png',
    keywords: '‡',
    date: '2021-09-30T04:05:44.102Z',
  },
  {
    uuid: 'noticon_jsgc6cjtmmnvs2cyjhx3',
    title: 'airflow',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1632974821/noticon/jsgc6cjtmmnvs2cyjhx3.png',
    keywords: '‡',
    date: '2021-09-30T04:07:03.879Z',
  },
  {
    uuid: 'noticon_sqp4yfcjsplicvilepdd',
    title: 'bentoML',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1632974874/noticon/sqp4yfcjsplicvilepdd.png',
    keywords: '‡',
    date: '2021-09-30T04:07:56.195Z',
  },
  {
    uuid: 'noticon_hpijk5s7mzkcuzuqbjai',
    title: 'ray',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1632974923/noticon/hpijk5s7mzkcuzuqbjai.png',
    keywords: '‡',
    date: '2021-09-30T04:08:45.285Z',
  },
  {
    uuid: 'noticon_egtpio4rexqrlo3h4gnq',
    title: 'kubeflow',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1632974964/noticon/egtpio4rexqrlo3h4gnq.png',
    keywords: '‡',
    date: '2021-09-30T04:09:27.125Z',
  },
  {
    uuid: 'noticon_umghg9uwcqoknnfq8bta',
    title: 'mlflow',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1632975026/noticon/umghg9uwcqoknnfq8bta.png',
    keywords: '‡',
    date: '2021-09-30T04:10:28.711Z',
  },
  {
    uuid: 'noticon_jlfwseiqspqkzrr6vrhx',
    title: 'fastapi',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1632975189/noticon/jlfwseiqspqkzrr6vrhx.png',
    keywords: '‡',
    date: '2021-09-30T04:13:10.773Z',
  },
  {
    uuid: 'noticon_sph4ujixspcnhzpw8zky',
    title: 'colab',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1632975248/noticon/sph4ujixspcnhzpw8zky.png',
    keywords: '‡',
    date: '2021-09-30T04:14:11.669Z',
  },
  {
    uuid: 'noticon_gn3xxmgvnkudu8m7nfks',
    title: 'jira',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1632975338/noticon/gn3xxmgvnkudu8m7nfks.png',
    keywords: '‡',
    date: '2021-09-30T04:15:41.066Z',
  },
  {
    uuid: 'noticon_gk5fxojzymsvw4pc71tf',
    title: 'statistics',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1632975522/noticon/gk5fxojzymsvw4pc71tf.png',
    keywords: '‡',
    date: '2021-09-30T04:18:43.793Z',
  },
  {
    uuid: 'noticon_tlfc4ovn9j5cehhjye4b',
    title: 'machine learning',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1632975582/noticon/tlfc4ovn9j5cehhjye4b.png',
    keywords: '‡',
    date: '2021-09-30T04:19:44.236Z',
  },
  {
    uuid: 'noticon_mpcvcuwq6nrwp1rc4pdp',
    title: 'nlp',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1632975681/noticon/mpcvcuwq6nrwp1rc4pdp.png',
    keywords: '‡',
    date: '2021-09-30T04:21:23.848Z',
  },
  {
    uuid: 'noticon_vxktfxqhvzvdq1wpzkkt',
    title: '추천시스템',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1632975755/noticon/vxktfxqhvzvdq1wpzkkt.png',
    keywords: '‡',
    date: '2021-09-30T04:22:37.970Z',
  },
  {
    uuid: 'noticon_kjmzca286wdowzpisirj',
    title: 'deep learning',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1632975807/noticon/kjmzca286wdowzpisirj.png',
    keywords: '‡',
    date: '2021-09-30T04:23:29.188Z',
  },
  {
    uuid: 'noticon_akt5qatruvr1qctxqgol',
    title: '추천시스템',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1632975828/noticon/akt5qatruvr1qctxqgol.png',
    keywords: '‡',
    date: '2021-09-30T04:23:49.782Z',
  },
  {
    uuid: 'noticon_ld6hwrvvy1fmtimc5uwc',
    title: 'pyqt',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1632997594/noticon/ld6hwrvvy1fmtimc5uwc.png',
    keywords: '‡',
    date: '2021-09-30T10:26:35.999Z',
  },
  {
    uuid: 'noticon_zhyoopfdwi9jjme935cb',
    title: 'ｎｅｘｏｎ　ｌｏｇｏ',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1633071078/noticon/zhyoopfdwi9jjme935cb.png',
    keywords: '‡',
    date: '2021-10-01T06:51:19.942Z',
  },
  {
    uuid: 'noticon_wn5sgfngwnvrafaosy9q',
    title: 'ｎｅｘｏｎ　Ｌｏｇｏ（ｗｉｔｈ　ｔｅｘｔ）',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1633071122/noticon/wn5sgfngwnvrafaosy9q.png',
    keywords: '‡',
    date: '2021-10-01T06:52:04.949Z',
  },
  {
    uuid: 'noticon_svfvl5id84d7ptdwj0vd',
    title: 'API',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1633092729/noticon/svfvl5id84d7ptdwj0vd.png',
    keywords: '‡',
    date: '2021-10-01T12:52:11.803Z',
  },
  {
    uuid: 'noticon_wwqxiin3cwezheghiewy',
    title: 'cloth',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1633336957/noticon/wwqxiin3cwezheghiewy.gif',
    keywords: '‡',
    date: '2021-10-04T08:42:39.771Z',
  },
  {
    uuid: 'noticon_fam3ioyn5kuv2ukrmaau',
    title: 'baby shark',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1633337543/noticon/fam3ioyn5kuv2ukrmaau.gif',
    keywords: '‡',
    date: '2021-10-04T08:52:25.542Z',
  },
  {
    uuid: 'noticon_frzg7mdpeuvjzyzcxzoj',
    title: 'france',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1633400431/noticon/frzg7mdpeuvjzyzcxzoj.png',
    keywords: 'country‡',
    date: '2021-10-05T02:20:32.526Z',
  },
  {
    uuid: 'noticon_wrvuoqfujmxiuyzpb5ly',
    title: '라따뚜이',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1633400554/noticon/wrvuoqfujmxiuyzpb5ly.gif',
    keywords: 'movie‡',
    date: '2021-10-05T02:22:36.861Z',
  },
  {
    uuid: 'noticon_lziidomyb3wbbngotr4y',
    title: 'Bulleted list',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1633404429/noticon/lziidomyb3wbbngotr4y.png',
    keywords: 'ui‡li',
    date: '2021-10-05T03:27:11.321Z',
  },
  {
    uuid: 'noticon_cdzoc5eeqjqmebdpfcac',
    title: 'pegasus',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1633415805/noticon/cdzoc5eeqjqmebdpfcac.gif',
    keywords: '‡',
    date: '2021-10-05T06:36:48.061Z',
  },
  {
    uuid: 'noticon_ismfq4vo01kwtwhsoamk',
    title: 'horse',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1633415896/noticon/ismfq4vo01kwtwhsoamk.gif',
    keywords: '‡',
    date: '2021-10-05T06:38:18.922Z',
  },
  {
    uuid: 'noticon_jvt8d74sc9x7yozmmcxr',
    title: 'Exclamation mark',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1633481243/noticon/jvt8d74sc9x7yozmmcxr.png',
    keywords: 'Exclamation‡느낌표',
    date: '2021-10-06T00:47:27.581Z',
  },
  {
    uuid: 'noticon_qpqmgdcum49g05tqhy71',
    title: 'Apache Solr',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1633484370/noticon/qpqmgdcum49g05tqhy71.png',
    keywords: 'Solr‡',
    date: '2021-10-06T01:39:32.831Z',
  },
  {
    uuid: 'noticon_jodwxqluutquo62s82de',
    title: 'notcion',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1633514562/noticon/jodwxqluutquo62s82de.png',
    keywords: '‡',
    date: '2021-10-06T10:02:43.968Z',
  },
  {
    uuid: 'noticon_uskyv9vyil6vuauufilw',
    title: 'guitar',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1633767085/noticon/uskyv9vyil6vuauufilw.gif',
    keywords: '‡',
    date: '2021-10-09T08:11:28.276Z',
  },
  {
    uuid: 'noticon_hpn6njsfydbbaks4qihs',
    title: 'infra',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1633768384/noticon/hpn6njsfydbbaks4qihs.png',
    keywords: 'cloud‡',
    date: '2021-10-09T08:33:07.339Z',
  },
  {
    uuid: 'noticon_czfsclw3mapefbpyzply',
    title: '소나린트',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1633962775/noticon/czfsclw3mapefbpyzply.png',
    keywords: '소나린트‡sonarlint',
    date: '2021-10-11T14:32:58.411Z',
  },
  {
    uuid: 'noticon_hmr22wdhdwco8cwvu5ua',
    title: '벤치마크',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1633963506/noticon/hmr22wdhdwco8cwvu5ua.png',
    keywords: '벤치마크‡benchmark',
    date: '2021-10-11T14:45:12.253Z',
  },
  {
    uuid: 'noticon_kcpekdqmworot1csvv7k',
    title: 'framer motion',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1634080848/noticon/kcpekdqmworot1csvv7k.png',
    keywords: 'framer‡motion',
    date: '2021-10-12T23:20:50.904Z',
  },
  {
    uuid: 'noticon_ibl8rsg61vpe6zepqa8p',
    title: 'GnuPG',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1634087431/noticon/ibl8rsg61vpe6zepqa8p.png',
    keywords: '‡',
    date: '2021-10-13T01:10:32.756Z',
  },
  {
    uuid: 'noticon_e6vc11kt7cqqkrhbuwpc',
    title: '마이리틀팝캣',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1634100541/noticon/e6vc11kt7cqqkrhbuwpc.png',
    keywords: 'popcat‡cat',
    date: '2021-10-13T04:49:03.117Z',
  },
  {
    uuid: 'noticon_fuow3sufdwcpfkhwkmcx',
    title: 'zplug',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1634110696/noticon/fuow3sufdwcpfkhwkmcx.png',
    keywords: 'zsh‡',
    date: '2021-10-13T07:38:18.387Z',
  },
  {
    uuid: 'noticon_l5tcvvutxqzqkwcmoumc',
    title: 'zplug',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1634110722/noticon/l5tcvvutxqzqkwcmoumc.png',
    keywords: 'zsh‡',
    date: '2021-10-13T07:38:43.855Z',
  },
  {
    uuid: 'noticon_abcrlgf0pspbvlgdajid',
    title: 'backend',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1634122174/noticon/abcrlgf0pspbvlgdajid.png',
    keywords: '‡',
    date: '2021-10-13T10:49:36.645Z',
  },
  {
    uuid: 'noticon_xrxfesjohxkyff1d9bno',
    title: 'etc',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1634122260/noticon/xrxfesjohxkyff1d9bno.png',
    keywords: '‡',
    date: '2021-10-13T10:51:02.851Z',
  },
  {
    uuid: 'noticon_s0eqiccz0ljs0jccpcts',
    title: 'cs',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1634122423/noticon/s0eqiccz0ljs0jccpcts.png',
    keywords: '‡',
    date: '2021-10-13T10:53:45.507Z',
  },
  {
    uuid: 'noticon_gzmb0vxdb6z4j4ovtqby',
    title: 'cooperation',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1634122596/noticon/gzmb0vxdb6z4j4ovtqby.png',
    keywords: '‡',
    date: '2021-10-13T10:56:37.901Z',
  },
  {
    uuid: 'noticon_mwatbwqahacgnsmwojza',
    title: 'bart',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1634189857/noticon/mwatbwqahacgnsmwojza.png',
    keywords: '‡',
    date: '2021-10-14T05:37:38.674Z',
  },
  {
    uuid: 'noticon_uxvdxcyvs5ocrxhacfj6',
    title: 'nodejs',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1634264836/noticon/uxvdxcyvs5ocrxhacfj6.png',
    keywords: '‡',
    date: '2021-10-15T02:27:30.886Z',
  },
  {
    uuid: 'noticon_iioqrh7tytlnri03mj2a',
    title: 'socket.io',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1634308480/noticon/iioqrh7tytlnri03mj2a.png',
    keywords: 'socket‡socket io',
    date: '2021-10-15T14:34:43.128Z',
  },
  {
    uuid: 'noticon_otkxscgcsnojvabggkws',
    title: 'GKE',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1634387464/noticon/otkxscgcsnojvabggkws.png',
    keywords: 'gcp‡',
    date: '2021-10-16T12:31:06.104Z',
  },
  {
    uuid: 'noticon_bjel8jxgibnsfdtvppbv',
    title: 'vision',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1634543714/noticon/bjel8jxgibnsfdtvppbv.gif',
    keywords: '‡',
    date: '2021-10-18T07:55:18.493Z',
  },
  {
    uuid: 'noticon_bsphgwxgelnhjyzxi8tp',
    title: 'fast campus',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1634549412/noticon/bsphgwxgelnhjyzxi8tp.png',
    keywords: '패스트 캠퍼스‡패캠',
    date: '2021-10-18T09:30:15.012Z',
  },
  {
    uuid: 'noticon_xnkwwjpsrtz9fwnzfv9p',
    title: '배경',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1634563010/noticon/xnkwwjpsrtz9fwnzfv9p.gif',
    keywords: '배경‡',
    date: '2021-10-18T13:16:54.451Z',
  },
  {
    uuid: 'noticon_evuwop5v5y7mdf7hppoi',
    title: '요기요',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1634746317/noticon/evuwop5v5y7mdf7hppoi.png',
    keywords: 'yogiyo‡',
    date: '2021-10-20T16:11:58.894Z',
  },
  {
    uuid: 'noticon_i3g0cafkkda9l5aeevwr',
    title: '주황버섯',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1634746493/noticon/i3g0cafkkda9l5aeevwr.png',
    keywords: '메이플스토리‡maplestory',
    date: '2021-10-20T16:14:55.005Z',
  },
  {
    uuid: 'noticon_m5q9nobkssa8km57buav',
    title: '좋밥춤',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1634779999/noticon/m5q9nobkssa8km57buav.gif',
    keywords: '‡',
    date: '2021-10-21T01:33:22.890Z',
  },
  {
    uuid: 'noticon_skvxhqthfikal67ospd1',
    title: '로딩',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1635067207/noticon/skvxhqthfikal67ospd1.gif',
    keywords: '‡',
    date: '2021-10-24T09:20:10.008Z',
  },
  {
    uuid: 'noticon_wmt9hp8usow6v619goxd',
    title: 'ReactiveX',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1635189933/noticon/wmt9hp8usow6v619goxd.png',
    keywords: 'reactivex‡rx',
    date: '2021-10-25T19:25:35.421Z',
  },
  {
    uuid: 'noticon_tvjb6nme5cc90mrrsi83',
    title: 'TensorFlow',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1635221013/noticon/tvjb6nme5cc90mrrsi83.png',
    keywords: 'Tensor‡tensorflow',
    date: '2021-10-26T04:03:35.396Z',
  },
  {
    uuid: 'noticon_d6zjt6gwvwkhfshfteyi',
    title: 'Pandas',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1635225912/noticon/d6zjt6gwvwkhfshfteyi.png',
    keywords: 'pandas‡python',
    date: '2021-10-26T05:25:14.282Z',
  },
  {
    uuid: 'noticon_f0q3lhbfi2qmamrjla4e',
    title: 'scikit-learn',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1635226310/noticon/f0q3lhbfi2qmamrjla4e.png',
    keywords: 'sklearn‡scikit learn',
    date: '2021-10-26T05:31:52.102Z',
  },
  {
    uuid: 'noticon_w4rrv1fehcy62fcgihfe',
    title: '티몬앱',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1635316976/noticon/w4rrv1fehcy62fcgihfe.png',
    keywords: '티몬‡tmon',
    date: '2021-10-27T06:42:59.012Z',
  },
  {
    uuid: 'noticon_t2v5vtq6gp7d0bgspmyh',
    title: 'kotlin',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1635384696/noticon/t2v5vtq6gp7d0bgspmyh.png',
    keywords: '‡',
    date: '2021-10-28T01:31:38.892Z',
  },
  {
    uuid: 'noticon_gczjcevqderalb6bsmgd',
    title: 'SWC',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1635734281/noticon/gczjcevqderalb6bsmgd.png',
    keywords: 'compiler‡rust',
    date: '2021-11-01T02:38:02.956Z',
  },
  {
    uuid: 'noticon_arnfenwq1dqeotrjsyuh',
    title: 'basecamp',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1635749282/noticon/arnfenwq1dqeotrjsyuh.png',
    keywords: 'teamwork‡sass',
    date: '2021-11-01T06:48:04.991Z',
  },
  {
    uuid: 'noticon_zwu4p0mjadrfxq0apr5c',
    title: '서울과기대',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1635755532/noticon/zwu4p0mjadrfxq0apr5c.png',
    keywords: 'univ‡',
    date: '2021-11-01T08:32:15.422Z',
  },
  {
    uuid: 'noticon_omglaku8yc2vynnz3uyo',
    title: '성균관대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1635755725/noticon/omglaku8yc2vynnz3uyo.png',
    keywords: 'univ‡',
    date: '2021-11-01T08:35:27.555Z',
  },
  {
    uuid: 'noticon_d8pqj53ns7yddl4mxqhk',
    title: '이화여자대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1635755766/noticon/d8pqj53ns7yddl4mxqhk.png',
    keywords: 'univ‡',
    date: '2021-11-01T08:36:07.846Z',
  },
  {
    uuid: 'noticon_w1vounliiqqw6kbttuoa',
    title: 'Packer',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1635826807/noticon/w1vounliiqqw6kbttuoa.png',
    keywords: '‡',
    date: '2021-11-02T04:20:10.828Z',
  },
  {
    uuid: 'noticon_exgad3v7m9g2xm6rbcqz',
    title: 'PhoneGap',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1636193490/noticon/exgad3v7m9g2xm6rbcqz.png',
    keywords: 'cordova‡hybrid',
    date: '2021-11-06T10:11:32.285Z',
  },
  {
    uuid: 'noticon_i44uqkd3zporpqon8m6o',
    title: 'Cordova',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1636194269/noticon/i44uqkd3zporpqon8m6o.png',
    keywords: 'PhoneGap‡',
    date: '2021-11-06T10:24:31.491Z',
  },
  {
    uuid: 'noticon_udfdivgmtjzmciazbgsu',
    title: 'leesource',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1636625620/noticon/udfdivgmtjzmciazbgsu.png',
    keywords: '‡',
    date: '2021-11-11T10:13:43.375Z',
  },
  {
    uuid: 'noticon_rdknvrm8ukqot75l4oox',
    title: '골프존',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1636783859/noticon/rdknvrm8ukqot75l4oox.png',
    keywords: '골프존‡',
    date: '2021-11-13T06:11:01.474Z',
  },
  {
    uuid: 'noticon_swgqv9hibsjjvqaiqwlw',
    title: 'notion',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1636892918/noticon/swgqv9hibsjjvqaiqwlw.png',
    keywords: 'logo‡',
    date: '2021-11-14T12:28:40.132Z',
  },
  {
    uuid: 'noticon_qmlzrbvb9mabg7rinn3u',
    title: '모두싸인',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1636892980/noticon/qmlzrbvb9mabg7rinn3u.png',
    keywords: '‡',
    date: '2021-11-14T12:29:42.319Z',
  },
  {
    uuid: 'noticon_grbue4odprfylqxphbl2',
    title: '미리캔버스',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1636893059/noticon/grbue4odprfylqxphbl2.png',
    keywords: '‡',
    date: '2021-11-14T12:31:00.760Z',
  },
  {
    uuid: 'noticon_wdunh6subxfmadfztoui',
    title: 'ZUM',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1637136569/noticon/wdunh6subxfmadfztoui.png',
    keywords: 'zum‡줌',
    date: '2021-11-17T08:09:31.554Z',
  },
  {
    uuid: 'noticon_cakpnvvl4aaxilkkmpjp',
    title: 'Gabia',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1637157125/noticon/cakpnvvl4aaxilkkmpjp.png',
    keywords: '가비아‡gabia',
    date: '2021-11-17T13:52:07.428Z',
  },
  {
    uuid: 'noticon_ukxculex520jlfdt62hh',
    title: 'Scheme',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1637159662/noticon/ukxculex520jlfdt62hh.png',
    keywords: 'scheme‡lambda',
    date: '2021-11-17T14:34:24.473Z',
  },
  {
    uuid: 'noticon_lzc6irckwlnge5yz2lfi',
    title: 'C++',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1637167658/noticon/lzc6irckwlnge5yz2lfi.png',
    keywords: '‡',
    date: '2021-11-17T16:47:40.206Z',
  },
  {
    uuid: 'noticon_ifk1fgr5fsh2pzhyhtws',
    title: '내일의창업',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1637248723/noticon/ifk1fgr5fsh2pzhyhtws.png',
    keywords: '내일의창업‡내일의창업',
    date: '2021-11-18T15:18:45.358Z',
  },
  {
    uuid: 'noticon_k5jdymxksyl0cv1zueqw',
    title: '내일의창업(Black)',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1637248754/noticon/k5jdymxksyl0cv1zueqw.png',
    keywords: '내일의창업(Black)‡내일의창업(Black)',
    date: '2021-11-18T15:19:15.689Z',
  },
  {
    uuid: 'noticon_wi2i0o3vilojg2ijw2q9',
    title: 'cherry blossom',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1637422050/noticon/wi2i0o3vilojg2ijw2q9.gif',
    keywords: 'flower‡pink',
    date: '2021-11-20T15:27:33.604Z',
  },
  {
    uuid: 'noticon_tydmzggs2djrjwcqvkuq',
    title: 'heart',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1637422104/noticon/tydmzggs2djrjwcqvkuq.gif',
    keywords: '‡',
    date: '2021-11-20T15:28:26.920Z',
  },
  {
    uuid: 'noticon_gqrlrjqpsvrhye2m1xg4',
    title: '딸기파르페',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1637422197/noticon/gqrlrjqpsvrhye2m1xg4.gif',
    keywords: 'pink‡',
    date: '2021-11-20T15:29:59.972Z',
  },
  {
    uuid: 'noticon_srselxh0nr7ztaqckumd',
    title: '키티',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1637422385/noticon/srselxh0nr7ztaqckumd.gif',
    keywords: 'pink‡',
    date: '2021-11-20T15:33:11.884Z',
  },
  {
    uuid: 'noticon_vavkp5sgbukuub39ycu8',
    title: '공학교육페스티벌',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1637478909/noticon/vavkp5sgbukuub39ycu8.png',
    keywords: '‡',
    date: '2021-11-21T07:15:11.741Z',
  },
  {
    uuid: 'noticon_ogawunemqhn9jgkn9vyh',
    title: '한이음',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1637479013/noticon/ogawunemqhn9jgkn9vyh.png',
    keywords: '‡',
    date: '2021-11-21T07:16:55.433Z',
  },
  {
    uuid: 'noticon_pp8dx70ot387mo6f6zmb',
    title: 'india',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1637514519/noticon/pp8dx70ot387mo6f6zmb.png',
    keywords: '‡',
    date: '2021-11-21T17:08:42.231Z',
  },
  {
    uuid: 'noticon_afu2nnqx8co35pllo2xx',
    title: 'sk쉴더스',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1637540587/noticon/afu2nnqx8co35pllo2xx.png',
    keywords: 'adtcaps‡',
    date: '2021-11-22T00:23:08.976Z',
  },
  {
    uuid: 'noticon_dv4ujqtoilju5manvknz',
    title: 'cording',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1637567183/noticon/dv4ujqtoilju5manvknz.png',
    keywords: 'meme‡',
    date: '2021-11-22T07:46:25.029Z',
  },
  {
    uuid: 'noticon_ffiptyvph4opccvbl01l',
    title: 'if(kakao)',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1637619703/noticon/ffiptyvph4opccvbl01l.png',
    keywords: 'kakao‡',
    date: '2021-11-22T22:21:45.235Z',
  },
  {
    uuid: 'noticon_v71cjg9c55qnhyoqugyf',
    title: 'AWS SQS',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1637825678/noticon/v71cjg9c55qnhyoqugyf.png',
    keywords: 'SQS‡Simple Queue Service',
    date: '2021-11-25T07:34:39.849Z',
  },
  {
    uuid: 'noticon_gpr07ptl1x6evhew7li7',
    title: '춘식이',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1638101071/noticon/gpr07ptl1x6evhew7li7.png',
    keywords: '라이언‡카카오톡',
    date: '2021-11-28T12:04:33.920Z',
  },
  {
    uuid: 'noticon_dnxgni4hfbeaxdobepo6',
    title: '뚱땅이',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1638101180/noticon/dnxgni4hfbeaxdobepo6.gif',
    keywords: '하하하‡',
    date: '2021-11-28T12:06:24.160Z',
  },
  {
    uuid: 'noticon_fhxax3msswcqkbanxzhc',
    title: '무',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1638101364/noticon/fhxax3msswcqkbanxzhc.gif',
    keywords: '하하하‡',
    date: '2021-11-28T12:09:28.537Z',
  },
  {
    uuid: 'noticon_kxrryqec9lq7cxnz3njv',
    title: 'clova',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1638243254/noticon/kxrryqec9lq7cxnz3njv.png',
    keywords: '클로바‡네이버',
    date: '2021-11-30T03:34:16.145Z',
  },
  {
    uuid: 'noticon_aloabgyayrfxo8sikxgr',
    title: 'route53',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1638258805/noticon/aloabgyayrfxo8sikxgr.png',
    keywords: 'route 53‡',
    date: '2021-11-30T07:53:27.283Z',
  },
  {
    uuid: 'noticon_ncp0k5kiirbrtti3aadw',
    title: 'HRMS',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1638264519/noticon/ncp0k5kiirbrtti3aadw.png',
    keywords: '‡',
    date: '2021-11-30T09:28:41.322Z',
  },
  {
    uuid: 'noticon_am5gg7kfwh3wtxta9feq',
    title: 'Nvidia',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1638403753/noticon/am5gg7kfwh3wtxta9feq.png',
    keywords: '엔비디아‡',
    date: '2021-12-02T00:09:15.448Z',
  },
  {
    uuid: 'noticon_a2bwxqapzorwesckzigz',
    title: 'Toss',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1638546417/noticon/a2bwxqapzorwesckzigz.png',
    keywords: '토스‡',
    date: '2021-12-03T15:46:59.550Z',
  },
  {
    uuid: 'noticon_o70eb6l5ptnde8aim43m',
    title: 'reveal',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1638569944/noticon/o70eb6l5ptnde8aim43m.png',
    keywords: '쿠팡‡',
    date: '2021-12-03T22:19:06.070Z',
  },
  {
    uuid: 'noticon_pwqxtxrbe7vm5ugtcpdu',
    title: 'Azure',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1638724901/noticon/pwqxtxrbe7vm5ugtcpdu.png',
    keywords: '‡',
    date: '2021-12-05T17:21:45.419Z',
  },
  {
    uuid: 'noticon_auuwgsewlrp8rwodwm8q',
    title: 'Unreal Engine',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1638835197/noticon/auuwgsewlrp8rwodwm8q.png',
    keywords: 'unreal‡ue',
    date: '2021-12-06T23:59:59.310Z',
  },
  {
    uuid: 'noticon_ddailthbbomacnkbrzgt',
    title: 'codesom',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1638967442/noticon/ddailthbbomacnkbrzgt.png',
    keywords: 'codesom‡코드숨',
    date: '2021-12-08T12:44:03.957Z',
  },
  {
    uuid: 'noticon_uyvl3exam6jgxoygpi6m',
    title: 'Judy_Hopps1',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1639012360/noticon/uyvl3exam6jgxoygpi6m.gif',
    keywords: 'judy‡',
    date: '2021-12-09T01:12:43.657Z',
  },
  {
    uuid: 'noticon_codfttuzd8dvycpt7c9t',
    title: 'Judy_Hopps2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1639012479/noticon/codfttuzd8dvycpt7c9t.gif',
    keywords: 'judy‡',
    date: '2021-12-09T01:14:41.946Z',
  },
  {
    uuid: 'noticon_dwgugdn3yst5wtwj56hu',
    title: '어?',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1639061790/noticon/dwgugdn3yst5wtwj56hu.png',
    keywords: 'uh?‡',
    date: '2021-12-09T14:56:33.153Z',
  },
  {
    uuid: 'noticon_tuzrmodt11t54nqitqfu',
    title: '네이버쇼핑라이브',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1639114676/noticon/tuzrmodt11t54nqitqfu.png',
    keywords: '‡',
    date: '2021-12-10T05:37:58.325Z',
  },
  {
    uuid: 'noticon_ne8h1lkdfk677egvsxcf',
    title: 'chat',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1639283783/noticon/ne8h1lkdfk677egvsxcf.png',
    keywords: '‡',
    date: '2021-12-12T04:36:25.114Z',
  },
  {
    uuid: 'noticon_bgzoexyye1fookjhsqbj',
    title: 'Rider',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1639507621/noticon/bgzoexyye1fookjhsqbj.png',
    keywords: 'jetbrain‡',
    date: '2021-12-14T18:47:03.897Z',
  },
  {
    uuid: 'noticon_zwptd8zbxza7oiwb8zng',
    title: 'Unity',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1639508882/noticon/zwptd8zbxza7oiwb8zng.png',
    keywords: '‡',
    date: '2021-12-14T19:08:04.076Z',
  },
  {
    uuid: 'noticon_b75ommy6c7emxgx4nwzh',
    title: 'photon',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1639509465/noticon/b75ommy6c7emxgx4nwzh.png',
    keywords: '‡',
    date: '2021-12-14T19:17:49.196Z',
  },
  {
    uuid: 'noticon_ouggkwymgzlbt4ir8ne0',
    title: 'Prisma',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1639528774/noticon/ouggkwymgzlbt4ir8ne0.png',
    keywords: 'prisma‡black',
    date: '2021-12-15T00:39:36.090Z',
  },
  {
    uuid: 'noticon_yr1sucdqbi1suyo5knvr',
    title: 'Prisma',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1639528804/noticon/yr1sucdqbi1suyo5knvr.png',
    keywords: 'prisma‡blue',
    date: '2021-12-15T00:40:05.866Z',
  },
  {
    uuid: 'noticon_yb0rb8uy60y44hcxfpws',
    title: 'wooweb',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1639574927/noticon/yb0rb8uy60y44hcxfpws.png',
    keywords: 'wooweb‡',
    date: '2021-12-15T13:28:48.795Z',
  },
  {
    uuid: 'noticon_c3nn3yqpwmaboyjvblr0',
    title: '버즈빌',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1639737884/noticon/c3nn3yqpwmaboyjvblr0.png',
    keywords: 'buzzvil‡',
    date: '2021-12-17T10:44:46.110Z',
  },
  {
    uuid: 'noticon_v4qpmkfpuxn9wicdbgsv',
    title: 'aws cli',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1639910458/noticon/v4qpmkfpuxn9wicdbgsv.png',
    keywords: '‡',
    date: '2021-12-19T10:41:00.066Z',
  },
  {
    uuid: 'noticon_l2w2dfrmbsuksfgyknm5',
    title: 'thumbs up',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1639928067/noticon/l2w2dfrmbsuksfgyknm5.png',
    keywords: 'thumb‡',
    date: '2021-12-19T15:34:28.906Z',
  },
  {
    uuid: 'noticon_fkimyxinstmrozpspbu9',
    title: '인하대',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1639929870/noticon/fkimyxinstmrozpspbu9.png',
    keywords: '‡',
    date: '2021-12-19T16:04:32.435Z',
  },
  {
    uuid: 'noticon_cdu7waa4r1jybp9wtpde',
    title: 'network',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1639983196/noticon/cdu7waa4r1jybp9wtpde.png',
    keywords: 'net‡net',
    date: '2021-12-20T06:53:18.717Z',
  },
  {
    uuid: 'noticon_tpczzyczpkmakrdupnmv',
    title: 'ray wenderlich',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640134818/noticon/tpczzyczpkmakrdupnmv.png',
    keywords: '레이 윈더리치‡',
    date: '2021-12-22T01:00:20.626Z',
  },
  {
    uuid: 'noticon_f3quezfvupotgl8uctwd',
    title: 'squarespace',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640148427/noticon/f3quezfvupotgl8uctwd.png',
    keywords: '‡',
    date: '2021-12-22T04:47:21.169Z',
  },
  {
    uuid: 'noticon_i63hkhqeeuu9st0nsvk4',
    title: 'cpp',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640151355/noticon/i63hkhqeeuu9st0nsvk4.png',
    keywords: '‡',
    date: '2021-12-22T05:35:56.932Z',
  },
  {
    uuid: 'noticon_albswwsjaaxvxbyhmwig',
    title: 'discord',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640152045/noticon/albswwsjaaxvxbyhmwig.png',
    keywords: '‡',
    date: '2021-12-22T05:47:27.012Z',
  },
  {
    uuid: 'noticon_pix6vaskuchq4tsttnmu',
    title: 'side slice',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640160694/noticon/pix6vaskuchq4tsttnmu.png',
    keywords: '‡',
    date: '2021-12-22T08:11:36.294Z',
  },
  {
    uuid: 'noticon_qghhepqow8c80d00sccb',
    title: 'Material ui',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640164843/noticon/qghhepqow8c80d00sccb.png',
    keywords: '‡',
    date: '2021-12-22T09:20:45.197Z',
  },
  {
    uuid: 'noticon_otpputdwkcikkfiozaq2',
    title: 'cypress',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640165182/noticon/otpputdwkcikkfiozaq2.png',
    keywords: '‡',
    date: '2021-12-22T09:26:25.970Z',
  },
  {
    uuid: 'noticon_ri85key1ul0itp4zgauc',
    title: '싸이월드',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640221571/noticon/ri85key1ul0itp4zgauc.png',
    keywords: 'cyworld, 싸이월드‡',
    date: '2021-12-23T01:06:13.575Z',
  },
  {
    uuid: 'noticon_zl7hnu2ff3pqbmokzkhm',
    title: 'Aseprite',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640251896/noticon/zl7hnu2ff3pqbmokzkhm.png',
    keywords: 'aseprite‡pixel',
    date: '2021-12-23T09:31:38.431Z',
  },
  {
    uuid: 'noticon_rsj9vaxlwzlpvpdj3ef1',
    title: '3ds Max',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640251929/noticon/rsj9vaxlwzlpvpdj3ef1.png',
    keywords: '3ds max‡autodesk',
    date: '2021-12-23T09:32:11.309Z',
  },
  {
    uuid: 'noticon_b5jmsdtn4fj9dj11vybc',
    title: 'Autocad',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640251949/noticon/b5jmsdtn4fj9dj11vybc.png',
    keywords: 'autocad‡autodesk',
    date: '2021-12-23T09:32:31.763Z',
  },
  {
    uuid: 'noticon_d0plm5jnbkpdelqcunyi',
    title: 'Maya',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640251968/noticon/d0plm5jnbkpdelqcunyi.png',
    keywords: 'maya‡autodesk',
    date: '2021-12-23T09:32:50.267Z',
  },
  {
    uuid: 'noticon_cnl8ma9jmsu69vq6hotu',
    title: 'Inventor',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640251999/noticon/cnl8ma9jmsu69vq6hotu.png',
    keywords: 'inventor‡autodesk',
    date: '2021-12-23T09:33:35.517Z',
  },
  {
    uuid: 'noticon_v9qvvdheneh7aago36se',
    title: 'Revit',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640252100/noticon/v9qvvdheneh7aago36se.png',
    keywords: 'revit‡autodesk',
    date: '2021-12-23T09:35:02.592Z',
  },
  {
    uuid: 'noticon_g7xjbbyviqi02xkxeo8x',
    title: 'Bash',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640252161/noticon/g7xjbbyviqi02xkxeo8x.png',
    keywords: 'bash‡light',
    date: '2021-12-23T09:36:02.769Z',
  },
  {
    uuid: 'noticon_imqc7seefsupvwbjdp94',
    title: 'Bash',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640252186/noticon/imqc7seefsupvwbjdp94.png',
    keywords: 'bash‡dark',
    date: '2021-12-23T09:36:27.814Z',
  },
  {
    uuid: 'noticon_ux6lhnhzbskc4t8xf0tl',
    title: 'C++',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640252210/noticon/ux6lhnhzbskc4t8xf0tl.png',
    keywords: 'c++‡cpp',
    date: '2021-12-23T09:37:04.288Z',
  },
  {
    uuid: 'noticon_plbpsqmf2vq7e2adh09r',
    title: 'Go',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640252259/noticon/plbpsqmf2vq7e2adh09r.png',
    keywords: 'go‡golang',
    date: '2021-12-23T09:37:43.241Z',
  },
  {
    uuid: 'noticon_faqihf7g8dlb2foiutbj',
    title: 'Unity',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640252323/noticon/faqihf7g8dlb2foiutbj.png',
    keywords: 'unity‡light',
    date: '2021-12-23T09:38:44.674Z',
  },
  {
    uuid: 'noticon_rwwpdzak0oadnzunetw3',
    title: 'Unity',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640252344/noticon/rwwpdzak0oadnzunetw3.png',
    keywords: 'unity‡dark',
    date: '2021-12-23T09:39:06.303Z',
  },
  {
    uuid: 'noticon_cmppx3fjntwhbm8ojedp',
    title: 'Houdini',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640252392/noticon/cmppx3fjntwhbm8ojedp.png',
    keywords: 'houdini‡HoudiniFX',
    date: '2021-12-23T09:39:53.850Z',
  },
  {
    uuid: 'noticon_o3lqmghi05sxt26syo8g',
    title: 'Nuke',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640252431/noticon/o3lqmghi05sxt26syo8g.png',
    keywords: 'foundry‡color',
    date: '2021-12-23T09:40:33.119Z',
  },
  {
    uuid: 'noticon_jsfnxxdjyut7gpeor2wu',
    title: 'Nuke',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640252466/noticon/jsfnxxdjyut7gpeor2wu.png',
    keywords: 'foundry‡dark',
    date: '2021-12-23T09:41:09.535Z',
  },
  {
    uuid: 'noticon_wyehompuf19z2yu0p1bv',
    title: 'Nuke',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640252484/noticon/wyehompuf19z2yu0p1bv.png',
    keywords: 'foundry‡light',
    date: '2021-12-23T09:41:25.906Z',
  },
  {
    uuid: 'noticon_acvxuz3lw3prik3hfwjt',
    title: 'Wireshark',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640252543/noticon/acvxuz3lw3prik3hfwjt.png',
    keywords: 'network‡packet',
    date: '2021-12-23T09:42:25.018Z',
  },
  {
    uuid: 'noticon_ufiqwyf0axv70h00jnya',
    title: 'Registry',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640252594/noticon/ufiqwyf0axv70h00jnya.png',
    keywords: 'windows‡system',
    date: '2021-12-23T09:43:15.825Z',
  },
  {
    uuid: 'noticon_omdlazksmmlcndl1zhak',
    title: 'PowerShell',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640252644/noticon/omdlazksmmlcndl1zhak.png',
    keywords: 'windows‡terminal',
    date: '2021-12-23T09:44:06.192Z',
  },
  {
    uuid: 'noticon_dopqkq9e3wr0tawpfer1',
    title: 'Ubuntu',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640252674/noticon/dopqkq9e3wr0tawpfer1.png',
    keywords: 'linux‡os',
    date: '2021-12-23T09:44:36.534Z',
  },
  {
    uuid: 'noticon_ftpztwdv78odsuwmpdw0',
    title: 'Registry',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640253322/noticon/ftpztwdv78odsuwmpdw0.png',
    keywords: 'windows‡system',
    date: '2021-12-23T09:55:24.625Z',
  },
  {
    uuid: 'noticon_gcorkad7antvi7jwpndx',
    title: 'Windows 11',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640253525/noticon/gcorkad7antvi7jwpndx.png',
    keywords: 'windows‡os',
    date: '2021-12-23T09:58:47.315Z',
  },
  {
    uuid: 'noticon_wjdiwlpnlav5txanihdr',
    title: 'ISMS',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640311294/noticon/wjdiwlpnlav5txanihdr.png',
    keywords: 'security‡',
    date: '2021-12-24T02:01:36.625Z',
  },
  {
    uuid: 'noticon_h8pqpkgg9y4s14xvivpv',
    title: '어니스트펀드',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640340557/noticon/h8pqpkgg9y4s14xvivpv.png',
    keywords: '어펀‡honestfund',
    date: '2021-12-24T10:09:19.171Z',
  },
  {
    uuid: 'noticon_debhggbeagf4tghjt6co',
    title: 'zapier',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640519187/noticon/debhggbeagf4tghjt6co.png',
    keywords: '자피어‡',
    date: '2021-12-26T11:46:29.094Z',
  },
  {
    uuid: 'noticon_nnw5dvoesp8otpltscdq',
    title: 'mono',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640519288/noticon/nnw5dvoesp8otpltscdq.png',
    keywords: '모비온‡',
    date: '2021-12-26T11:48:10.165Z',
  },
  {
    uuid: 'noticon_iwkbknbswljp2qhewtma',
    title: 'poptin',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640519383/noticon/iwkbknbswljp2qhewtma.png',
    keywords: '팝틴‡',
    date: '2021-12-26T11:49:45.427Z',
  },
  {
    uuid: 'noticon_su3mtxmbay7qftwjr31q',
    title: 'kakao',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640519503/noticon/su3mtxmbay7qftwjr31q.png',
    keywords: '카카오모먼트‡',
    date: '2021-12-26T11:51:45.266Z',
  },
  {
    uuid: 'noticon_lzi5mg0rc99cselxtxcy',
    title: 'kakao',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640519654/noticon/lzi5mg0rc99cselxtxcy.png',
    keywords: '‡',
    date: '2021-12-26T11:54:30.607Z',
  },
  {
    uuid: 'noticon_awtl51ityspcm4iocxz7',
    title: '딥다이브',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640698376/noticon/awtl51ityspcm4iocxz7.png',
    keywords: '자바스크립트‡javascript',
    date: '2021-12-28T13:32:58.416Z',
  },
  {
    uuid: 'noticon_ggfeyrupsa32ue214jmu',
    title: 'Domestika',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640804617/noticon/ggfeyrupsa32ue214jmu.png',
    keywords: 'domestika‡logo',
    date: '2021-12-29T19:03:39.008Z',
  },
  {
    uuid: 'noticon_c8kngbuhzhomc9iijhy4',
    title: '북크루',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640844048/noticon/c8kngbuhzhomc9iijhy4.png',
    keywords: 'bookcrew‡',
    date: '2021-12-30T06:00:50.986Z',
  },
  {
    uuid: 'noticon_qamf3xrrgr60sfprswnz',
    title: 'ETRI',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640852732/noticon/qamf3xrrgr60sfprswnz.png',
    keywords: '‡',
    date: '2021-12-30T08:25:34.334Z',
  },
  {
    uuid: 'noticon_m7xvvhy3jejgmux479cw',
    title: 'tesla',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640857832/noticon/m7xvvhy3jejgmux479cw.png',
    keywords: 'tesla‡tsla',
    date: '2021-12-30T09:50:34.089Z',
  },
  {
    uuid: 'noticon_z57q61dbdkqaxivu8qmo',
    title: 'tesla',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640863540/noticon/z57q61dbdkqaxivu8qmo.png',
    keywords: 'tsla‡',
    date: '2021-12-30T11:25:42.527Z',
  },
  {
    uuid: 'noticon_hgrodrfkvrpy0uk5600v',
    title: 'bitcoin',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640864399/noticon/hgrodrfkvrpy0uk5600v.png',
    keywords: 'btc‡',
    date: '2021-12-30T11:40:01.224Z',
  },
  {
    uuid: 'noticon_ycg19yiflg8ulsd9cgbg',
    title: 'doge',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640864623/noticon/ycg19yiflg8ulsd9cgbg.png',
    keywords: 'doge‡',
    date: '2021-12-30T11:43:44.997Z',
  },
  {
    uuid: 'noticon_yqmebekvigpvigm9atmt',
    title: 'stock',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640864755/noticon/yqmebekvigpvigm9atmt.png',
    keywords: 'stock‡',
    date: '2021-12-30T11:45:56.770Z',
  },
  {
    uuid: 'noticon_zfe842snsvz8yhhftk0v',
    title: '123D',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640981611/noticon/zfe842snsvz8yhhftk0v.png',
    keywords: '123d‡autodesk',
    date: '2021-12-31T20:13:33.926Z',
  },
  {
    uuid: 'noticon_v5ouachatawcao1wuod3',
    title: 'Fusion 360',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640982078/noticon/v5ouachatawcao1wuod3.png',
    keywords: 'fusion 360‡autodesk',
    date: '2021-12-31T20:21:20.106Z',
  },
  {
    uuid: 'noticon_tpvr26zp02angin4t0jv',
    title: 'figma',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640982247/noticon/tpvr26zp02angin4t0jv.png',
    keywords: '‡',
    date: '2021-12-31T20:24:08.974Z',
  },
  {
    uuid: 'noticon_ttzcnesqmrwjnf2qjc0l',
    title: 'vscode',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640982424/noticon/ttzcnesqmrwjnf2qjc0l.png',
    keywords: '‡',
    date: '2021-12-31T20:27:06.595Z',
  },
  {
    uuid: 'noticon_yuudr2jmmtsarth8ehqu',
    title: '광운대',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1641107357/noticon/yuudr2jmmtsarth8ehqu.png',
    keywords: '‡',
    date: '2022-01-02T07:09:18.564Z',
  },
  {
    uuid: 'noticon_djpirrss6ixkjogv8rh9',
    title: 'Fairy',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1641261028/noticon/djpirrss6ixkjogv8rh9.png',
    keywords: 'Zelda‡요정',
    date: '2022-01-04T01:50:30.439Z',
  },
  {
    uuid: 'noticon_rbzjmlz1yd4otmo5gway',
    title: 'examtopics',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1641272672/noticon/rbzjmlz1yd4otmo5gway.png',
    keywords: '‡',
    date: '2022-01-04T05:04:35.044Z',
  },
  {
    uuid: 'noticon_x1iigmofgnkpsexs9ebe',
    title: 'test',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1641278795/noticon/x1iigmofgnkpsexs9ebe.png',
    keywords: '‡',
    date: '2022-01-04T06:46:37.928Z',
  },
  {
    uuid: 'noticon_e1ok14fuvr78gl8raam7',
    title: 'test',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1641278893/noticon/e1ok14fuvr78gl8raam7.png',
    keywords: '‡',
    date: '2022-01-04T06:48:15.880Z',
  },
  {
    uuid: 'noticon_vgq1in3cpult6150pwjt',
    title: 'IDEC',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1641392184/noticon/vgq1in3cpult6150pwjt.png',
    keywords: '‡',
    date: '2022-01-05T14:16:27.190Z',
  },
  {
    uuid: 'noticon_jd8ewic7xxbtio7fbv67',
    title: '집',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1641538433/noticon/jd8ewic7xxbtio7fbv67.png',
    keywords: '‡',
    date: '2022-01-07T06:53:55.896Z',
  },
  {
    uuid: 'noticon_ap8rpgbcg22wcefwuufe',
    title: 'KIOSK',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1641550028/noticon/ap8rpgbcg22wcefwuufe.png',
    keywords: '‡',
    date: '2022-01-07T10:07:10.191Z',
  },
  {
    uuid: 'noticon_l8hjwdhltd1aouwufkt7',
    title: 'spacecraft',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1641819189/noticon/l8hjwdhltd1aouwufkt7.png',
    keywords: '‡',
    date: '2022-01-10T12:53:11.404Z',
  },
  {
    uuid: 'noticon_hetjr9po4hn6rkjfqfda',
    title: '달력_4월',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1641819320/noticon/hetjr9po4hn6rkjfqfda.png',
    keywords: '‡',
    date: '2022-01-10T12:55:22.650Z',
  },
  {
    uuid: 'noticon_sxjdqcayqar03fjyivm1',
    title: '달력_8월',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1641819339/noticon/sxjdqcayqar03fjyivm1.png',
    keywords: '‡',
    date: '2022-01-10T12:55:41.016Z',
  },
  {
    uuid: 'noticon_uq4h9mkubvjylxob2nnk',
    title: '달력_12월',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1641819359/noticon/uq4h9mkubvjylxob2nnk.png',
    keywords: '‡',
    date: '2022-01-10T12:56:01.620Z',
  },
  {
    uuid: 'noticon_u3qmxpb5ysdje3uukzh8',
    title: '달력_2월',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1641819375/noticon/u3qmxpb5ysdje3uukzh8.png',
    keywords: '‡',
    date: '2022-01-10T12:56:17.219Z',
  },
  {
    uuid: 'noticon_eio8q7nugbh4gpune1a4',
    title: '달력_1월',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1641819392/noticon/eio8q7nugbh4gpune1a4.png',
    keywords: '‡',
    date: '2022-01-10T12:56:34.445Z',
  },
  {
    uuid: 'noticon_gfxrqy8aqqqb0sysknmz',
    title: '달력_7월',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1641819442/noticon/gfxrqy8aqqqb0sysknmz.png',
    keywords: '‡',
    date: '2022-01-10T12:57:24.813Z',
  },
  {
    uuid: 'noticon_mjgkscnthtrcsje6h1tc',
    title: '달력_6월',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1641819467/noticon/mjgkscnthtrcsje6h1tc.png',
    keywords: '‡',
    date: '2022-01-10T12:57:49.276Z',
  },
  {
    uuid: 'noticon_fzbpnbogthdntfatxoqq',
    title: '달력_3월',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1641819480/noticon/fzbpnbogthdntfatxoqq.png',
    keywords: '‡',
    date: '2022-01-10T12:58:04.004Z',
  },
  {
    uuid: 'noticon_xigwuxexhs7i6b82myc9',
    title: '달력_5월',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1641819500/noticon/xigwuxexhs7i6b82myc9.png',
    keywords: '‡',
    date: '2022-01-10T12:58:21.779Z',
  },
  {
    uuid: 'noticon_nexdkmem30rh0tntfboq',
    title: '달력_11월',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1641819513/noticon/nexdkmem30rh0tntfboq.png',
    keywords: '‡',
    date: '2022-01-10T12:58:34.961Z',
  },
  {
    uuid: 'noticon_gq8gwixshlihgjborrou',
    title: '달력_10월',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1641819530/noticon/gq8gwixshlihgjborrou.png',
    keywords: '‡',
    date: '2022-01-10T12:58:52.306Z',
  },
  {
    uuid: 'noticon_lkimpyzjjuvuytvdlzyh',
    title: '달력_9월',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1641819551/noticon/lkimpyzjjuvuytvdlzyh.png',
    keywords:
      '‡출처 https://www.flaticon.com/premium-icon/calendar_5576389?related_id=5576389&origin=pack',
    date: '2022-01-10T12:59:12.709Z',
  },
  {
    uuid: 'noticon_x0neypwh2ncuncbbfb7m',
    title: 'CU',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1641860578/noticon/x0neypwh2ncuncbbfb7m.png',
    keywords: '‡',
    date: '2022-01-11T00:23:00.397Z',
  },
  {
    uuid: 'noticon_wgwbd1gp8p66dla3kbtd',
    title: 'KKBOX',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1641886902/noticon/wgwbd1gp8p66dla3kbtd.png',
    keywords: 'music‡Hi-fi',
    date: '2022-01-11T07:41:46.601Z',
  },
  {
    uuid: 'noticon_a9qgcuhj0enmzobh68cf',
    title: 'recoil',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1641952185/noticon/a9qgcuhj0enmzobh68cf.png',
    keywords: '‡',
    date: '2022-01-12T01:49:47.387Z',
  },
  {
    uuid: 'noticon_cezhgzmbr9y3nymf4g9b',
    title: 'Teams',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1641952606/noticon/cezhgzmbr9y3nymf4g9b.png',
    keywords: 'Microsoft teams‡',
    date: '2022-01-12T01:56:49.533Z',
  },
  {
    uuid: 'noticon_kni8w8nynyvbjhtqjmhz',
    title: '동공지진',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1641956247/noticon/kni8w8nynyvbjhtqjmhz.gif',
    keywords: '동공지진‡',
    date: '2022-01-12T02:57:30.160Z',
  },
  {
    uuid: 'noticon_kyco1t4nzoijv3lluvis',
    title: '브라운',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1642082522/noticon/kyco1t4nzoijv3lluvis.gif',
    keywords: '‡',
    date: '2022-01-13T14:02:04.273Z',
  },
  {
    uuid: 'noticon_khhgnqzc79fblctxsiyf',
    title: '치커리',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1642227050/noticon/khhgnqzc79fblctxsiyf.png',
    keywords: '치커리‡치커리',
    date: '2022-01-15T06:10:52.473Z',
  },
  {
    uuid: 'noticon_xkfdhjiwtwjjwclpzv7n',
    title: '크라우드웍스',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1642469260/noticon/xkfdhjiwtwjjwclpzv7n.png',
    keywords: '‡',
    date: '2022-01-18T01:27:41.781Z',
  },
  {
    uuid: 'noticon_uv90hriqjm1dajbhuxto',
    title: 'speechBubble',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1642994666/noticon/uv90hriqjm1dajbhuxto.png',
    keywords: '‡',
    date: '2022-01-24T03:24:28.211Z',
  },
  {
    uuid: 'noticon_os22nc5vldrmjupfii3i',
    title: 'kubecf',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1643188878/noticon/os22nc5vldrmjupfii3i.png',
    keywords: 'cloudfoundry‡kubernetes',
    date: '2022-01-26T09:21:20.065Z',
  },
  {
    uuid: 'noticon_wdbbwmhayat3eptf80zb',
    title: 'Kubernetes',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1643226154/noticon/wdbbwmhayat3eptf80zb.png',
    keywords: 'seul‡',
    date: '2022-01-26T19:42:36.466Z',
  },
  {
    uuid: 'noticon_usvwv7wyyxeszecizmmm',
    title: 'cors',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1643317873/noticon/usvwv7wyyxeszecizmmm.png',
    keywords: 'cors‡cors',
    date: '2022-01-27T21:11:15.986Z',
  },
  {
    uuid: 'noticon_uy6ev12jmk6ayis8couc',
    title: 'boostcamp',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1643643683/noticon/uy6ev12jmk6ayis8couc.png',
    keywords: 'naver‡boostcamp',
    date: '2022-01-31T15:41:25.947Z',
  },
  {
    uuid: 'noticon_fvjtmppmheeo7zoxdfm4',
    title: 'boostcamp',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1643643736/noticon/fvjtmppmheeo7zoxdfm4.png',
    keywords: 'boostcamp‡boostcamp',
    date: '2022-01-31T15:42:18.022Z',
  },
  {
    uuid: 'noticon_z8ljj9irkvrpoqhqdony',
    title: 'Man',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1644050997/noticon/z8ljj9irkvrpoqhqdony.png',
    keywords: 'Person‡People, Guy',
    date: '2022-02-05T08:49:59.760Z',
  },
  {
    uuid: 'noticon_cc4cwftvcjcgsivhh5ws',
    title: 'doda',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1644115994/noticon/cc4cwftvcjcgsivhh5ws.png',
    keywords: '‡',
    date: '2022-02-06T02:53:16.570Z',
  },
  {
    uuid: 'noticon_wt7qidjg18y3wyfnijfa',
    title: 'meta',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1644116382/noticon/wt7qidjg18y3wyfnijfa.png',
    keywords: '‡',
    date: '2022-02-06T02:59:44.841Z',
  },
  {
    uuid: 'noticon_u43kddoqpzix5paa2efa',
    title: 'airbridge',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1644117749/noticon/u43kddoqpzix5paa2efa.png',
    keywords: '‡',
    date: '2022-02-06T03:22:31.335Z',
  },
  {
    uuid: 'noticon_px0cciaadpjyshi5dj4g',
    title: 'blind',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1644158170/noticon/px0cciaadpjyshi5dj4g.png',
    keywords: '‡',
    date: '2022-02-06T14:36:12.513Z',
  },
  {
    uuid: 'noticon_byp14ppjklohyym0dl6z',
    title: '군침이싹도노',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1644161402/noticon/byp14ppjklohyym0dl6z.png',
    keywords: '‡',
    date: '2022-02-06T15:30:04.524Z',
  },
  {
    uuid: 'noticon_hvqkusp96mstxnt76vyt',
    title: 'growingmom',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1644164089/noticon/hvqkusp96mstxnt76vyt.png',
    keywords: '‡',
    date: '2022-02-06T16:14:51.372Z',
  },
  {
    uuid: 'noticon_rxhgbl7lvdlu3xjautmo',
    title: 'growingmom2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1644164121/noticon/rxhgbl7lvdlu3xjautmo.png',
    keywords: '‡',
    date: '2022-02-06T16:15:23.603Z',
  },
  {
    uuid: 'noticon_frvhykszxhjz4asz77oi',
    title: 'naver(big)',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1644169460/noticon/frvhykszxhjz4asz77oi.png',
    keywords: '네이버‡',
    date: '2022-02-06T17:44:23.344Z',
  },
  {
    uuid: 'noticon_gd1g5rte2ufnq9w1aodx',
    title: 'network',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1644244522/noticon/gd1g5rte2ufnq9w1aodx.png',
    keywords: '‡',
    date: '2022-02-07T14:35:24.651Z',
  },
  {
    uuid: 'noticon_q1nbid2djaamihrjstxs',
    title: 'osi',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1644307987/noticon/q1nbid2djaamihrjstxs.png',
    keywords: '‡',
    date: '2022-02-08T08:13:10.358Z',
  },
  {
    uuid: 'noticon_npipqitltpwkttvwensn',
    title: 'packet',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1644310227/noticon/npipqitltpwkttvwensn.png',
    keywords: '‡',
    date: '2022-02-08T08:50:29.597Z',
  },
  {
    uuid: 'noticon_fe814jqepdvlmffmktfl',
    title: 'gymjongkook',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1644388065/noticon/fe814jqepdvlmffmktfl.png',
    keywords: '‡',
    date: '2022-02-09T06:27:47.697Z',
  },
  {
    uuid: 'noticon_antdgzk4zwmfl1tlny4w',
    title: 'gymjongkook2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1644388273/noticon/antdgzk4zwmfl1tlny4w.png',
    keywords: '‡',
    date: '2022-02-09T06:31:15.352Z',
  },
  {
    uuid: 'noticon_p4oyiveann73bvqnwv0z',
    title: 'IP',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1644419908/noticon/p4oyiveann73bvqnwv0z.png',
    keywords: '‡',
    date: '2022-02-09T15:18:31.383Z',
  },
  {
    uuid: 'noticon_cyskzaxrx2cfadyatu0h',
    title: '김재원',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1644472283/noticon/cyskzaxrx2cfadyatu0h.png',
    keywords: '‡',
    date: '2022-02-10T05:51:25.035Z',
  },
  {
    uuid: 'noticon_z5cpdjadlioma86awsgy',
    title: 'Simpsons donut',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1644498113/noticon/z5cpdjadlioma86awsgy.png',
    keywords: '‡',
    date: '2022-02-10T13:01:55.463Z',
  },
  {
    uuid: 'noticon_otyfozy5gscnvdfusydw',
    title: 'i18next',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1644536574/noticon/otyfozy5gscnvdfusydw.png',
    keywords: '‡',
    date: '2022-02-10T23:42:56.969Z',
  },
  {
    uuid: 'noticon_pn6u6ddo2thngaugplcv',
    title: 'dbt',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1644547793/noticon/pn6u6ddo2thngaugplcv.png',
    keywords: '‡',
    date: '2022-02-11T02:49:55.334Z',
  },
  {
    uuid: 'noticon_g6p55gmeahlp2i4l6pv0',
    title: 'CloudFoundry',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1644554140/noticon/g6p55gmeahlp2i4l6pv0.png',
    keywords: 'CF‡',
    date: '2022-02-11T04:35:42.048Z',
  },
  {
    uuid: 'noticon_e2p8a0d7mwp4qfyqy8dc',
    title: 'AseanKoreaCentre',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1644625815/noticon/e2p8a0d7mwp4qfyqy8dc.png',
    keywords: 'AKC‡',
    date: '2022-02-12T00:30:18.051Z',
  },
  {
    uuid: 'noticon_sbga5ytyd9kejgu00o8p',
    title: '设置',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1644773678/noticon/sbga5ytyd9kejgu00o8p.png',
    keywords: '‡',
    date: '2022-02-13T17:34:40.523Z',
  },
  {
    uuid: 'noticon_gekdpcp7jzd4cpaln8vi',
    title: 'model',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1644773815/noticon/gekdpcp7jzd4cpaln8vi.png',
    keywords: '‡',
    date: '2022-02-13T17:36:57.456Z',
  },
  {
    uuid: 'noticon_ykgsxhqj1ner2mvbegwa',
    title: 'science',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1644773901/noticon/ykgsxhqj1ner2mvbegwa.png',
    keywords: '‡',
    date: '2022-02-13T17:38:23.652Z',
  },
  {
    uuid: 'noticon_ii2jwj9ljhbups96x4nb',
    title: 'swimming',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1644774611/noticon/ii2jwj9ljhbups96x4nb.png',
    keywords: '‡',
    date: '2022-02-13T17:50:13.240Z',
  },
  {
    uuid: 'noticon_hppdn36chzlh97itctml',
    title: 'fencing',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1644774689/noticon/hppdn36chzlh97itctml.png',
    keywords: '‡',
    date: '2022-02-13T17:51:31.286Z',
  },
  {
    uuid: 'noticon_wcysx8dxnrjytvalrybt',
    title: 'job',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1644774751/noticon/wcysx8dxnrjytvalrybt.png',
    keywords: '‡',
    date: '2022-02-13T17:52:33.985Z',
  },
  {
    uuid: 'noticon_xydfr6p7egplufr2jpqn',
    title: 'image',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1644775356/noticon/xydfr6p7egplufr2jpqn.png',
    keywords: '‡',
    date: '2022-02-13T18:02:37.940Z',
  },
  {
    uuid: 'noticon_bufaoi8tub0u8yuvzoli',
    title: 'funny2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1644901425/noticon/bufaoi8tub0u8yuvzoli.png',
    keywords: 'funny2‡',
    date: '2022-02-15T05:03:48.089Z',
  },
  {
    uuid: 'noticon_bbcej0jzzlfsldll3zkj',
    title: 'funny2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1644901525/noticon/bbcej0jzzlfsldll3zkj.png',
    keywords: 'funny2‡',
    date: '2022-02-15T05:05:28.558Z',
  },
  {
    uuid: 'noticon_yyuizhw77sewcrtzibas',
    title: 'ebs',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1644977528/noticon/yyuizhw77sewcrtzibas.png',
    keywords: 'aws ebs‡',
    date: '2022-02-16T02:12:10.754Z',
  },
  {
    uuid: 'noticon_hvjo7okswjhpu12p9f7g',
    title: '잘살아보세',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1645007625/noticon/hvjo7okswjhpu12p9f7g.png',
    keywords: '(주)살다‡',
    date: '2022-02-16T10:33:47.352Z',
  },
  {
    uuid: 'noticon_agjk34vwiqcf1tnjipqw',
    title: 'CodePipeline',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1645065468/noticon/agjk34vwiqcf1tnjipqw.png',
    keywords: 'aws CodePipeline‡Code Pipeline',
    date: '2022-02-17T02:37:49.771Z',
  },
  {
    uuid: 'noticon_p4440ryrznxehyeqnxkh',
    title: 'Trouble-Shooting',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1645196347/noticon/p4440ryrznxehyeqnxkh.png',
    keywords: 'trouble‡troubleshooting',
    date: '2022-02-18T14:59:09.542Z',
  },
  {
    uuid: 'noticon_mdgoctdjdh6sysafao46',
    title: 'gray-point',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1645283948/noticon/mdgoctdjdh6sysafao46.png',
    keywords: '‡',
    date: '2022-02-19T15:19:11.075Z',
  },
  {
    uuid: 'noticon_dzna1tpzrcb6kffptkxi',
    title: 'gray2-point',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1645284356/noticon/dzna1tpzrcb6kffptkxi.png',
    keywords: '‡',
    date: '2022-02-19T15:25:58.670Z',
  },
  {
    uuid: 'noticon_glxq9rojybosif2xn4av',
    title: 'darkgray-point',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1645284382/noticon/glxq9rojybosif2xn4av.png',
    keywords: '‡',
    date: '2022-02-19T15:26:23.959Z',
  },
  {
    uuid: 'noticon_dy4kyov57tdzqxtz3fpm',
    title: 'rich',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1645360106/noticon/dy4kyov57tdzqxtz3fpm.png',
    keywords: '‡',
    date: '2022-02-20T12:28:27.936Z',
  },
  {
    uuid: 'noticon_pn99qvzmowyoicg9tqy1',
    title: 'Xd',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1645413345/noticon/pn99qvzmowyoicg9tqy1.png',
    keywords: 'adobe‡',
    date: '2022-02-21T03:15:47.628Z',
  },
  {
    uuid: 'noticon_ztcy5onyhxixkqg8tg6u',
    title: '중부대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1645451739/noticon/ztcy5onyhxixkqg8tg6u.png',
    keywords: '‡',
    date: '2022-02-21T13:55:42.151Z',
  },
  {
    uuid: 'noticon_xl0uvz7ll3hwrmz3qij7',
    title: 'kubernetes-in-action',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1645577147/noticon/xl0uvz7ll3hwrmz3qij7.png',
    keywords: 'kubernetes‡k8s',
    date: '2022-02-23T00:45:49.666Z',
  },
  {
    uuid: 'noticon_o7tkhdirumheenbv8zzp',
    title: 'Heart',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1645935143/noticon/o7tkhdirumheenbv8zzp.png',
    keywords: '‡',
    date: '2022-02-27T04:12:25.652Z',
  },
  {
    uuid: 'noticon_tbf60tgf3qar7kloh16q',
    title: 'Circle',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1645935178/noticon/tbf60tgf3qar7kloh16q.png',
    keywords: '‡',
    date: '2022-02-27T04:12:59.997Z',
  },
  {
    uuid: 'noticon_ksvykfmb6oxzku8irnpg',
    title: 'Empty circle',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1645935208/noticon/ksvykfmb6oxzku8irnpg.png',
    keywords: '‡',
    date: '2022-02-27T04:13:30.002Z',
  },
  {
    uuid: 'noticon_bx6epyb92ruijesycakt',
    title: 'Cat',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1645935225/noticon/bx6epyb92ruijesycakt.png',
    keywords: '‡',
    date: '2022-02-27T04:13:46.675Z',
  },
  {
    uuid: 'noticon_hl8mgt8iv6w1cwkflvda',
    title: 'Red heart',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1645935244/noticon/hl8mgt8iv6w1cwkflvda.png',
    keywords: '‡',
    date: '2022-02-27T04:14:06.595Z',
  },
  {
    uuid: 'noticon_gmc3mew088swyc8o4mcd',
    title: 'UIKit',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1646051040/noticon/gmc3mew088swyc8o4mcd.png',
    keywords: '‡',
    date: '2022-02-28T12:24:01.706Z',
  },
  {
    uuid: 'noticon_btvvwftkgnlgulixtye5',
    title: '가천대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1646059465/noticon/btvvwftkgnlgulixtye5.png',
    keywords: '대학교‡',
    date: '2022-02-28T14:44:27.478Z',
  },
  {
    uuid: 'noticon_lx5moihgppcw35eq73ho',
    title: 'pipeline',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1646381775/noticon/lx5moihgppcw35eq73ho.png',
    keywords: '‡',
    date: '2022-03-04T08:16:18.451Z',
  },
  {
    uuid: 'noticon_la4cnjaq9vpnitlj1wso',
    title: 'gostop',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1646675491/noticon/la4cnjaq9vpnitlj1wso.png',
    keywords: 'gostop‡',
    date: '2022-03-07T17:51:33.424Z',
  },
  {
    uuid: 'noticon_m6esyzhxpt3gv5pq0u27',
    title: '투표',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1646698160/noticon/m6esyzhxpt3gv5pq0u27.png',
    keywords: '선거,투표,정치‡총선,대선,지방선거',
    date: '2022-03-08T00:09:22.282Z',
  },
  {
    uuid: 'noticon_kxgoy13xaccd2xwahvgq',
    title: '펀드고',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1646704626/noticon/kxgoy13xaccd2xwahvgq.png',
    keywords: '펀드고‡',
    date: '2022-03-08T01:57:08.006Z',
  },
  {
    uuid: 'noticon_ej8icy7yygd1wcfzxrw4',
    title: 'whiteblock',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1646736393/noticon/ej8icy7yygd1wcfzxrw4.png',
    keywords: 'company‡',
    date: '2022-03-08T10:46:35.560Z',
  },
  {
    uuid: 'noticon_j96lhmibmekfecco8m5l',
    title: 'android',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1646736919/noticon/j96lhmibmekfecco8m5l.png',
    keywords: 'new‡',
    date: '2022-03-08T10:55:22.582Z',
  },
  {
    uuid: 'noticon_fgygljth4eozeocao3vu',
    title: '리락쿠마',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1646894332/noticon/fgygljth4eozeocao3vu.png',
    keywords: '‡',
    date: '2022-03-10T06:38:54.316Z',
  },
  {
    uuid: 'noticon_yv2679vxi8vusyvngyyv',
    title: 'Developer',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1646919223/noticon/yv2679vxi8vusyvngyyv.png',
    keywords: '‡',
    date: '2022-03-10T13:33:46.040Z',
  },
  {
    uuid: 'noticon_pucrmow6uuy0ew3vsrls',
    title: '국립중앙도서관',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1647010890/noticon/pucrmow6uuy0ew3vsrls.png',
    keywords: '‡',
    date: '2022-03-11T15:01:33.750Z',
  },
  {
    uuid: 'noticon_xh5timyctlalkour15ka',
    title: 'Oracle_DB_big',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1647015144/noticon/xh5timyctlalkour15ka.png',
    keywords: '‡',
    date: '2022-03-11T16:12:27.356Z',
  },
  {
    uuid: 'noticon_ucf5q2bb5qdecnzq5qk1',
    title: '책장',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1647175086/noticon/ucf5q2bb5qdecnzq5qk1.png',
    keywords: '‡',
    date: '2022-03-13T12:38:08.138Z',
  },
  {
    uuid: 'noticon_bvmncliscssbn5pfvuxq',
    title: 'airbyte',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1647241326/noticon/bvmncliscssbn5pfvuxq.png',
    keywords: '‡',
    date: '2022-03-14T07:02:08.180Z',
  },
  {
    uuid: 'noticon_j9f3detu5thzmxnonr70',
    title: 'iOS',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1647299452/noticon/j9f3detu5thzmxnonr70.png',
    keywords: '‡',
    date: '2022-03-14T23:10:53.982Z',
  },
  {
    uuid: 'noticon_r4sp9hqit8hmgpt6yonp',
    title: 'webflux',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1647435975/noticon/r4sp9hqit8hmgpt6yonp.png',
    keywords: '‡',
    date: '2022-03-16T13:06:17.649Z',
  },
  {
    uuid: 'noticon_ajgw6vqdmrqpvdsuuw4w',
    title: 'Git',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1647675469/noticon/ajgw6vqdmrqpvdsuuw4w.png',
    keywords: 'Git‡Git',
    date: '2022-03-19T07:37:51.840Z',
  },
  {
    uuid: 'noticon_cillhyoxas5aoabzjier',
    title: 'df',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1647766545/noticon/cillhyoxas5aoabzjier.png',
    keywords: '‡',
    date: '2022-03-20T08:55:47.396Z',
  },
  {
    uuid: 'noticon_aezp3pbnsilik1jyu6w9',
    title: 'snoopy1',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1647770395/noticon/aezp3pbnsilik1jyu6w9.gif',
    keywords: '‡',
    date: '2022-03-20T09:59:57.079Z',
  },
  {
    uuid: 'noticon_zlohwcuvnvfq8tkay2yy',
    title: 'snoopy2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1647770458/noticon/zlohwcuvnvfq8tkay2yy.gif',
    keywords: '‡',
    date: '2022-03-20T10:01:00.866Z',
  },
  {
    uuid: 'noticon_c0uljor4erhbxgxa3l2z',
    title: '한국경제신문',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1647824019/noticon/c0uljor4erhbxgxa3l2z.png',
    keywords: '‡',
    date: '2022-03-21T00:53:40.555Z',
  },
  {
    uuid: 'noticon_bzme7xrana2ypkz1aygl',
    title: 'git-icon',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1647835669/noticon/bzme7xrana2ypkz1aygl.png',
    keywords: '‡',
    date: '2022-03-21T04:07:51.436Z',
  },
  {
    uuid: 'noticon_mjdfpvwfbcg4nngxe2jr',
    title: 'Parallels',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1647836357/noticon/mjdfpvwfbcg4nngxe2jr.png',
    keywords: '패러렐즈‡페러렐즈, 페러럴즈, 패러럴즈, 패러렐즈, 패러랠즈',
    date: '2022-03-21T04:19:19.770Z',
  },
  {
    uuid: 'noticon_lpt7exzcukqz1rj0zggh',
    title: 'quotes',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1647855007/noticon/lpt7exzcukqz1rj0zggh.png',
    keywords: '‡',
    date: '2022-03-21T09:30:09.500Z',
  },
  {
    uuid: 'noticon_sxscpw6r8yaakvtmblv3',
    title: 'LED',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1647855097/noticon/sxscpw6r8yaakvtmblv3.png',
    keywords: '‡',
    date: '2022-03-21T09:31:39.689Z',
  },
  {
    uuid: 'noticon_qkfjewzz5onwawagod5c',
    title: 'LED',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1647855145/noticon/qkfjewzz5onwawagod5c.png',
    keywords: '‡',
    date: '2022-03-21T09:32:27.394Z',
  },
  {
    uuid: 'noticon_cv8efjshiuqswpdghgdd',
    title: 'calculator',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1647855237/noticon/cv8efjshiuqswpdghgdd.png',
    keywords: '‡',
    date: '2022-03-21T09:33:58.601Z',
  },
  {
    uuid: 'noticon_jhqbaq7wjyv8az57wcls',
    title: 'diary',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1647855304/noticon/jhqbaq7wjyv8az57wcls.png',
    keywords: '‡',
    date: '2022-03-21T09:35:05.893Z',
  },
  {
    uuid: 'noticon_hto7c1svr5k0jof1hfun',
    title: 'weatherApp',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1647891595/noticon/hto7c1svr5k0jof1hfun.png',
    keywords: '‡',
    date: '2022-03-21T19:39:57.791Z',
  },
  {
    uuid: 'noticon_kvqyoutlh8ervqitovuw',
    title: 'COVID-19',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1647891739/noticon/kvqyoutlh8ervqitovuw.png',
    keywords: '‡',
    date: '2022-03-21T19:42:20.790Z',
  },
  {
    uuid: 'noticon_m24lfiqqx4qxlwce5so7',
    title: 'Remix',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1647907541/noticon/m24lfiqqx4qxlwce5so7.png',
    keywords: 'Remix‡',
    date: '2022-03-22T00:05:44.333Z',
  },
  {
    uuid: 'noticon_e7s8cfusebozosmvbja4',
    title: 'empty',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1648174313/noticon/e7s8cfusebozosmvbja4.png',
    keywords: '‡',
    date: '2022-03-25T02:11:55.162Z',
  },
  {
    uuid: 'noticon_cccskt5caweozscbrjit',
    title: 'COVID-19',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1648265118/noticon/cccskt5caweozscbrjit.png',
    keywords: '‡',
    date: '2022-03-26T03:25:20.937Z',
  },
  {
    uuid: 'noticon_taasgsai2vjtsin9ni3s',
    title: 'web',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1648281607/noticon/taasgsai2vjtsin9ni3s.png',
    keywords: 'web‡html css js',
    date: '2022-03-26T08:00:09.015Z',
  },
  {
    uuid: 'noticon_unhhdokpn5fsy9vspfjr',
    title: 'web',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1648281678/noticon/unhhdokpn5fsy9vspfjr.png',
    keywords: 'web‡web',
    date: '2022-03-26T08:01:20.335Z',
  },
  {
    uuid: 'noticon_t5zhacn4xahpxjbuk1yi',
    title: 'AOS',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1648281846/noticon/t5zhacn4xahpxjbuk1yi.png',
    keywords: 'AOS‡AOS',
    date: '2022-03-26T08:04:07.871Z',
  },
  {
    uuid: 'noticon_kxecnrgz4ljolddqg6dr',
    title: 'rsocket',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1648537031/noticon/kxecnrgz4ljolddqg6dr.png',
    keywords: '‡',
    date: '2022-03-29T06:57:12.688Z',
  },
  {
    uuid: 'noticon_rhck1xyi2btzflrgpjqc',
    title: '기아',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1648576282/noticon/rhck1xyi2btzflrgpjqc.png',
    keywords: 'kia‡KIA',
    date: '2022-03-29T17:51:24.578Z',
  },
  {
    uuid: 'noticon_uygcbkcpl0cxrpe3fyfl',
    title: 'IBM',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1648576779/noticon/uygcbkcpl0cxrpe3fyfl.png',
    keywords: 'ibm‡',
    date: '2022-03-29T17:59:41.802Z',
  },
  {
    uuid: 'noticon_ypuzmzgiwrcs1qgwftjz',
    title: 'blue_marker',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1648636299/noticon/ypuzmzgiwrcs1qgwftjz.png',
    keywords: 'marker‡',
    date: '2022-03-30T10:31:41.480Z',
  },
  {
    uuid: 'noticon_xmjz9sdto4weodpgu3f3',
    title: 'red_marker',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1648636326/noticon/xmjz9sdto4weodpgu3f3.png',
    keywords: 'marker‡',
    date: '2022-03-30T10:32:08.293Z',
  },
  {
    uuid: 'noticon_h5eflxp7kdv7vyrhfbny',
    title: 'chat',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1648639192/noticon/h5eflxp7kdv7vyrhfbny.png',
    keywords: 'chat‡',
    date: '2022-03-30T11:19:54.336Z',
  },
  {
    uuid: 'noticon_ntiuuruqlykhxpzso004',
    title: 'chat',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1648639513/noticon/ntiuuruqlykhxpzso004.png',
    keywords: 'chat‡',
    date: '2022-03-30T11:25:15.561Z',
  },
  {
    uuid: 'noticon_ncw8sxu2jh2p76ynxotm',
    title: 'cake',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1648718287/noticon/ncw8sxu2jh2p76ynxotm.png',
    keywords: 'pancake‡',
    date: '2022-03-31T09:18:09.549Z',
  },
  {
    uuid: 'noticon_lkb4rmcrdbxaxdmv6vsq',
    title: '어피치',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1648721210/noticon/lkb4rmcrdbxaxdmv6vsq.png',
    keywords: '‡',
    date: '2022-03-31T10:06:52.871Z',
  },
  {
    uuid: 'noticon_uvijhtdh1szvddnpa7lo',
    title: 'warning',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1648729297/noticon/uvijhtdh1szvddnpa7lo.png',
    keywords: 'warning‡',
    date: '2022-03-31T12:21:39.335Z',
  },
  {
    uuid: 'noticon_urd2li6v1dba5bjynjeg',
    title: 'photo',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1648730487/noticon/urd2li6v1dba5bjynjeg.png',
    keywords: 'photo‡',
    date: '2022-03-31T12:41:29.509Z',
  },
  {
    uuid: 'noticon_uupi5ephlcx4f82axldc',
    title: 'Google',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1648777274/noticon/uupi5ephlcx4f82axldc.png',
    keywords: '‡',
    date: '2022-04-01T01:41:15.721Z',
  },
  {
    uuid: 'noticon_ug5aloal65jsozznqfyh',
    title: '뉴미디어트렌드',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1648797544/noticon/ug5aloal65jsozznqfyh.png',
    keywords: '‡',
    date: '2022-04-01T07:19:06.871Z',
  },
  {
    uuid: 'noticon_z8nnd6gylbjkekjivyfl',
    title: 'chunsick',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1648836772/noticon/z8nnd6gylbjkekjivyfl.png',
    keywords: 'chunsick, 춘식‡',
    date: '2022-04-01T18:12:54.495Z',
  },
  {
    uuid: 'noticon_gu5rji9pj7wkxem5xm2o',
    title: '리코더',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1648962986/noticon/gu5rji9pj7wkxem5xm2o.png',
    keywords: '‡',
    date: '2022-04-03T05:16:28.457Z',
  },
  {
    uuid: 'noticon_zzxbdlftfeepellwd4ga',
    title: 'thepinkfongcompany',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1649156622/noticon/zzxbdlftfeepellwd4ga.png',
    keywords: '더핑크퐁컴퍼니‡핑크퐁',
    date: '2022-04-05T11:03:43.782Z',
  },
  {
    uuid: 'noticon_dxtjzwdovgvtwwk7z0sj',
    title: '쿠키',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1649210116/noticon/dxtjzwdovgvtwwk7z0sj.png',
    keywords: '쿠키‡',
    date: '2022-04-06T01:55:19.077Z',
  },
  {
    uuid: 'noticon_epczs9opsed4zk7klybl',
    title: '?',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1649214788/noticon/epczs9opsed4zk7klybl.png',
    keywords: '?‡',
    date: '2022-04-06T03:13:10.157Z',
  },
  {
    uuid: 'noticon_pep7pnztbyageihxnszy',
    title: 'OKKY',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1649218432/noticon/pep7pnztbyageihxnszy.png',
    keywords: '‡',
    date: '2022-04-06T04:13:55.629Z',
  },
  {
    uuid: 'noticon_hrtagwjpvvrbu8c4hzw9',
    title: 'site',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1649220139/noticon/hrtagwjpvvrbu8c4hzw9.png',
    keywords: '‡',
    date: '2022-04-06T04:42:21.487Z',
  },
  {
    uuid: 'noticon_d22t94hxkrzrnoj5rjq8',
    title: 'job',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1649220938/noticon/d22t94hxkrzrnoj5rjq8.png',
    keywords: '‡',
    date: '2022-04-06T04:55:41.202Z',
  },
  {
    uuid: 'noticon_mwgrheyzry54wgeceh7d',
    title: 'key',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1649221049/noticon/mwgrheyzry54wgeceh7d.png',
    keywords: 'key‡',
    date: '2022-04-06T04:57:31.915Z',
  },
  {
    uuid: 'noticon_i38tpgmyvopoytfrw463',
    title: 'GetStock',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1649234833/noticon/i38tpgmyvopoytfrw463.png',
    keywords: 'GetStock‡겟스톡',
    date: '2022-04-06T08:47:14.810Z',
  },
  {
    uuid: 'noticon_vfoeqsmp8vwm8bibgsfq',
    title: 'dancing parrots',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1649409497/noticon/vfoeqsmp8vwm8bibgsfq.gif',
    keywords: 'parrot‡',
    date: '2022-04-08T09:18:19.851Z',
  },
  {
    uuid: 'noticon_uf1a0g6ymfborjd1rhqk',
    title: 'vuepress',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1649555882/noticon/uf1a0g6ymfborjd1rhqk.png',
    keywords: '‡',
    date: '2022-04-10T01:58:04.321Z',
  },
  {
    uuid: 'noticon_cyd6gqm4zy8wznjtyl80',
    title: 'credit card',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1649656899/noticon/cyd6gqm4zy8wznjtyl80.png',
    keywords: '‡',
    date: '2022-04-11T06:01:41.292Z',
  },
  {
    uuid: 'noticon_vhomiqazblm5xtxgv2va',
    title: 'pop up',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1649656961/noticon/vhomiqazblm5xtxgv2va.png',
    keywords: '‡',
    date: '2022-04-11T06:02:42.551Z',
  },
  {
    uuid: 'noticon_rpssgz3wqofewtdlzpyo',
    title: 'water',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1649657002/noticon/rpssgz3wqofewtdlzpyo.png',
    keywords: '‡',
    date: '2022-04-11T06:03:24.801Z',
  },
  {
    uuid: 'noticon_cscfijyim2mtuzvrx8m9',
    title: 'disaster',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1649657071/noticon/cscfijyim2mtuzvrx8m9.png',
    keywords: '‡',
    date: '2022-04-11T06:04:33.833Z',
  },
  {
    uuid: 'noticon_c7szzksalzifwncwy7fx',
    title: 'AWS ELB',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1649665745/noticon/c7szzksalzifwncwy7fx.png',
    keywords: 'ELB‡',
    date: '2022-04-11T08:29:06.967Z',
  },
  {
    uuid: 'noticon_pacqo3ypyo4keouj9h7t',
    title: 'AWS ALB',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1649665798/noticon/pacqo3ypyo4keouj9h7t.png',
    keywords: 'ALB‡',
    date: '2022-04-11T08:30:00.144Z',
  },
  {
    uuid: 'noticon_h5byxa5jrqhdqwvuzcrf',
    title: 'AWS ASG',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1649665837/noticon/h5byxa5jrqhdqwvuzcrf.png',
    keywords: 'AutoScalingGrooup‡Auto Scaling Group',
    date: '2022-04-11T08:30:39.212Z',
  },
  {
    uuid: 'noticon_zh6dqb330or7plxu7lof',
    title: 'VCNC',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1649951846/noticon/zh6dqb330or7plxu7lof.png',
    keywords: 'vcnc‡',
    date: '2022-04-14T15:57:28.203Z',
  },
  {
    uuid: 'noticon_iyc9vbhczaklaxfmfdsv',
    title: 'Platzi',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1649982677/noticon/iyc9vbhczaklaxfmfdsv.png',
    keywords: 'platzi‡education',
    date: '2022-04-15T00:31:20.149Z',
  },
  {
    uuid: 'noticon_bbqpsqij4dahbxay5cik',
    title: '따봉모코코콘',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1650207344/noticon/bbqpsqij4dahbxay5cik.png',
    keywords: '모코코‡따봉',
    date: '2022-04-17T14:55:46.127Z',
  },
  {
    uuid: 'noticon_urlhfslsdssycl4awyaf',
    title: '방긋모코코콘',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1650207426/noticon/urlhfslsdssycl4awyaf.png',
    keywords: '모코코‡로아',
    date: '2022-04-17T14:57:08.655Z',
  },
  {
    uuid: 'noticon_ouhrkjo9nzjbfbx25exg',
    title: '슬퍼모코코콘',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1650207487/noticon/ouhrkjo9nzjbfbx25exg.png',
    keywords: '모코코‡로아',
    date: '2022-04-17T14:58:09.667Z',
  },
  {
    uuid: 'noticon_nvbcvuca9xwm5bmsjsjw',
    title: '향기모모코콘',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1650207528/noticon/nvbcvuca9xwm5bmsjsjw.png',
    keywords: '모코코‡로아',
    date: '2022-04-17T14:58:49.917Z',
  },
  {
    uuid: 'noticon_ypjrdngkpx4tansqg8pr',
    title: '에모코코콘',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1650207658/noticon/ypjrdngkpx4tansqg8pr.png',
    keywords: '모코코‡로아',
    date: '2022-04-17T15:01:00.663Z',
  },
  {
    uuid: 'noticon_pxro4f82wyebl19psshh',
    title: '모무룩',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1650207735/noticon/pxro4f82wyebl19psshh.png',
    keywords: '모코코‡로아',
    date: '2022-04-17T15:02:16.778Z',
  },
  {
    uuid: 'noticon_vadmu8my7otfcxvaxavv',
    title: 'Azure',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1650318250/noticon/vadmu8my7otfcxvaxavv.png',
    keywords: '‡',
    date: '2022-04-18T21:44:13.009Z',
  },
  {
    uuid: 'noticon_pjtfp34jirmq1dk0ewz0',
    title: '카카오뱅크(kakaobank)',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1650360072/noticon/pjtfp34jirmq1dk0ewz0.png',
    keywords: '‡',
    date: '2022-04-19T09:21:14.533Z',
  },
  {
    uuid: 'noticon_sw256tkdmel3tqfsrpyp',
    title: '부산대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1650545210/noticon/sw256tkdmel3tqfsrpyp.png',
    keywords: '‡',
    date: '2022-04-21T12:46:53.336Z',
  },
  {
    uuid: 'noticon_r66acc5ftbpnbsa4r79k',
    title: '토끼모코코',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1650602181/noticon/r66acc5ftbpnbsa4r79k.gif',
    keywords: '모코코‡lostark',
    date: '2022-04-22T04:36:23.392Z',
  },
  {
    uuid: 'noticon_wcnggzachuhnxk7rtwxn',
    title: '신난토끼모코코',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1650602209/noticon/wcnggzachuhnxk7rtwxn.gif',
    keywords: '모코코‡lostark',
    date: '2022-04-22T04:36:51.400Z',
  },
  {
    uuid: 'noticon_wlqftefdkfh0uc0w36lc',
    title: 'alertmanager',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1651212517/noticon/wlqftefdkfh0uc0w36lc.png',
    keywords: '‡',
    date: '2022-04-29T06:08:41.222Z',
  },
  {
    uuid: 'noticon_dt4vohhmrjqfi4ur2xwr',
    title: 'VictoriaMetrics',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1651212910/noticon/dt4vohhmrjqfi4ur2xwr.png',
    keywords: 'monitor‡',
    date: '2022-04-29T06:15:22.865Z',
  },
  {
    uuid: 'noticon_wh67msuw8r7jgvpmhwew',
    title: 'capsule',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1651410153/noticon/wh67msuw8r7jgvpmhwew.png',
    keywords: 'capsule‡',
    date: '2022-05-01T13:02:34.900Z',
  },
  {
    uuid: 'noticon_j8oohidddukgchvhabnz',
    title: 'romi_luv',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1651422625/noticon/j8oohidddukgchvhabnz.gif',
    keywords: '‡',
    date: '2022-05-01T16:30:27.796Z',
  },
  {
    uuid: 'noticon_e9tkdtne1edhxdljcqkh',
    title: 'clickup',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1651465412/noticon/e9tkdtne1edhxdljcqkh.png',
    keywords: 'sass‡',
    date: '2022-05-02T04:23:33.986Z',
  },
  {
    uuid: 'noticon_lakg9kuoubf9iizcrh7a',
    title: 'Payhere',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1651480810/noticon/lakg9kuoubf9iizcrh7a.png',
    keywords: '페이히어‡',
    date: '2022-05-02T08:40:11.762Z',
  },
  {
    uuid: 'noticon_m7ygdvokmr5loy9kaeft',
    title: 'Youtube',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1651499191/noticon/m7ygdvokmr5loy9kaeft.png',
    keywords: 'Youtube draw‡cr.Valeriy',
    date: '2022-05-02T13:46:33.667Z',
  },
  {
    uuid: 'noticon_vln8cd0pdkxwu2mao5pg',
    title: '커비으쌰',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1651566231/noticon/vln8cd0pdkxwu2mao5pg.gif',
    keywords: '‡',
    date: '2022-05-03T08:23:53.396Z',
  },
  {
    uuid: 'noticon_xgnjqiiapirbz9ixdiol',
    title: '커비명',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1651566999/noticon/xgnjqiiapirbz9ixdiol.gif',
    keywords: '‡',
    date: '2022-05-03T08:36:42.759Z',
  },
  {
    uuid: 'noticon_iratlflyswnishphcw1c',
    title: '서랍',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1651567431/noticon/iratlflyswnishphcw1c.gif',
    keywords: '‡',
    date: '2022-05-03T08:43:54.167Z',
  },
  {
    uuid: 'noticon_zmuydc9vkanyjuav4zur',
    title: 'romi',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1651575403/noticon/zmuydc9vkanyjuav4zur.gif',
    keywords: '‡',
    date: '2022-05-03T10:56:46.371Z',
  },
  {
    uuid: 'noticon_t8anmoohpuzwykqeve13',
    title: 'Kuromi',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1651575461/noticon/t8anmoohpuzwykqeve13.gif',
    keywords: '‡',
    date: '2022-05-03T10:57:43.246Z',
  },
  {
    uuid: 'noticon_mpejz5d6zx5iqpavzdym',
    title: '1',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1651635828/noticon/mpejz5d6zx5iqpavzdym.png',
    keywords: '1‡1',
    date: '2022-05-04T03:43:50.312Z',
  },
  {
    uuid: 'noticon_pcvhglppv4toosi6cwkh',
    title: '1',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1651939728/noticon/pcvhglppv4toosi6cwkh.png',
    keywords: '‡',
    date: '2022-05-07T16:08:50.899Z',
  },
  {
    uuid: 'noticon_j256vbtsf3jnilq46ken',
    title: 'SSAFY',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1651988009/noticon/j256vbtsf3jnilq46ken.png',
    keywords: 'ssafy‡싸피',
    date: '2022-05-08T05:33:30.910Z',
  },
  {
    uuid: 'noticon_mbd6oqlkulb8qxerp9v9',
    title: 'neo4j',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1652333686/noticon/mbd6oqlkulb8qxerp9v9.png',
    keywords: 'graphDB‡',
    date: '2022-05-12T05:34:48.036Z',
  },
  {
    uuid: 'noticon_ybfgbjkeagzgamszxvd3',
    title: '모두의스윙',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1652681681/noticon/ybfgbjkeagzgamszxvd3.png',
    keywords: 'everyswing‡골프',
    date: '2022-05-16T06:14:43.350Z',
  },
  {
    uuid: 'noticon_btz0kvqga2terqoqp36r',
    title: '모두의스윙2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1652682124/noticon/btz0kvqga2terqoqp36r.png',
    keywords: 'everyswing2‡golff',
    date: '2022-05-16T06:22:06.663Z',
  },
  {
    uuid: 'noticon_ap74vs40ui0cpee7qoee',
    title: '쿠키런',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1652761537/noticon/ap74vs40ui0cpee7qoee.png',
    keywords: '‡',
    date: '2022-05-17T04:25:39.300Z',
  },
  {
    uuid: 'noticon_kawrmgjvxgfuewd6sfr2',
    title: 'Hydra',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1653027850/noticon/kawrmgjvxgfuewd6sfr2.png',
    keywords: 'Ory‡Hydra',
    date: '2022-05-20T06:24:12.236Z',
  },
  {
    uuid: 'noticon_yxkr5j8te1kqv2rwtq8c',
    title: 'JS Deep Dive',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1653083720/noticon/yxkr5j8te1kqv2rwtq8c.png',
    keywords: 'JS ‡Deep Dive',
    date: '2022-05-20T21:55:22.723Z',
  },
  {
    uuid: 'noticon_drquov6akuo4rik1arvl',
    title: '토파스',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1653379035/noticon/drquov6akuo4rik1arvl.png',
    keywords: '‡',
    date: '2022-05-24T07:57:17.133Z',
  },
  {
    uuid: 'noticon_ftx7zglbu15dfnk5uxfq',
    title: '퓨쳐위즈',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1653401450/noticon/ftx7zglbu15dfnk5uxfq.png',
    keywords: 'futurewiz‡',
    date: '2022-05-24T14:11:06.607Z',
  },
  {
    uuid: 'noticon_xvia6om7avszlr8dmuej',
    title: '엔라이즈',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1653401509/noticon/xvia6om7avszlr8dmuej.png',
    keywords: 'nrise‡',
    date: '2022-05-24T14:11:53.491Z',
  },
  {
    uuid: 'noticon_n1w9omdwmlyoxjtxnmrj',
    title: '데브시스터즈',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1653401671/noticon/n1w9omdwmlyoxjtxnmrj.png',
    keywords: 'devsisters‡',
    date: '2022-05-24T14:14:32.701Z',
  },
  {
    uuid: 'noticon_lu2txqbqyqg5jjb6i7rc',
    title: '이스트 소프트',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1653401750/noticon/lu2txqbqyqg5jjb6i7rc.png',
    keywords: 'EST SOFT‡EST Soft',
    date: '2022-05-24T14:15:53.798Z',
  },
  {
    uuid: 'noticon_keeyiv1kecpwwzjypayi',
    title: '컴투스',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1653401824/noticon/keeyiv1kecpwwzjypayi.png',
    keywords: 'com2us‡',
    date: '2022-05-24T14:17:06.691Z',
  },
  {
    uuid: 'noticon_znogutw54k3sufqczppn',
    title: '리팩터링2판',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1653468337/noticon/znogutw54k3sufqczppn.png',
    keywords: '‡',
    date: '2022-05-25T08:45:39.783Z',
  },
  {
    uuid: 'noticon_fwno9knfitvmtvzsywc9',
    title: '전남대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1653932993/noticon/fwno9knfitvmtvzsywc9.png',
    keywords: '‡',
    date: '2022-05-30T17:49:55.868Z',
  },
  {
    uuid: 'noticon_jm6qrlvq6xrr7rwivi4g',
    title: 'le coq sportif',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1654006766/noticon/jm6qrlvq6xrr7rwivi4g.png',
    keywords: '‡',
    date: '2022-05-31T14:19:29.490Z',
  },
  {
    uuid: 'noticon_kh9asqzwgrpi1ysueipc',
    title: 'wilson',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1654008087/noticon/kh9asqzwgrpi1ysueipc.png',
    keywords: '‡',
    date: '2022-05-31T14:41:30.109Z',
  },
  {
    uuid: 'noticon_pxxiouohy4twjaw6px2p',
    title: 'JSM',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1654008574/noticon/pxxiouohy4twjaw6px2p.png',
    keywords: '‡',
    date: '2022-05-31T14:49:36.490Z',
  },
  {
    uuid: 'noticon_uwxqhvo9bd1atyannomr',
    title: 'bayc',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1654012291/noticon/uwxqhvo9bd1atyannomr.png',
    keywords: '‡',
    date: '2022-05-31T15:51:35.159Z',
  },
  {
    uuid: 'noticon_ht367indargpqnpnwp2n',
    title: '신영증권',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1654565841/noticon/ht367indargpqnpnwp2n.png',
    keywords: '신영증권‡',
    date: '2022-06-07T01:37:23.494Z',
  },
  {
    uuid: 'noticon_umnktwff13nldfrvo7s8',
    title: 'lf',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1654576775/noticon/umnktwff13nldfrvo7s8.png',
    keywords: 'lf‡lgfashion',
    date: '2022-06-07T04:39:37.905Z',
  },
  {
    uuid: 'noticon_k0uu8vxngtjdg0spkg2l',
    title: 'polkadot',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1654840311/noticon/k0uu8vxngtjdg0spkg2l.png',
    keywords: '‡',
    date: '2022-06-10T05:51:53.100Z',
  },
  {
    uuid: 'noticon_kxxp8fbbiadr55xghab9',
    title: '구름',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1654855138/noticon/kxxp8fbbiadr55xghab9.png',
    keywords: 'goorm‡',
    date: '2022-06-10T09:58:59.827Z',
  },
  {
    uuid: 'noticon_tkz9nqqgd1zufzefbmle',
    title: 'OpenGL',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1654949516/noticon/tkz9nqqgd1zufzefbmle.png',
    keywords: '‡',
    date: '2022-06-11T12:12:00.405Z',
  },
  {
    uuid: 'noticon_pjsyag6ariw9cjndlbk5',
    title: 'plsql developer',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1655444795/noticon/pjsyag6ariw9cjndlbk5.png',
    keywords: '‡',
    date: '2022-06-17T05:46:37.652Z',
  },
  {
    uuid: 'noticon_jkurrxygwfbclhcdwzba',
    title: 'UML',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1655507359/noticon/jkurrxygwfbclhcdwzba.png',
    keywords: 'uml‡unified modeling language',
    date: '2022-06-17T23:09:21.796Z',
  },
  {
    uuid: 'noticon_bn0wqcsv3exw2gcvbehx',
    title: 'kakao',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1655634588/noticon/bn0wqcsv3exw2gcvbehx.png',
    keywords: '‡',
    date: '2022-06-19T10:29:49.875Z',
  },
  {
    uuid: 'noticon_qikmxkdq66v1knlhrw2e',
    title: 'mssql',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1655690352/noticon/qikmxkdq66v1knlhrw2e.png',
    keywords: '‡',
    date: '2022-06-20T01:59:15.183Z',
  },
  {
    uuid: 'noticon_je3teqka1n3i4cjsofj1',
    title: 'markdown',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1655690557/noticon/je3teqka1n3i4cjsofj1.png',
    keywords: '‡',
    date: '2022-06-20T02:02:39.682Z',
  },
  {
    uuid: 'noticon_lnfqnfsul76jzo8kt07w',
    title: '트립스토어',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1655766619/noticon/lnfqnfsul76jzo8kt07w.png',
    keywords: 'tripstore‡엑스트라이버',
    date: '2022-06-20T23:10:21.062Z',
  },
  {
    uuid: 'noticon_wxecddhsd8us4pdvpywl',
    title: 'DataCamp',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1655854173/noticon/wxecddhsd8us4pdvpywl.png',
    keywords: 'courses‡data',
    date: '2022-06-21T23:29:34.623Z',
  },
  {
    uuid: 'noticon_yppp9rixdzh2dgugjodk',
    title: 'DataCamp',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1655854320/noticon/yppp9rixdzh2dgugjodk.png',
    keywords: 'data‡courses',
    date: '2022-06-21T23:32:03.059Z',
  },
  {
    uuid: 'noticon_eegsue8zcnpy6wsfvk9y',
    title: 'defacto',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1655942403/noticon/eegsue8zcnpy6wsfvk9y.png',
    keywords: '‡',
    date: '2022-06-23T00:00:04.715Z',
  },
  {
    uuid: 'noticon_rzecq4mbwz3fnrrizmkj',
    title: '크몽',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1656060379/noticon/rzecq4mbwz3fnrrizmkj.png',
    keywords: '크몽‡크몽',
    date: '2022-06-24T08:46:21.157Z',
  },
  {
    uuid: 'noticon_y2fzonkn7jfz9ucuqoiv',
    title: '스노우',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1656074639/noticon/y2fzonkn7jfz9ucuqoiv.png',
    keywords: 'SNOW‡snow',
    date: '2022-06-24T12:44:00.759Z',
  },
  {
    uuid: 'noticon_lrsrvft0tbagxf63leqq',
    title: '알파벳',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1656337972/noticon/lrsrvft0tbagxf63leqq.png',
    keywords: '‡',
    date: '2022-06-27T13:52:54.717Z',
  },
  {
    uuid: 'noticon_kw6aveg68qvl5oxunym5',
    title: 'Adobe',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1656338821/noticon/kw6aveg68qvl5oxunym5.png',
    keywords: '‡',
    date: '2022-06-27T14:07:04.396Z',
  },
  {
    uuid: 'noticon_zaosf5infdxrsd8mxfbj',
    title: 'Adobe_Logo',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1656338915/noticon/zaosf5infdxrsd8mxfbj.png',
    keywords: '‡',
    date: '2022-06-27T14:08:37.906Z',
  },
  {
    uuid: 'noticon_gaooku1gdz7je1fh38kb',
    title: '어도비',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1656339010/noticon/gaooku1gdz7je1fh38kb.png',
    keywords: '‡',
    date: '2022-06-27T14:10:13.461Z',
  },
  {
    uuid: 'noticon_nznzs8vz2mhwerz0qyv3',
    title: '아이브',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1656339241/noticon/nznzs8vz2mhwerz0qyv3.png',
    keywords: '‡',
    date: '2022-06-27T14:14:03.567Z',
  },
  {
    uuid: 'noticon_q8idaps3hgaqut2c6zfv',
    title: '한국교통안전공단',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1656638054/noticon/q8idaps3hgaqut2c6zfv.png',
    keywords: '‡',
    date: '2022-07-01T01:14:17.016Z',
  },
  {
    uuid: 'noticon_wrsnfnkpdtngnqpx3ukx',
    title: '..',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1656987163/noticon/wrsnfnkpdtngnqpx3ukx.png',
    keywords: '‡',
    date: '2022-07-05T02:12:45.393Z',
  },
  {
    uuid: 'noticon_xdoj0x99o6misaqke8j6',
    title: 'CLOUD',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1656989296/noticon/xdoj0x99o6misaqke8j6.png',
    keywords: '‡',
    date: '2022-07-05T02:48:18.890Z',
  },
  {
    uuid: 'noticon_gaba2g9zaijjgmhnc70f',
    title: 'IT',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1657089231/noticon/gaba2g9zaijjgmhnc70f.png',
    keywords: '‡',
    date: '2022-07-06T06:33:53.242Z',
  },
  {
    uuid: 'noticon_zylcdofv5yutxbqiisaw',
    title: '에픽세븐',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1657197380/noticon/zylcdofv5yutxbqiisaw.png',
    keywords: 'Epic7‡',
    date: '2022-07-07T12:36:22.644Z',
  },
  {
    uuid: 'noticon_hfntj9olqx1jeky3rdkt',
    title: 'AWS Lambda',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1657197520/noticon/hfntj9olqx1jeky3rdkt.png',
    keywords: 'Lambda‡',
    date: '2022-07-07T12:38:42.060Z',
  },
  {
    uuid: 'noticon_klftsdcudiaesojve6qn',
    title: '샌드박스',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1657240234/noticon/klftsdcudiaesojve6qn.png',
    keywords: 'sandbox‡',
    date: '2022-07-08T00:30:37.296Z',
  },
  {
    uuid: 'noticon_ur8spzfcq4acw7ijp68v',
    title: 'Tailwind CSS',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1657314490/noticon/ur8spzfcq4acw7ijp68v.png',
    keywords: 'CSS‡Tailwind',
    date: '2022-07-08T21:08:12.806Z',
  },
  {
    uuid: 'noticon_caw1zj8mxyo0pm56bmlt',
    title: 'Github',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1657314597/noticon/caw1zj8mxyo0pm56bmlt.png',
    keywords: '‡',
    date: '2022-07-08T21:09:59.441Z',
  },
  {
    uuid: 'noticon_x5nxk8ypkb5alh6ywgin',
    title: '애플',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1657353132/noticon/x5nxk8ypkb5alh6ywgin.png',
    keywords: 'Apple‡',
    date: '2022-07-09T07:52:15.106Z',
  },
  {
    uuid: 'noticon_xnghtu6mccdoeljmkpyv',
    title: '테슬라',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1657353166/noticon/xnghtu6mccdoeljmkpyv.png',
    keywords: 'Tesla‡',
    date: '2022-07-09T07:52:48.003Z',
  },
  {
    uuid: 'noticon_oomcmnfxywsc2jbmin9v',
    title: 'gale2ndBrain',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1657389254/noticon/oomcmnfxywsc2jbmin9v.png',
    keywords: 'notion‡2ndbrain',
    date: '2022-07-09T17:54:16.929Z',
  },
  {
    uuid: 'noticon_s3rtzocvfrpdhnt3rat3',
    title: 'Squid',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1657452120/noticon/s3rtzocvfrpdhnt3rat3.png',
    keywords: 'Squid proxy‡',
    date: '2022-07-10T11:22:03.023Z',
  },
  {
    uuid: 'noticon_viswd5p8nabpflmumgbq',
    title: 'hardwork',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1657532462/noticon/viswd5p8nabpflmumgbq.gif',
    keywords: '‡',
    date: '2022-07-11T09:41:05.627Z',
  },
  {
    uuid: 'noticon_nxe1yxnjwcomhhtcyn5q',
    title: 'SPSS',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1657543774/noticon/nxe1yxnjwcomhhtcyn5q.png',
    keywords: 'statistics‡',
    date: '2022-07-11T12:49:36.222Z',
  },
  {
    uuid: 'noticon_yvmnyjv70cj4egiemx9b',
    title: 'terraform_ansible',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1657765461/noticon/yvmnyjv70cj4egiemx9b.png',
    keywords: 'IaC‡',
    date: '2022-07-14T02:24:23.939Z',
  },
  {
    uuid: 'noticon_jrb5fr9epo42ly2x67wd',
    title: '네이버',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1657801324/noticon/jrb5fr9epo42ly2x67wd.png',
    keywords: '‡',
    date: '2022-07-14T12:22:06.012Z',
  },
  {
    uuid: 'noticon_gupc4hffyknq2wnxphfi',
    title: '카카오',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1657801337/noticon/gupc4hffyknq2wnxphfi.png',
    keywords: '‡',
    date: '2022-07-14T12:22:19.213Z',
  },
  {
    uuid: 'noticon_n8egjeg9sfkg4ebj3llb',
    title: '팔만코딩경',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1658153225/noticon/n8egjeg9sfkg4ebj3llb.png',
    keywords: '80000coding‡',
    date: '2022-07-18T14:07:07.449Z',
  },
  {
    uuid: 'noticon_tza6gjo2lgylm5ccydb4',
    title: 'ONNX',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1658192081/noticon/tza6gjo2lgylm5ccydb4.png',
    keywords: '‡',
    date: '2022-07-19T00:54:43.333Z',
  },
  {
    uuid: 'noticon_czetkicolroj5ixhpqpz',
    title: 'raintown',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1658195215/noticon/czetkicolroj5ixhpqpz.png',
    keywords: '‡',
    date: '2022-07-19T01:46:57.648Z',
  },
  {
    uuid: 'noticon_duhgvk3hmqq52vvhp9du',
    title: 'conditional',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1658195496/noticon/duhgvk3hmqq52vvhp9du.png',
    keywords: '‡',
    date: '2022-07-19T01:51:37.831Z',
  },
  {
    uuid: 'noticon_ouu9dsnwxvdymmhik2lh',
    title: 'admin',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1658200567/noticon/ouu9dsnwxvdymmhik2lh.png',
    keywords: 'google‡google admin',
    date: '2022-07-19T03:16:09.706Z',
  },
  {
    uuid: 'noticon_evuvuqq4agvyftnsnkqp',
    title: 'dabada',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1658200753/noticon/evuvuqq4agvyftnsnkqp.png',
    keywords: '‡',
    date: '2022-07-19T03:19:14.931Z',
  },
  {
    uuid: 'noticon_veonsgtlbppygivzuk99',
    title: 'FroalaEditor',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1658214381/noticon/veonsgtlbppygivzuk99.png',
    keywords: 'Froala‡프로알라',
    date: '2022-07-19T07:06:23.794Z',
  },
  {
    uuid: 'noticon_ieyr647d2xgu5j1uksmc',
    title: 'D',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1658291556/noticon/ieyr647d2xgu5j1uksmc.png',
    keywords: 'D‡D',
    date: '2022-07-20T04:32:37.748Z',
  },
  {
    uuid: 'noticon_kmvkuu1eb9ksv3isqrzy',
    title: 'popper',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1658472145/noticon/kmvkuu1eb9ksv3isqrzy.png',
    keywords: '‡',
    date: '2022-07-22T06:42:28.070Z',
  },
  {
    uuid: 'noticon_uarn8lgz7pvbbd70wkxj',
    title: 'ㅠ',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1658476704/noticon/uarn8lgz7pvbbd70wkxj.gif',
    keywords: '‡',
    date: '2022-07-22T07:58:26.402Z',
  },
  {
    uuid: 'noticon_mqvxanw4lekz8yzxctt5',
    title: 'JYP',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1658570145/noticon/mqvxanw4lekz8yzxctt5.png',
    keywords: '‡',
    date: '2022-07-23T09:55:47.059Z',
  },
  {
    uuid: 'noticon_qwjmsexdljri31tj1xqo',
    title: 'SM',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1658570160/noticon/qwjmsexdljri31tj1xqo.png',
    keywords: '‡',
    date: '2022-07-23T09:56:02.071Z',
  },
  {
    uuid: 'noticon_nz1a5cvrryc6bmsapsce',
    title: 'YG',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1658570170/noticon/nz1a5cvrryc6bmsapsce.png',
    keywords: '‡',
    date: '2022-07-23T09:56:13.109Z',
  },
  {
    uuid: 'noticon_ltx7mg3uludcsgblvkce',
    title: 'neovim',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1658627782/noticon/ltx7mg3uludcsgblvkce.png',
    keywords: 'vim‡nvim',
    date: '2022-07-24T01:56:24.431Z',
  },
  {
    uuid: 'noticon_lklleeez6u1swycowrtb',
    title: 'transcendence',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1658657010/noticon/lklleeez6u1swycowrtb.png',
    keywords: '‡',
    date: '2022-07-24T10:03:32.238Z',
  },
  {
    uuid: 'noticon_llujxutbrodmxrubdxyn',
    title: 'Hasura',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1658674220/noticon/llujxutbrodmxrubdxyn.png',
    keywords: '‡',
    date: '2022-07-24T14:50:22.507Z',
  },
  {
    uuid: 'noticon_kjxdrori8me5v1dtspjx',
    title: 'AWS CLI',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1658709905/noticon/kjxdrori8me5v1dtspjx.png',
    keywords: '‡',
    date: '2022-07-25T00:45:06.861Z',
  },
  {
    uuid: 'noticon_x6d6zedgyi3fdm95oexd',
    title: 'boj',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1658824904/noticon/x6d6zedgyi3fdm95oexd.png',
    keywords: '백준‡Baekjoon',
    date: '2022-07-26T08:41:46.381Z',
  },
  {
    uuid: 'noticon_r0bvpoer0euegmf1wf84',
    title: 'TIMO',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1658889773/noticon/r0bvpoer0euegmf1wf84.png',
    keywords: '‡',
    date: '2022-07-27T02:42:55.257Z',
  },
  {
    uuid: 'noticon_cq91a7cz9ti9vedq4nqg',
    title: '1',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1658896944/noticon/cq91a7cz9ti9vedq4nqg.gif',
    keywords: '‡',
    date: '2022-07-27T04:42:27.346Z',
  },
  {
    uuid: 'noticon_d6sspyxlfz2u5znbcrw7',
    title: '우영우게임',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1658926742/noticon/d6sspyxlfz2u5znbcrw7.png',
    keywords: 'w0w‡',
    date: '2022-07-27T12:59:04.903Z',
  },
  {
    uuid: 'noticon_ucjeixlgnwsfjxbofa1x',
    title: '충북대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1658935946/noticon/ucjeixlgnwsfjxbofa1x.png',
    keywords: '대학교‡',
    date: '2022-07-27T15:32:29.030Z',
  },
  {
    uuid: 'noticon_l1pj13zfszyfligwiocl',
    title: 'red button',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1658976091/noticon/l1pj13zfszyfligwiocl.png',
    keywords: 'button‡버튼',
    date: '2022-07-28T02:41:33.584Z',
  },
  {
    uuid: 'noticon_ibmbtaz3pefmxso7upom',
    title: '닭장수후라이드',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1658988542/noticon/ibmbtaz3pefmxso7upom.png',
    keywords: '닭장수‡',
    date: '2022-07-28T06:09:04.901Z',
  },
  {
    uuid: 'noticon_zqrdce6nu2fkqyxxqxoo',
    title: '1',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1658997834/noticon/zqrdce6nu2fkqyxxqxoo.gif',
    keywords: '‡',
    date: '2022-07-28T08:43:56.603Z',
  },
  {
    uuid: 'noticon_jfuskelcivmywq2y78z0',
    title: '쿠로미',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1659096148/noticon/jfuskelcivmywq2y78z0.png',
    keywords: '‡',
    date: '2022-07-29T12:02:31.098Z',
  },
  {
    uuid: 'noticon_daada5nzuiwckkxdt6xt',
    title: 'AluraLATAM',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1659128470/noticon/daada5nzuiwckkxdt6xt.png',
    keywords: 'alura‡latam',
    date: '2022-07-29T21:01:12.317Z',
  },
  {
    uuid: 'noticon_rj5wzu8zlbf1ddo2u8hq',
    title: 'servlets',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1659254245/noticon/rj5wzu8zlbf1ddo2u8hq.png',
    keywords: 'servlet‡jsp',
    date: '2022-07-31T07:57:26.761Z',
  },
  {
    uuid: 'noticon_l5safmb3qpyaeyzxyo9o',
    title: 'Mplus',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1659465333/noticon/l5safmb3qpyaeyzxyo9o.png',
    keywords: '‡',
    date: '2022-08-02T18:35:36.143Z',
  },
  {
    uuid: 'noticon_vh2yw7aq2uzgbmlbw9pa',
    title: 'Three.js',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1659508326/noticon/vh2yw7aq2uzgbmlbw9pa.png',
    keywords: '‡',
    date: '2022-08-03T06:32:08.841Z',
  },
  {
    uuid: 'noticon_badjqljrqqta6vjqb06s',
    title: 'Nomad Sculpt',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1659508795/noticon/badjqljrqqta6vjqb06s.png',
    keywords: '‡',
    date: '2022-08-03T06:39:57.246Z',
  },
  {
    uuid: 'noticon_ua9s00jvlox7honcqdbx',
    title: 'Notepad++',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1659517651/noticon/ua9s00jvlox7honcqdbx.png',
    keywords: '‡',
    date: '2022-08-03T09:07:33.560Z',
  },
  {
    uuid: 'noticon_f1s3bwmpoehyahkruajw',
    title: 'Bulma',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1659536924/noticon/f1s3bwmpoehyahkruajw.png',
    keywords: '‡',
    date: '2022-08-03T14:28:47.126Z',
  },
  {
    uuid: 'noticon_ckcww7xzbm4onvih8lhp',
    title: 'STATA',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1659840047/noticon/ckcww7xzbm4onvih8lhp.png',
    keywords: '‡',
    date: '2022-08-07T02:40:48.905Z',
  },
  {
    uuid: 'noticon_eww5dovchdrf7jedyldc',
    title: 'inception',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1659940932/noticon/eww5dovchdrf7jedyldc.png',
    keywords: 'top totem‡',
    date: '2022-08-08T06:42:13.771Z',
  },
  {
    uuid: 'noticon_j0prim4do1ubkn9d9pea',
    title: '스스와타리',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1659973096/noticon/j0prim4do1ubkn9d9pea.png',
    keywords: '‡',
    date: '2022-08-08T15:38:18.723Z',
  },
  {
    uuid: 'noticon_zxgx5fshgbqixckv0d0w',
    title: '당근마켓 (누끼)',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1660010861/noticon/zxgx5fshgbqixckv0d0w.png',
    keywords: '‡',
    date: '2022-08-09T02:07:44.127Z',
  },
  {
    uuid: 'noticon_ismwlwr8mmtnxjkcskhm',
    title: '우아한형제들 (누끼)',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1660010959/noticon/ismwlwr8mmtnxjkcskhm.png',
    keywords: '‡',
    date: '2022-08-09T02:09:21.629Z',
  },
  {
    uuid: 'noticon_dfl7tywzw7pupb98kmvj',
    title: '카카오 (누끼)',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1660011096/noticon/dfl7tywzw7pupb98kmvj.png',
    keywords: '‡',
    date: '2022-08-09T02:11:38.008Z',
  },
  {
    uuid: 'noticon_wuf2uabqmr37ddkbygzt',
    title: '쿠팡 (누끼)',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1660011160/noticon/wuf2uabqmr37ddkbygzt.png',
    keywords: '‡',
    date: '2022-08-09T02:12:41.759Z',
  },
  {
    uuid: 'noticon_l9uaq4dxdjvjsyx2eygs',
    title: 'NSML',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1660011965/noticon/l9uaq4dxdjvjsyx2eygs.png',
    keywords: '‡',
    date: '2022-08-09T02:26:07.662Z',
  },
  {
    uuid: 'noticon_hzshsydhgjwuw3j1ryzi',
    title: 'smart phone',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1660020225/noticon/hzshsydhgjwuw3j1ryzi.png',
    keywords: '‡',
    date: '2022-08-09T04:43:47.661Z',
  },
  {
    uuid: 'noticon_ilr8fmqbt8unc4yy94ap',
    title: 'Mask',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1660020320/noticon/ilr8fmqbt8unc4yy94ap.png',
    keywords: '‡',
    date: '2022-08-09T04:45:21.902Z',
  },
  {
    uuid: 'noticon_bzbyy5dmjufl9oirsbf9',
    title: 'nonsan_army',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1660107473/noticon/bzbyy5dmjufl9oirsbf9.png',
    keywords: '논산‡육군훈련소',
    date: '2022-08-10T04:57:55.858Z',
  },
  {
    uuid: 'noticon_bwbsabdqgdn6e4ib3bv9',
    title: 'RK3399Pro',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1660293662/noticon/bwbsabdqgdn6e4ib3bv9.png',
    keywords: '‡',
    date: '2022-08-12T08:41:04.797Z',
  },
  {
    uuid: 'noticon_jet7adddjkxrngjpajcv',
    title: 'LTspice',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1660528836/noticon/jet7adddjkxrngjpajcv.png',
    keywords: 'Electronics‡Simulation',
    date: '2022-08-15T02:00:38.740Z',
  },
  {
    uuid: 'noticon_mk1v7ljvtiywpfo2o4or',
    title: 'LTspice',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1660528904/noticon/mk1v7ljvtiywpfo2o4or.png',
    keywords: 'Electronics‡Simulation',
    date: '2022-08-15T02:01:46.491Z',
  },
  {
    uuid: 'noticon_doekzdb9rfbto8rqrvod',
    title: 'NI Multisim',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1660530028/noticon/doekzdb9rfbto8rqrvod.png',
    keywords: 'Electronics‡Simulation',
    date: '2022-08-15T02:20:30.177Z',
  },
  {
    uuid: 'noticon_iuaozslrlcppn3dnkfoe',
    title: 'EAGLE',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1660530734/noticon/iuaozslrlcppn3dnkfoe.png',
    keywords: 'Electronics‡CAD',
    date: '2022-08-15T02:32:16.148Z',
  },
  {
    uuid: 'noticon_ivme4gpwwtaj76x5pu6v',
    title: 'CubeIDE',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1660531563/noticon/ivme4gpwwtaj76x5pu6v.png',
    keywords: 'Electronics‡MCU Programming',
    date: '2022-08-15T02:46:05.273Z',
  },
  {
    uuid: 'noticon_fbwkxtbebi3mcmgxmwzk',
    title: 'LTspice',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1660538833/noticon/fbwkxtbebi3mcmgxmwzk.png',
    keywords: 'Electronics‡Simulation',
    date: '2022-08-15T04:47:15.776Z',
  },
  {
    uuid: 'noticon_x7nlezv5fck3msh4zyeh',
    title: 'NI Multisim',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1660539510/noticon/x7nlezv5fck3msh4zyeh.png',
    keywords: 'Electronics‡Simulation',
    date: '2022-08-15T04:58:33.490Z',
  },
  {
    uuid: 'noticon_isevk32cdwqyq3pjmose',
    title: 'NI Multisim',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1660544803/noticon/isevk32cdwqyq3pjmose.png',
    keywords: 'Electronics‡Simulation',
    date: '2022-08-15T06:26:46.236Z',
  },
  {
    uuid: 'noticon_s2xhkcu9rcbnq8kgxiw1',
    title: 'IC',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1660546692/noticon/s2xhkcu9rcbnq8kgxiw1.png',
    keywords: 'Electronic‡Component',
    date: '2022-08-15T06:58:14.106Z',
  },
  {
    uuid: 'noticon_zs1iria2euvdxbwiyquk',
    title: 'Circuit',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1660546914/noticon/zs1iria2euvdxbwiyquk.png',
    keywords: 'Electronic‡Circuit',
    date: '2022-08-15T07:01:55.936Z',
  },
  {
    uuid: 'noticon_bchd2jjiuqpnjnm1rmct',
    title: '지그재그',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1660557197/noticon/bchd2jjiuqpnjnm1rmct.png',
    keywords: '‡',
    date: '2022-08-15T09:53:19.814Z',
  },
  {
    uuid: 'noticon_wpjevxtcmcumzyaly8x7',
    title: '카카오톡',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1660557270/noticon/wpjevxtcmcumzyaly8x7.png',
    keywords: '‡',
    date: '2022-08-15T09:54:32.885Z',
  },
  {
    uuid: 'noticon_wghykhmbpwblhaxis5wp',
    title: '멀록',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1660643927/noticon/wghykhmbpwblhaxis5wp.png',
    keywords: '멀록‡하스스톤',
    date: '2022-08-16T09:58:49.269Z',
  },
  {
    uuid: 'noticon_xkjvsqrvzmicnrvlrqbj',
    title: '고려대',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1660998813/noticon/xkjvsqrvzmicnrvlrqbj.gif',
    keywords: '‡',
    date: '2022-08-20T12:33:35.477Z',
  },
  {
    uuid: 'noticon_sxwdoirz3drcye4skapm',
    title: 'scan',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1661219479/noticon/sxwdoirz3drcye4skapm.png',
    keywords: 'print‡id',
    date: '2022-08-23T01:51:21.148Z',
  },
  {
    uuid: 'noticon_hce1glkknkaapizjhwxt',
    title: 'uuid',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1661219775/noticon/hce1glkknkaapizjhwxt.png',
    keywords: 'id‡user',
    date: '2022-08-23T01:56:18.080Z',
  },
  {
    uuid: 'noticon_z3no3qpzbuez1gkidykv',
    title: 'finger2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1661220074/noticon/z3no3qpzbuez1gkidykv.png',
    keywords: 'scan‡id',
    date: '2022-08-23T02:01:16.904Z',
  },
  {
    uuid: 'noticon_hxroi5vxrwo3rdivcsm4',
    title: 'Cloudflare',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1661322446/noticon/hxroi5vxrwo3rdivcsm4.png',
    keywords: 'cloudflare‡cf',
    date: '2022-08-24T06:27:27.721Z',
  },
  {
    uuid: 'noticon_oddxkrazu3fyajs4jhmz',
    title: '덕성여대',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1661475274/noticon/oddxkrazu3fyajs4jhmz.png',
    keywords: '‡',
    date: '2022-08-26T00:54:36.701Z',
  },
  {
    uuid: 'noticon_ec3guacse80kxfbwcttg',
    title: '창원대',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1661481924/noticon/ec3guacse80kxfbwcttg.gif',
    keywords: '창원대‡CWNU',
    date: '2022-08-26T02:45:26.830Z',
  },
  {
    uuid: 'noticon_uca0ncb114rfe8zqj80n',
    title: 'inflearn',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1661486705/noticon/uca0ncb114rfe8zqj80n.png',
    keywords: '인프런‡',
    date: '2022-08-26T04:05:07.519Z',
  },
  {
    uuid: 'noticon_nd1jngvrpiosrpweukzl',
    title: 'OPIc',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1661742012/noticon/nd1jngvrpiosrpweukzl.png',
    keywords: '‡오픽',
    date: '2022-08-29T03:00:14.455Z',
  },
  {
    uuid: 'noticon_jaczg6nlfi3phwam3tkp',
    title: 'HuggingFace',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1661748469/noticon/jaczg6nlfi3phwam3tkp.png',
    keywords: '‡허깅페이스',
    date: '2022-08-29T04:47:52.195Z',
  },
  {
    uuid: 'noticon_ynqcifxvvqz9kymaxtjb',
    title: 'new',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1661759489/noticon/ynqcifxvvqz9kymaxtjb.png',
    keywords: 'new‡news',
    date: '2022-08-29T07:51:30.974Z',
  },
  {
    uuid: 'noticon_jb2hvbjz61kqnkyepjrm',
    title: 'book',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1661928409/noticon/jb2hvbjz61kqnkyepjrm.png',
    keywords: '‡',
    date: '2022-08-31T06:46:52.169Z',
  },
  {
    uuid: 'noticon_ecun0i3k1nu2tht5gjbm',
    title: 'stackoverflow',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1662076368/noticon/ecun0i3k1nu2tht5gjbm.png',
    keywords: 'stackoverflow‡',
    date: '2022-09-01T23:52:50.492Z',
  },
  {
    uuid: 'noticon_yjgxl9a4w3hnt4fpejlq',
    title: 'React Hook Form',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1662081686/noticon/yjgxl9a4w3hnt4fpejlq.png',
    keywords: 'react‡',
    date: '2022-09-02T01:21:29.068Z',
  },
  {
    uuid: 'noticon_jteq7efbcqsqadyyprag',
    title: 'groovy',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1662459794/noticon/jteq7efbcqsqadyyprag.png',
    keywords: '‡',
    date: '2022-09-06T10:23:17.305Z',
  },
  {
    uuid: 'noticon_juiilxa4qapz9wibonub',
    title: 'groovy2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1662459949/noticon/juiilxa4qapz9wibonub.png',
    keywords: '‡',
    date: '2022-09-06T10:25:51.486Z',
  },
  {
    uuid: 'noticon_hwmkngsr4fakqgeun9f4',
    title: 'Rabbit Mq',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1662460823/noticon/hwmkngsr4fakqgeun9f4.png',
    keywords: '‡',
    date: '2022-09-06T10:40:25.853Z',
  },
  {
    uuid: 'noticon_zpdqr7ojoa8ybmsqikw6',
    title: 'R Mq',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1662460863/noticon/zpdqr7ojoa8ybmsqikw6.png',
    keywords: '‡',
    date: '2022-09-06T10:41:05.535Z',
  },
  {
    uuid: 'noticon_rmnva7cjmyakiknnpub2',
    title: 'Zookeeper',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1662468891/noticon/rmnva7cjmyakiknnpub2.png',
    keywords: '‡',
    date: '2022-09-06T12:54:53.604Z',
  },
  {
    uuid: 'noticon_dtalt5gl3xkddalhat8o',
    title: 'toss',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1662515801/noticon/dtalt5gl3xkddalhat8o.png',
    keywords: '토스‡toss new',
    date: '2022-09-07T01:56:43.924Z',
  },
  {
    uuid: 'noticon_q2u3hn0fk2l18fx3ywfb',
    title: 'github',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1662618438/noticon/q2u3hn0fk2l18fx3ywfb.png',
    keywords: '‡',
    date: '2022-09-08T06:27:21.212Z',
  },
  {
    uuid: 'noticon_zelgbf2eownca0edtk0s',
    title: '음표',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1662698751/noticon/zelgbf2eownca0edtk0s.png',
    keywords: '‡',
    date: '2022-09-09T04:45:54.446Z',
  },
  {
    uuid: 'noticon_b3cangbvu4obk5rsmy5x',
    title: 'spring batch',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1662807296/noticon/b3cangbvu4obk5rsmy5x.png',
    keywords: '‡',
    date: '2022-09-10T10:54:58.456Z',
  },
  {
    uuid: 'noticon_nnw6du8ytgdpu5ydmeqj',
    title: 'springbatch',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1662807907/noticon/nnw6du8ytgdpu5ydmeqj.png',
    keywords: '‡',
    date: '2022-09-10T11:05:09.447Z',
  },
  {
    uuid: 'noticon_eyjphpljxltwu5jgna2d',
    title: 'spring cloud',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1662808717/noticon/eyjphpljxltwu5jgna2d.png',
    keywords: '‡',
    date: '2022-09-10T11:18:39.523Z',
  },
  {
    uuid: 'noticon_rvzxdxlzdapguozsrfce',
    title: 'cube',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1662871699/noticon/rvzxdxlzdapguozsrfce.png',
    keywords: '‡',
    date: '2022-09-11T04:48:21.090Z',
  },
  {
    uuid: 'noticon_msotni9jjgxhwfzlp3dc',
    title: 'circle',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1662871907/noticon/msotni9jjgxhwfzlp3dc.png',
    keywords: '‡',
    date: '2022-09-11T04:51:49.339Z',
  },
  {
    uuid: 'noticon_gxzxohgigddj1rfk5cj3',
    title: 'CoreDNS',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1663053304/noticon/gxzxohgigddj1rfk5cj3.png',
    keywords: 'kubernetes‡dns',
    date: '2022-09-13T07:15:07.142Z',
  },
  {
    uuid: 'noticon_ev3ggnxvjpkfkxmdv0bl',
    title: 'EDEN',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1663221673/noticon/ev3ggnxvjpkfkxmdv0bl.png',
    keywords: '이든‡EDEN',
    date: '2022-09-15T06:01:16.832Z',
  },
  {
    uuid: 'noticon_r02isdp54gfacdabyl7c',
    title: 'Formik',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1663502339/noticon/r02isdp54gfacdabyl7c.png',
    keywords: 'formik‡fomrik',
    date: '2022-09-18T11:59:01.248Z',
  },
  {
    uuid: 'noticon_zc3crrjiivto5vvlh2xc',
    title: '따봉',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1663583332/noticon/zc3crrjiivto5vvlh2xc.png',
    keywords: '따봉‡엄지',
    date: '2022-09-19T10:28:54.823Z',
  },
  {
    uuid: 'noticon_voaakltfmhcmkxdjk33l',
    title: 'tinkercad',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1663722562/noticon/voaakltfmhcmkxdjk33l.png',
    keywords: '틴커캐드‡',
    date: '2022-09-21T01:09:24.590Z',
  },
  {
    uuid: 'noticon_b4zmtnwj71lsocgi3mj3',
    title: '조아라 JOARA',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1663773924/noticon/b4zmtnwj71lsocgi3mj3.png',
    keywords: '웹소설 플랫폼‡',
    date: '2022-09-21T15:25:26.453Z',
  },
  {
    uuid: 'noticon_udpr2prak2dlui545t5b',
    title: 'smartphone',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1663962948/noticon/udpr2prak2dlui545t5b.png',
    keywords: '‡',
    date: '2022-09-23T19:55:49.996Z',
  },
  {
    uuid: 'noticon_jw9vccv0ybzoi9ee9vre',
    title: 'Codetree',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1664161247/noticon/jw9vccv0ybzoi9ee9vre.png',
    keywords: '코드트리‡',
    date: '2022-09-26T03:00:48.825Z',
  },
  {
    uuid: 'noticon_y8hjld7trsmyqc6hvpey',
    title: 'CoreML',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1664172671/noticon/y8hjld7trsmyqc6hvpey.png',
    keywords: '‡',
    date: '2022-09-26T06:11:12.918Z',
  },
  {
    uuid: 'noticon_z9q5ljc3fht8n6pakf5h',
    title: 'NCNN',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1664174470/noticon/z9q5ljc3fht8n6pakf5h.png',
    keywords: '‡',
    date: '2022-09-26T06:41:12.230Z',
  },
  {
    uuid: 'noticon_wa9ymppmgjnb9nn2u7xm',
    title: '소설;오일장',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1664243044/noticon/wa9ymppmgjnb9nn2u7xm.png',
    keywords: '소설;오일장‡소설;오일장',
    date: '2022-09-27T01:44:07.327Z',
  },
  {
    uuid: 'noticon_rqip3ipeebgea9g71vie',
    title: 'VanillaJS',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1664254089/noticon/rqip3ipeebgea9g71vie.png',
    keywords: 'javascript‡',
    date: '2022-09-27T04:48:14.477Z',
  },
  {
    uuid: 'noticon_ldjlircemho9tvwwkjme',
    title: 'tsx',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1664410510/noticon/ldjlircemho9tvwwkjme.png',
    keywords: 'typescript‡',
    date: '2022-09-29T00:15:12.947Z',
  },
  {
    uuid: 'noticon_efpasd4iurfw0pzu6ulx',
    title: '유비온',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1664715653/noticon/efpasd4iurfw0pzu6ulx.png',
    keywords: 'ubion‡',
    date: '2022-10-02T13:00:54.565Z',
  },
  {
    uuid: 'noticon_lwsssszilfkkkzdl4u1h',
    title: 'feather_ owl',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1664728291/noticon/lwsssszilfkkkzdl4u1h.gif',
    keywords: '‡',
    date: '2022-10-02T16:31:35.956Z',
  },
  {
    uuid: 'noticon_lnkvhfwouunuyhvcsqol',
    title: 'D',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1665108641/noticon/lnkvhfwouunuyhvcsqol.png',
    keywords: '‡',
    date: '2022-10-07T02:10:43.273Z',
  },
  {
    uuid: 'noticon_pqmr775nzldc6e8hpswo',
    title: 'phone',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1665289036/noticon/pqmr775nzldc6e8hpswo.png',
    keywords: 'phone‡',
    date: '2022-10-09T04:17:19.485Z',
  },
  {
    uuid: 'noticon_uis4gp4xgilj30sdiwrn',
    title: '월급쟁이부자들',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1665300034/noticon/uis4gp4xgilj30sdiwrn.png',
    keywords: '월부‡월부',
    date: '2022-10-09T07:20:36.862Z',
  },
  {
    uuid: 'noticon_y2jl8rl5nqtfkyem5lsx',
    title: 'computer architecture',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1665326496/noticon/y2jl8rl5nqtfkyem5lsx.png',
    keywords: '‡',
    date: '2022-10-09T14:41:42.352Z',
  },
  {
    uuid: 'noticon_iwcirmgkc4rhhdr6vrbl',
    title: 'empty',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1665421116/noticon/iwcirmgkc4rhhdr6vrbl.png',
    keywords: '‡',
    date: '2022-10-10T16:58:38.720Z',
  },
  {
    uuid: 'noticon_jdivbz3vqpy4ezxgx66i',
    title: '중요',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1665421142/noticon/jdivbz3vqpy4ezxgx66i.png',
    keywords: '‡',
    date: '2022-10-10T16:59:04.804Z',
  },
  {
    uuid: 'noticon_gijvhijhp7tde4c0cfnj',
    title: '진행중',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1665421161/noticon/gijvhijhp7tde4c0cfnj.png',
    keywords: '‡',
    date: '2022-10-10T16:59:23.461Z',
  },
  {
    uuid: 'noticon_sadkhi8iruz2imsrlhx5',
    title: '완료',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1665421179/noticon/sadkhi8iruz2imsrlhx5.png',
    keywords: '‡',
    date: '2022-10-10T16:59:41.294Z',
  },
  {
    uuid: 'noticon_kgvdsxfhwwumgsnu4tmk',
    title: '연기',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1665421198/noticon/kgvdsxfhwwumgsnu4tmk.png',
    keywords: '‡',
    date: '2022-10-10T17:00:02.269Z',
  },
  {
    uuid: 'noticon_zbrajvqyduvv9uzqsp90',
    title: '취소',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1665421213/noticon/zbrajvqyduvv9uzqsp90.png',
    keywords: '‡',
    date: '2022-10-10T17:00:16.461Z',
  },
  {
    uuid: 'noticon_tr5pif7ygbondlldzhw8',
    title: 'AsyncSwift',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1665424257/noticon/tr5pif7ygbondlldzhw8.png',
    keywords: 'swift‡conference',
    date: '2022-10-10T17:50:59.840Z',
  },
  {
    uuid: 'noticon_jzpd76tkknay6nnfbv5r',
    title: 'AsyncSwift',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1665424294/noticon/jzpd76tkknay6nnfbv5r.png',
    keywords: 'swift‡conference',
    date: '2022-10-10T17:51:36.846Z',
  },
  {
    uuid: 'noticon_atqxscahyik714dyzprj',
    title: 'GORM',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1665453615/noticon/atqxscahyik714dyzprj.png',
    keywords: '‡',
    date: '2022-10-11T02:00:17.752Z',
  },
  {
    uuid: 'noticon_jwpgtlndgfd4ko4atjzd',
    title: 'vuetify',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1665463061/noticon/jwpgtlndgfd4ko4atjzd.png',
    keywords: '‡',
    date: '2022-10-11T04:37:44.178Z',
  },
  {
    uuid: 'noticon_l73pbslgxtq8dxpitkg2',
    title: 'Architecture',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1665571114/noticon/l73pbslgxtq8dxpitkg2.png',
    keywords: '‡',
    date: '2022-10-12T10:38:36.667Z',
  },
  {
    uuid: 'noticon_n3becmtv7aujnc3gbzwv',
    title: 'Redshift',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1665632122/noticon/n3becmtv7aujnc3gbzwv.png',
    keywords: 'Amazon Redshift‡',
    date: '2022-10-13T03:35:24.644Z',
  },
  {
    uuid: 'noticon_nojyg5biubumeffqpnbh',
    title: 'kkk',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1665647014/noticon/nojyg5biubumeffqpnbh.png',
    keywords: 'agics‡',
    date: '2022-10-13T07:43:37.247Z',
  },
  {
    uuid: 'noticon_aei9a9juosixvtxybbo6',
    title: '올리브영',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1665665482/noticon/aei9a9juosixvtxybbo6.png',
    keywords: '올리브영‡oliveyoung',
    date: '2022-10-13T12:51:25.605Z',
  },
  {
    uuid: 'noticon_cvbzgsx6yoq3b0otxxns',
    title: 'Tesla',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1665815416/noticon/cvbzgsx6yoq3b0otxxns.png',
    keywords: 'tsla‡',
    date: '2022-10-15T06:30:18.642Z',
  },
  {
    uuid: 'noticon_rs32cagsxo9a8j6y3uja',
    title: 'Boostcamp',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1665901411/noticon/rs32cagsxo9a8j6y3uja.png',
    keywords: '부캠‡부스트캠프',
    date: '2022-10-16T06:23:33.387Z',
  },
  {
    uuid: 'noticon_e0axvectr4ja63eosww8',
    title: 'Exit',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1665977562/noticon/e0axvectr4ja63eosww8.png',
    keywords: 'exit‡',
    date: '2022-10-17T03:32:44.500Z',
  },
  {
    uuid: 'noticon_zppnxgsegyfrhrl42q2p',
    title: 'jmeter',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1666058624/noticon/zppnxgsegyfrhrl42q2p.png',
    keywords: 'jmeter‡',
    date: '2022-10-18T02:03:46.499Z',
  },
  {
    uuid: 'noticon_qpfc8akoqjywctvqkryn',
    title: 'F5 Access',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1666231028/noticon/qpfc8akoqjywctvqkryn.png',
    keywords: 'F5 Access‡',
    date: '2022-10-20T01:57:10.369Z',
  },
  {
    uuid: 'noticon_u30ai8t1wvq2ws9iojwx',
    title: '약속이니까',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1666370853/noticon/u30ai8t1wvq2ws9iojwx.gif',
    keywords: 'promise‡펀섹쿨좌',
    date: '2022-10-21T16:47:38.614Z',
  },
  {
    uuid: 'noticon_uxrxfortpevem6ftehsg',
    title: 'sio',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1666598804/noticon/uxrxfortpevem6ftehsg.png',
    keywords: '시바‡',
    date: '2022-10-24T08:06:46.925Z',
  },
  {
    uuid: 'noticon_fheuv96ljwi2zs90x2h6',
    title: 'TIP',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1666659830/noticon/fheuv96ljwi2zs90x2h6.png',
    keywords: 'TIP‡',
    date: '2022-10-25T01:03:52.750Z',
  },
  {
    uuid: 'noticon_evii0kwjuapddhzjmdrb',
    title: 'JAVA',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1667082075/noticon/evii0kwjuapddhzjmdrb.png',
    keywords: '‡',
    date: '2022-10-29T22:21:17.913Z',
  },
  {
    uuid: 'noticon_emob9zzsyv9txvlflahs',
    title: 'JAVA',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1667082328/noticon/emob9zzsyv9txvlflahs.png',
    keywords: '‡',
    date: '2022-10-29T22:25:30.436Z',
  },
  {
    uuid: 'noticon_lcyuhcahleynvwsx86tv',
    title: 'algorithm',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1667082741/noticon/lcyuhcahleynvwsx86tv.png',
    keywords: '‡',
    date: '2022-10-29T22:32:24.036Z',
  },
  {
    uuid: 'noticon_hum6nhare2ynl6ygvhdm',
    title: 'code',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1667082881/noticon/hum6nhare2ynl6ygvhdm.png',
    keywords: '‡',
    date: '2022-10-29T22:34:43.712Z',
  },
  {
    uuid: 'noticon_slcsuxbx6hniolbyqnuv',
    title: 'code',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1667082967/noticon/slcsuxbx6hniolbyqnuv.png',
    keywords: '‡',
    date: '2022-10-29T22:36:09.598Z',
  },
  {
    uuid: 'noticon_pvwyi0e8nkru8ftwxahw',
    title: 'Java',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1667161838/noticon/pvwyi0e8nkru8ftwxahw.png',
    keywords: '‡',
    date: '2022-10-30T20:30:40.081Z',
  },
  {
    uuid: 'noticon_dcnmfs12rxrmqmqowspp',
    title: 'Browser',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1667165223/noticon/dcnmfs12rxrmqmqowspp.png',
    keywords: '‡',
    date: '2022-10-30T21:27:06.184Z',
  },
  {
    uuid: 'noticon_ll5tpn3igcsb2vwb2aeu',
    title: 'flowcahrt',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1667165524/noticon/ll5tpn3igcsb2vwb2aeu.png',
    keywords: '‡',
    date: '2022-10-30T21:32:06.671Z',
  },
  {
    uuid: 'noticon_ctf1d1v5st1xeewlyy9g',
    title: 'Flowchart',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1667165543/noticon/ctf1d1v5st1xeewlyy9g.png',
    keywords: '‡',
    date: '2022-10-30T21:32:25.465Z',
  },
  {
    uuid: 'noticon_jkteb0zahggo46okznlh',
    title: 'istio',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1667528160/noticon/jkteb0zahggo46okznlh.png',
    keywords: 'Istio‡mesh',
    date: '2022-11-04T02:16:03.049Z',
  },
  {
    uuid: 'noticon_plbpl26lr99j2kiismj7',
    title: 'datadog',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1667565702/noticon/plbpl26lr99j2kiismj7.png',
    keywords: 'datadog‡datadog',
    date: '2022-11-04T12:41:51.580Z',
  },
  {
    uuid: 'noticon_qk2dm5kyygfhamu7fyej',
    title: 'datadog',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1667565761/noticon/qk2dm5kyygfhamu7fyej.png',
    keywords: 'datadog‡datadog',
    date: '2022-11-04T12:42:43.158Z',
  },
  {
    uuid: 'noticon_myf5mvlwygfczlfp3nq5',
    title: 'datadog',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1667565931/noticon/myf5mvlwygfczlfp3nq5.png',
    keywords: 'datadog‡datadog',
    date: '2022-11-04T12:45:33.391Z',
  },
  {
    uuid: 'noticon_a7azmjneurykrmfb7mfq',
    title: 'backend',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1667658960/noticon/a7azmjneurykrmfb7mfq.png',
    keywords: '‡',
    date: '2022-11-05T14:36:02.968Z',
  },
  {
    uuid: 'noticon_efaljyj2s4l2o6mtgtri',
    title: '보라색 원',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1668044461/noticon/efaljyj2s4l2o6mtgtri.png',
    keywords: '보라색 원‡puple',
    date: '2022-11-10T01:41:04.227Z',
  },
  {
    uuid: 'noticon_cw1znpliueuhwcsbbxxp',
    title: 'kt',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1668149245/noticon/cw1znpliueuhwcsbbxxp.png',
    keywords: '‡',
    date: '2022-11-11T06:47:28.375Z',
  },
  {
    uuid: 'noticon_ifnd63yxhpn9929m9aak',
    title: '공학페스티벌',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1668246323/noticon/ifnd63yxhpn9929m9aak.png',
    keywords: '‡',
    date: '2022-11-12T09:45:25.497Z',
  },
  {
    uuid: 'noticon_vvlwk62hghkmolj6swij',
    title: 'handsup',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1668404990/noticon/vvlwk62hghkmolj6swij.png',
    keywords: '‡',
    date: '2022-11-14T05:49:52.171Z',
  },
  {
    uuid: 'noticon_vt6mubog9kozotevxuai',
    title: 'peace',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1668658446/noticon/vt6mubog9kozotevxuai.png',
    keywords: '‡',
    date: '2022-11-17T04:14:08.821Z',
  },
  {
    uuid: 'noticon_vwfl23p419n0wexxxhpv',
    title: 'Rockchip',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1668728648/noticon/vwfl23p419n0wexxxhpv.png',
    keywords: '‡',
    date: '2022-11-17T23:44:11.202Z',
  },
  {
    uuid: 'noticon_eha7dvayh9ehjec6ngmm',
    title: 'NUnit',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1669214102/noticon/eha7dvayh9ehjec6ngmm.png',
    keywords: '.NET‡tests',
    date: '2022-11-23T14:35:06.317Z',
  },
  {
    uuid: 'noticon_r9ap0ovqcgddh52kny6g',
    title: 'ARKit',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1669459197/noticon/r9ap0ovqcgddh52kny6g.png',
    keywords: 'ar‡apple',
    date: '2022-11-26T10:40:00.080Z',
  },
  {
    uuid: 'noticon_sfo15betgslerudyhvzi',
    title: '뽀야미',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1669698602/noticon/sfo15betgslerudyhvzi.png',
    keywords: '‡',
    date: '2022-11-29T05:10:05.419Z',
  },
  {
    uuid: 'noticon_jvphhzzcyepb1z9squdz',
    title: '애플',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1669699221/noticon/jvphhzzcyepb1z9squdz.png',
    keywords: '‡',
    date: '2022-11-29T05:20:24.099Z',
  },
  {
    uuid: 'noticon_xvrrajzb0hfnvczvuavh',
    title: '뽀야미 아이콘',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1669699406/noticon/xvrrajzb0hfnvczvuavh.png',
    keywords: '‡',
    date: '2022-11-29T05:23:28.483Z',
  },
  {
    uuid: 'noticon_efht0dakqxiwgrxtnllq',
    title: '농담곰 눈물',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1669699560/noticon/efht0dakqxiwgrxtnllq.gif',
    keywords: '‡',
    date: '2022-11-29T05:26:02.855Z',
  },
  {
    uuid: 'noticon_a15oexdakj1rcqx29ul7',
    title: '농담곰 댄스',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1669699657/noticon/a15oexdakj1rcqx29ul7.gif',
    keywords: '‡',
    date: '2022-11-29T05:27:39.864Z',
  },
  {
    uuid: 'noticon_xg13hlex6bu8mu182b5y',
    title: 'react-query',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1669720599/noticon/xg13hlex6bu8mu182b5y.png',
    keywords: 'react-query‡react',
    date: '2022-11-29T11:16:41.817Z',
  },
  {
    uuid: 'noticon_ixhkrevb3z3fjpowsngs',
    title: 'BL',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1669842564/noticon/ixhkrevb3z3fjpowsngs.png',
    keywords: 'EathMix, ZeeNuNew, BrightWin, OffGun, ‡BibleBiu, MileApo',
    date: '2022-11-30T21:09:26.956Z',
  },
  {
    uuid: 'noticon_twbve8i8ndmjutyyw70d',
    title: '제리하트',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1670460017/noticon/twbve8i8ndmjutyyw70d.gif',
    keywords: '‡',
    date: '2022-12-08T00:40:23.000Z',
  },
  {
    uuid: 'noticon_ihai0qe24bejs6r5oela',
    title: '11st',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1670557172/noticon/ihai0qe24bejs6r5oela.png',
    keywords: '‡',
    date: '2022-12-09T03:39:34.873Z',
  },
  {
    uuid: 'noticon_ma0chdlqhbhlgjhwkden',
    title: '11번가',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1670557397/noticon/ma0chdlqhbhlgjhwkden.png',
    keywords: '‡',
    date: '2022-12-09T03:43:19.489Z',
  },
  {
    uuid: 'noticon_rsidlbh01eu3ycxond0r',
    title: 'BMO',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1670808982/noticon/rsidlbh01eu3ycxond0r.gif',
    keywords: '‡',
    date: '2022-12-12T01:36:26.324Z',
  },
  {
    uuid: 'noticon_gsh300agvew43ug40tuq',
    title: 'htmlandcss',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1670914565/noticon/gsh300agvew43ug40tuq.png',
    keywords: '‡',
    date: '2022-12-13T06:56:08.963Z',
  },
  {
    uuid: 'noticon_yp5szordkq2zdswx5k7l',
    title: 'HRMS',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1670980563/noticon/yp5szordkq2zdswx5k7l.png',
    keywords: 'HRMS‡',
    date: '2022-12-14T01:16:05.997Z',
  },
  {
    uuid: 'noticon_r6jztlp3nas5dvedicnk',
    title: 'waddles',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1671025217/noticon/r6jztlp3nas5dvedicnk.png',
    keywords: 'waddles‡pig',
    date: '2022-12-14T13:40:21.313Z',
  },
  {
    uuid: 'noticon_gjeuo0m3wa47qto9wjib',
    title: 'TensorFlow Lite',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1671069278/noticon/gjeuo0m3wa47qto9wjib.png',
    keywords: '‡',
    date: '2022-12-15T01:54:40.607Z',
  },
  {
    uuid: 'noticon_qhloyzkoluk1xf5mo87w',
    title: 'blockchain',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1671075706/noticon/qhloyzkoluk1xf5mo87w.png',
    keywords: 'block‡coin chain block',
    date: '2022-12-15T03:41:48.954Z',
  },
  {
    uuid: 'noticon_zteldiqrofzrxzv4kpgv',
    title: 'klaytn',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1671075732/noticon/zteldiqrofzrxzv4kpgv.png',
    keywords: 'kaikas‡coin',
    date: '2022-12-15T03:42:14.875Z',
  },
  {
    uuid: 'noticon_aoctsnsjpc763v1kpb5q',
    title: 'Ulkit',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1671373820/noticon/aoctsnsjpc763v1kpb5q.png',
    keywords: '‡',
    date: '2022-12-18T14:30:23.241Z',
  },
  {
    uuid: 'noticon_zczk9wzsj5jq0epa0ine',
    title: 'notion(png)',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1671380429/noticon/zczk9wzsj5jq0epa0ine.png',
    keywords: 'notion‡',
    date: '2022-12-18T16:20:31.454Z',
  },
  {
    uuid: 'noticon_oozm8byjijc6n8ee2pdf',
    title: '센트비',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1671507639/noticon/oozm8byjijc6n8ee2pdf.png',
    keywords: 'Sentbe‡',
    date: '2022-12-20T03:40:42.157Z',
  },
  {
    uuid: 'noticon_xczl4ibxelafczjfpxll',
    title: '테이아',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1671619463/noticon/xczl4ibxelafczjfpxll.png',
    keywords: 'theia‡치얼업',
    date: '2022-12-21T10:44:24.978Z',
  },
  {
    uuid: 'noticon_utosqblh4elfuec3hx4z',
    title: '연희대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1671619507/noticon/utosqblh4elfuec3hx4z.png',
    keywords: '치얼업‡',
    date: '2022-12-21T10:45:10.006Z',
  },
  {
    uuid: 'noticon_f2acjrbrdkr51kbizhoa',
    title: 'h2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1671751435/noticon/f2acjrbrdkr51kbizhoa.png',
    keywords: '‡',
    date: '2022-12-22T23:23:57.501Z',
  },
  {
    uuid: 'noticon_ycv0xkdlkcznvaiz1upp',
    title: 'Angular Material',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672033619/noticon/ycv0xkdlkcznvaiz1upp.png',
    keywords: 'angular‡material',
    date: '2022-12-26T05:47:01.184Z',
  },
  {
    uuid: 'noticon_ivtti92qlnrg6kx5yb3s',
    title: 'wandookong',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672060006/noticon/ivtti92qlnrg6kx5yb3s.png',
    keywords: '‡',
    date: '2022-12-26T13:06:48.156Z',
  },
  {
    uuid: 'noticon_wdtfazuuaxahkejpwufl',
    title: 'YUV',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672127617/noticon/wdtfazuuaxahkejpwufl.png',
    keywords: '‡',
    date: '2022-12-27T07:53:40.127Z',
  },
  {
    uuid: 'noticon_avveui25ptflpgdgwlse',
    title: 'korea',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672137965/noticon/avveui25ptflpgdgwlse.gif',
    keywords: 'flag, korea, national‡',
    date: '2022-12-27T10:46:07.580Z',
  },
  {
    uuid: 'noticon_bp2ubfxf71r9op89k8an',
    title: 'japan',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672138244/noticon/bp2ubfxf71r9op89k8an.gif',
    keywords: 'japan, flag, national‡',
    date: '2022-12-27T10:50:47.703Z',
  },
  {
    uuid: 'noticon_kmt4v3uiz5s6tr1mrga5',
    title: 'dog ',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672145213/noticon/kmt4v3uiz5s6tr1mrga5.gif',
    keywords: 'fun, dog‡',
    date: '2022-12-27T12:46:58.108Z',
  },
  {
    uuid: 'noticon_ug87ay3drugiwcarbjzu',
    title: '요리하는 캘시퍼',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672219077/noticon/ug87ay3drugiwcarbjzu.png',
    keywords: 'anime‡calcifer',
    date: '2022-12-28T09:18:00.219Z',
  },
  {
    uuid: 'noticon_bxpztbqwjzqijsjop3m4',
    title: 'dog',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672244387/noticon/bxpztbqwjzqijsjop3m4.gif',
    keywords: 'funny‡',
    date: '2022-12-28T16:19:51.931Z',
  },
  {
    uuid: 'noticon_xv7n16uz0h4iv2t3ifrj',
    title: 'Trybe',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672278752/noticon/xv7n16uz0h4iv2t3ifrj.png',
    keywords: '‡',
    date: '2022-12-29T01:52:34.563Z',
  },
  {
    uuid: 'noticon_yp81rwz4rnn4tvbmthna',
    title: '후르츠 바스켓',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672298734/noticon/yp81rwz4rnn4tvbmthna.png',
    keywords: 'anime‡fruits basket',
    date: '2022-12-29T07:25:36.757Z',
  },
  {
    uuid: 'noticon_yjoou1zmfrvfekgnroj1',
    title: '하이큐',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672298934/noticon/yjoou1zmfrvfekgnroj1.png',
    keywords: 'anime‡haikyuu',
    date: '2022-12-29T07:28:57.695Z',
  },
  {
    uuid: 'noticon_awbkyzf8g9tosdqmhxvr',
    title: '호리미야',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672298968/noticon/awbkyzf8g9tosdqmhxvr.png',
    keywords: 'anime‡horimiya',
    date: '2022-12-29T07:29:31.853Z',
  },
  {
    uuid: 'noticon_wkzea0lvq4dbrvkxfvxx',
    title: '주술회전',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672298997/noticon/wkzea0lvq4dbrvkxfvxx.png',
    keywords: 'anime‡jujutsu kaisen',
    date: '2022-12-29T07:29:59.146Z',
  },
  {
    uuid: 'noticon_zpj1m10mmiox2zzs4pkl',
    title: '귀멸의 칼날',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672299026/noticon/zpj1m10mmiox2zzs4pkl.png',
    keywords: 'anime‡demon slayer',
    date: '2022-12-29T07:30:30.069Z',
  },
  {
    uuid: 'noticon_ub49pnbldkpi9sxx5dx9',
    title: '스파이패밀리',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672299055/noticon/ub49pnbldkpi9sxx5dx9.png',
    keywords: 'anime‡spy family',
    date: '2022-12-29T07:30:56.870Z',
  },
  {
    uuid: 'noticon_aoc6xcsqelbtgiecsvc3',
    title: 'Ansistrano',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672299371/noticon/aoc6xcsqelbtgiecsvc3.png',
    keywords: '‡',
    date: '2022-12-29T07:36:13.466Z',
  },
  {
    uuid: 'noticon_teodhy8jjulfp8llazj5',
    title: '블랙 클로버',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672299459/noticon/teodhy8jjulfp8llazj5.png',
    keywords: 'anime‡black clover',
    date: '2022-12-29T07:37:42.118Z',
  },
  {
    uuid: 'noticon_sxv9eahcnvjvd7xgmsnq',
    title: '바니타스의 수기',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672299560/noticon/sxv9eahcnvjvd7xgmsnq.png',
    keywords: 'anime‡vanitas',
    date: '2022-12-29T07:39:22.703Z',
  },
  {
    uuid: 'noticon_htehmpxs3gnjyhhnhppw',
    title: '체인소맨',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672299629/noticon/htehmpxs3gnjyhhnhppw.png',
    keywords: 'anime‡chainsaw man',
    date: '2022-12-29T07:40:32.299Z',
  },
  {
    uuid: 'noticon_xiabaovttnezdgoua0tq',
    title: '오늘부터 신령님',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672299706/noticon/xiabaovttnezdgoua0tq.png',
    keywords: 'anime‡kamisama kiss',
    date: '2022-12-29T07:41:48.571Z',
  },
  {
    uuid: 'noticon_ju5nayctwtonfdt4m0s2',
    title: '새벽의 연화',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672299902/noticon/ju5nayctwtonfdt4m0s2.png',
    keywords: 'anime‡yona',
    date: '2022-12-29T07:45:04.817Z',
  },
  {
    uuid: 'noticon_lzgmyc92hbueiben1i8l',
    title: '나츠메우인장',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672299934/noticon/lzgmyc92hbueiben1i8l.png',
    keywords: 'anime‡natsume',
    date: '2022-12-29T07:45:36.344Z',
  },
  {
    uuid: 'noticon_oezs83gpj0fnanb8ftof',
    title: '불꽃소방대',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672300162/noticon/oezs83gpj0fnanb8ftof.png',
    keywords: 'anime‡fire force',
    date: '2022-12-29T07:49:24.551Z',
  },
  {
    uuid: 'noticon_rxdmlqdwblopuq5lvcac',
    title: '실력지상주의 교실',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672300195/noticon/rxdmlqdwblopuq5lvcac.png',
    keywords: 'anime‡',
    date: '2022-12-29T07:49:57.089Z',
  },
  {
    uuid: 'noticon_ur9vnprwyoauyrbuz0ii',
    title: '천관사복',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672300240/noticon/ur9vnprwyoauyrbuz0ii.png',
    keywords: 'anime‡tian guan ci fu',
    date: '2022-12-29T07:50:42.246Z',
  },
  {
    uuid: 'noticon_bb6yv07usnzarzcvm3fw',
    title: '불쾌한 모노노케안',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672300281/noticon/bb6yv07usnzarzcvm3fw.png',
    keywords: 'anime‡mononokean',
    date: '2022-12-29T07:51:24.779Z',
  },
  {
    uuid: 'noticon_g2yndtdkpfywmxu8pyes',
    title: '청의 엑소시스트',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672300319/noticon/g2yndtdkpfywmxu8pyes.png',
    keywords: 'anime‡blue exorcist',
    date: '2022-12-29T07:52:01.370Z',
  },
  {
    uuid: 'noticon_mjcw2gf3yaka2mqk831a',
    title: '사이키 쿠스오',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672300402/noticon/mjcw2gf3yaka2mqk831a.png',
    keywords: 'anime‡saiki kusuo',
    date: '2022-12-29T07:53:24.421Z',
  },
  {
    uuid: 'noticon_j4ydf3zfgfeyvaqof1pp',
    title: 'Algorithm',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672320579/noticon/j4ydf3zfgfeyvaqof1pp.png',
    keywords: '‡',
    date: '2022-12-29T13:29:42.093Z',
  },
  {
    uuid: 'noticon_wg8oczvevrvjtbvkiskk',
    title: 'OpenAI',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672321451/noticon/wg8oczvevrvjtbvkiskk.png',
    keywords: 'OpenAI‡gpt',
    date: '2022-12-29T13:44:14.120Z',
  },
  {
    uuid: 'noticon_ztxraeoixomlns0uyluc',
    title: '인하대',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672378146/noticon/ztxraeoixomlns0uyluc.png',
    keywords: '‡',
    date: '2022-12-30T05:29:09.535Z',
  },
  {
    uuid: 'noticon_iecq1tetlgonhce6mkf9',
    title: 'ecs',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672475949/noticon/iecq1tetlgonhce6mkf9.png',
    keywords: 'was‡ecs',
    date: '2022-12-31T08:39:11.607Z',
  },
  {
    uuid: 'noticon_b41fuvhflaazvsl0pkoj',
    title: 'Seotar_jihoon1',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672488839/noticon/b41fuvhflaazvsl0pkoj.png',
    keywords: 'Jukoyakki‡Jukoyakki',
    date: '2022-12-31T12:14:02.339Z',
  },
  {
    uuid: 'noticon_fizyui1sokm46kupvfm1',
    title: '두뇌 풀가동',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672496868/noticon/fizyui1sokm46kupvfm1.gif',
    keywords: '‡',
    date: '2022-12-31T14:27:52.881Z',
  },
  {
    uuid: 'noticon_ie9wxrbc57wwdlranriw',
    title: 'V LIVE',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672658661/noticon/ie9wxrbc57wwdlranriw.png',
    keywords: '브이앱,vlive‡',
    date: '2023-01-02T11:24:23.996Z',
  },
  {
    uuid: 'noticon_f7qzxtffnvzvxyoovk1n',
    title: '빅픽처(Big picture)',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672663155/noticon/f7qzxtffnvzvxyoovk1n.png',
    keywords: '‡네이버TV 빅픽처 많관부',
    date: '2023-01-02T12:39:17.203Z',
  },
  {
    uuid: 'noticon_clm4mhgtsawjt5dcdjde',
    title: 'T3Q',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672810389/noticon/clm4mhgtsawjt5dcdjde.png',
    keywords: 't3q‡',
    date: '2023-01-04T05:33:12.329Z',
  },
  {
    uuid: 'noticon_tedfhygauys2izibezxz',
    title: '몰?루',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672813236/noticon/tedfhygauys2izibezxz.png',
    keywords: '몰루‡몰?루',
    date: '2023-01-04T06:20:38.139Z',
  },
  {
    uuid: 'noticon_aijrspnlqgls1gflhtfv',
    title: 'render',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672844292/noticon/aijrspnlqgls1gflhtfv.png',
    keywords: '‡',
    date: '2023-01-04T14:58:15.445Z',
  },
  {
    uuid: 'noticon_gyjbwsbt9ltsbvauyqe9',
    title: '새해복많이',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672884371/noticon/gyjbwsbt9ltsbvauyqe9.gif',
    keywords: '라이언‡춘식이',
    date: '2023-01-05T02:06:14.420Z',
  },
  {
    uuid: 'noticon_hqcv5pvvzljjzvlsvfqt',
    title: 'big tech solution',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672918755/noticon/hqcv5pvvzljjzvlsvfqt.png',
    keywords: 'bts‡외주',
    date: '2023-01-05T11:39:17.441Z',
  },
  {
    uuid: 'noticon_g26hvfacg9raxbgtrkj8',
    title: '가스배달',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672982960/noticon/g26hvfacg9raxbgtrkj8.png',
    keywords: '‡',
    date: '2023-01-06T05:29:23.527Z',
  },
  {
    uuid: 'noticon_ohlm3ggt1svqbl9yc7oq',
    title: 'xbox',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1672983799/noticon/ohlm3ggt1svqbl9yc7oq.png',
    keywords: 'xbox‡microsoft',
    date: '2023-01-06T05:43:21.500Z',
  },
  {
    uuid: 'noticon_qklmfetkogotmbeo9qqg',
    title: 'Wireguard',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1673060247/noticon/qklmfetkogotmbeo9qqg.png',
    keywords: 'VPN‡',
    date: '2023-01-07T02:57:29.892Z',
  },
  {
    uuid: 'noticon_unuthboi4i00dbrwdwjz',
    title: 'PowerDNS',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1673060303/noticon/unuthboi4i00dbrwdwjz.png',
    keywords: 'DNS‡',
    date: '2023-01-07T02:58:24.939Z',
  },
  {
    uuid: 'noticon_blivjd8kse7iv9cqfvd1',
    title: 'note',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1673081383/noticon/blivjd8kse7iv9cqfvd1.png',
    keywords: 'note‡ノート',
    date: '2023-01-07T08:49:45.365Z',
  },
  {
    uuid: 'noticon_iqrrp7ziu0xuvltesgbs',
    title: 'note',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1673081460/noticon/iqrrp7ziu0xuvltesgbs.png',
    keywords: 'note‡note',
    date: '2023-01-07T08:51:02.645Z',
  },
  {
    uuid: 'noticon_zz23dysikmrwbcuyp0rt',
    title: 'zenn',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1673089395/noticon/zz23dysikmrwbcuyp0rt.png',
    keywords: 'zenn‡',
    date: '2023-01-07T11:03:18.144Z',
  },
  {
    uuid: 'noticon_qofjq9lrouaqgzqwvvc0',
    title: 'qiita',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1673089501/noticon/qofjq9lrouaqgzqwvvc0.png',
    keywords: 'qiita‡qiita',
    date: '2023-01-07T11:05:04.255Z',
  },
  {
    uuid: 'noticon_heee79izuv4xyrxlxaeh',
    title: '돈벌기힘든박명수',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1673148856/noticon/heee79izuv4xyrxlxaeh.png',
    keywords: '박명수‡',
    date: '2023-01-08T03:34:18.784Z',
  },
  {
    uuid: 'noticon_yooplpn4mqdlhxbumeyn',
    title: '놀고싶은박명수',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1673148902/noticon/yooplpn4mqdlhxbumeyn.png',
    keywords: '박명수‡',
    date: '2023-01-08T03:35:04.654Z',
  },
  {
    uuid: 'noticon_xrwkz1iqbo1o2sem862u',
    title: '하기싫은박명수',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1673148937/noticon/xrwkz1iqbo1o2sem862u.png',
    keywords: '박명수‡',
    date: '2023-01-08T03:35:40.521Z',
  },
  {
    uuid: 'noticon_wnvhtocelnlprdq4rowb',
    title: '그래도일해야하는박명수',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1673149265/noticon/wnvhtocelnlprdq4rowb.png',
    keywords: '박명수‡',
    date: '2023-01-08T03:41:07.215Z',
  },
  {
    uuid: 'noticon_fbijkewzaggkdzextbhv',
    title: 'github',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1673231934/noticon/fbijkewzaggkdzextbhv.png',
    keywords: 'github‡github',
    date: '2023-01-09T02:38:57.425Z',
  },
  {
    uuid: 'noticon_uj1sljza7nnsj0lpilwk',
    title: 'GitHub actions',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1673248072/noticon/uj1sljza7nnsj0lpilwk.png',
    keywords: 'github‡actions',
    date: '2023-01-09T07:07:55.232Z',
  },
  {
    uuid: 'noticon_qemkmpoonqjg6wz3e8p3',
    title: 'vpc',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1673248694/noticon/qemkmpoonqjg6wz3e8p3.png',
    keywords: 'vpc‡',
    date: '2023-01-09T07:18:17.318Z',
  },
  {
    uuid: 'noticon_vsl2ow2xjdftvvbkm7zv',
    title: 'cluster',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1673248723/noticon/vsl2ow2xjdftvvbkm7zv.png',
    keywords: 'cluster‡',
    date: '2023-01-09T07:18:45.803Z',
  },
  {
    uuid: 'noticon_atml6eff8fcwstxdubyn',
    title: 'kakao',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1673268920/noticon/atml6eff8fcwstxdubyn.png',
    keywords: '‡',
    date: '2023-01-09T12:55:22.615Z',
  },
  {
    uuid: 'noticon_ebb6dgn76kdahm2ocgwd',
    title: 'heart',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1673274615/noticon/ebb6dgn76kdahm2ocgwd.gif',
    keywords: '‡',
    date: '2023-01-09T14:30:18.587Z',
  },
  {
    uuid: 'noticon_plbq0h5fydvtlkgopykl',
    title: 'ASPNET Core',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1673285507/noticon/plbq0h5fydvtlkgopykl.png',
    keywords: '‡',
    date: '2023-01-09T17:31:49.390Z',
  },
  {
    uuid: 'noticon_yecey0v45hjsyzeeognr',
    title: 'AWS App Mesh',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1673318248/noticon/yecey0v45hjsyzeeognr.png',
    keywords: '‡',
    date: '2023-01-10T02:37:30.668Z',
  },
  {
    uuid: 'noticon_ftamtkgxm4bl9kynfiuv',
    title: 'Data',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1673333337/noticon/ftamtkgxm4bl9kynfiuv.gif',
    keywords: '‡',
    date: '2023-01-10T06:49:00.517Z',
  },
  {
    uuid: 'noticon_ylhtqsyb5axaq6qnaul7',
    title: 'Calender',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1673333434/noticon/ylhtqsyb5axaq6qnaul7.gif',
    keywords: '‡',
    date: '2023-01-10T06:50:38.305Z',
  },
  {
    uuid: 'noticon_o4m1l5lzvgpi68akwdfs',
    title: 'Progress',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1673333528/noticon/o4m1l5lzvgpi68akwdfs.gif',
    keywords: '‡',
    date: '2023-01-10T06:52:10.739Z',
  },
  {
    uuid: 'noticon_l6ahh7rgqxaozhotohku',
    title: 'ring',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1673333663/noticon/l6ahh7rgqxaozhotohku.gif',
    keywords: '‡',
    date: '2023-01-10T06:54:25.716Z',
  },
  {
    uuid: 'noticon_zoprrjwjriggsgndsmqw',
    title: 'sakura',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1673333857/noticon/zoprrjwjriggsgndsmqw.gif',
    keywords: '‡',
    date: '2023-01-10T06:57:39.849Z',
  },
  {
    uuid: 'noticon_gz0w4ypccvxn42glchmv',
    title: 'sakura',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1673333877/noticon/gz0w4ypccvxn42glchmv.gif',
    keywords: '‡',
    date: '2023-01-10T06:57:59.312Z',
  },
  {
    uuid: 'noticon_cptglqyur8gawxrrteut',
    title: 'sakura',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1673333971/noticon/cptglqyur8gawxrrteut.gif',
    keywords: '‡',
    date: '2023-01-10T06:59:33.880Z',
  },
  {
    uuid: 'noticon_ftoiwdw09co3cunifudf',
    title: 'books',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1673344675/noticon/ftoiwdw09co3cunifudf.gif',
    keywords: '‡',
    date: '2023-01-10T09:57:57.947Z',
  },
  {
    uuid: 'noticon_ccssth6hocpzint8orqr',
    title: 'ｃｈｅｃｋ',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1673349608/noticon/ccssth6hocpzint8orqr.gif',
    keywords: '‡',
    date: '2023-01-10T11:20:12.233Z',
  },
  {
    uuid: 'noticon_hlbbnmuk3bxscr4758ww',
    title: 'copycat',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1673357569/noticon/hlbbnmuk3bxscr4758ww.png',
    keywords: 'copycat‡copycat',
    date: '2023-01-10T13:32:52.423Z',
  },
  {
    uuid: 'noticon_crfruss97cdhosajldai',
    title: 'Funny moment',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1673695010/noticon/crfruss97cdhosajldai.gif',
    keywords: '‡',
    date: '2023-01-14T11:16:56.291Z',
  },
  {
    uuid: 'noticon_ytkytvwxhgw9arbi9dfp',
    title: '이누X보쿠 SS 포스터',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1673758417/noticon/ytkytvwxhgw9arbi9dfp.png',
    keywords: '애니‡anime',
    date: '2023-01-15T04:53:39.079Z',
  },
  {
    uuid: 'noticon_krfa7ekcsl87sglvocvb',
    title: 'preneu',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1673840486/noticon/krfa7ekcsl87sglvocvb.png',
    keywords: 'drone‡프리뉴',
    date: '2023-01-16T03:41:28.635Z',
  },
  {
    uuid: 'noticon_odigf5gd876zlzfd5s8n',
    title: '포옹',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1673883487/noticon/odigf5gd876zlzfd5s8n.png',
    keywords: '‡',
    date: '2023-01-16T15:38:09.611Z',
  },
  {
    uuid: 'noticon_by4usz4cyk4igc2zwihp',
    title: 'EPLAN',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1673925781/noticon/by4usz4cyk4igc2zwihp.png',
    keywords: '‡',
    date: '2023-01-17T03:23:03.895Z',
  },
  {
    uuid: 'noticon_yvmmtnuqwsg0wnjs5qic',
    title: '뱅크샐러드',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1674055874/noticon/yvmmtnuqwsg0wnjs5qic.png',
    keywords: '‡',
    date: '2023-01-18T15:31:17.328Z',
  },
  {
    uuid: 'noticon_u6nnucmcgcz2h2cbklgx',
    title: 'A',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1674214304/noticon/u6nnucmcgcz2h2cbklgx.png',
    keywords: '‡',
    date: '2023-01-20T11:31:46.457Z',
  },
  {
    uuid: 'noticon_wzrhdlhy893azct6jf2t',
    title: 'b',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1674215955/noticon/wzrhdlhy893azct6jf2t.png',
    keywords: '‡',
    date: '2023-01-20T11:59:17.860Z',
  },
  {
    uuid: 'noticon_p83tkujwyqtqpgbfj482',
    title: 'c',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1674216169/noticon/p83tkujwyqtqpgbfj482.png',
    keywords: '‡',
    date: '2023-01-20T12:02:51.379Z',
  },
  {
    uuid: 'noticon_kltoix80dsmrbilm3yfx',
    title: 'd',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1674216551/noticon/kltoix80dsmrbilm3yfx.png',
    keywords: '‡',
    date: '2023-01-20T12:09:13.277Z',
  },
  {
    uuid: 'noticon_eqtz4nzsthlbnzjsm9os',
    title: '여기, 우리 (w. text)',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1674462279/noticon/eqtz4nzsthlbnzjsm9os.png',
    keywords: '여기우리‡여기 우리',
    date: '2023-01-23T08:24:41.913Z',
  },
  {
    uuid: 'noticon_u7y2lmkptqruf0hmwbzt',
    title: 'Notion AI',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1674651583/noticon/u7y2lmkptqruf0hmwbzt.png',
    keywords: 'Notion‡',
    date: '2023-01-25T12:59:45.143Z',
  },
  {
    uuid: 'noticon_qrltqsudwegfpgridmbq',
    title: 'PyTorch',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1674989940/noticon/qrltqsudwegfpgridmbq.png',
    keywords: 'python‡ml',
    date: '2023-01-29T10:59:03.240Z',
  },
  {
    uuid: 'noticon_fumdyys0z6it2rfji8ec',
    title: 'realworld',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1675001054/noticon/fumdyys0z6it2rfji8ec.png',
    keywords: '‡',
    date: '2023-01-29T14:04:16.859Z',
  },
  {
    uuid: 'noticon_u4o9bfvs4pcxpsqpyyak',
    title: 'dog',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1675148773/noticon/u4o9bfvs4pcxpsqpyyak.gif',
    keywords: 'funny‡gif',
    date: '2023-01-31T07:06:18.324Z',
  },
  {
    uuid: 'noticon_r8b6m8qwrdkfwguon9az',
    title: 'Anaconda_simple',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1675214770/noticon/r8b6m8qwrdkfwguon9az.png',
    keywords: '‡',
    date: '2023-02-01T01:26:12.155Z',
  },
  {
    uuid: 'noticon_wgvjgwcplbgftga12jd8',
    title: 'Jotai',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1675253216/noticon/wgvjgwcplbgftga12jd8.png',
    keywords: 'state‡react',
    date: '2023-02-01T12:06:58.283Z',
  },
  {
    uuid: 'noticon_gg2mfsvpu2aje4f8rpuc',
    title: 'zustand',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1675253316/noticon/gg2mfsvpu2aje4f8rpuc.png',
    keywords: 'state‡react',
    date: '2023-02-01T12:08:38.508Z',
  },
  {
    uuid: 'noticon_xop6xmpgdlmkj3swdmlg',
    title: '단축어',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1675588834/noticon/xop6xmpgdlmkj3swdmlg.png',
    keywords: 'shortcut‡애플 단축어 apple',
    date: '2023-02-05T09:20:36.506Z',
  },
  {
    uuid: 'noticon_xvubx518cxd9uv8svlxi',
    title: 'location pin',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1675619408/noticon/xvubx518cxd9uv8svlxi.png',
    keywords: 'map‡pin',
    date: '2023-02-05T17:50:10.189Z',
  },
  {
    uuid: 'noticon_u82erqqjqenncbj5s4h4',
    title: 'Vertica',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1675628312/noticon/u82erqqjqenncbj5s4h4.png',
    keywords: 'data warehouse ‡sql',
    date: '2023-02-05T20:18:34.793Z',
  },
  {
    uuid: 'noticon_mgri5r6jcsssz27mpqal',
    title: 'xslt',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1675633271/noticon/mgri5r6jcsssz27mpqal.png',
    keywords: 'xsl‡xml',
    date: '2023-02-05T21:41:13.742Z',
  },
  {
    uuid: 'noticon_y5ijrqqj7o5zqp0op7zt',
    title: 'Human Json',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1675633648/noticon/y5ijrqqj7o5zqp0op7zt.png',
    keywords: 'json‡xml',
    date: '2023-02-05T21:47:30.674Z',
  },
  {
    uuid: 'noticon_i0upczj175clueufo46p',
    title: '메가박스',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1675659868/noticon/i0upczj175clueufo46p.png',
    keywords: '‡',
    date: '2023-02-06T05:04:30.607Z',
  },
  {
    uuid: 'noticon_uvzzqnrluixgy2fvgsyg',
    title: 'ssugar logo',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1675669586/noticon/uvzzqnrluixgy2fvgsyg.png',
    keywords: '슈가 로고‡아카펠라 슈가',
    date: '2023-02-06T07:46:28.328Z',
  },
  {
    uuid: 'noticon_dfop4b2kk8apbyhdkwnq',
    title: 're-ssugar',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1675669782/noticon/dfop4b2kk8apbyhdkwnq.png',
    keywords: '슈가‡아카펠라',
    date: '2023-02-06T07:49:43.804Z',
  },
  {
    uuid: 'noticon_ijwdrow9stxqd5hod4eo',
    title: 'pink-blue ssugar ',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1675670547/noticon/ijwdrow9stxqd5hod4eo.png',
    keywords: '슈가‡아카펠라',
    date: '2023-02-06T08:02:29.758Z',
  },
  {
    uuid: 'noticon_nchx7zp3jhilodj7dvuu',
    title: 're-pink-blue ssugar ',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1675670711/noticon/nchx7zp3jhilodj7dvuu.png',
    keywords: '슈가‡아카펠라',
    date: '2023-02-06T08:05:14.114Z',
  },
  {
    uuid: 'noticon_pnia6sw66p8bzgkyqiys',
    title: 'Motor',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1675736555/noticon/pnia6sw66p8bzgkyqiys.png',
    keywords: '‡',
    date: '2023-02-07T02:22:39.181Z',
  },
  {
    uuid: 'noticon_nc2vwcisnxqucfacxhnk',
    title: '무',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1675771979/noticon/nc2vwcisnxqucfacxhnk.png',
    keywords: 'noting‡',
    date: '2023-02-07T12:13:03.201Z',
  },
  {
    uuid: 'noticon_ytzyxqqmy2mwokmzxxlf',
    title: 'PRESSU',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1675954519/noticon/ytzyxqqmy2mwokmzxxlf.png',
    keywords: '프레슈‡프레슈 로고',
    date: '2023-02-09T14:55:22.593Z',
  },
  {
    uuid: 'noticon_zd2khh8fw4p0gaamsmwt',
    title: 'Cat',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1676003382/noticon/zd2khh8fw4p0gaamsmwt.gif',
    keywords: 'fun‡animal',
    date: '2023-02-10T04:29:46.173Z',
  },
  {
    uuid: 'noticon_otfjjpncopsq5r7czb6f',
    title: '위버스샵',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1676020806/noticon/otfjjpncopsq5r7czb6f.png',
    keywords: '위버스샵‡Weverseshop',
    date: '2023-02-10T09:20:07.993Z',
  },
  {
    uuid: 'noticon_dq1rqtsnwz4stgtcqvwk',
    title: '위버스2.0',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1676020954/noticon/dq1rqtsnwz4stgtcqvwk.png',
    keywords: '위버스‡weverse',
    date: '2023-02-10T09:22:36.671Z',
  },
  {
    uuid: 'noticon_fgkrytwdkobbg22uotyy',
    title: '포닝',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1676021054/noticon/fgkrytwdkobbg22uotyy.png',
    keywords: '포닝‡phoning',
    date: '2023-02-10T09:24:16.709Z',
  },
  {
    uuid: 'noticon_t1clrbjisjr6r5x2pzjx',
    title: 'slider',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1676044879/noticon/t1clrbjisjr6r5x2pzjx.png',
    keywords: '‡',
    date: '2023-02-10T16:01:21.679Z',
  },
  {
    uuid: 'noticon_ppddf2gh18jw5tgvftpi',
    title: 'gallery',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1676045065/noticon/ppddf2gh18jw5tgvftpi.png',
    keywords: '‡',
    date: '2023-02-10T16:04:27.831Z',
  },
  {
    uuid: 'noticon_njtkowuxj8vuihnir34f',
    title: 'beckhoff',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1676252446/noticon/njtkowuxj8vuihnir34f.png',
    keywords: '‡',
    date: '2023-02-13T01:40:48.734Z',
  },
  {
    uuid: 'noticon_mki3kjftxn1ext0gdni4',
    title: 'IAR',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1676281689/noticon/mki3kjftxn1ext0gdni4.png',
    keywords: '‡',
    date: '2023-02-13T09:48:11.772Z',
  },
  {
    uuid: 'noticon_lb81ixyjvlbxjo3xvnlj',
    title: 'ticktick',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1676427813/noticon/lb81ixyjvlbxjo3xvnlj.png',
    keywords: 'ticktick‡TickTick',
    date: '2023-02-15T02:23:35.367Z',
  },
  {
    uuid: 'noticon_aenbe7ygpyatqbp54k7o',
    title: 'BigdataBot',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1676446749/noticon/aenbe7ygpyatqbp54k7o.png',
    keywords: 'robot‡ai, ml, deeplearning, big data',
    date: '2023-02-15T07:39:12.317Z',
  },
  {
    uuid: 'noticon_fra0gg7zmpzlegbrzurq',
    title: 'Dark BigdataBot',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1676446867/noticon/fra0gg7zmpzlegbrzurq.png',
    keywords: 'robot‡ai, dark side',
    date: '2023-02-15T07:41:09.086Z',
  },
  {
    uuid: 'noticon_uqbvbxr1eyay6tsghkv6',
    title: '사이냅 문서 뷰어',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1676524706/noticon/uqbvbxr1eyay6tsghkv6.png',
    keywords: 'SynapDocumentViewer‡사이냅 도큐먼트 뷰어',
    date: '2023-02-16T05:18:28.407Z',
  },
  {
    uuid: 'noticon_qogokhh9apc7n6zvcdpl',
    title: 'dog',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1676558072/noticon/qogokhh9apc7n6zvcdpl.gif',
    keywords: 'funny‡',
    date: '2023-02-16T14:34:35.830Z',
  },
  {
    uuid: 'noticon_h5idsttmczta69x0hrxr',
    title: 'doxygen',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1676610767/noticon/h5idsttmczta69x0hrxr.png',
    keywords: '‡',
    date: '2023-02-17T05:12:49.445Z',
  },
  {
    uuid: 'noticon_wnvkqrt7zdwenqsey7hn',
    title: 'ASIX',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1676611121/noticon/wnvkqrt7zdwenqsey7hn.png',
    keywords: '‡',
    date: '2023-02-17T05:18:44.601Z',
  },
  {
    uuid: 'noticon_x9kucioggesnul3mx6qn',
    title: 'VBA',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1676717176/noticon/x9kucioggesnul3mx6qn.png',
    keywords: '‡',
    date: '2023-02-18T10:46:19.118Z',
  },
  {
    uuid: 'noticon_snjgq0uosicyimlpg580',
    title: 'AppsFlyer',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1676882546/noticon/snjgq0uosicyimlpg580.png',
    keywords: 'AF‡',
    date: '2023-02-20T08:42:30.122Z',
  },
  {
    uuid: 'noticon_u4wasw8xn3tedyuikacr',
    title: 'CocoaPod',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1676898048/noticon/u4wasw8xn3tedyuikacr.png',
    keywords: '‡',
    date: '2023-02-20T13:00:51.489Z',
  },
  {
    uuid: 'noticon_dkhfrlinvtcqj578ywtk',
    title:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566914615/noticon/pogcyufuizgdsl9m5u2w.jpg',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1676966270/noticon/dkhfrlinvtcqj578ywtk.png',
    keywords:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566914615/noticon/pogcyufuizgdsl9m5u2w.jpg‡https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566914615/noticon/pogcyufuizgdsl9m5u2w.jpg',
    date: '2023-02-21T07:57:52.921Z',
  },
  {
    uuid: 'noticon_gdq4xi8msuhfqfiwypam',
    title: 'Jira',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1676966453/noticon/gdq4xi8msuhfqfiwypam.png',
    keywords: 'Jira‡Jira',
    date: '2023-02-21T08:00:55.317Z',
  },
  {
    uuid: 'noticon_pefmcfk8t9n4srixyow4',
    title: 'dogg',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1676993073/noticon/pefmcfk8t9n4srixyow4.gif',
    keywords: 'funny‡',
    date: '2023-02-21T15:24:36.889Z',
  },
  {
    uuid: 'noticon_wh2eccogla8zaqyy7udm',
    title: 'Canal Frame',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1677135242/noticon/wh2eccogla8zaqyy7udm.png',
    keywords: 'CJ‡CJ Olivenetworks',
    date: '2023-02-23T06:54:04.861Z',
  },
  {
    uuid: 'noticon_akkewxbqs8doz5hpnzcb',
    title: 'Canal Frame',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1677135498/noticon/akkewxbqs8doz5hpnzcb.png',
    keywords: 'CJ‡CJ Olivenetworks',
    date: '2023-02-23T06:58:21.289Z',
  },
  {
    uuid: 'noticon_jlydxz4tj32rckvhsobf',
    title: 'dog',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1677379622/noticon/jlydxz4tj32rckvhsobf.gif',
    keywords: 'cute‡funny',
    date: '2023-02-26T02:47:08.633Z',
  },
  {
    uuid: 'noticon_ea5cajzpklxgucnisgy4',
    title: 'axios',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1677561097/noticon/ea5cajzpklxgucnisgy4.png',
    keywords: 'axios‡',
    date: '2023-02-28T05:11:39.878Z',
  },
  {
    uuid: 'noticon_p1rifacfx9jaetxduiai',
    title: 'axiod',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1677561248/noticon/p1rifacfx9jaetxduiai.png',
    keywords: 'axios‡',
    date: '2023-02-28T05:14:10.389Z',
  },
  {
    uuid: 'noticon_cycfz72hsszn4uc48svw',
    title: 'WebUI',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1677565853/noticon/cycfz72hsszn4uc48svw.png',
    keywords: '‡',
    date: '2023-02-28T06:30:55.809Z',
  },
  {
    uuid: 'noticon_mvmdem6ehurnbran2bhh',
    title: 'gnu',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1677678169/noticon/mvmdem6ehurnbran2bhh.png',
    keywords: 'gnu‡gnu',
    date: '2023-03-01T13:42:53.315Z',
  },
  {
    uuid: 'noticon_wu5buj9mnos3yererb2v',
    title: 'nextui',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1677722341/noticon/wu5buj9mnos3yererb2v.png',
    keywords: 'nextui‡',
    date: '2023-03-02T01:59:06.061Z',
  },
  {
    uuid: 'noticon_z65nwdh4i4wovmooohzx',
    title: 'Kream',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1677733913/noticon/z65nwdh4i4wovmooohzx.png',
    keywords: '크림‡',
    date: '2023-03-02T05:11:56.068Z',
  },
  {
    uuid: 'noticon_sljv0gtugvyhl82tbcwp',
    title: '부스트코스',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1677813215/noticon/sljv0gtugvyhl82tbcwp.png',
    keywords: 'boostcourse‡Boost Course',
    date: '2023-03-03T03:13:36.858Z',
  },
  {
    uuid: 'noticon_gnnzvfycmvjiuqnuvzx4',
    title: '개구리 커밋',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1677813459/noticon/gnnzvfycmvjiuqnuvzx4.png',
    keywords: '찢어버리는 커밋‡찢는 개구리',
    date: '2023-03-03T03:17:41.809Z',
  },
  {
    uuid: 'noticon_z1wvbmjlizsmcvmfksfq',
    title: '부시는 페페',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1677813562/noticon/z1wvbmjlizsmcvmfksfq.png',
    keywords: '부시는 개구리‡개구리',
    date: '2023-03-03T03:19:24.726Z',
  },
  {
    uuid: 'noticon_ildvsagpxobhkrurfzft',
    title: '미미',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1677847449/noticon/ildvsagpxobhkrurfzft.png',
    keywords: '‡',
    date: '2023-03-03T12:44:11.338Z',
  },
  {
    uuid: 'noticon_cur3jxy4iqnyvkf37rwn',
    title: 'MathCAD',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1677922127/noticon/cur3jxy4iqnyvkf37rwn.png',
    keywords: '‡',
    date: '2023-03-04T09:28:49.357Z',
  },
  {
    uuid: 'noticon_sjjfagdyzkchsvpcf6cm',
    title: '여기어때',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1678105567/noticon/sjjfagdyzkchsvpcf6cm.png',
    keywords: '‡',
    date: '2023-03-06T12:26:10.520Z',
  },
  {
    uuid: 'noticon_libe7tnaoqrz7slkyiur',
    title: '트립스토어',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1678176673/noticon/libe7tnaoqrz7slkyiur.png',
    keywords: 'TS‡엑스트라이버',
    date: '2023-03-07T08:11:14.814Z',
  },
  {
    uuid: 'noticon_fenra4zau2wyqushekwb',
    title: 'ChatGPT',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1678190474/noticon/fenra4zau2wyqushekwb.png',
    keywords: 'GPT‡',
    date: '2023-03-07T12:01:16.163Z',
  },
  {
    uuid: 'noticon_pnhqtga2lic9vmnpax87',
    title: 'ElastAlert',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1678239382/noticon/pnhqtga2lic9vmnpax87.png',
    keywords: 'Elasticsearch at Yelp‡',
    date: '2023-03-08T01:36:25.142Z',
  },
  {
    uuid: 'noticon_vzgg7opmikvw2s8phxwn',
    title: 'LDAP',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1678290297/noticon/vzgg7opmikvw2s8phxwn.png',
    keywords: '‡',
    date: '2023-03-08T15:45:00.883Z',
  },
  {
    uuid: 'noticon_mhktk6qhw7riqnvoufvt',
    title: '발란',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1678426574/noticon/mhktk6qhw7riqnvoufvt.png',
    keywords: 'BALAAN‡balaan',
    date: '2023-03-10T05:36:16.073Z',
  },
  {
    uuid: 'noticon_y49wccx51udsyteznx66',
    title: '머스트잇',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1678430450/noticon/y49wccx51udsyteznx66.png',
    keywords: '‡',
    date: '2023-03-10T06:40:52.881Z',
  },
  {
    uuid: 'noticon_ugqrtf9phazahipuorcj',
    title: 'Openstreetmap',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1678578202/noticon/ugqrtf9phazahipuorcj.png',
    keywords: 'osm‡',
    date: '2023-03-11T23:43:24.343Z',
  },
  {
    uuid: 'noticon_hwa6oqhqea4eapchm11c',
    title: 'fint',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1678618651/noticon/hwa6oqhqea4eapchm11c.png',
    keywords: '핀트‡',
    date: '2023-03-12T10:57:34.580Z',
  },
  {
    uuid: 'noticon_z7fnvw1vsqcbiovjdd7d',
    title: 'fomantic-ui',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1678672331/noticon/z7fnvw1vsqcbiovjdd7d.png',
    keywords: 'ui‡',
    date: '2023-03-13T01:52:13.089Z',
  },
  {
    uuid: 'noticon_qblxu9uo0uuitucuzhjy',
    title: 'CSS',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1678672480/noticon/qblxu9uo0uuitucuzhjy.png',
    keywords: 'css‡',
    date: '2023-03-13T01:54:42.511Z',
  },
  {
    uuid: 'noticon_pdiqhfgy1vulw4wluwti',
    title: 'JS',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1678672516/noticon/pdiqhfgy1vulw4wluwti.png',
    keywords: 'JS‡',
    date: '2023-03-13T01:55:18.256Z',
  },
  {
    uuid: 'noticon_mlc9jql2ail7kkghfgo8',
    title: '테이블링',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1678701293/noticon/mlc9jql2ail7kkghfgo8.png',
    keywords: 'tableling‡TableLing',
    date: '2023-03-13T09:54:55.265Z',
  },
  {
    uuid: 'noticon_sv2elpeaczk647sd4jvb',
    title: '아임인',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1678709088/noticon/sv2elpeaczk647sd4jvb.png',
    keywords: '‡',
    date: '2023-03-13T12:04:52.724Z',
  },
  {
    uuid: 'noticon_rofp1avgm3kadtrzm9gz',
    title: 'require',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1678781749/noticon/rofp1avgm3kadtrzm9gz.png',
    keywords: 'amd‡require.js',
    date: '2023-03-14T08:15:51.854Z',
  },
  {
    uuid: 'noticon_dvn4nami8udsjew5nvs3',
    title: 'chromecast',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1678847196/noticon/dvn4nami8udsjew5nvs3.png',
    keywords: '‡',
    date: '2023-03-15T02:26:38.620Z',
  },
  {
    uuid: 'noticon_azqu2xjpu2cu6pg1s5pw',
    title: '삼쩜삼',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1678864630/noticon/azqu2xjpu2cu6pg1s5pw.png',
    keywords: '3.3‡',
    date: '2023-03-15T07:17:12.461Z',
  },
  {
    uuid: 'noticon_bjfdonohdvheyff13csn',
    title: '3.3',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1678864947/noticon/bjfdonohdvheyff13csn.png',
    keywords: '삼쩜삼‡어플',
    date: '2023-03-15T07:22:29.577Z',
  },
  {
    uuid: 'noticon_vanxd61ra2r2q0fk6fp3',
    title: 'wxPython',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1678872012/noticon/vanxd61ra2r2q0fk6fp3.png',
    keywords: 'GUI‡Python',
    date: '2023-03-15T09:20:14.270Z',
  },
  {
    uuid: 'noticon_djktfvwkucweayghi7mv',
    title: 'cloudwatch',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1678926785/noticon/djktfvwkucweayghi7mv.png',
    keywords: '‡',
    date: '2023-03-16T00:33:07.168Z',
  },
  {
    uuid: 'noticon_lwx3tduvp6o5po8jzcry',
    title: '올웨이즈',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1679049201/noticon/lwx3tduvp6o5po8jzcry.png',
    keywords: '올팜‡올웨이즈',
    date: '2023-03-17T10:33:23.082Z',
  },
  {
    uuid: 'noticon_wdpqlwmnqopgwgttdjgz',
    title: 'dream-coding',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1679114426/noticon/wdpqlwmnqopgwgttdjgz.png',
    keywords: 'dream coding‡ellie',
    date: '2023-03-18T04:40:28.679Z',
  },
  {
    uuid: 'noticon_erhq1fuhprry8dhq925n',
    title: 'coffeebean',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1679282106/noticon/erhq1fuhprry8dhq925n.png',
    keywords: '커피빈‡',
    date: '2023-03-20T03:15:10.353Z',
  },
  {
    uuid: 'noticon_kemb6ph8gf1f18tpq7qk',
    title: 'sparkplus',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1679282234/noticon/kemb6ph8gf1f18tpq7qk.png',
    keywords: '스파크플러스‡',
    date: '2023-03-20T03:17:23.311Z',
  },
  {
    uuid: 'noticon_cvvrwlybmfv7xcsd23ko',
    title: 'testflight',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1679302269/noticon/cvvrwlybmfv7xcsd23ko.png',
    keywords: '‡',
    date: '2023-03-20T08:51:12.362Z',
  },
  {
    uuid: 'noticon_rx8rni4npifrbo9ckxmt',
    title: 'Vercel',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1679312641/noticon/rx8rni4npifrbo9ckxmt.png',
    keywords: 'vercel‡',
    date: '2023-03-20T11:44:03.454Z',
  },
  {
    uuid: 'noticon_h6c9i8twemwhw6htnfes',
    title: 'CJ',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1679361027/noticon/h6c9i8twemwhw6htnfes.png',
    keywords: '‡',
    date: '2023-03-21T01:10:30.493Z',
  },
  {
    uuid: 'noticon_jfq8o4zjmldyyhdf252k',
    title: 'CJ(배경제거)',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1679361141/noticon/jfq8o4zjmldyyhdf252k.png',
    keywords: '‡',
    date: '2023-03-21T01:12:22.909Z',
  },
  {
    uuid: 'noticon_n50ihj9dxna13tsaslcx',
    title: '트래블 월렛',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1679467493/noticon/n50ihj9dxna13tsaslcx.png',
    keywords: 'travel pay‡travel walet',
    date: '2023-03-22T06:44:55.249Z',
  },
  {
    uuid: 'noticon_arqfoi6i7gubuqkpigud',
    title: 'Vite',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1679535484/noticon/arqfoi6i7gubuqkpigud.png',
    keywords: '‡',
    date: '2023-03-23T01:38:06.638Z',
  },
  {
    uuid: 'noticon_xn4xmranu4aulf1n9v75',
    title: '링글',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1679543256/noticon/xn4xmranu4aulf1n9v75.png',
    keywords: '‡',
    date: '2023-03-23T03:47:37.844Z',
  },
  {
    uuid: 'noticon_yht9kczldkbhzewihbqr',
    title: 'book',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1679548596/noticon/yht9kczldkbhzewihbqr.gif',
    keywords: 'book‡reading',
    date: '2023-03-23T05:16:39.212Z',
  },
  {
    uuid: 'noticon_vnalgkshwbsotgyynd3a',
    title: 'McNorton',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1679551841/noticon/vnalgkshwbsotgyynd3a.png',
    keywords: '맥노턴‡mcnorton',
    date: '2023-03-23T06:10:44.900Z',
  },
  {
    uuid: 'noticon_es1djpkzywwafjy8frji',
    title: 'McNorton',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1679551896/noticon/es1djpkzywwafjy8frji.png',
    keywords: '맥노턴‡mcnorton',
    date: '2023-03-23T06:11:38.134Z',
  },
  {
    uuid: 'noticon_wryujqxq9ss8lpxgfd4b',
    title: 'cypress',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1679568282/noticon/wryujqxq9ss8lpxgfd4b.png',
    keywords: 'cypress‡',
    date: '2023-03-23T10:44:45.143Z',
  },
  {
    uuid: 'noticon_ylzkwd02dzfz7zboyiqg',
    title: 'password',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1679883626/noticon/ylzkwd02dzfz7zboyiqg.png',
    keywords: '‡',
    date: '2023-03-27T02:20:28.404Z',
  },
  {
    uuid: 'noticon_gswic0tq9utakmwtkzgz',
    title: '세탁특공대',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1679902157/noticon/gswic0tq9utakmwtkzgz.png',
    keywords: '‡',
    date: '2023-03-27T07:29:19.365Z',
  },
  {
    uuid: 'noticon_kigmcd11u72t2nkj289u',
    title: 'wolf',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1679920149/noticon/kigmcd11u72t2nkj289u.png',
    keywords: 'wolf‡wolf',
    date: '2023-03-27T12:29:12.581Z',
  },
  {
    uuid: 'noticon_pv6ys8udiqyugdqxkf5a',
    title: 'wolf_grey',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1679921139/noticon/pv6ys8udiqyugdqxkf5a.png',
    keywords: 'grey‡grey',
    date: '2023-03-27T12:45:42.033Z',
  },
  {
    uuid: 'noticon_sghhanzeomdtcdxsec7i',
    title: 'wolf_blue',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1679921198/noticon/sghhanzeomdtcdxsec7i.png',
    keywords: 'wolf‡wolf',
    date: '2023-03-27T12:46:40.782Z',
  },
  {
    uuid: 'noticon_gxyhpdgmlh2ebnovqyk8',
    title: 'paychat',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1679960433/noticon/gxyhpdgmlh2ebnovqyk8.png',
    keywords: '‡',
    date: '2023-03-27T23:40:35.299Z',
  },
  {
    uuid: 'noticon_bqbzhj9wnazmp5w8evp3',
    title: 'PADS',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1679999932/noticon/bqbzhj9wnazmp5w8evp3.png',
    keywords: '‡',
    date: '2023-03-28T10:38:55.192Z',
  },
  {
    uuid: 'noticon_hnagx81tzblvkacxrln1',
    title: 'pochacco',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1680011275/noticon/hnagx81tzblvkacxrln1.png',
    keywords: 'sanrio‡pochacco',
    date: '2023-03-28T13:47:58.366Z',
  },
  {
    uuid: 'noticon_a5dhlox6290aeljhoquy',
    title: 'whale',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1680011871/noticon/a5dhlox6290aeljhoquy.png',
    keywords: 'naver‡',
    date: '2023-03-28T13:57:53.870Z',
  },
  {
    uuid: 'noticon_mbzpdxhdxibc2zezbgte',
    title: '위피',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1680067864/noticon/mbzpdxhdxibc2zezbgte.png',
    keywords: 'WIPY‡',
    date: '2023-03-29T05:31:06.350Z',
  },
  {
    uuid: 'noticon_a10lm67aejaozk8wmup8',
    title: 'RelaxOn',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1680145147/noticon/a10lm67aejaozk8wmup8.png',
    keywords: 'RelaxOn‡RelaxOn',
    date: '2023-03-30T02:59:09.977Z',
  },
  {
    uuid: 'noticon_tpcypi2aqpkwns8jpixn',
    title: '카카오 웹툰',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1680163233/noticon/tpcypi2aqpkwns8jpixn.png',
    keywords: '‡',
    date: '2023-03-30T08:00:34.864Z',
  },
  {
    uuid: 'noticon_mxtqvziiqppvica4yz6h',
    title: '한옥',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1680260905/noticon/mxtqvziiqppvica4yz6h.png',
    keywords: '한국‡',
    date: '2023-03-31T11:08:28.895Z',
  },
  {
    uuid: 'noticon_oecy5s7tsgl1gyjqtxu8',
    title: 'DCASE',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1680352396/noticon/oecy5s7tsgl1gyjqtxu8.png',
    keywords: '‡',
    date: '2023-04-01T12:33:18.005Z',
  },
  {
    uuid: 'noticon_qsy0vcjydiwzwtbhoh0q',
    title: 'scavenger',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1680439736/noticon/qsy0vcjydiwzwtbhoh0q.png',
    keywords: 'naver‡',
    date: '2023-04-02T12:48:57.776Z',
  },
  {
    uuid: 'noticon_funrppbjkjcncpkfw8d4',
    title: 'nike run club',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1680515902/noticon/funrppbjkjcncpkfw8d4.png',
    keywords: '나이키런‡나이키런클럽',
    date: '2023-04-03T09:58:24.037Z',
  },
  {
    uuid: 'noticon_xwwloyi7ipwynogmozhq',
    title: 'bio auth',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1680578409/noticon/xwwloyi7ipwynogmozhq.png',
    keywords: '‡',
    date: '2023-04-04T03:20:11.258Z',
  },
  {
    uuid: 'noticon_p60bbc5rxxvm9felytfk',
    title: 'antd',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1680587151/noticon/p60bbc5rxxvm9felytfk.png',
    keywords: '‡',
    date: '2023-04-04T05:45:54.024Z',
  },
  {
    uuid: 'noticon_yqyjxbb9esui4yktixxw',
    title: 'wasabi',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1680587330/noticon/yqyjxbb9esui4yktixxw.png',
    keywords: '‡',
    date: '2023-04-04T05:48:53.488Z',
  },
  {
    uuid: 'noticon_mrzuqxtvrxpgcu3ri1lh',
    title: 'toast ui',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1680587929/noticon/mrzuqxtvrxpgcu3ri1lh.png',
    keywords: '‡',
    date: '2023-04-04T05:58:51.622Z',
  },
  {
    uuid: 'noticon_pbweovenfsvjnns5kkjq',
    title: 'apexcharts',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1680587989/noticon/pbweovenfsvjnns5kkjq.png',
    keywords: '‡',
    date: '2023-04-04T05:59:51.557Z',
  },
  {
    uuid: 'noticon_k4ur3vmwloixc1psf9o7',
    title: '스마트에디터',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1680597387/noticon/k4ur3vmwloixc1psf9o7.png',
    keywords: '‡',
    date: '2023-04-04T08:36:29.907Z',
  },
  {
    uuid: 'noticon_uirmcb5fkf1ipswxzdfk',
    title: 'a',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1680601747/noticon/uirmcb5fkf1ipswxzdfk.gif',
    keywords: 'a‡a',
    date: '2023-04-04T09:49:09.694Z',
  },
  {
    uuid: 'noticon_euvihbead5zylvux7491',
    title: 'Hyundai',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1680632921/noticon/euvihbead5zylvux7491.png',
    keywords: '현대‡',
    date: '2023-04-04T18:28:43.168Z',
  },
  {
    uuid: 'noticon_rxrscgdl1ml6esaoinhx',
    title: '피리부는강아지',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1680672205/noticon/rxrscgdl1ml6esaoinhx.png',
    keywords: '‡',
    date: '2023-04-05T05:23:27.521Z',
  },
  {
    uuid: 'noticon_wryadwpoum32p9l7tpfh',
    title: 'Harvard',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1680734614/noticon/wryadwpoum32p9l7tpfh.png',
    keywords: 'harvard‡cs50',
    date: '2023-04-05T22:43:36.613Z',
  },
  {
    uuid: 'noticon_ink43xnekapp9pemmxbi',
    title: 'Three.js Journey',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1680737224/noticon/ink43xnekapp9pemmxbi.png',
    keywords: 'threejs‡journey',
    date: '2023-04-05T23:27:06.740Z',
  },
  {
    uuid: 'noticon_u74czchnbefkxcd2gw0l',
    title: '티빙',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1680850080/noticon/u74czchnbefkxcd2gw0l.png',
    keywords: 'TVING‡',
    date: '2023-04-07T06:48:02.811Z',
  },
  {
    uuid: 'noticon_pdzevcjsgax0gbmy8sn4',
    title: 'logstash',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1680927081/noticon/pdzevcjsgax0gbmy8sn4.png',
    keywords: '‡',
    date: '2023-04-08T04:11:23.388Z',
  },
  {
    uuid: 'noticon_hq8blhgc46psmhozelam',
    title: 'GoLand',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1680968629/noticon/hq8blhgc46psmhozelam.png',
    keywords: 'go‡golang',
    date: '2023-04-08T15:43:51.819Z',
  },
  {
    uuid: 'noticon_nc8dp2urkxqikhbtywaw',
    title: 'jekyll',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1681015713/noticon/nc8dp2urkxqikhbtywaw.png',
    keywords: '‡',
    date: '2023-04-09T04:48:36.580Z',
  },
  {
    uuid: 'noticon_hmwidojoqc2or4fds7jn',
    title: 'Armazem da Criatividade',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1681051411/noticon/hmwidojoqc2or4fds7jn.png',
    keywords: '‡',
    date: '2023-04-09T14:43:33.650Z',
  },
  {
    uuid: 'noticon_zaqtjlqmfqixzb4vlpuc',
    title: 'AC-Preta',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1681051617/noticon/zaqtjlqmfqixzb4vlpuc.png',
    keywords: 'armazem‡',
    date: '2023-04-09T14:46:59.913Z',
  },
  {
    uuid: 'noticon_hizqndtkbsnujdzxathg',
    title: 'admin',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1681283564/noticon/hizqndtkbsnujdzxathg.png',
    keywords: '‡',
    date: '2023-04-12T07:12:47.154Z',
  },
  {
    uuid: 'noticon_dyvi7nxcd8qqd959ip7y',
    title: 'appStore',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1681374703/noticon/dyvi7nxcd8qqd959ip7y.png',
    keywords: '‡',
    date: '2023-04-13T08:31:46.704Z',
  },
  {
    uuid: 'noticon_ppi1fvwttst8n7pycahj',
    title: 'cider',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1681546681/noticon/ppi1fvwttst8n7pycahj.png',
    keywords: 'CIDER‡사이다',
    date: '2023-04-15T08:18:04.172Z',
  },
  {
    uuid: 'noticon_iaavkesyc1xfh8b9tcjc',
    title: 'movie',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1681555587/noticon/iaavkesyc1xfh8b9tcjc.png',
    keywords: 'movie‡theater',
    date: '2023-04-15T10:46:29.582Z',
  },
  {
    uuid: 'noticon_epanldqcrruhw2rgomjx',
    title: 'movie',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1681555635/noticon/epanldqcrruhw2rgomjx.png',
    keywords: 'movie‡slate',
    date: '2023-04-15T10:47:17.967Z',
  },
  {
    uuid: 'noticon_dxtcroii3awxeddvlyf8',
    title: 'MMA',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1681652779/noticon/dxtcroii3awxeddvlyf8.png',
    keywords: 'armazem‡',
    date: '2023-04-16T13:46:21.038Z',
  },
  {
    uuid: 'noticon_bhrpula2ivcmbtctjjjx',
    title: 'OBAmanha',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1681652942/noticon/bhrpula2ivcmbtctjjjx.png',
    keywords: 'armazem‡',
    date: '2023-04-16T13:49:05.185Z',
  },
  {
    uuid: 'noticon_fqph4b5rwoufo2vzc6vm',
    title: '오늘회',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1681662206/noticon/fqph4b5rwoufo2vzc6vm.png',
    keywords: '‡',
    date: '2023-04-16T16:23:28.461Z',
  },
  {
    uuid: 'noticon_esb94vacio6inknhdckv',
    title: '위메이드',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1681712042/noticon/esb94vacio6inknhdckv.png',
    keywords: 'wemade‡',
    date: '2023-04-17T06:14:04.507Z',
  },
  {
    uuid: 'noticon_x9pxtlwl9pctdnsajh5q',
    title: '마이프차',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1681721684/noticon/x9pxtlwl9pctdnsajh5q.png',
    keywords: '마이프차‡',
    date: '2023-04-17T08:54:46.270Z',
  },
  {
    uuid: 'noticon_f6mvvf4aokix8b9clu0a',
    title: 'wanted',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1681738090/noticon/f6mvvf4aokix8b9clu0a.png',
    keywords: '‡',
    date: '2023-04-17T13:28:12.621Z',
  },
  {
    uuid: 'noticon_gnmvks5kewb4rorwqj3k',
    title: 'draw.io',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1681787748/noticon/gnmvks5kewb4rorwqj3k.png',
    keywords: 'draw_io‡draw io',
    date: '2023-04-18T03:15:50.389Z',
  },
  {
    uuid: 'noticon_y8ebsjq9jpohkwu6wji5',
    title: 'opensource',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1681798583/noticon/y8ebsjq9jpohkwu6wji5.png',
    keywords: 'opensource‡',
    date: '2023-04-18T06:16:25.781Z',
  },
  {
    uuid: 'noticon_nus8y45buzhewluzwout',
    title: 'copilot',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1681798679/noticon/nus8y45buzhewluzwout.png',
    keywords: 'copilot‡',
    date: '2023-04-18T06:18:02.397Z',
  },
  {
    uuid: 'noticon_cm7gf2teiwwk8bcfixoy',
    title: '광운대',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1681798847/noticon/cm7gf2teiwwk8bcfixoy.png',
    keywords: '광운대‡',
    date: '2023-04-18T06:20:49.839Z',
  },
  {
    uuid: 'noticon_fsbdcsvf99lpab0w2bpa',
    title: 'starbucks',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1681802140/noticon/fsbdcsvf99lpab0w2bpa.png',
    keywords: '스타벅스‡',
    date: '2023-04-18T07:15:42.525Z',
  },
  {
    uuid: 'noticon_at1mmwlmt6olzfrhovas',
    title: 'InfluxDB',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1681896151/noticon/at1mmwlmt6olzfrhovas.png',
    keywords: '‡',
    date: '2023-04-19T09:22:33.299Z',
  },
  {
    uuid: 'noticon_u9hyg8hw9tccezwz11wj',
    title: '네이버웹툰',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1681897142/noticon/u9hyg8hw9tccezwz11wj.png',
    keywords: '‡',
    date: '2023-04-19T09:39:04.454Z',
  },
  {
    uuid: 'noticon_vcbvpmarwuqikdai29mg',
    title: 'Skyscanner',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1681979947/noticon/vcbvpmarwuqikdai29mg.png',
    keywords: '‡',
    date: '2023-04-20T08:39:10.126Z',
  },
  {
    uuid: 'noticon_nlytjeagkxds6wreiklp',
    title: '클로바노트',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1682060762/noticon/nlytjeagkxds6wreiklp.png',
    keywords: '‡',
    date: '2023-04-21T07:06:06.123Z',
  },
  {
    uuid: 'noticon_rdda0zkfwgyr9voed1uu',
    title: 'ocean',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1682262065/noticon/rdda0zkfwgyr9voed1uu.gif',
    keywords: '‡',
    date: '2023-04-23T15:01:08.279Z',
  },
  {
    uuid: 'noticon_senf8mnxkwzb1hzotgb6',
    title: 'snow',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1682262200/noticon/senf8mnxkwzb1hzotgb6.gif',
    keywords: '‡',
    date: '2023-04-23T15:03:22.809Z',
  },
  {
    uuid: 'noticon_qpkreb5q3sp6kkwxodjh',
    title: 'Jiraynor1',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1682317827/noticon/qpkreb5q3sp6kkwxodjh.png',
    keywords: 'Jiraynor‡',
    date: '2023-04-24T06:30:29.182Z',
  },
  {
    uuid: 'noticon_pmjozlbcasui1ny4ansl',
    title: '스페이스클라우드',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1682325430/noticon/pmjozlbcasui1ny4ansl.png',
    keywords: '‡',
    date: '2023-04-24T08:37:13.257Z',
  },
  {
    uuid: 'noticon_mmxqpiz6nphklwacp1f5',
    title: 'NIPA',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1682336964/noticon/mmxqpiz6nphklwacp1f5.png',
    keywords: '정보통신산업진흥원‡',
    date: '2023-04-24T11:49:25.759Z',
  },
  {
    uuid: 'noticon_tgr4wny3hmlffxffwfyo',
    title: '쿠팡잇츠',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1682411711/noticon/tgr4wny3hmlffxffwfyo.png',
    keywords: '‡',
    date: '2023-04-25T08:35:14.163Z',
  },
  {
    uuid: 'noticon_vspmtwtxjzajnfhiityd',
    title: '농협',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1682483359/noticon/vspmtwtxjzajnfhiityd.png',
    keywords: 'NH‡',
    date: '2023-04-26T04:29:21.515Z',
  },
  {
    uuid: 'noticon_dkzvrippausa8la8dhnj',
    title: '점핏',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1682523213/noticon/dkzvrippausa8la8dhnj.png',
    keywords: '‡',
    date: '2023-04-26T15:33:34.921Z',
  },
  {
    uuid: 'noticon_jzmxdwnjphvhpdt5ujk0',
    title: 'Glitch',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1682778841/noticon/jzmxdwnjphvhpdt5ujk0.png',
    keywords: '‡',
    date: '2023-04-29T14:34:03.185Z',
  },
  {
    uuid: 'noticon_cvecjtrauasehol9zidk',
    title: 'xilinx',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1682904526/noticon/cvecjtrauasehol9zidk.png',
    keywords: '‡',
    date: '2023-05-01T01:28:48.877Z',
  },
  {
    uuid: 'noticon_u2w1bdqf1c4svnqm2ecd',
    title: '대상다이브스',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1683100822/noticon/u2w1bdqf1c4svnqm2ecd.png',
    keywords: 'daesangfnb‡daesang',
    date: '2023-05-03T08:00:24.463Z',
  },
  {
    uuid: 'noticon_dosooiegl2pqqvgngaqv',
    title: 'Pixso',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1683162599/noticon/dosooiegl2pqqvgngaqv.png',
    keywords: '‡',
    date: '2023-05-04T01:10:02.772Z',
  },
  {
    uuid: 'noticon_kyp3frg9corycovxokx6',
    title: '농담곰',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1683523256/noticon/kyp3frg9corycovxokx6.gif',
    keywords: '‡',
    date: '2023-05-08T05:20:58.293Z',
  },
  {
    uuid: 'noticon_plcvyiwmdh4adlt8dxgo',
    title: 'rds',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1683592944/noticon/plcvyiwmdh4adlt8dxgo.png',
    keywords: 'aws‡',
    date: '2023-05-09T00:42:26.371Z',
  },
  {
    uuid: 'noticon_kppo5pfo6ofoxzktpdfo',
    title: 'STM32Cube',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1683607471/noticon/kppo5pfo6ofoxzktpdfo.png',
    keywords: '‡',
    date: '2023-05-09T04:44:33.828Z',
  },
  {
    uuid: 'noticon_ytywebrzaqvhjnyg9nh1',
    title: 'airdrop',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1683633125/noticon/ytywebrzaqvhjnyg9nh1.png',
    keywords: '에어드롭‡',
    date: '2023-05-09T11:52:08.913Z',
  },
  {
    uuid: 'noticon_ofgymrzrsku11otwlv6a',
    title: '햅삐햅삐햅삐 캣',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1683680980/noticon/ofgymrzrsku11otwlv6a.gif',
    keywords: 'happy happy happy cat‡해피해피해피 고양이',
    date: '2023-05-10T01:09:43.545Z',
  },
  {
    uuid: 'noticon_wp9xhhvfktfcjafukrqx',
    title: '두잇 자바',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1683713264/noticon/wp9xhhvfktfcjafukrqx.png',
    keywords: '‡',
    date: '2023-05-10T10:07:47.301Z',
  },
  {
    uuid: 'noticon_w52xwferutwv3puq9riw',
    title: '이코테',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1683713391/noticon/w52xwferutwv3puq9riw.png',
    keywords: '‡',
    date: '2023-05-10T10:09:53.653Z',
  },
  {
    uuid: 'noticon_ebrlwc52irdjwtcxhmsj',
    title: '쿠버네티스',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1683826702/noticon/ebrlwc52irdjwtcxhmsj.png',
    keywords: '‡',
    date: '2023-05-11T17:38:25.094Z',
  },
  {
    uuid: 'noticon_lzhn8eoyw0cjlkin0mua',
    title: 'k8s',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1683828904/noticon/lzhn8eoyw0cjlkin0mua.png',
    keywords: '‡',
    date: '2023-05-11T18:15:07.333Z',
  },
  {
    uuid: 'noticon_x4jsbadlih1trblf5xnx',
    title: 'dair.ai',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1683859876/noticon/x4jsbadlih1trblf5xnx.png',
    keywords: '프롬프트‡인공지능',
    date: '2023-05-12T02:51:18.636Z',
  },
  {
    uuid: 'noticon_unjpznlbfz2vduynxhcj',
    title: 'QGroundControl',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1683870315/noticon/unjpznlbfz2vduynxhcj.png',
    keywords: 'QGC‡GCS',
    date: '2023-05-12T05:45:16.886Z',
  },
  {
    uuid: 'noticon_tvx93esgtcbrcnlvoerv',
    title: 'FastAPI',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1683870544/noticon/tvx93esgtcbrcnlvoerv.png',
    keywords: 'fastapi‡restapi',
    date: '2023-05-12T05:49:07.223Z',
  },
  {
    uuid: 'noticon_myn1hkuqxgds4fl85zug',
    title: 'boost',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1683878722/noticon/myn1hkuqxgds4fl85zug.png',
    keywords: '부스트‡libraries',
    date: '2023-05-12T08:05:24.372Z',
  },
  {
    uuid: 'noticon_bzpumooxt23wfn4g5dxk',
    title: '자스SICP',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1684119782/noticon/bzpumooxt23wfn4g5dxk.png',
    keywords: 'SICP‡',
    date: '2023-05-15T03:03:05.590Z',
  },
  {
    uuid: 'noticon_bd9pfavzkslbnamcpqat',
    title: '가비아롤린이집',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1684124029/noticon/bd9pfavzkslbnamcpqat.png',
    keywords: '가비아‡gabia',
    date: '2023-05-15T04:13:55.069Z',
  },
  {
    uuid: 'noticon_qdj6mrg4uryiuo09exo3',
    title: '가비아롤린이집(배경)',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1684141678/noticon/qdj6mrg4uryiuo09exo3.png',
    keywords: '가비아‡gabia',
    date: '2023-05-15T09:07:59.893Z',
  },
  {
    uuid: 'noticon_c2i7dp8crfpsfrz3d6sv',
    title: 'sk',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1684152822/noticon/c2i7dp8crfpsfrz3d6sv.png',
    keywords: 'SK‡',
    date: '2023-05-15T12:13:44.538Z',
  },
  {
    uuid: 'noticon_tbifmytccd9vyyeonnfv',
    title: 'ROOTRIX',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1684157093/noticon/tbifmytccd9vyyeonnfv.png',
    keywords: 'rootrix‡rootrix',
    date: '2023-05-15T13:24:55.634Z',
  },
  {
    uuid: 'noticon_efpcvqr5dj5yvnw7s9wt',
    title: 'KRAFTON Jungle',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1684213001/noticon/efpcvqr5dj5yvnw7s9wt.png',
    keywords: '크래프톤‡정글',
    date: '2023-05-16T04:56:44.576Z',
  },
  {
    uuid: 'noticon_e0xqg0oqvnqj1bvfdwp8',
    title: '크래프톤 정글',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1684213528/noticon/e0xqg0oqvnqj1bvfdwp8.png',
    keywords: '크래프톤‡정글',
    date: '2023-05-16T05:05:31.036Z',
  },
  {
    uuid: 'noticon_hmjztya6qnz4nmdxobl8',
    title: 'AWS memcached',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1684390604/noticon/hmjztya6qnz4nmdxobl8.png',
    keywords: '‡',
    date: '2023-05-18T06:16:47.016Z',
  },
  {
    uuid: 'noticon_unw33idy33cygekeozob',
    title: 'xstate',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1684514533/noticon/unw33idy33cygekeozob.png',
    keywords: 'xstate‡xstate',
    date: '2023-05-19T16:42:16.132Z',
  },
  {
    uuid: 'noticon_rxjb7wnfxkjfyqf0ch8v',
    title: '곰집사',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1684732946/noticon/rxjb7wnfxkjfyqf0ch8v.png',
    keywords: '‡',
    date: '2023-05-22T05:22:28.235Z',
  },
  {
    uuid: 'noticon_hbvcoeow1ar6ih68a82z',
    title: 'Tekton',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1684823466/noticon/hbvcoeow1ar6ih68a82z.png',
    keywords: 'CI‡CD',
    date: '2023-05-23T06:31:08.390Z',
  },
  {
    uuid: 'noticon_yzl3qxytrbchbkygkttb',
    title: '겨울이',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1684910532/noticon/yzl3qxytrbchbkygkttb.png',
    keywords: 'CAT‡WINTER',
    date: '2023-05-24T06:42:14.745Z',
  },
  {
    uuid: 'noticon_a4t1ess0fb8ezsjaevtq',
    title: 'sharp (#)',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1685065500/noticon/a4t1ess0fb8ezsjaevtq.png',
    keywords: '‡',
    date: '2023-05-26T01:45:02.040Z',
  },
  {
    uuid: 'noticon_jo70lolpscz63hznweoe',
    title: 'Spring Security',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1685082263/noticon/jo70lolpscz63hznweoe.png',
    keywords: '‡',
    date: '2023-05-26T06:24:24.685Z',
  },
  {
    uuid: 'noticon_q9dsskfqycsnp8plwecl',
    title: 'KeyCloack',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1685287643/noticon/q9dsskfqycsnp8plwecl.png',
    keywords: 'keycloack‡KEYCLOACK',
    date: '2023-05-28T15:27:25.594Z',
  },
  {
    uuid: 'noticon_w9v3wbxifs6zwfekyq57',
    title: 'LinkerD',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1685288127/noticon/w9v3wbxifs6zwfekyq57.png',
    keywords: 'linkerd‡LINKERD',
    date: '2023-05-28T15:35:29.285Z',
  },
  {
    uuid: 'noticon_jfqwwm3lwnvbbhcx9pub',
    title: 'jaeger ui',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1685288493/noticon/jfqwwm3lwnvbbhcx9pub.png',
    keywords: 'JAEGER UI‡JAEGER',
    date: '2023-05-28T15:41:35.621Z',
  },
  {
    uuid: 'noticon_zv6psispeiobl8ddraln',
    title: '반드시 해낸다',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1685510236/noticon/zv6psispeiobl8ddraln.png',
    keywords: '무한도전‡',
    date: '2023-05-31T05:17:19.441Z',
  },
  {
    uuid: 'noticon_anjdrmxa0bv4hkjgwldf',
    title: '아련',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1685510354/noticon/anjdrmxa0bv4hkjgwldf.png',
    keywords: '아련‡멍',
    date: '2023-05-31T05:19:16.819Z',
  },
  {
    uuid: 'noticon_zlnodb9oj9icejaqiytd',
    title: '내 소원',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1685510644/noticon/zlnodb9oj9icejaqiytd.png',
    keywords: '소원‡',
    date: '2023-05-31T05:24:07.068Z',
  },
  {
    uuid: 'noticon_vd82ra5auqumf7mdht9z',
    title: '오히려 좋아',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1685696446/noticon/vd82ra5auqumf7mdht9z.png',
    keywords: '최고심‡',
    date: '2023-06-02T09:00:48.615Z',
  },
  {
    uuid: 'noticon_wvav7hsudorioydjkfzj',
    title: 'uvicorn',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1685951955/noticon/wvav7hsudorioydjkfzj.png',
    keywords: 'uvicorn‡',
    date: '2023-06-05T07:59:17.623Z',
  },
  {
    uuid: 'noticon_hj4uta00xeltyzv2qelo',
    title: 'sonarqube',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1685952075/noticon/hj4uta00xeltyzv2qelo.png',
    keywords: 'sonarqube‡',
    date: '2023-06-05T08:01:17.200Z',
  },
  {
    uuid: 'noticon_asgfct4aucyfvgvcmyfl',
    title: 'Swift',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1686521041/noticon/asgfct4aucyfvgvcmyfl.png',
    keywords: 'Swift‡Swif Language',
    date: '2023-06-11T22:04:02.995Z',
  },
  {
    uuid: 'noticon_stilgm9gtwswdwdn5dpk',
    title: 'RIDI',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1686550702/noticon/stilgm9gtwswdwdn5dpk.png',
    keywords: 'ridi‡리디',
    date: '2023-06-12T06:18:24.441Z',
  },
  {
    uuid: 'noticon_crztiugakzvo0cqm230g',
    title: 'kong',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1686636052/noticon/crztiugakzvo0cqm230g.png',
    keywords: 'kong gateway‡kong api gateway',
    date: '2023-06-13T06:00:55.306Z',
  },
  {
    uuid: 'noticon_p84wa83oqnvylfqicrh3',
    title: 'kong',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1686636131/noticon/p84wa83oqnvylfqicrh3.png',
    keywords: 'kong gateway‡kong api gateway',
    date: '2023-06-13T06:02:14.549Z',
  },
  {
    uuid: 'noticon_pemx22hksbrkugxushm9',
    title: 'SwiftData',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1686643054/noticon/pemx22hksbrkugxushm9.png',
    keywords: 'SwiftData‡SwiftData',
    date: '2023-06-13T07:57:35.725Z',
  },
  {
    uuid: 'noticon_aacws4uz0svgyitsz1tx',
    title: '에나비',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1686668574/noticon/aacws4uz0svgyitsz1tx.gif',
    keywords: '에나비‡에나비',
    date: '2023-06-13T15:03:05.003Z',
  },
  {
    uuid: 'noticon_liugmdgrdxuvf4boc4mt',
    title: '헤롱헤롱',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1686668630/noticon/liugmdgrdxuvf4boc4mt.gif',
    keywords: '헤롱‡헤롱',
    date: '2023-06-13T15:03:53.360Z',
  },
  {
    uuid: 'noticon_uz0d8ntlolmjzvy0kwo4',
    title: '파들',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1686668710/noticon/uz0d8ntlolmjzvy0kwo4.gif',
    keywords: '파들‡파들',
    date: '2023-06-13T15:05:14.238Z',
  },
  {
    uuid: 'noticon_xc08sbtxukqi4urvadmf',
    title: '님피',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1686668768/noticon/xc08sbtxukqi4urvadmf.gif',
    keywords: '님피‡님피',
    date: '2023-06-13T15:06:11.240Z',
  },
  {
    uuid: 'noticon_ilsplfuvk6psdkklhual',
    title: '방울',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1686668875/noticon/ilsplfuvk6psdkklhual.gif',
    keywords: '방울‡방울',
    date: '2023-06-13T15:07:58.161Z',
  },
  {
    uuid: 'noticon_ysc0xhptunwxvzt7rbhh',
    title: '텅통',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1686669342/noticon/ysc0xhptunwxvzt7rbhh.gif',
    keywords: '통통‡통통',
    date: '2023-06-13T15:15:58.942Z',
  },
  {
    uuid: 'noticon_gyi2jret3fjovtr9mtbr',
    title: '지라',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1686669431/noticon/gyi2jret3fjovtr9mtbr.gif',
    keywords: '지아‡지라',
    date: '2023-06-13T15:17:14.565Z',
  },
  {
    uuid: 'noticon_cuyykzzde9qxgdrsghl8',
    title: '셰미이',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1686669531/noticon/cuyykzzde9qxgdrsghl8.gif',
    keywords: '셰이미‡셰이미',
    date: '2023-06-13T15:18:55.311Z',
  },
  {
    uuid: 'noticon_vkcuml8gm3ecdcyejzr7',
    title: '쥬피',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1686669603/noticon/vkcuml8gm3ecdcyejzr7.gif',
    keywords: '쥬피‡쥬피',
    date: '2023-06-13T15:20:05.982Z',
  },
  {
    uuid: 'noticon_d5nqfpmokdspyosr0on2',
    title: '무우',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1686669652/noticon/d5nqfpmokdspyosr0on2.gif',
    keywords: '무우‡무우',
    date: '2023-06-13T15:20:55.289Z',
  },
  {
    uuid: 'noticon_honqukx18zf12fcti2e5',
    title: '산호',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1686669697/noticon/honqukx18zf12fcti2e5.gif',
    keywords: '산호‡산호',
    date: '2023-06-13T15:21:39.603Z',
  },
  {
    uuid: 'noticon_jkptufmxqwefkrpdvobi',
    title: '토게',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1686669761/noticon/jkptufmxqwefkrpdvobi.gif',
    keywords: '토게‡토게',
    date: '2023-06-13T15:22:44.297Z',
  },
  {
    uuid: 'noticon_usjiyyvwedcrkhot9jid',
    title: '토키',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1686669822/noticon/usjiyyvwedcrkhot9jid.gif',
    keywords: '‡',
    date: '2023-06-13T15:23:45.910Z',
  },
  {
    uuid: 'noticon_zvq1s3reoruhqgyo0le6',
    title: '눈',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1686670166/noticon/zvq1s3reoruhqgyo0le6.gif',
    keywords: 'ㅍ‡',
    date: '2023-06-13T15:29:29.907Z',
  },
  {
    uuid: 'noticon_gvasp3qtaz16spmwoorl',
    title: '헤',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1686670279/noticon/gvasp3qtaz16spmwoorl.gif',
    keywords: 'ㅍ‡',
    date: '2023-06-13T15:31:28.523Z',
  },
  {
    uuid: 'noticon_coixl0gl96dkpbymxttt',
    title: '에',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1686670436/noticon/coixl0gl96dkpbymxttt.gif',
    keywords: 'ㅍ‡',
    date: '2023-06-13T15:33:59.305Z',
  },
  {
    uuid: 'noticon_yfrcw3mwxh4bk9vdm3bq',
    title: '샤',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1686670593/noticon/yfrcw3mwxh4bk9vdm3bq.gif',
    keywords: 'ㅍ‡',
    date: '2023-06-13T15:36:36.836Z',
  },
  {
    uuid: 'noticon_x7pwcoyu1tvbxvc5ps9n',
    title: '통',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1686670691/noticon/x7pwcoyu1tvbxvc5ps9n.gif',
    keywords: 'ㅍ‡',
    date: '2023-06-13T15:38:13.306Z',
  },
  {
    uuid: 'noticon_gpsclknk4qiqjmmw4ltf',
    title: '꼬',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1686671296/noticon/gpsclknk4qiqjmmw4ltf.gif',
    keywords: 'ㅍ‡',
    date: '2023-06-13T15:48:19.483Z',
  },
  {
    uuid: 'noticon_iatvfqtd2vdkboxt13d8',
    title: '무지캐캣',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1686716361/noticon/iatvfqtd2vdkboxt13d8.gif',
    keywords: '‡',
    date: '2023-06-14T04:19:23.508Z',
  },
  {
    uuid: 'noticon_z4crfe2zlmsvqssjjnaj',
    title: 'effective test',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1686813095/noticon/z4crfe2zlmsvqssjjnaj.png',
    keywords: '‡',
    date: '2023-06-15T07:11:38.200Z',
  },
  {
    uuid: 'noticon_t8pnqdtmw0pgxdyl5ezc',
    title: 'sourcetree',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1686880357/noticon/t8pnqdtmw0pgxdyl5ezc.png',
    keywords: 'sourcetree‡소스트리',
    date: '2023-06-16T01:52:39.983Z',
  },
  {
    uuid: 'noticon_afzwe8dmesflz13mcctv',
    title: 'storybook',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1686894779/noticon/afzwe8dmesflz13mcctv.png',
    keywords: 'storybook‡스토리북',
    date: '2023-06-16T05:53:00.931Z',
  },
  {
    uuid: 'noticon_r7w1ipwmdmhlfzqfw69h',
    title: 'spring security',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1686935854/noticon/r7w1ipwmdmhlfzqfw69h.png',
    keywords: 'spring boot‡spring batch',
    date: '2023-06-16T17:17:36.952Z',
  },
  {
    uuid: 'noticon_zepmlkjtdv81gu275myl',
    title: 'naver cloud platform',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687004031/noticon/zepmlkjtdv81gu275myl.png',
    keywords: 'cloud‡naver',
    date: '2023-06-17T12:13:53.755Z',
  },
  {
    uuid: 'noticon_wsqz7rbeefmdsptsvkfw',
    title: 'erd cloud',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687026651/noticon/wsqz7rbeefmdsptsvkfw.png',
    keywords: 'erd‡cloud',
    date: '2023-06-17T18:30:53.791Z',
  },
  {
    uuid: 'noticon_jzjftmtqdpsm7cprvnly',
    title: '아시아나',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687153890/noticon/jzjftmtqdpsm7cprvnly.png',
    keywords: '‡',
    date: '2023-06-19T05:51:32.603Z',
  },
  {
    uuid: 'noticon_qutsdq80kmondr8xrn5s',
    title: 'kapenter',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687221983/noticon/qutsdq80kmondr8xrn5s.png',
    keywords: '‡',
    date: '2023-06-20T00:46:26.405Z',
  },
  {
    uuid: 'noticon_xx1psf562lhg6em7nyit',
    title: 'Karpenter',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687222121/noticon/xx1psf562lhg6em7nyit.png',
    keywords: 'karpenter‡',
    date: '2023-06-20T00:49:37.535Z',
  },
  {
    uuid: 'noticon_mfksxq721z25out9cxv3',
    title: 'karpenter',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687222282/noticon/mfksxq721z25out9cxv3.png',
    keywords: '‡',
    date: '2023-06-20T00:51:23.863Z',
  },
  {
    uuid: 'noticon_jgepfsy2c2umbrmlwsws',
    title: 'externaldns',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687223243/noticon/jgepfsy2c2umbrmlwsws.png',
    keywords: 'external dns‡External DNS',
    date: '2023-06-20T01:07:26.165Z',
  },
  {
    uuid: 'noticon_dyjk0idvlqexts9okc3s',
    title: 'Chip and Dale',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687230892/noticon/dyjk0idvlqexts9okc3s.png',
    keywords: '‡',
    date: '2023-06-20T03:14:54.546Z',
  },
  {
    uuid: 'noticon_ka161eiateskfw5bqf8m',
    title: 'Chip N Dale',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687230947/noticon/ka161eiateskfw5bqf8m.png',
    keywords: '‡',
    date: '2023-06-20T03:16:09.868Z',
  },
  {
    uuid: 'noticon_p1pidlcot61ycu4sjcgb',
    title: 'Dance (Chip N Dale)',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687231489/noticon/p1pidlcot61ycu4sjcgb.gif',
    keywords: '‡',
    date: '2023-06-20T03:24:51.209Z',
  },
  {
    uuid: 'noticon_voyvwrngzlxbs8n6zhsk',
    title: 'Loki',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687244485/noticon/voyvwrngzlxbs8n6zhsk.png',
    keywords: 'Grafana Loki‡',
    date: '2023-06-20T07:01:27.072Z',
  },
  {
    uuid: 'noticon_o9lxyva5z8zbwyeaxers',
    title: 'JPA',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687307488/noticon/o9lxyva5z8zbwyeaxers.png',
    keywords: '‡',
    date: '2023-06-21T00:31:31.844Z',
  },
  {
    uuid: 'noticon_glti1cri9nvjol4qtwgm',
    title: 'KEYCLOACK',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687307773/noticon/glti1cri9nvjol4qtwgm.png',
    keywords: 'KeyCloack‡keycloack',
    date: '2023-06-21T00:36:15.681Z',
  },
  {
    uuid: 'noticon_xnmrqyvztq1qq3bwrqyq',
    title: 'oncosoft',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687316938/noticon/xnmrqyvztq1qq3bwrqyq.png',
    keywords: 'onco‡',
    date: '2023-06-21T03:09:00.495Z',
  },
  {
    uuid: 'noticon_dk8j3knxd2plebvdqhwx',
    title: 'murata',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687417404/noticon/dk8j3knxd2plebvdqhwx.png',
    keywords: '‡',
    date: '2023-06-22T07:03:27.227Z',
  },
  {
    uuid: 'noticon_w4lhxkimzgwtjlx2p85m',
    title: 'Thanos',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687425976/noticon/w4lhxkimzgwtjlx2p85m.png',
    keywords: 'thanos‡',
    date: '2023-06-22T09:26:20.604Z',
  },
  {
    uuid: 'noticon_ug33geaf17rbbxjgzrme',
    title: 'devocean',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687428053/noticon/ug33geaf17rbbxjgzrme.png',
    keywords: 'devocean‡',
    date: '2023-06-22T10:00:55.245Z',
  },
  {
    uuid: 'noticon_xxrto94wye6ezt0nqnow',
    title: 'dog',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687501948/noticon/xxrto94wye6ezt0nqnow.gif',
    keywords: '‡',
    date: '2023-06-23T06:32:31.566Z',
  },
  {
    uuid: 'noticon_sfrj1vffzrll0rxjnvgg',
    title: 'typing_lisa',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687502354/noticon/sfrj1vffzrll0rxjnvgg.gif',
    keywords: '‡',
    date: '2023-06-23T06:39:17.308Z',
  },
  {
    uuid: 'noticon_sab7bgqpsv8w7wbw0xxf',
    title: '전북대',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687511689/noticon/sab7bgqpsv8w7wbw0xxf.png',
    keywords: '‡',
    date: '2023-06-23T09:14:51.938Z',
  },
  {
    uuid: 'noticon_wsrb5klqkjlgs6h39waq',
    title: 'Machine Learning',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687513835/noticon/wsrb5klqkjlgs6h39waq.png',
    keywords: 'ML‡AI',
    date: '2023-06-23T09:50:37.131Z',
  },
  {
    uuid: 'noticon_uq85gck8jqvudtjsdqof',
    title: 'Room DB',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687516400/noticon/uq85gck8jqvudtjsdqof.png',
    keywords: 'Android‡',
    date: '2023-06-23T10:33:23.019Z',
  },
  {
    uuid: 'noticon_q6autqoit3cduzmoh3xv',
    title: 'Chart.js',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687518344/noticon/q6autqoit3cduzmoh3xv.png',
    keywords: 'js‡',
    date: '2023-06-23T11:05:46.489Z',
  },
  {
    uuid: 'noticon_ov1wkggjcf5hqwysxgbv',
    title: 'Hello',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687571586/noticon/ov1wkggjcf5hqwysxgbv.gif',
    keywords: '‡',
    date: '2023-06-24T01:53:09.472Z',
  },
  {
    uuid: 'noticon_gzgq69jwab5dbhn0c1nd',
    title: 'hackle',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687685154/noticon/gzgq69jwab5dbhn0c1nd.png',
    keywords: '‡',
    date: '2023-06-25T09:25:56.921Z',
  },
  {
    uuid: 'noticon_at8xihwdc8q6iu4rjnbw',
    title: 'software',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687696970/noticon/at8xihwdc8q6iu4rjnbw.png',
    keywords: '‡',
    date: '2023-06-25T12:42:52.134Z',
  },
  {
    uuid: 'noticon_j08ehqes0ob7ggpxfwor',
    title: 'jsts',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687697073/noticon/j08ehqes0ob7ggpxfwor.png',
    keywords: '‡',
    date: '2023-06-25T12:44:35.773Z',
  },
  {
    uuid: 'noticon_gyk4nuqajv2glin3k6ed',
    title: 'network',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687698055/noticon/gyk4nuqajv2glin3k6ed.png',
    keywords: '‡',
    date: '2023-06-25T13:00:57.679Z',
  },
  {
    uuid: 'noticon_wfprdh3eheo5xkbmsitb',
    title: 'Gunicorn',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687745446/noticon/wfprdh3eheo5xkbmsitb.png',
    keywords: '‡',
    date: '2023-06-26T02:10:48.817Z',
  },
  {
    uuid: 'noticon_dq0v4bgbgpzxvwenndq6',
    title: 'alertmanager',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687832213/noticon/dq0v4bgbgpzxvwenndq6.png',
    keywords: 'alert-manager‡alert_manager',
    date: '2023-06-27T02:17:02.340Z',
  },
  {
    uuid: 'noticon_ft9hcwj8oq2x31khhesp',
    title: 'FILA',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687851436/noticon/ft9hcwj8oq2x31khhesp.png',
    keywords: '필라‡',
    date: '2023-06-27T07:37:18.610Z',
  },
  {
    uuid: 'noticon_cuw3k670cwvh0xkshskv',
    title: '서울여대',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687851921/noticon/cuw3k670cwvh0xkshskv.png',
    keywords: '서울여자대학교‡메인',
    date: '2023-06-27T07:45:24.117Z',
  },
  {
    uuid: 'noticon_oqlikkcn6isyskmjohci',
    title: '서울여대',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687851946/noticon/oqlikkcn6isyskmjohci.png',
    keywords: '서울여자대학교‡서브',
    date: '2023-06-27T07:45:47.884Z',
  },
  {
    uuid: 'noticon_br15ond1veti3vcvucwy',
    title: 'Feed',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687885746/noticon/br15ond1veti3vcvucwy.png',
    keywords: '‡',
    date: '2023-06-27T17:09:08.046Z',
  },
  {
    uuid: 'noticon_cygvrhdo3ae3kbpwcmc4',
    title: 'moooooon',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687908379/noticon/cygvrhdo3ae3kbpwcmc4.png',
    keywords: '‡',
    date: '2023-06-27T23:26:22.750Z',
  },
  {
    uuid: 'noticon_xfnbohzprwapnvuarydt',
    title: 'mandle',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687911831/noticon/xfnbohzprwapnvuarydt.png',
    keywords: 'project‡character',
    date: '2023-06-28T00:23:52.843Z',
  },
  {
    uuid: 'noticon_koaam4mxfj9dyzuzvkwd',
    title: 'rockstar',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687914679/noticon/koaam4mxfj9dyzuzvkwd.png',
    keywords: '‡',
    date: '2023-06-28T01:11:21.308Z',
  },
  {
    uuid: 'noticon_jnfnnth1830ombvqlo8i',
    title: 'kubecost',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687928766/noticon/jnfnnth1830ombvqlo8i.png',
    keywords: 'kubecost/cost-analyzer‡cost-analyzer',
    date: '2023-06-28T05:06:09.090Z',
  },
  {
    uuid: 'noticon_ppz18vijnmetoi3hvrwd',
    title: 'OS',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1687955692/noticon/ppz18vijnmetoi3hvrwd.png',
    keywords: '‡',
    date: '2023-06-28T12:34:54.797Z',
  },
  {
    uuid: 'noticon_v8t5b5b0ge0zibr98ys1',
    title: 'system design',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1688147149/noticon/v8t5b5b0ge0zibr98ys1.png',
    keywords: '‡',
    date: '2023-06-30T17:45:52.389Z',
  },
  {
    uuid: 'noticon_ucwahprngbt4hexdreqd',
    title: 'test',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1688235273/noticon/ucwahprngbt4hexdreqd.png',
    keywords: 'test‡test',
    date: '2023-07-01T18:14:36.027Z',
  },
  {
    uuid: 'noticon_bifpywwtjinm2or3zyde',
    title: 'database',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1688278998/noticon/bifpywwtjinm2or3zyde.png',
    keywords: '‡',
    date: '2023-07-02T06:23:21.365Z',
  },
  {
    uuid: 'noticon_xwucu1cwnvwqlgg47gbk',
    title: 'database',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1688279114/noticon/xwucu1cwnvwqlgg47gbk.png',
    keywords: '‡',
    date: '2023-07-02T06:25:17.294Z',
  },
  {
    uuid: 'noticon_iciwkj9fus9uktdnqe4x',
    title: 'bgf',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1688372381/noticon/iciwkj9fus9uktdnqe4x.png',
    keywords: '‡',
    date: '2023-07-03T08:19:43.732Z',
  },
  {
    uuid: 'noticon_hdjyy9iyvefpafugonbh',
    title: 'Cap',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1688442406/noticon/hdjyy9iyvefpafugonbh.png',
    keywords: '‡',
    date: '2023-07-04T03:46:49.818Z',
  },
  {
    uuid: 'noticon_plmqysju8rtje2l6lnsx',
    title: '새싹',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1688634251/noticon/plmqysju8rtje2l6lnsx.png',
    keywords: '‡',
    date: '2023-07-06T09:04:19.907Z',
  },
  {
    uuid: 'noticon_hm89juask51kkcfoyr8e',
    title: '비즈테크아이',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1688909617/noticon/hm89juask51kkcfoyr8e.png',
    keywords: '비즈테크‡',
    date: '2023-07-09T13:33:39.888Z',
  },
  {
    uuid: 'noticon_jsfkmqmytc8khqlwixcw',
    title: '웃는 춘식이',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1689341711/noticon/jsfkmqmytc8khqlwixcw.gif',
    keywords: '춘식이‡',
    date: '2023-07-14T13:35:15.242Z',
  },
  {
    uuid: 'noticon_kc9gvekv5zwdtmxwo6la',
    title: '우는 춘식이',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1689341794/noticon/kc9gvekv5zwdtmxwo6la.gif',
    keywords: '춘식이‡',
    date: '2023-07-14T13:36:37.358Z',
  },
  {
    uuid: 'noticon_qvjihqyhcp0n6r1leyf7',
    title: '컵놔뒁',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1689424984/noticon/qvjihqyhcp0n6r1leyf7.png',
    keywords: '‡',
    date: '2023-07-15T12:43:06.296Z',
  },
  {
    uuid: 'noticon_fmwwlfqzoo5sa65nsnsg',
    title: '현대오토에버',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1689510862/noticon/fmwwlfqzoo5sa65nsnsg.png',
    keywords: '갓토에버‡',
    date: '2023-07-16T12:34:23.691Z',
  },
  {
    uuid: 'noticon_qjrilqdrddfx9zgumdi0',
    title: 'seo',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1689620432/noticon/qjrilqdrddfx9zgumdi0.png',
    keywords: 'seo‡seo',
    date: '2023-07-17T19:00:34.565Z',
  },
  {
    uuid: 'noticon_otvhemssvcps4cfaa9fe',
    title: 'playwright',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1689675037/noticon/otvhemssvcps4cfaa9fe.png',
    keywords: 'playwright‡test',
    date: '2023-07-18T10:10:39.241Z',
  },
  {
    uuid: 'noticon_p6i1pk3rruvrdl5fxhf0',
    title: 'bootstrap new',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1689829148/noticon/p6i1pk3rruvrdl5fxhf0.png',
    keywords: '‡',
    date: '2023-07-20T04:59:11.312Z',
  },
  {
    uuid: 'noticon_kuqdcbkfjgtteauicvlo',
    title: 'RelaxOn',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1689954601/noticon/kuqdcbkfjgtteauicvlo.png',
    keywords: 'RelaxOn‡RelaxOn',
    date: '2023-07-21T15:50:04.124Z',
  },
  {
    uuid: 'noticon_fsfgox1qszn7fh9ufzv6',
    title: '경북대',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1690093251/noticon/fsfgox1qszn7fh9ufzv6.png',
    keywords: '‡',
    date: '2023-07-23T06:20:53.359Z',
  },
  {
    uuid: 'noticon_cwbqknz6uhsuc0a0jpvz',
    title: '경북대',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1690093373/noticon/cwbqknz6uhsuc0a0jpvz.png',
    keywords: '‡',
    date: '2023-07-23T06:22:55.195Z',
  },
  {
    uuid: 'noticon_tarj1xpaonkjg6ei9n1r',
    title: 'kodata',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1690099214/noticon/tarj1xpaonkjg6ei9n1r.png',
    keywords: '‡',
    date: '2023-07-23T08:00:16.801Z',
  },
  {
    uuid: 'noticon_eqn1xw90fsmr1ijdaj1e',
    title: 'R Studio',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1690256565/noticon/eqn1xw90fsmr1ijdaj1e.png',
    keywords: 'R Studio‡R Studio',
    date: '2023-07-25T03:42:48.739Z',
  },
  {
    uuid: 'noticon_dlqv2c6zmyylxus02fr9',
    title: '망',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1690423812/noticon/dlqv2c6zmyylxus02fr9.png',
    keywords: '망나뇽‡포켓몬',
    date: '2023-07-27T02:10:14.940Z',
  },
  {
    uuid: 'noticon_ydzdccontgwxyqevstz4',
    title: 'YouTrack',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1690433808/noticon/ydzdccontgwxyqevstz4.png',
    keywords: '‡',
    date: '2023-07-27T04:56:51.277Z',
  },
  {
    uuid: 'noticon_qjdxyzoveyshrfi62zd0',
    title: 'aurora postgresql',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1690509238/noticon/qjdxyzoveyshrfi62zd0.png',
    keywords: 'Aurora PostgreSQL‡',
    date: '2023-07-28T01:54:00.922Z',
  },
  {
    uuid: 'noticon_btnqqmxjyghzy7phlrwp',
    title: '크래프톤',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1690780029/noticon/btnqqmxjyghzy7phlrwp.png',
    keywords: 'krafton‡',
    date: '2023-07-31T05:07:10.919Z',
  },
  {
    uuid: 'noticon_loeh2zbiajlijxlzglql',
    title: '抖音',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1690790780/noticon/loeh2zbiajlijxlzglql.png',
    keywords: '抖音‡抖音',
    date: '2023-07-31T08:06:23.264Z',
  },
  {
    uuid: 'noticon_xbxoe4ifbbmc4gchbkbw',
    title: 'gopasspw',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1690937006/noticon/xbxoe4ifbbmc4gchbkbw.png',
    keywords: 'gopass‡',
    date: '2023-08-02T00:43:28.132Z',
  },
  {
    uuid: 'noticon_vpklf4nwbdyqaf7sbznp',
    title: '성결대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1690950219/noticon/vpklf4nwbdyqaf7sbznp.png',
    keywords: '‡',
    date: '2023-08-02T04:23:41.925Z',
  },
  {
    uuid: 'noticon_j39dmrwrr9ssyjqkhbed',
    title: 'Gitee',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1691050783/noticon/j39dmrwrr9ssyjqkhbed.png',
    keywords: '‡',
    date: '2023-08-03T08:19:46.184Z',
  },
  {
    uuid: 'noticon_pqwpmkl3nrybhzumvxox',
    title: '29cm',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1691134228/noticon/pqwpmkl3nrybhzumvxox.png',
    keywords: '29cm‡',
    date: '2023-08-04T07:30:31.713Z',
  },
  {
    uuid: 'noticon_tmvzoqsblxm2fg7ai2u4',
    title: '29cm',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1691134263/noticon/tmvzoqsblxm2fg7ai2u4.png',
    keywords: '29cm‡',
    date: '2023-08-04T07:31:05.827Z',
  },
  {
    uuid: 'noticon_oehapu1pwlhsoyrmzgcz',
    title: 'appchadangi',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1691306737/noticon/oehapu1pwlhsoyrmzgcz.png',
    keywords: '‡',
    date: '2023-08-06T07:25:39.051Z',
  },
  {
    uuid: 'noticon_zb4rfnsywbtpfyfuyren',
    title: 'Maplestory World',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1691484967/noticon/zb4rfnsywbtpfyfuyren.png',
    keywords: '‡',
    date: '2023-08-08T08:56:09.711Z',
  },
  {
    uuid: 'noticon_lptn2wqpyxanmc28rxq6',
    title: '성일정보고등학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1691717800/noticon/lptn2wqpyxanmc28rxq6.png',
    keywords: 'school‡',
    date: '2023-08-11T01:36:42.912Z',
  },
  {
    uuid: 'noticon_mj67k1iwrb1vjrrntob2',
    title: 'swr',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1691760811/noticon/mj67k1iwrb1vjrrntob2.png',
    keywords: '‡',
    date: '2023-08-11T13:33:33.658Z',
  },
  {
    uuid: 'noticon_r4il4succa7z9l1bhdhy',
    title: '경상국립대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1691763081/noticon/r4il4succa7z9l1bhdhy.png',
    keywords: 'GNU‡경상대',
    date: '2023-08-11T14:11:23.579Z',
  },
  {
    uuid: 'noticon_d9s510z0blzjw5oyftkt',
    title: 'UNIST',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1691837523/noticon/d9s510z0blzjw5oyftkt.png',
    keywords: '유니스트‡울산과학기술원',
    date: '2023-08-12T10:52:05.554Z',
  },
  {
    uuid: 'noticon_hpchnwrovjwntosnz5ag',
    title: 'security',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1692240119/noticon/hpchnwrovjwntosnz5ag.png',
    keywords: '‡',
    date: '2023-08-17T02:42:01.324Z',
  },
  {
    uuid: 'noticon_xbknss24hohibzcvm2d6',
    title: 'PlanetScale',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1692351728/noticon/xbknss24hohibzcvm2d6.png',
    keywords: '‡',
    date: '2023-08-18T09:42:10.995Z',
  },
  {
    uuid: 'noticon_oeekfe40gkqfux4cwqmh',
    title: 'test',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1692516632/noticon/oeekfe40gkqfux4cwqmh.png',
    keywords: '‡',
    date: '2023-08-20T07:30:34.230Z',
  },
  {
    uuid: 'noticon_uspd6srttrqvimo2i8uo',
    title: '쿠리만쥬',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1692603828/noticon/uspd6srttrqvimo2i8uo.png',
    keywords: '‡',
    date: '2023-08-21T07:43:51.580Z',
  },
  {
    uuid: 'noticon_kzsvoxfedyqtgn3stkjy',
    title: '증류소',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1692718899/noticon/kzsvoxfedyqtgn3stkjy.png',
    keywords: '‡',
    date: '2023-08-22T15:41:41.600Z',
  },
  {
    uuid: 'noticon_awvj7sfhkjrac48o0whm',
    title: 'google adsense',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1692805461/noticon/awvj7sfhkjrac48o0whm.png',
    keywords: 'google‡adsense',
    date: '2023-08-23T15:44:24.291Z',
  },
  {
    uuid: 'noticon_n9anh2t53kxsbcxnikcy',
    title: 'test',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1692929804/noticon/n9anh2t53kxsbcxnikcy.png',
    keywords: '‡',
    date: '2023-08-25T02:16:46.727Z',
  },
  {
    uuid: 'noticon_ujc31dk5ghabkzypfnwg',
    title: 'turborepo',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1692949931/noticon/ujc31dk5ghabkzypfnwg.png',
    keywords: '‡',
    date: '2023-08-25T07:52:13.462Z',
  },
  {
    uuid: 'noticon_szqptlzayd0mhptjyl8k',
    title: 'Notebook',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1693318284/noticon/szqptlzayd0mhptjyl8k.png',
    keywords: 'notebook‡',
    date: '2023-08-29T14:11:26.647Z',
  },
  {
    uuid: 'noticon_lvlbunsvuzy8hptgelpn',
    title: 'architecture',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1693318359/noticon/lvlbunsvuzy8hptgelpn.png',
    keywords: '‡',
    date: '2023-08-29T14:12:41.216Z',
  },
  {
    uuid: 'noticon_aciozkbw6c3mmmi0xqxg',
    title: 'mvvm',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1693318421/noticon/aciozkbw6c3mmmi0xqxg.png',
    keywords: '‡',
    date: '2023-08-29T14:13:43.365Z',
  },
  {
    uuid: 'noticon_nmpyrmqclmp4yas07kwp',
    title: 'MVVM',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1693318469/noticon/nmpyrmqclmp4yas07kwp.png',
    keywords: '‡',
    date: '2023-08-29T14:14:31.519Z',
  },
  {
    uuid: 'noticon_lizdabmj9vqsvtcao7zh',
    title: 'gitflow',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1693319128/noticon/lizdabmj9vqsvtcao7zh.png',
    keywords: '‡',
    date: '2023-08-29T14:25:30.638Z',
  },
  {
    uuid: 'noticon_jpc7vaog49ss2dbm9q2m',
    title: 'slack',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1693319174/noticon/jpc7vaog49ss2dbm9q2m.png',
    keywords: '‡',
    date: '2023-08-29T14:26:16.893Z',
  },
  {
    uuid: 'noticon_iz7ef58m8isfcec9goyf',
    title: '유버스 캠퍼스',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1693559993/noticon/iz7ef58m8isfcec9goyf.png',
    keywords: '유버스 캠퍼스‡UVERSE campus',
    date: '2023-09-01T09:19:55.729Z',
  },
  {
    uuid: 'noticon_o67etnubepkc7umi34kk',
    title: 'asd',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1693723984/noticon/o67etnubepkc7umi34kk.png',
    keywords: 'asd‡asd',
    date: '2023-09-03T06:53:06.224Z',
  },
  {
    uuid: 'noticon_a2cntfr9rbdhva6swfnc',
    title: 'HYPEBEAST',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1693786070/noticon/a2cntfr9rbdhva6swfnc.png',
    keywords: '‡',
    date: '2023-09-04T00:07:52.466Z',
  },
  {
    uuid: 'noticon_ic63q1sztxza68gvyo3q',
    title: 'Travel Wallet',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1693786269/noticon/ic63q1sztxza68gvyo3q.png',
    keywords: '‡',
    date: '2023-09-04T00:11:13.748Z',
  },
  {
    uuid: 'noticon_reh9m1evxz2r363xowm5',
    title: '트래블로그',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1693786599/noticon/reh9m1evxz2r363xowm5.png',
    keywords: '‡',
    date: '2023-09-04T00:16:42.291Z',
  },
  {
    uuid: 'noticon_wubbcvkezjzxuwtd5jch',
    title: '쏘카',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1693786668/noticon/wubbcvkezjzxuwtd5jch.png',
    keywords: '‡',
    date: '2023-09-04T00:17:50.226Z',
  },
  {
    uuid: 'noticon_a6worbsc4erwewhbirod',
    title: '뉴닉',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1693786744/noticon/a6worbsc4erwewhbirod.png',
    keywords: '‡',
    date: '2023-09-04T00:19:08.084Z',
  },
  {
    uuid: 'noticon_h8e6lng6dhsgixm2xhlc',
    title: '클로바 노트',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1693786820/noticon/h8e6lng6dhsgixm2xhlc.png',
    keywords: '‡',
    date: '2023-09-04T00:20:23.172Z',
  },
  {
    uuid: 'noticon_jekopbra04jz7kud5k7c',
    title: '네이버 웍스',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1693786882/noticon/jekopbra04jz7kud5k7c.png',
    keywords: '‡',
    date: '2023-09-04T00:21:24.281Z',
  },
  {
    uuid: 'noticon_s8junyfz3mpsn5gabxz7',
    title: '밀리의 서재',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1693786951/noticon/s8junyfz3mpsn5gabxz7.png',
    keywords: '‡',
    date: '2023-09-04T00:22:33.380Z',
  },
  {
    uuid: 'noticon_rq2kasesg35ljijyptfw',
    title: '뱅크샐러드',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1693787025/noticon/rq2kasesg35ljijyptfw.png',
    keywords: '‡',
    date: '2023-09-04T00:23:48.179Z',
  },
  {
    uuid: 'noticon_p6d52g9zuyltgoxr41z3',
    title: '현대카드 DIVE',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1693787131/noticon/p6d52g9zuyltgoxr41z3.png',
    keywords: '‡',
    date: '2023-09-04T00:25:33.426Z',
  },
  {
    uuid: 'noticon_uwvagzhmzhw9hjrzrtdk',
    title: '리디북스',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1693788159/noticon/uwvagzhmzhw9hjrzrtdk.png',
    keywords: '‡',
    date: '2023-09-04T00:42:42.015Z',
  },
  {
    uuid: 'noticon_n0honbaennpyvjnav8c2',
    title: '왓챠',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1693788504/noticon/n0honbaennpyvjnav8c2.png',
    keywords: 'OTT‡',
    date: '2023-09-04T00:48:26.109Z',
  },
  {
    uuid: 'noticon_vldm3ndptjgj5rikueu1',
    title: '숨고',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1693789347/noticon/vldm3ndptjgj5rikueu1.png',
    keywords: '‡',
    date: '2023-09-04T01:02:30.457Z',
  },
  {
    uuid: 'noticon_pdf9p0bruvwriseyu1ny',
    title: '탈잉',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1693793363/noticon/pdf9p0bruvwriseyu1ny.png',
    keywords: '‡',
    date: '2023-09-04T02:09:26.274Z',
  },
  {
    uuid: 'noticon_kvyipmd786wsfx6toch5',
    title: '데이트립',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1693793806/noticon/kvyipmd786wsfx6toch5.png',
    keywords: '‡',
    date: '2023-09-04T02:16:49.843Z',
  },
  {
    uuid: 'noticon_dmt53igc7qeth5sha3jo',
    title: '어에비앤비',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1693793868/noticon/dmt53igc7qeth5sha3jo.png',
    keywords: '‡',
    date: '2023-09-04T02:17:50.711Z',
  },
  {
    uuid: 'noticon_zgyqq0vgjj1in3zbibfh',
    title: '마켓컬리',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1693793960/noticon/zgyqq0vgjj1in3zbibfh.png',
    keywords: '‡',
    date: '2023-09-04T02:19:23.808Z',
  },
  {
    uuid: 'noticon_chunpqvcgjwwkliehvg8',
    title: '카프카',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1693816496/noticon/chunpqvcgjwwkliehvg8.png',
    keywords: 'kafka‡',
    date: '2023-09-04T08:34:59.254Z',
  },
  {
    uuid: 'noticon_vgw7ldadfziduz82nlko',
    title: 'VisualTFT',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1693835315/noticon/vgw7ldadfziduz82nlko.png',
    keywords: '‡',
    date: '2023-09-04T13:48:37.474Z',
  },
  {
    uuid: 'noticon_myic9qbhnoe3jvsdvq4k',
    title: 'bunny',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1693873952/noticon/myic9qbhnoe3jvsdvq4k.gif',
    keywords: '‡',
    date: '2023-09-05T00:32:35.285Z',
  },
  {
    uuid: 'noticon_zjk3wfvwc3heatqa4cjy',
    title: 'AUSG',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1693882984/noticon/zjk3wfvwc3heatqa4cjy.png',
    keywords: 'community‡AWS',
    date: '2023-09-05T03:03:07.705Z',
  },
  {
    uuid: 'noticon_ltqpxdq4hrt1swp9tdhl',
    title: 'transparency',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1694023211/noticon/ltqpxdq4hrt1swp9tdhl.png',
    keywords: '‡',
    date: '2023-09-06T18:00:13.038Z',
  },
  {
    uuid: 'noticon_ox4ngdartf1uzusjhcqx',
    title: 'AWS API Gateway',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1694089639/noticon/ox4ngdartf1uzusjhcqx.png',
    keywords: 'aws‡',
    date: '2023-09-07T12:27:21.617Z',
  },
  {
    uuid: 'noticon_dd3vfifhyn990t0wvgpp',
    title: 'sep2023',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1694178273/noticon/dd3vfifhyn990t0wvgpp.png',
    keywords: 'naver‡',
    date: '2023-09-08T13:04:37.782Z',
  },
  {
    uuid: 'noticon_shhobwzr7ahvp4yp15kp',
    title: 'PAL',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1694181507/noticon/shhobwzr7ahvp4yp15kp.png',
    keywords: '‡',
    date: '2023-09-08T13:58:30.130Z',
  },
  {
    uuid: 'noticon_oo4sjntscu48jxjqk4wv',
    title: 'ninetodo',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1694263489/noticon/oo4sjntscu48jxjqk4wv.png',
    keywords: 'ninetodo‡ninetodo',
    date: '2023-09-09T12:44:51.554Z',
  },
  {
    uuid: 'noticon_p74tnsu3ypu99zrzo8az',
    title: '넥스원',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1694509501/noticon/p74tnsu3ypu99zrzo8az.png',
    keywords: '‡',
    date: '2023-09-12T09:05:04.385Z',
  },
  {
    uuid: 'noticon_opjqyupw3pfpt3evsocs',
    title: '포스코',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1694524829/noticon/opjqyupw3pfpt3evsocs.png',
    keywords: '‡',
    date: '2023-09-12T13:20:31.782Z',
  },
  {
    uuid: 'noticon_ewja9wouo3umbvbjlarf',
    title: '별커비',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1694603345/noticon/ewja9wouo3umbvbjlarf.png',
    keywords: '커비‡kerby',
    date: '2023-09-13T11:09:08.167Z',
  },
  {
    uuid: 'noticon_dhrnyrp8n0fw7aryxk2a',
    title: '앙꼬축하',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1694603435/noticon/dhrnyrp8n0fw7aryxk2a.gif',
    keywords: '앙꼬‡',
    date: '2023-09-13T11:10:38.210Z',
  },
  {
    uuid: 'noticon_jnn5mhf4rkg9h45qaerv',
    title: 'postgraphile',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1694662725/noticon/jnn5mhf4rkg9h45qaerv.png',
    keywords: 'graphile‡graphql',
    date: '2023-09-14T03:38:47.975Z',
  },
  {
    uuid: 'noticon_wlbll9hm3imgym2x448l',
    title: 'google tag manager',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1694675115/noticon/wlbll9hm3imgym2x448l.png',
    keywords: 'google‡tag',
    date: '2023-09-14T07:05:18.164Z',
  },
  {
    uuid: 'noticon_edolxtyakwsqawvkclxl',
    title: '스카피',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1694971191/noticon/edolxtyakwsqawvkclxl.png',
    keywords: 'scappy‡토끼',
    date: '2023-09-17T17:19:54.448Z',
  },
  {
    uuid: 'noticon_rf0hwn12exbtumj7mwud',
    title: '스카피',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1694971422/noticon/rf0hwn12exbtumj7mwud.gif',
    keywords: 'scappy‡토끼',
    date: '2023-09-17T17:23:44.768Z',
  },
  {
    uuid: 'noticon_tdyqhjcdnopu0l4jtgxl',
    title: '스카피',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1694971444/noticon/tdyqhjcdnopu0l4jtgxl.gif',
    keywords: 'scappy‡토끼',
    date: '2023-09-17T17:24:07.812Z',
  },
  {
    uuid: 'noticon_sfdlfbreyfqaylhufuvn',
    title: '스카피',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1694971483/noticon/sfdlfbreyfqaylhufuvn.gif',
    keywords: 'scappy‡토끼',
    date: '2023-09-17T17:24:45.992Z',
  },
  {
    uuid: 'noticon_vyus3xsbpdgll1rp4hjt',
    title: '스카피',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1694971583/noticon/vyus3xsbpdgll1rp4hjt.gif',
    keywords: 'scappy‡시무룩',
    date: '2023-09-17T17:26:25.592Z',
  },
  {
    uuid: 'noticon_mhdz8jizjw2hlcfn1z2l',
    title: '스카피',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1694971599/noticon/mhdz8jizjw2hlcfn1z2l.gif',
    keywords: 'scappy‡하트',
    date: '2023-09-17T17:26:41.899Z',
  },
  {
    uuid: 'noticon_atzvfavbgi32odyrkxiw',
    title: 'streamlit',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1694971734/noticon/atzvfavbgi32odyrkxiw.png',
    keywords: '‡',
    date: '2023-09-17T17:28:56.693Z',
  },
  {
    uuid: 'noticon_qxwmcfduxzjvghyrm5ls',
    title: '(new)29cm',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1695007759/noticon/qxwmcfduxzjvghyrm5ls.png',
    keywords: '‡',
    date: '2023-09-18T03:29:22.208Z',
  },
  {
    uuid: 'noticon_zlrnerz3uicfsxzngzgg',
    title: 'W컨셉',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1695007849/noticon/zlrnerz3uicfsxzngzgg.png',
    keywords: '‡',
    date: '2023-09-18T03:30:51.897Z',
  },
  {
    uuid: 'noticon_sibm8vgbdvyay9mcharj',
    title: 'OrCAD',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1695024479/noticon/sibm8vgbdvyay9mcharj.png',
    keywords: '‡',
    date: '2023-09-18T08:08:02.246Z',
  },
  {
    uuid: 'noticon_hl1lyoyohapqhtxjllio',
    title: '포차코안녕',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1695110119/noticon/hl1lyoyohapqhtxjllio.png',
    keywords: '포챠코‡산리오',
    date: '2023-09-19T07:55:20.966Z',
  },
  {
    uuid: 'noticon_whndnpmhizg4zcakyq46',
    title: '덕성여자대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1695130489/noticon/whndnpmhizg4zcakyq46.png',
    keywords: '‡',
    date: '2023-09-19T13:34:52.061Z',
  },
  {
    uuid: 'noticon_hwqvfs6exodjajl4tf7n',
    title: 'iOS17',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1695141473/noticon/hwqvfs6exodjajl4tf7n.png',
    keywords: '‡',
    date: '2023-09-19T16:37:56.153Z',
  },
  {
    uuid: 'noticon_oaqofdh6iikulfxq9ezj',
    title: 'Moya',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1695289709/noticon/oaqofdh6iikulfxq9ezj.png',
    keywords: '‡',
    date: '2023-09-21T09:48:32.619Z',
  },
  {
    uuid: 'noticon_ucsb4ia15c1qu5z7rxn0',
    title: 'northface',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1695368252/noticon/ucsb4ia15c1qu5z7rxn0.png',
    keywords: '‡',
    date: '2023-09-22T07:37:35.006Z',
  },
  {
    uuid: 'noticon_tlrv50wnlc7e2agyzgbz',
    title: 'vans',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1695368557/noticon/tlrv50wnlc7e2agyzgbz.png',
    keywords: '‡',
    date: '2023-09-22T07:42:39.679Z',
  },
  {
    uuid: 'noticon_smlhmzrxkpl3pocyo5km',
    title: 'Chandelure',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1695613524/noticon/smlhmzrxkpl3pocyo5km.gif',
    keywords: '‡',
    date: '2023-09-25T03:45:26.302Z',
  },
  {
    uuid: 'noticon_wqe3tgqz95ipfco6gz8p',
    title: 'Deoxys',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1695613818/noticon/wqe3tgqz95ipfco6gz8p.gif',
    keywords: '‡',
    date: '2023-09-25T03:50:20.167Z',
  },
  {
    uuid: 'noticon_awnydav81gyselsevrqr',
    title: 'Darkrai',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1695613841/noticon/awnydav81gyselsevrqr.gif',
    keywords: '‡',
    date: '2023-09-25T03:50:42.628Z',
  },
  {
    uuid: 'noticon_mgwegcrcfnqxkddpt99k',
    title: 'Rayquaza',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1695613894/noticon/mgwegcrcfnqxkddpt99k.gif',
    keywords: '‡',
    date: '2023-09-25T03:51:36.832Z',
  },
  {
    uuid: 'noticon_d5j3ffvzemdixudoezc1',
    title: 'Scyther',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1695614014/noticon/d5j3ffvzemdixudoezc1.gif',
    keywords: '‡',
    date: '2023-09-25T03:53:35.820Z',
  },
  {
    uuid: 'noticon_mzfnvzygcta9dev1twhc',
    title: 'unithon 8th',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1695641245/noticon/mzfnvzygcta9dev1twhc.png',
    keywords: 'unithon‡유니톤',
    date: '2023-09-25T11:27:27.639Z',
  },
  {
    uuid: 'noticon_nweixfqmv23orvo4fpon',
    title: 'unithon 10th',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1695641275/noticon/nweixfqmv23orvo4fpon.png',
    keywords: 'unithon‡유니톤',
    date: '2023-09-25T11:27:57.522Z',
  },
  {
    uuid: 'noticon_feptxzapc9s7zdfauyqt',
    title: 'Cyndaquil',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1695648931/noticon/feptxzapc9s7zdfauyqt.gif',
    keywords: '‡',
    date: '2023-09-25T13:35:33.226Z',
  },
  {
    uuid: 'noticon_nn3jjqmqgeaapt2jtqit',
    title: 'Charizard',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1695648985/noticon/nn3jjqmqgeaapt2jtqit.gif',
    keywords: '‡',
    date: '2023-09-25T13:36:27.694Z',
  },
  {
    uuid: 'noticon_z2hbvnnzecnzzmrrlwqo',
    title: 'Squirtle',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1695649033/noticon/z2hbvnnzecnzzmrrlwqo.gif',
    keywords: '‡',
    date: '2023-09-25T13:37:15.760Z',
  },
  {
    uuid: 'noticon_mfhn2prakx9vnfsp7mad',
    title: 'Bulbasaur',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1695649062/noticon/mfhn2prakx9vnfsp7mad.gif',
    keywords: '‡',
    date: '2023-09-25T13:37:44.282Z',
  },
  {
    uuid: 'noticon_l17s8lpa2vckd5oc6qpj',
    title: 'Mew',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1695649109/noticon/l17s8lpa2vckd5oc6qpj.gif',
    keywords: '‡',
    date: '2023-09-25T13:38:31.629Z',
  },
  {
    uuid: 'noticon_maf3ea3so39p8fzuxwlj',
    title: 'Oshawott',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1695649183/noticon/maf3ea3so39p8fzuxwlj.gif',
    keywords: '‡',
    date: '2023-09-25T13:39:45.861Z',
  },
  {
    uuid: 'noticon_mhyz5rkijzmyq4oyb4yi',
    title: 'Espeon',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1695652991/noticon/mhyz5rkijzmyq4oyb4yi.gif',
    keywords: '‡',
    date: '2023-09-25T14:43:14.464Z',
  },
  {
    uuid: 'noticon_uszub7x07ticerdt88gf',
    title: 'Umbreon',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1695653017/noticon/uszub7x07ticerdt88gf.gif',
    keywords: '‡',
    date: '2023-09-25T14:43:39.926Z',
  },
  {
    uuid: 'noticon_uqn1djer8pkrnavhqaj2',
    title: 'Musharna',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1695653122/noticon/uqn1djer8pkrnavhqaj2.gif',
    keywords: '‡',
    date: '2023-09-25T14:45:24.619Z',
  },
  {
    uuid: 'noticon_yormuxrjz8u7s8b6wgpk',
    title: 'Piplup',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1695653513/noticon/yormuxrjz8u7s8b6wgpk.gif',
    keywords: '‡',
    date: '2023-09-25T14:51:55.274Z',
  },
  {
    uuid: 'noticon_tbuj4zunum6mowduxj2j',
    title: 'Vaporeon',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1695677124/noticon/tbuj4zunum6mowduxj2j.gif',
    keywords: '‡',
    date: '2023-09-25T21:25:26.012Z',
  },
  {
    uuid: 'noticon_x0dfa5obhwkv3qj2bz4m',
    title: 'Deoxys',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1695691424/noticon/x0dfa5obhwkv3qj2bz4m.gif',
    keywords: '‡',
    date: '2023-09-26T01:23:46.275Z',
  },
  {
    uuid: 'noticon_xw4o7qa8xfr9ixrtalvw',
    title: 'Deoxys',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1695691512/noticon/xw4o7qa8xfr9ixrtalvw.gif',
    keywords: '‡',
    date: '2023-09-26T01:25:14.659Z',
  },
  {
    uuid: 'noticon_xvuw0ullh9ccsjsirxsz',
    title: 'TOEIC',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1696593662/noticon/xvuw0ullh9ccsjsirxsz.png',
    keywords: '‡',
    date: '2023-10-06T12:01:04.594Z',
  },
  {
    uuid: 'noticon_sdaxyq8bxt5q1fnfp2l1',
    title: 'earphone',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1696596985/noticon/sdaxyq8bxt5q1fnfp2l1.png',
    keywords: '‡',
    date: '2023-10-06T12:56:28.441Z',
  },
  {
    uuid: 'noticon_ldvnzyhql5u26ycrw3ep',
    title: 'hibernate',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1696736598/noticon/ldvnzyhql5u26ycrw3ep.png',
    keywords: '‡',
    date: '2023-10-08T03:43:22.170Z',
  },
  {
    uuid: 'noticon_q2qyhvzqr7wn4fvptf45',
    title: '앱가드',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1696912823/noticon/q2qyhvzqr7wn4fvptf45.png',
    keywords: 'nhn‡app guard',
    date: '2023-10-10T04:40:25.276Z',
  },
  {
    uuid: 'noticon_b3sinzgiyoopdtf7ns3y',
    title: 'KiCAD',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1696985981/noticon/b3sinzgiyoopdtf7ns3y.png',
    keywords: '‡',
    date: '2023-10-11T00:59:44.190Z',
  },
  {
    uuid: 'noticon_t5hguwsui1j6uwiacrfl',
    title: 'TI',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1697002108/noticon/t5hguwsui1j6uwiacrfl.png',
    keywords: '‡',
    date: '2023-10-11T05:28:30.498Z',
  },
  {
    uuid: 'noticon_ewpuzx4jplzsinypvr2x',
    title: 'bun',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1697033866/noticon/ewpuzx4jplzsinypvr2x.png',
    keywords: '‡',
    date: '2023-10-11T14:17:49.742Z',
  },
  {
    uuid: 'noticon_wd54sbi1kt3xdzgqniwy',
    title: '중앙대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1697344569/noticon/wd54sbi1kt3xdzgqniwy.png',
    keywords: '중앙대학교‡cau',
    date: '2023-10-15T04:36:11.993Z',
  },
  {
    uuid: 'noticon_xgbmhtzjtj8gqm42ijoz',
    title: 'wecode',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1697344630/noticon/xgbmhtzjtj8gqm42ijoz.png',
    keywords: '위코드‡wecode',
    date: '2023-10-15T04:37:12.839Z',
  },
  {
    uuid: 'noticon_aqmfmlf5iqt4fzm4dwjh',
    title: '인티그레이션',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1697345379/noticon/aqmfmlf5iqt4fzm4dwjh.png',
    keywords: 'integration‡',
    date: '2023-10-15T04:49:41.959Z',
  },
  {
    uuid: 'noticon_xkb4iros9o7ll20p5nw4',
    title: '에드워드코리아',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1697345467/noticon/xkb4iros9o7ll20p5nw4.png',
    keywords: 'edwards‡에드워드',
    date: '2023-10-15T04:51:09.382Z',
  },
  {
    uuid: 'noticon_ore3jkmidxz29vw06l77',
    title: 'Chromatic',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1697414265/noticon/ore3jkmidxz29vw06l77.png',
    keywords: 'Chromatic‡Storybook',
    date: '2023-10-15T23:57:47.963Z',
  },
  {
    uuid: 'noticon_ew9rtc8evglzp88tbwug',
    title: '치아카와',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1697562406/noticon/ew9rtc8evglzp88tbwug.gif',
    keywords: '먼작귀‡',
    date: '2023-10-17T17:06:49.066Z',
  },
  {
    uuid: 'noticon_vdnswqnsgutpdgnr9n6o',
    title: '토토로',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1697562841/noticon/vdnswqnsgutpdgnr9n6o.png',
    keywords: '토토로‡',
    date: '2023-10-17T17:14:03.826Z',
  },
  {
    uuid: 'noticon_efxhbxo2wzn07aimedom',
    title: '토토로',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1697562955/noticon/efxhbxo2wzn07aimedom.gif',
    keywords: '토토로‡',
    date: '2023-10-17T17:15:58.055Z',
  },
  {
    uuid: 'noticon_yfmvjthbya01phogwg3j',
    title: '망그러진곰',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1697590219/noticon/yfmvjthbya01phogwg3j.gif',
    keywords: '망그러진곰‡',
    date: '2023-10-18T00:50:21.870Z',
  },
  {
    uuid: 'noticon_eywvyiyd0w5fvwwtunmo',
    title: '뱃살 망그러진곰',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1697590265/noticon/eywvyiyd0w5fvwwtunmo.gif',
    keywords: '망그러진곰‡',
    date: '2023-10-18T00:51:08.195Z',
  },
  {
    uuid: 'noticon_yw7k8exxdsyl0tqyw08t',
    title: '하트 망곰',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1697605566/noticon/yw7k8exxdsyl0tqyw08t.gif',
    keywords: '망그러진곰‡',
    date: '2023-10-18T05:06:09.426Z',
  },
  {
    uuid: 'noticon_vwmrm5xdlozirx05outo',
    title: '망그러진햄찌',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1697605593/noticon/vwmrm5xdlozirx05outo.gif',
    keywords: '망그러진곰‡',
    date: '2023-10-18T05:06:35.936Z',
  },
  {
    uuid: 'noticon_oi5v40odzgjqdwzr6vbz',
    title: '1',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1697727478/noticon/oi5v40odzgjqdwzr6vbz.gif',
    keywords: '‡',
    date: '2023-10-19T14:58:00.514Z',
  },
  {
    uuid: 'noticon_ywsuabk8xedsffonki2x',
    title: 'nuclear',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1698197272/noticon/ywsuabk8xedsffonki2x.gif',
    keywords: '장애‡',
    date: '2023-10-25T01:27:56.166Z',
  },
  {
    uuid: 'noticon_r5pltob65ypgqyfnsia8',
    title: 'wolfram',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1698255351/noticon/r5pltob65ypgqyfnsia8.png',
    keywords: '‡',
    date: '2023-10-25T17:35:56.190Z',
  },
  {
    uuid: 'noticon_tzh0hif0kwdrdbndowgj',
    title: 'QQ',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1698256615/noticon/tzh0hif0kwdrdbndowgj.png',
    keywords: '‡',
    date: '2023-10-25T17:57:00.621Z',
  },
  {
    uuid: 'noticon_seoaznmbzm3pcp2um3d3',
    title: 'docker',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1698294991/noticon/seoaznmbzm3pcp2um3d3.png',
    keywords: 'docker‡docker',
    date: '2023-10-26T04:36:33.543Z',
  },
  {
    uuid: 'noticon_sib3tdvkrwbxoculimd1',
    title: 'ChatGPT',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1698298000/noticon/sib3tdvkrwbxoculimd1.png',
    keywords: '‡',
    date: '2023-10-26T05:26:43.936Z',
  },
  {
    uuid: 'noticon_edgileagzr3t7fcagplp',
    title: '꽃',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1698335660/noticon/edgileagzr3t7fcagplp.png',
    keywords: 'flower‡',
    date: '2023-10-26T15:54:22.628Z',
  },
  {
    uuid: 'noticon_ymfehj879h0kdreq6fye',
    title: 'naverworks',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1698367946/noticon/ymfehj879h0kdreq6fye.png',
    keywords: '‡',
    date: '2023-10-27T00:52:29.405Z',
  },
  {
    uuid: 'noticon_y0cxliwphpp9dvaxwolo',
    title: 'naverworks',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1698371813/noticon/y0cxliwphpp9dvaxwolo.png',
    keywords: '‡',
    date: '2023-10-27T01:56:55.308Z',
  },
  {
    uuid: 'noticon_txqory7adikx5l1dqyot',
    title: 'te',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1698524206/noticon/txqory7adikx5l1dqyot.png',
    keywords: 'ttet‡tt',
    date: '2023-10-28T20:16:48.016Z',
  },
  {
    uuid: 'noticon_sys7qx32avxeewf0bxbn',
    title: 'Geekble',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1698524215/noticon/sys7qx32avxeewf0bxbn.png',
    keywords: '‡',
    date: '2023-10-28T20:16:58.522Z',
  },
  {
    uuid: 'noticon_hrkc0mgrvdm38prj1pcj',
    title: '임금님랭킹',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1698633316/noticon/hrkc0mgrvdm38prj1pcj.png',
    keywords: '‡',
    date: '2023-10-30T02:35:18.807Z',
  },
  {
    uuid: 'noticon_fqyffswouawhpsg4lcmh',
    title: 'delta lake',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1698737322/noticon/fqyffswouawhpsg4lcmh.png',
    keywords: 'delta lake‡delta lake',
    date: '2023-10-31T07:28:44.913Z',
  },
  {
    uuid: 'noticon_bdqbwdui3jhliyp0m9q5',
    title: 'boj',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1698810587/noticon/bdqbwdui3jhliyp0m9q5.png',
    keywords: '‡',
    date: '2023-11-01T03:49:48.943Z',
  },
  {
    uuid: 'noticon_ri7vhgudjrc4c2kyxvfj',
    title: '롤린',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1698909425/noticon/ri7vhgudjrc4c2kyxvfj.gif',
    keywords: '‡',
    date: '2023-11-02T07:17:07.687Z',
  },
  {
    uuid: 'noticon_kkgsrnkt21a205kj3ufp',
    title: '볼빵빵피카츄',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1698909496/noticon/kkgsrnkt21a205kj3ufp.gif',
    keywords: '‡',
    date: '2023-11-02T07:18:19.574Z',
  },
  {
    uuid: 'noticon_snnbnsgb2m4jsosr5oaj',
    title: 'leo',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1699002995/noticon/snnbnsgb2m4jsosr5oaj.png',
    keywords: '‡',
    date: '2023-11-03T09:16:38.118Z',
  },
  {
    uuid: 'noticon_coocymgvio0j0ojvchas',
    title: 'Gather',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1699009388/noticon/coocymgvio0j0ojvchas.png',
    keywords: '‡',
    date: '2023-11-03T11:03:09.881Z',
  },
  {
    uuid: 'noticon_yoq9hyg07vnvhghm3xbf',
    title: '내 코드가 그렇게 이상한가요?',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1699012250/noticon/yoq9hyg07vnvhghm3xbf.png',
    keywords: '‡',
    date: '2023-11-03T11:50:53.044Z',
  },
  {
    uuid: 'noticon_mxswosboup0fskj21yxy',
    title: 'AWSKRUG',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1699073906/noticon/mxswosboup0fskj21yxy.png',
    keywords: 'awskrug‡',
    date: '2023-11-04T04:58:29.331Z',
  },
  {
    uuid: 'noticon_qkmpvge85glanushevfe',
    title: 'ChatGPT-Alpha',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1699160428/noticon/qkmpvge85glanushevfe.png',
    keywords: '‡',
    date: '2023-11-05T05:00:30.321Z',
  },
  {
    uuid: 'noticon_it5zlkj8ib2rtnl2dj5j',
    title: '123pan',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1699166564/noticon/it5zlkj8ib2rtnl2dj5j.png',
    keywords: '‡',
    date: '2023-11-05T06:42:47.851Z',
  },
  {
    uuid: 'noticon_y4ojaawlba3dyvgwi172',
    title: '딩모니',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1699237394/noticon/y4ojaawlba3dyvgwi172.png',
    keywords: '‡',
    date: '2023-11-06T02:23:16.935Z',
  },
  {
    uuid: 'noticon_ff2zjnc2eknxo3kqzi73',
    title: 'MBED',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1699332854/noticon/ff2zjnc2eknxo3kqzi73.png',
    keywords: '‡',
    date: '2023-11-07T04:54:16.329Z',
  },
  {
    uuid: 'noticon_fwjv3asdevx33aueruzt',
    title: 'pod',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1699339165/noticon/fwjv3asdevx33aueruzt.png',
    keywords: 'pod‡pod',
    date: '2023-11-07T06:39:28.075Z',
  },
  {
    uuid: 'noticon_o8n7cfi7y3aqg71ehnsy',
    title: 'naver',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1699339554/noticon/o8n7cfi7y3aqg71ehnsy.png',
    keywords: '‡',
    date: '2023-11-07T06:45:57.522Z',
  },
  {
    uuid: 'noticon_ytk56wmdudcms5u25fuj',
    title: 'apple',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1699339570/noticon/ytk56wmdudcms5u25fuj.png',
    keywords: '‡',
    date: '2023-11-07T06:46:12.782Z',
  },
  {
    uuid: 'noticon_sqpjbz8vnheho8xrn12w',
    title: 'app store',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1699453113/noticon/sqpjbz8vnheho8xrn12w.png',
    keywords: 'app store‡app store',
    date: '2023-11-08T14:18:36.096Z',
  },
  {
    uuid: 'noticon_i7sevjcajmjabwxddidh',
    title: 'Logseq',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1699911886/noticon/i7sevjcajmjabwxddidh.png',
    keywords: 'PKM‡',
    date: '2023-11-13T21:44:49.677Z',
  },
  {
    uuid: 'noticon_pk8ek2mhupfmectgr3tw',
    title: 'Obsidian',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1699912008/noticon/pk8ek2mhupfmectgr3tw.png',
    keywords: '옵시디언‡PKM',
    date: '2023-11-13T21:46:51.368Z',
  },
  {
    uuid: 'noticon_vlbmcv1drgkqtjkqswie',
    title: '서울시립대',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1699940857/noticon/vlbmcv1drgkqtjkqswie.png',
    keywords: '‡',
    date: '2023-11-14T05:47:40.163Z',
  },
  {
    uuid: 'noticon_nxwvc09iyzvqtdam9tro',
    title: 'admin',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1700039270/noticon/nxwvc09iyzvqtdam9tro.png',
    keywords: '‡',
    date: '2023-11-15T09:07:55.198Z',
  },
  {
    uuid: 'noticon_vjp3jd0q0obmccwgj3yw',
    title: 'user',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1700039311/noticon/vjp3jd0q0obmccwgj3yw.png',
    keywords: '‡',
    date: '2023-11-15T09:08:34.283Z',
  },
  {
    uuid: 'noticon_nlygpq9iwqcgtuml37zg',
    title: 'COUPANG',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1700185580/noticon/nlygpq9iwqcgtuml37zg.png',
    keywords: 'COUPANG‡COUPANG',
    date: '2023-11-17T01:46:22.519Z',
  },
  {
    uuid: 'noticon_ou5hyp9tpqysj9apqdty',
    title: 'k6',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1700204470/noticon/ou5hyp9tpqysj9apqdty.png',
    keywords: 'K6‡',
    date: '2023-11-17T07:01:12.747Z',
  },
  {
    uuid: 'noticon_vduy3ursbmycsrgvd3c4',
    title: 'zookeeper',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1700372862/noticon/vduy3ursbmycsrgvd3c4.png',
    keywords: '‡',
    date: '2023-11-19T05:47:45.149Z',
  },
  {
    uuid: 'noticon_xmcucflwt4lbor71thxq',
    title: '노씨데브',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1700538816/noticon/xmcucflwt4lbor71thxq.png',
    keywords: '‡',
    date: '2023-11-21T03:53:39.122Z',
  },
  {
    uuid: 'noticon_y3yyrf51wkybn3kdmotw',
    title: '이펙티브 타입스크립트',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1700579752/noticon/y3yyrf51wkybn3kdmotw.png',
    keywords: '‡',
    date: '2023-11-21T15:15:56.983Z',
  },
  {
    uuid: 'noticon_g2elit9d1mxbryzesabo',
    title: 'elasticache',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1700794391/noticon/g2elit9d1mxbryzesabo.png',
    keywords: '‡',
    date: '2023-11-24T02:53:12.735Z',
  },
  {
    uuid: 'noticon_nicqgh65ua8n0jkfofju',
    title: '빤쮸토끼',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1700802368/noticon/nicqgh65ua8n0jkfofju.gif',
    keywords: '토끼‡판치',
    date: '2023-11-24T05:06:10.906Z',
  },
  {
    uuid: 'noticon_ef5ndshhg3rcusr9ugql',
    title: '화난빤쮸',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1700802724/noticon/ef5ndshhg3rcusr9ugql.png',
    keywords: '화났다‡으잉',
    date: '2023-11-24T05:12:06.616Z',
  },
  {
    uuid: 'noticon_vjnqzdx8qqnw5yvcqpr0',
    title: 'feconf',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1700815810/noticon/vjnqzdx8qqnw5yvcqpr0.png',
    keywords: '‡',
    date: '2023-11-24T08:50:12.923Z',
  },
  {
    uuid: 'noticon_ajlrdaw32cfhogv8acva',
    title: 'kcd',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1700988138/noticon/ajlrdaw32cfhogv8acva.png',
    keywords: '한국신용데이터‡',
    date: '2023-11-26T08:42:21.246Z',
  },
  {
    uuid: 'noticon_teuhygw02w0zngcd9pzc',
    title: 'Ethereal Interface',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1701068571/noticon/teuhygw02w0zngcd9pzc.png',
    keywords: 'Ethereal Interface‡Ethereal Interface',
    date: '2023-11-27T07:02:53.678Z',
  },
  {
    uuid: 'noticon_irtw2v4oropz6awoazg3',
    title: 'Ethereal Interface logo',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1701068690/noticon/irtw2v4oropz6awoazg3.png',
    keywords: 'Ethereal Interface logo‡Ethereal Interface logo',
    date: '2023-11-27T07:04:52.424Z',
  },
  {
    uuid: 'noticon_v1y1d3iqk2vzfq0iw050',
    title: 'recoil',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1701077300/noticon/v1y1d3iqk2vzfq0iw050.png',
    keywords: 'recoil‡',
    date: '2023-11-27T09:28:22.894Z',
  },
  {
    uuid: 'noticon_i5sgqrmkr8vm6qsqqnpx',
    title: 'styled component',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1701077588/noticon/i5sgqrmkr8vm6qsqqnpx.png',
    keywords: 'styled component‡',
    date: '2023-11-27T09:33:09.986Z',
  },
  {
    uuid: 'noticon_rwohx8vyrsjyvnfrmxot',
    title: 'sad pou',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1701137898/noticon/rwohx8vyrsjyvnfrmxot.gif',
    keywords: '‡',
    date: '2023-11-28T02:18:22.279Z',
  },
  {
    uuid: 'noticon_q2ttx5ajgzstweny1y0l',
    title: 'velero',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1701189555/noticon/q2ttx5ajgzstweny1y0l.png',
    keywords: '‡',
    date: '2023-11-28T16:39:18.755Z',
  },
  {
    uuid: 'noticon_rdgvkj1ghnucix4urkek',
    title: 'aha',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1701358143/noticon/rdgvkj1ghnucix4urkek.png',
    keywords: '‡',
    date: '2023-11-30T15:29:05.560Z',
  },
  {
    uuid: 'noticon_f0vxits2kpd2ylrpkuws',
    title: 'minion_fight',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1701440553/noticon/f0vxits2kpd2ylrpkuws.gif',
    keywords: '‡',
    date: '2023-12-01T14:22:39.755Z',
  },
  {
    uuid: 'noticon_ogbfuq1urkl0f0zyk7kl',
    title: 'minion_angry',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1701440847/noticon/ogbfuq1urkl0f0zyk7kl.gif',
    keywords: '‡',
    date: '2023-12-01T14:27:31.511Z',
  },
  {
    uuid: 'noticon_rbwgsnibabhcqxu0kuhg',
    title: 'sims',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1701579018/noticon/rbwgsnibabhcqxu0kuhg.png',
    keywords: '‡',
    date: '2023-12-03T04:50:20.809Z',
  },
  {
    uuid: 'noticon_fbca1kdm3yjfse55aokd',
    title: 'tauri',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1701604117/noticon/fbca1kdm3yjfse55aokd.png',
    keywords: '‡',
    date: '2023-12-03T11:48:39.709Z',
  },
  {
    uuid: 'noticon_adrgj74azgmmu7tt75yq',
    title: '배트맨',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1701764943/noticon/adrgj74azgmmu7tt75yq.gif',
    keywords: '‡',
    date: '2023-12-05T08:29:09.741Z',
  },
  {
    uuid: 'noticon_o4syoqmb7k2lwypbzqvw',
    title: 'Strapi',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1701786520/noticon/o4syoqmb7k2lwypbzqvw.png',
    keywords: '‡',
    date: '2023-12-05T14:28:43.169Z',
  },
  {
    uuid: 'noticon_xjri16vpfbfnu5cy5rnd',
    title: 'HackerRank',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1701845423/noticon/xjri16vpfbfnu5cy5rnd.png',
    keywords: '‡',
    date: '2023-12-06T06:50:25.896Z',
  },
  {
    uuid: 'noticon_rgwjcjacemp6tgnilyqm',
    title: '팀버랜드',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1701908273/noticon/rgwjcjacemp6tgnilyqm.png',
    keywords: '팀버랜드‡',
    date: '2023-12-07T00:17:55.586Z',
  },
  {
    uuid: 'noticon_smoc1xqtbs6fiuktvnfo',
    title: '버그!',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1701998958/noticon/smoc1xqtbs6fiuktvnfo.png',
    keywords: 'bug, 버그‡',
    date: '2023-12-08T01:29:21.534Z',
  },
  {
    uuid: 'noticon_vhv7nnuigjfyvcem6gyd',
    title: 'nodejs_new',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1702001396/noticon/vhv7nnuigjfyvcem6gyd.png',
    keywords: '‡',
    date: '2023-12-08T02:09:59.749Z',
  },
  {
    uuid: 'noticon_sksae76pvyhcskpq3twt',
    title: 'openmind',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1702042835/noticon/sksae76pvyhcskpq3twt.png',
    keywords: '‡',
    date: '2023-12-08T13:40:39.322Z',
  },
  {
    uuid: 'noticon_zqoy9m1pzijqzr8tdpyx',
    title: 'right',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1702192136/noticon/zqoy9m1pzijqzr8tdpyx.png',
    keywords: '‡',
    date: '2023-12-10T07:08:59.205Z',
  },
  {
    uuid: 'noticon_oltms4nwtpab4wkp0j0c',
    title: 'wrong',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1702192159/noticon/oltms4nwtpab4wkp0j0c.png',
    keywords: '‡',
    date: '2023-12-10T07:09:22.527Z',
  },
  {
    uuid: 'noticon_sqsairhjea9pqqc48mh3',
    title: '그식당',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1702325796/noticon/sqsairhjea9pqqc48mh3.png',
    keywords: 'sigdang‡code-hustlers',
    date: '2023-12-11T20:16:39.451Z',
  },
  {
    uuid: 'noticon_wkobtjxgptfyb8w2yj9x',
    title: '나비',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1702358512/noticon/wkobtjxgptfyb8w2yj9x.png',
    keywords: '‡',
    date: '2023-12-12T05:21:55.917Z',
  },
  {
    uuid: 'noticon_wl5dejwjeig1oeauluuc',
    title: 'operating system',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1702481027/noticon/wl5dejwjeig1oeauluuc.png',
    keywords: 'os‡',
    date: '2023-12-13T15:23:49.596Z',
  },
  {
    uuid: 'noticon_yfwn5q6trloy7kygbamz',
    title: 'object',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1702519196/noticon/yfwn5q6trloy7kygbamz.png',
    keywords: '‡',
    date: '2023-12-14T01:59:58.592Z',
  },
  {
    uuid: 'noticon_gcpiqcic6xif4737yzro',
    title: '짱구',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1702540620/noticon/gcpiqcic6xif4737yzro.gif',
    keywords: '‡',
    date: '2023-12-14T07:57:03.194Z',
  },
  {
    uuid: 'noticon_iwfy5pan67qsyhemgtiq',
    title: '째깍악어',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1702853652/noticon/iwfy5pan67qsyhemgtiq.png',
    keywords: '‡',
    date: '2023-12-17T22:54:14.926Z',
  },
  {
    uuid: 'noticon_bu7btq3jjebunzvv24w2',
    title: 'metrics-server',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1702862164/noticon/bu7btq3jjebunzvv24w2.png',
    keywords: 'bitnami metrics-server‡bitnami metrics-server container',
    date: '2023-12-18T01:16:06.784Z',
  },
  {
    uuid: 'noticon_mtax0hh0dx7fhykg5tbz',
    title: 'MINIO',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1703033427/noticon/mtax0hh0dx7fhykg5tbz.png',
    keywords: 'minio‡',
    date: '2023-12-20T00:50:35.449Z',
  },
  {
    uuid: 'noticon_qqyucjjerfc2lmsds858',
    title: 'apparture',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1703169294/noticon/qqyucjjerfc2lmsds858.png',
    keywords: 'apparture‡portal',
    date: '2023-12-21T14:36:29.841Z',
  },
  {
    uuid: 'noticon_xv3lswjomguck7jyijgk',
    title: '서울',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1703475596/noticon/xv3lswjomguck7jyijgk.png',
    keywords: 'seoul‡seoul korea',
    date: '2023-12-25T03:39:58.437Z',
  },
  {
    uuid: 'noticon_vm9q2ki1rixpybi6frn8',
    title: 'Hugging Face',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1703688566/noticon/vm9q2ki1rixpybi6frn8.png',
    keywords: '‡',
    date: '2023-12-27T14:49:28.961Z',
  },
  {
    uuid: 'noticon_yolt2o7adxfmqo4yb943',
    title: 'redash',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1703731267/noticon/yolt2o7adxfmqo4yb943.png',
    keywords: '‡',
    date: '2023-12-28T02:41:09.975Z',
  },
  {
    uuid: 'noticon_kgk4q2xuezj90huitucx',
    title: 'deleo',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1703920803/noticon/kgk4q2xuezj90huitucx.png',
    keywords: 'deleo korea‡델레오코리아',
    date: '2023-12-30T07:20:05.180Z',
  },
  {
    uuid: 'noticon_jmmuqvueporus4xazoyx',
    title: 'SQL Server',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1703995083/noticon/jmmuqvueporus4xazoyx.png',
    keywords: 'Database‡',
    date: '2023-12-31T03:58:05.905Z',
  },
  {
    uuid: 'noticon_ho6nnujdcoiitwqx4zjx',
    title: 'Superset',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1704341567/noticon/ho6nnujdcoiitwqx4zjx.png',
    keywords: '‡',
    date: '2024-01-04T04:12:50.495Z',
  },
  {
    uuid: 'noticon_tmmqyirdigq6pdb8xwnz',
    title: 'Loki',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1704429529/noticon/tmmqyirdigq6pdb8xwnz.png',
    keywords: 'loki‡Grafana Loki',
    date: '2024-01-05T04:38:51.476Z',
  },
  {
    uuid: 'noticon_tumhqeqcfyq7lyu8abns',
    title: 'data',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1704677091/noticon/tumhqeqcfyq7lyu8abns.png',
    keywords: 'data‡data',
    date: '2024-01-08T01:24:53.552Z',
  },
  {
    uuid: 'noticon_utvqns95hgyzx0behza1',
    title: 'AmazonQ',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1704698582/noticon/utvqns95hgyzx0behza1.png',
    keywords: 'Q‡AWS',
    date: '2024-01-08T07:23:04.867Z',
  },
  {
    uuid: 'noticon_fm0cgkkjmvkavxt12kll',
    title: '잠든포차코',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1704781143/noticon/fm0cgkkjmvkavxt12kll.png',
    keywords: '‡',
    date: '2024-01-09T06:19:06.100Z',
  },
  {
    uuid: 'noticon_pa6qyun8elyamhpatsyi',
    title: '동아리팔레트',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1704788064/noticon/pa6qyun8elyamhpatsyi.png',
    keywords: '‡',
    date: '2024-01-09T08:14:27.829Z',
  },
  {
    uuid: 'noticon_cc5ek4ycfx2r9xj7qkup',
    title: '팔레트로고',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1704788159/noticon/cc5ek4ycfx2r9xj7qkup.png',
    keywords: '‡',
    date: '2024-01-09T08:16:01.016Z',
  },
  {
    uuid: 'noticon_grjgt8ysk20gxbcrnveb',
    title: '팔레트로고2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1704788291/noticon/grjgt8ysk20gxbcrnveb.png',
    keywords: '‡',
    date: '2024-01-09T08:18:13.605Z',
  },
  {
    uuid: 'noticon_yaqc9enajwesxnf44k1r',
    title: '1',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1704790351/noticon/yaqc9enajwesxnf44k1r.png',
    keywords: '1‡1',
    date: '2024-01-09T08:52:33.057Z',
  },
  {
    uuid: 'noticon_xj4uhdiq21nxw2wu8hkq',
    title: 'HAGO',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1704858888/noticon/xj4uhdiq21nxw2wu8hkq.png',
    keywords: '‡',
    date: '2024-01-10T03:54:50.807Z',
  },
  {
    uuid: 'noticon_zhb1vwtqjfrcpstyborw',
    title: '춘식이안녕',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1704880556/noticon/zhb1vwtqjfrcpstyborw.png',
    keywords: '춘식이‡카카오',
    date: '2024-01-10T09:55:58.056Z',
  },
  {
    uuid: 'noticon_dfbnlmnhcrkq2s6nqxge',
    title: '튜브 꽃',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1704880622/noticon/dfbnlmnhcrkq2s6nqxge.png',
    keywords: '카카오‡튜브',
    date: '2024-01-10T09:57:04.934Z',
  },
  {
    uuid: 'noticon_m34bbgxvcg0nzapvwdii',
    title: '죠르디 꽃',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1704880661/noticon/m34bbgxvcg0nzapvwdii.png',
    keywords: '죠르디‡카카오',
    date: '2024-01-10T09:57:43.391Z',
  },
  {
    uuid: 'noticon_mqcjbxqbmvhawhlyagiu',
    title: 'IAM',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1704934702/noticon/mqcjbxqbmvhawhlyagiu.png',
    keywords: 'AWS IAM‡iam',
    date: '2024-01-11T00:58:24.696Z',
  },
  {
    uuid: 'noticon_j4j19fqawkhusetofm3c',
    title: 'IAM',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1704934806/noticon/j4j19fqawkhusetofm3c.png',
    keywords: 'AWS IAM‡iam',
    date: '2024-01-11T01:00:08.774Z',
  },
  {
    uuid: 'noticon_fpffm7opqmuyshvs6z6t',
    title: 'EQL',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1704951511/noticon/fpffm7opqmuyshvs6z6t.png',
    keywords: '‡',
    date: '2024-01-11T05:38:33.787Z',
  },
  {
    uuid: 'noticon_xmz53pvm070h7qujaexu',
    title: '치이카와',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1705018230/noticon/xmz53pvm070h7qujaexu.png',
    keywords: '먼작귀‡',
    date: '2024-01-12T00:10:32.657Z',
  },
  {
    uuid: 'noticon_flehwhadlpzrcardnvu7',
    title: '치이카와2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1705018406/noticon/flehwhadlpzrcardnvu7.png',
    keywords: '먼작귀‡',
    date: '2024-01-12T00:13:28.844Z',
  },
  {
    uuid: 'noticon_kqbgaf81noy5vaseienr',
    title: 'DGIST',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1705221099/noticon/kqbgaf81noy5vaseienr.png',
    keywords: '‡',
    date: '2024-01-14T08:31:42.755Z',
  },
  {
    uuid: 'noticon_qh6rf8zgdehr8fsqyf32',
    title: 'DGIST',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1705221966/noticon/qh6rf8zgdehr8fsqyf32.png',
    keywords: '‡',
    date: '2024-01-14T08:46:09.170Z',
  },
  {
    uuid: 'noticon_dbo8tghiqtbkhgeud3wp',
    title: 'logo1',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1705286977/noticon/dbo8tghiqtbkhgeud3wp.png',
    keywords: '‡',
    date: '2024-01-15T02:49:39.456Z',
  },
  {
    uuid: 'noticon_nzzrmwdtoqje6uwkd3jm',
    title: '미국',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1705366963/noticon/nzzrmwdtoqje6uwkd3jm.png',
    keywords: 'usa‡america',
    date: '2024-01-16T01:02:45.854Z',
  },
  {
    uuid: 'noticon_qs9jjuqmkdsxxyphpjs5',
    title: '일본',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1705367149/noticon/qs9jjuqmkdsxxyphpjs5.png',
    keywords: 'japan‡nippon',
    date: '2024-01-16T01:05:52.088Z',
  },
  {
    uuid: 'noticon_no3tpinbfs0omadnm6ps',
    title: '대한민국',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1705367621/noticon/no3tpinbfs0omadnm6ps.png',
    keywords: '한국‡Korea',
    date: '2024-01-16T01:13:44.351Z',
  },
  {
    uuid: 'noticon_s2epsu3ttjnr9bouovpk',
    title: '카카오페이',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1705538546/noticon/s2epsu3ttjnr9bouovpk.png',
    keywords: 'kakaopay‡kakao pay',
    date: '2024-01-18T00:42:28.727Z',
  },
  {
    uuid: 'noticon_blxazyx1t6apiztpxyyj',
    title: 'verilog',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1706171159/noticon/blxazyx1t6apiztpxyyj.png',
    keywords: '‡',
    date: '2024-01-25T08:26:00.742Z',
  },
  {
    uuid: 'noticon_lwzu893vt0thoas5omdo',
    title: 'ㄻㄹ',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1706237542/noticon/lwzu893vt0thoas5omdo.png',
    keywords: 'ㄻㄻ‡ㄻㄻ',
    date: '2024-01-26T02:52:24.368Z',
  },
  {
    uuid: 'noticon_l9g6hkjrkw17ne0apiwz',
    title: 'ㄲ',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1706280720/noticon/l9g6hkjrkw17ne0apiwz.gif',
    keywords: 'ㄲ‡ㄲ',
    date: '2024-01-26T14:52:03.114Z',
  },
  {
    uuid: 'noticon_m5wt8zibptyisbm94hxa',
    title: 'palworld sphere',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1706347579/noticon/m5wt8zibptyisbm94hxa.png',
    keywords: 'game‡palworld',
    date: '2024-01-27T09:26:21.634Z',
  },
  {
    uuid: 'noticon_qciyoudxrqeks8eypmfm',
    title: 'EKS',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1706521503/noticon/qciyoudxrqeks8eypmfm.png',
    keywords: 'amazon EKS‡amazon eks',
    date: '2024-01-29T09:45:04.901Z',
  },
  {
    uuid: 'noticon_swlemdkajsoab7vopvqi',
    title: 'MSK',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1706596447/noticon/swlemdkajsoab7vopvqi.png',
    keywords: 'AWS MSK‡',
    date: '2024-01-30T06:34:09.928Z',
  },
  {
    uuid: 'noticon_cxylwr31g64cczsvesuq',
    title: 'deleo',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1706607329/noticon/cxylwr31g64cczsvesuq.png',
    keywords: 'deleo korea‡',
    date: '2024-01-30T09:35:32.545Z',
  },
  {
    uuid: 'noticon_wgnyqnxpipdacnvwwbcn',
    title: 'web socket',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1706767600/noticon/wgnyqnxpipdacnvwwbcn.png',
    keywords: 'web socket‡',
    date: '2024-02-01T06:06:42.265Z',
  },
  {
    uuid: 'noticon_td6cbg75oh8auecraifn',
    title: 'play store',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1706769342/noticon/td6cbg75oh8auecraifn.png',
    keywords: 'play store‡',
    date: '2024-02-01T06:35:45.922Z',
  },
  {
    uuid: 'noticon_trpwgtgnekfj91it6hz8',
    title: 'XTTS V.2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1706771330/noticon/trpwgtgnekfj91it6hz8.png',
    keywords: 'xtts‡',
    date: '2024-02-01T07:08:53.151Z',
  },
  {
    uuid: 'noticon_zkcfgxymsxc9yvpwzeub',
    title: 'RabbitMQ',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1706774045/noticon/zkcfgxymsxc9yvpwzeub.png',
    keywords: 'rabbitmq‡',
    date: '2024-02-01T07:54:07.060Z',
  },
  {
    uuid: 'noticon_lixve7usqyb2j9ialhfa',
    title: 'javascript',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1706849663/noticon/lixve7usqyb2j9ialhfa.png',
    keywords: 'javascript‡',
    date: '2024-02-02T04:54:25.232Z',
  },
  {
    uuid: 'noticon_f04ifpszzigaxbv35jzb',
    title: 'CLIP',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1706851159/noticon/f04ifpszzigaxbv35jzb.png',
    keywords: 'openai‡',
    date: '2024-02-02T05:19:22.557Z',
  },
  {
    uuid: 'noticon_et9hnoj9qsjbaxvyg9yv',
    title: 'Matlab',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1707289626/noticon/et9hnoj9qsjbaxvyg9yv.png',
    keywords: 'Matlab‡Matlab',
    date: '2024-02-07T07:07:09.691Z',
  },
  {
    uuid: 'noticon_kxpza8o99c6tfieloamu',
    title: 'GoLang',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1707289732/noticon/kxpza8o99c6tfieloamu.png',
    keywords: 'GoLang‡GoLang',
    date: '2024-02-07T07:08:55.215Z',
  },
  {
    uuid: 'noticon_uprn89nnpdhvm4r8wzhg',
    title: 'Android Studio',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1707289883/noticon/uprn89nnpdhvm4r8wzhg.png',
    keywords: 'Android Studio‡Android Studio',
    date: '2024-02-07T07:11:28.537Z',
  },
  {
    uuid: 'noticon_sagtfxgmtobktduvsyox',
    title: 'Coursera',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1707290792/noticon/sagtfxgmtobktduvsyox.png',
    keywords: 'Coursera‡Coursera',
    date: '2024-02-07T07:26:36.689Z',
  },
  {
    uuid: 'noticon_a18j86xzk9ccyx3at3p6',
    title: 'American Red Cross',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1707290902/noticon/a18j86xzk9ccyx3at3p6.png',
    keywords: 'American Red Cross‡American Red Cross',
    date: '2024-02-07T07:28:24.790Z',
  },
  {
    uuid: 'noticon_qwx8qvr8kbotdhxsyvyg',
    title: 'Datadiving',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1707290954/noticon/qwx8qvr8kbotdhxsyvyg.png',
    keywords: 'Datadiving‡데이터다이빙',
    date: '2024-02-07T07:29:16.931Z',
  },
  {
    uuid: 'noticon_lo4hke9chgknybs1vwlj',
    title: 'zero-base',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1707290995/noticon/lo4hke9chgknybs1vwlj.png',
    keywords: 'zero-base‡제로베이스',
    date: '2024-02-07T07:29:58.211Z',
  },
  {
    uuid: 'noticon_w2o1qmwevfjcdq4zskhz',
    title: 'Neptune-ai',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1707292378/noticon/w2o1qmwevfjcdq4zskhz.png',
    keywords: 'Neptune-ai‡Neptune-ai',
    date: '2024-02-07T07:53:00.972Z',
  },
  {
    uuid: 'noticon_xpmnti6xmz7baesam1wv',
    title: 'Facebook open source',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1707292464/noticon/xpmnti6xmz7baesam1wv.png',
    keywords: 'Facebook open source‡Facebook open source',
    date: '2024-02-07T07:54:26.214Z',
  },
  {
    uuid: 'noticon_pp5nu1nl0b54d0firmhu',
    title: 'NHS',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1707294498/noticon/pp5nu1nl0b54d0firmhu.png',
    keywords: 'NHS‡NHS',
    date: '2024-02-07T08:28:20.464Z',
  },
  {
    uuid: 'noticon_hgxdzgbnrlbddahywgqr',
    title: 'WELT ',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1707304224/noticon/hgxdzgbnrlbddahywgqr.png',
    keywords: 'WELT ‡웰트 ',
    date: '2024-02-07T11:10:26.282Z',
  },
  {
    uuid: 'noticon_zjjjqphucrj1tgscxozo',
    title: '씨이랩',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1707304304/noticon/zjjjqphucrj1tgscxozo.png',
    keywords: '씨이랩‡씨이랩',
    date: '2024-02-07T11:11:47.352Z',
  },
  {
    uuid: 'noticon_c2iwplvdbqffdfpwvood',
    title: '시나모롤',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1707312768/noticon/c2iwplvdbqffdfpwvood.png',
    keywords: '산리오‡',
    date: '2024-02-07T13:32:50.645Z',
  },
  {
    uuid: 'noticon_razu92q6aoqps5uoiorq',
    title: '신난시나모롤',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1707312914/noticon/razu92q6aoqps5uoiorq.png',
    keywords: '산리오‡',
    date: '2024-02-07T13:35:16.205Z',
  },
  {
    uuid: 'noticon_tbi2vcq07qev0nhy6tmj',
    title: '1',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1707313459/noticon/tbi2vcq07qev0nhy6tmj.png',
    keywords: '‡',
    date: '2024-02-07T13:44:22.336Z',
  },
  {
    uuid: 'noticon_z8h4ai0tm0sxd0kwxcjn',
    title: '2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1707313475/noticon/z8h4ai0tm0sxd0kwxcjn.png',
    keywords: '‡',
    date: '2024-02-07T13:44:37.592Z',
  },
  {
    uuid: 'noticon_dasqx1u1cghz9vt8h9xc',
    title: '3',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1707313489/noticon/dasqx1u1cghz9vt8h9xc.png',
    keywords: '‡',
    date: '2024-02-07T13:44:52.068Z',
  },
  {
    uuid: 'noticon_vxnqli4zxyrjeukbrhmp',
    title: '4',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1707313575/noticon/vxnqli4zxyrjeukbrhmp.png',
    keywords: '‡',
    date: '2024-02-07T13:46:18.411Z',
  },
  {
    uuid: 'noticon_gjd4oxpuugvck0dcamf4',
    title: '5',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1707313598/noticon/gjd4oxpuugvck0dcamf4.png',
    keywords: '‡',
    date: '2024-02-07T13:46:40.189Z',
  },
  {
    uuid: 'noticon_txka1lxqdvvo2o7htrmv',
    title: '6',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1707313614/noticon/txka1lxqdvvo2o7htrmv.png',
    keywords: '‡',
    date: '2024-02-07T13:46:58.882Z',
  },
  {
    uuid: 'noticon_ks0dqydrg52u7jvdkqob',
    title: '7',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1707313637/noticon/ks0dqydrg52u7jvdkqob.png',
    keywords: '‡',
    date: '2024-02-07T13:47:21.082Z',
  },
  {
    uuid: 'noticon_z6kkhe7cccdbtkcdinvv',
    title: '8',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1707313655/noticon/z6kkhe7cccdbtkcdinvv.png',
    keywords: '‡',
    date: '2024-02-07T13:47:38.358Z',
  },
  {
    uuid: 'noticon_wsbmw6rvt39lehdwlocx',
    title: '4',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1707313502/noticon/wsbmw6rvt39lehdwlocx.png',
    keywords: '‡',
    date: '2024-02-07T13:50:16.628Z',
  },
  {
    uuid: 'noticon_hlzq4kedvrwahy5kevk5',
    title: 'Coralogix',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1707317044/noticon/hlzq4kedvrwahy5kevk5.png',
    keywords: '‡',
    date: '2024-02-07T14:44:06.931Z',
  },
  {
    uuid: 'noticon_tguvnkvhq7oicrkdnqsm',
    title: 'Coralogix-icon',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1707317101/noticon/tguvnkvhq7oicrkdnqsm.png',
    keywords: '‡',
    date: '2024-02-07T14:45:04.155Z',
  },
  {
    uuid: 'noticon_xsso19r45qyz0yxvdyla',
    title: 'Dyna',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1707317151/noticon/xsso19r45qyz0yxvdyla.png',
    keywords: '‡',
    date: '2024-02-07T14:45:54.125Z',
  },
  {
    uuid: 'noticon_ovzpd2wzrwu9iok3slpl',
    title: 'f5',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1707317359/noticon/ovzpd2wzrwu9iok3slpl.png',
    keywords: '‡',
    date: '2024-02-07T14:49:23.816Z',
  },
  {
    uuid: 'noticon_vjag7arhxt0pooipkqrt',
    title: 'EDX',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1707549648/noticon/vjag7arhxt0pooipkqrt.png',
    keywords: 'EDX‡EDX',
    date: '2024-02-10T07:20:50.774Z',
  },
  {
    uuid: 'noticon_heoqqpcrtfsuprz2a7ez',
    title: 'JUNGOL',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1707791303/noticon/heoqqpcrtfsuprz2a7ez.png',
    keywords: '‡',
    date: '2024-02-13T02:28:25.104Z',
  },
  {
    uuid: 'noticon_lm4bsycea1cdtcekybth',
    title: 'filebrowser',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1707806513/noticon/lm4bsycea1cdtcekybth.png',
    keywords: 'file browser‡',
    date: '2024-02-13T06:41:55.620Z',
  },
  {
    uuid: 'noticon_e4ke3srrgfc7wliorq4w',
    title: 'wireguard',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1707884357/noticon/e4ke3srrgfc7wliorq4w.png',
    keywords: '‡',
    date: '2024-02-14T04:19:19.830Z',
  },
  {
    uuid: 'noticon_oi2gemsn6adbntvilsv4',
    title: 'IntelliJ IDEA',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1707888874/noticon/oi2gemsn6adbntvilsv4.png',
    keywords: 'IntelliJ IDEA‡IntelliJ IDEA',
    date: '2024-02-14T05:34:36.970Z',
  },
  {
    uuid: 'noticon_gdqxaria3mfqtui71jln',
    title: 'technical debt',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1707895854/noticon/gdqxaria3mfqtui71jln.png',
    keywords: '‡',
    date: '2024-02-14T07:30:57.129Z',
  },
  {
    uuid: 'noticon_zccmg7pq9thauj8cwj3y',
    title: '하이텍앤솔',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1707896911/noticon/zccmg7pq9thauj8cwj3y.png',
    keywords: '‡',
    date: '2024-02-14T07:48:33.742Z',
  },
  {
    uuid: 'noticon_vwcjnhil9ybsrn4n36vc',
    title: '쿼터백',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1707965993/noticon/vwcjnhil9ybsrn4n36vc.png',
    keywords: '쿼터백‡쿼터백',
    date: '2024-02-15T02:59:55.464Z',
  },
  {
    uuid: 'noticon_py06dte8oiipzbjslta7',
    title: '베러웰스',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1707966041/noticon/py06dte8oiipzbjslta7.png',
    keywords: '베러웰스‡베러웰스',
    date: '2024-02-15T03:00:43.581Z',
  },
  {
    uuid: 'noticon_wepo5wslphlh3dwvscfp',
    title: 'mendix',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1708012032/noticon/wepo5wslphlh3dwvscfp.png',
    keywords: '‡',
    date: '2024-02-15T15:47:14.937Z',
  },
  {
    uuid: 'noticon_m2ashvn0tr8z0lfgarg3',
    title: '기타',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1708100007/noticon/m2ashvn0tr8z0lfgarg3.png',
    keywords: 'guitar‡',
    date: '2024-02-16T16:13:29.473Z',
  },
  {
    uuid: 'noticon_znzawrzzq9ntjxl2c3qd',
    title: 'Flow',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1708155547/noticon/znzawrzzq9ntjxl2c3qd.png',
    keywords: '‡',
    date: '2024-02-17T07:39:11.560Z',
  },
  {
    uuid: 'noticon_t9v5ea3rm0uhzkvmdj5t',
    title: '플라야',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1708191611/noticon/t9v5ea3rm0uhzkvmdj5t.png',
    keywords: '‡',
    date: '2024-02-17T17:40:14.054Z',
  },
  {
    uuid: 'noticon_zam6iiwbro94z9wo63sg',
    title: 'AWS SAA',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1708265486/noticon/zam6iiwbro94z9wo63sg.png',
    keywords: 'AWS‡',
    date: '2024-02-18T14:11:28.562Z',
  },
  {
    uuid: 'noticon_kstxxpbgazkcwiydrnak',
    title: 'THERMOS',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1708329920/noticon/kstxxpbgazkcwiydrnak.png',
    keywords: 'THERMOS‡THERMOS',
    date: '2024-02-19T08:05:23.239Z',
  },
  {
    uuid: 'noticon_xwkkdbnyttyr30hr3iv6',
    title: '써모스',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1708329979/noticon/xwkkdbnyttyr30hr3iv6.png',
    keywords: 'THERMOS‡',
    date: '2024-02-19T08:06:21.457Z',
  },
  {
    uuid: 'noticon_t9uwe1zo4ulwsqnm6hsp',
    title: 'ad',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1708339141/noticon/t9uwe1zo4ulwsqnm6hsp.gif',
    keywords: 'ad‡ad',
    date: '2024-02-19T10:39:05.516Z',
  },
  {
    uuid: 'noticon_ccroo0v2fddajh2yl0tq',
    title: '커비',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1708339582/noticon/ccroo0v2fddajh2yl0tq.gif',
    keywords: '커비‡커비',
    date: '2024-02-19T10:46:27.775Z',
  },
  {
    uuid: 'noticon_tcy1k6pgbosu5e1z65de',
    title: 'zjql',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1708339783/noticon/tcy1k6pgbosu5e1z65de.gif',
    keywords: '‡',
    date: '2024-02-19T10:49:48.712Z',
  },
  {
    uuid: 'noticon_tfszinyc3gv1fsqatk93',
    title: '커비',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1708340101/noticon/tfszinyc3gv1fsqatk93.gif',
    keywords: '‡',
    date: '2024-02-19T10:55:05.195Z',
  },
  {
    uuid: 'noticon_nkcgv8e5ko4sqn4lhzq5',
    title: '커비',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1708340167/noticon/nkcgv8e5ko4sqn4lhzq5.gif',
    keywords: '‡',
    date: '2024-02-19T10:56:10.034Z',
  },
  {
    uuid: 'noticon_mhzoxynmmuizzihmn9nz',
    title: '커비',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1708356092/noticon/mhzoxynmmuizzihmn9nz.gif',
    keywords: '‡',
    date: '2024-02-19T15:21:34.563Z',
  },
  {
    uuid: 'noticon_lhggi1seqxj97sy17z4t',
    title: 'NHNCLOUD',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1708367003/noticon/lhggi1seqxj97sy17z4t.png',
    keywords: '‡',
    date: '2024-02-19T18:23:26.516Z',
  },
  {
    uuid: 'noticon_nbtnirytd6whhfphks4m',
    title: 'mymaria',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1708501796/noticon/nbtnirytd6whhfphks4m.png',
    keywords: 'maria mysql‡',
    date: '2024-02-21T07:50:01.373Z',
  },
  {
    uuid: 'noticon_qt7oujcn6c8klgn52cdv',
    title: '우피 oopy',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1708658281/noticon/qt7oujcn6c8klgn52cdv.png',
    keywords: '우피‡oopy',
    date: '2024-02-23T03:18:02.816Z',
  },
  {
    uuid: 'noticon_u72tars7pyuhj026emi3',
    title: 'react-hook-form',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1708870121/noticon/u72tars7pyuhj026emi3.png',
    keywords: '‡',
    date: '2024-02-25T14:08:43.528Z',
  },
  {
    uuid: 'noticon_jrvqzdwhx5zmomnbtixm',
    title: 'Next.js',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1708918238/noticon/jrvqzdwhx5zmomnbtixm.png',
    keywords: '‡',
    date: '2024-02-26T03:30:41.507Z',
  },
  {
    uuid: 'noticon_zs8gkctkpafyeaoeaolj',
    title: 'Next.js',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1708918285/noticon/zs8gkctkpafyeaoeaolj.png',
    keywords: '‡',
    date: '2024-02-26T03:31:27.597Z',
  },
  {
    uuid: 'noticon_av2orom10liebpdvjmwq',
    title: 'LG U+',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1709217221/noticon/av2orom10liebpdvjmwq.png',
    keywords: '‡',
    date: '2024-02-29T14:33:44.286Z',
  },
  {
    uuid: 'noticon_s4bpxvc2czms7abxiibu',
    title: '다빈치 리졸브',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1709456794/noticon/s4bpxvc2czms7abxiibu.png',
    keywords: '‡',
    date: '2024-03-03T09:06:36.896Z',
  },
  {
    uuid: 'noticon_mz3pe5jou27e5qgenlqu',
    title: 'zod',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1709647040/noticon/mz3pe5jou27e5qgenlqu.png',
    keywords: 'zod‡zod',
    date: '2024-03-05T13:57:22.957Z',
  },
  {
    uuid: 'noticon_ex4f09r5x4vy9cwbavah',
    title: 'mock-service-worker',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1709647158/noticon/ex4f09r5x4vy9cwbavah.png',
    keywords: 'msw‡msw',
    date: '2024-03-05T13:59:21.109Z',
  },
  {
    uuid: 'noticon_kfmeoyjcbojqvygedafr',
    title: 'Vitest',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1709647522/noticon/kfmeoyjcbojqvygedafr.png',
    keywords: 'Vitest‡Vitest',
    date: '2024-03-05T14:05:24.675Z',
  },
  {
    uuid: 'noticon_rn9m2lywvacd6ihc2hlo',
    title: 'testing-library',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1709647538/noticon/rn9m2lywvacd6ihc2hlo.png',
    keywords: ' testing-library‡ testing-library',
    date: '2024-03-05T14:05:40.336Z',
  },
  {
    uuid: 'noticon_zmj5jwoajsozzmdofluw',
    title: 'TOPIA Live',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1709712827/noticon/zmj5jwoajsozzmdofluw.png',
    keywords: '‡',
    date: '2024-03-06T08:13:49.281Z',
  },
  {
    uuid: 'noticon_g6i0piajjelfh2q725jn',
    title: 'orange',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1709715509/noticon/g6i0piajjelfh2q725jn.png',
    keywords: '‡',
    date: '2024-03-06T08:58:32.171Z',
  },
  {
    uuid: 'noticon_ppxs4ief8hlclu294py2',
    title: 'TOPIA Live',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1709877786/noticon/ppxs4ief8hlclu294py2.png',
    keywords: 'topia‡topia-live',
    date: '2024-03-08T06:03:09.285Z',
  },
  {
    uuid: 'noticon_v7lunl6p1dta5mrkuugl',
    title: 'Android',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1709963083/noticon/v7lunl6p1dta5mrkuugl.png',
    keywords: 'android‡안드로이드',
    date: '2024-03-09T05:44:45.911Z',
  },
  {
    uuid: 'noticon_ydfb9pgu0sfa5d5ky3ke',
    title: 'Law',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1709964784/noticon/ydfb9pgu0sfa5d5ky3ke.png',
    keywords: '법‡천칭',
    date: '2024-03-09T06:13:07.130Z',
  },
  {
    uuid: 'noticon_kfackwrts26ald9kyzyl',
    title: '홍익 마스코트',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1709974379/noticon/kfackwrts26ald9kyzyl.png',
    keywords: '홍대‡홍익대',
    date: '2024-03-09T08:53:01.121Z',
  },
  {
    uuid: 'noticon_kagbycabs0trbh0lbobp',
    title: '홍대 마스코트',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1709974687/noticon/kagbycabs0trbh0lbobp.png',
    keywords: '홍익대‡홍대',
    date: '2024-03-09T08:58:10.012Z',
  },
  {
    uuid: 'noticon_pxsil4eul9bueox5dfw0',
    title: '홍익대',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1709974808/noticon/pxsil4eul9bueox5dfw0.png',
    keywords: '홍대‡',
    date: '2024-03-09T09:00:11.269Z',
  },
  {
    uuid: 'noticon_wcbbvx44ppavzhuptuwd',
    title: 'styled components',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1710061458/noticon/wcbbvx44ppavzhuptuwd.png',
    keywords: '스타일컴포넌트‡',
    date: '2024-03-10T09:04:21.650Z',
  },
  {
    uuid: 'noticon_uebeb6qjkb9b3u3gt6tc',
    title: '모던 리액트 Deep Dive',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1710079182/noticon/uebeb6qjkb9b3u3gt6tc.png',
    keywords: 'react‡deep dive',
    date: '2024-03-10T13:59:44.676Z',
  },
  {
    uuid: 'noticon_mq4grgpauxovibmhkvjd',
    title: 'marsdoge',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1710227979/noticon/mq4grgpauxovibmhkvjd.png',
    keywords: '‡',
    date: '2024-03-12T07:19:42.065Z',
  },
  {
    uuid: 'noticon_zdgwu5rfgr4ksmhi2dv4',
    title: 'marsdoge-enlarged',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1710228238/noticon/zdgwu5rfgr4ksmhi2dv4.png',
    keywords: '‡',
    date: '2024-03-12T07:24:01.659Z',
  },
  {
    uuid: 'noticon_xxpv9fei0acwzhuz51sm',
    title: 'green spike',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1710311035/noticon/xxpv9fei0acwzhuz51sm.png',
    keywords: '‡',
    date: '2024-03-13T06:23:58.535Z',
  },
  {
    uuid: 'noticon_wzj8jq2c6y6rm8xbw3gl',
    title: 'Keyshot',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1710388002/noticon/wzj8jq2c6y6rm8xbw3gl.png',
    keywords: '‡',
    date: '2024-03-14T03:46:45.231Z',
  },
  {
    uuid: 'noticon_vrjoemuihh2johuosou8',
    title: 'php',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1710393358/noticon/vrjoemuihh2johuosou8.png',
    keywords: 'php‡코끼리',
    date: '2024-03-14T05:16:00.821Z',
  },
  {
    uuid: 'noticon_alncscllfppkysiuuznj',
    title: '춘식오열',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1710404128/noticon/alncscllfppkysiuuznj.gif',
    keywords: '‡',
    date: '2024-03-14T08:15:31.789Z',
  },
  {
    uuid: 'noticon_coekulvikfc8oyfql3xq',
    title: '던전앤파이터',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1710477450/noticon/coekulvikfc8oyfql3xq.png',
    keywords: '‡',
    date: '2024-03-15T04:37:32.958Z',
  },
  {
    uuid: 'noticon_clagp6ofkbvrqyk2plml',
    title: '호랑이_tiger',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1710668578/noticon/clagp6ofkbvrqyk2plml.png',
    keywords: '‡',
    date: '2024-03-17T09:43:00.156Z',
  },
  {
    uuid: 'noticon_m4worb6xhei0nb4w5adc',
    title: '호랑이',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1710668726/noticon/m4worb6xhei0nb4w5adc.png',
    keywords: '‡',
    date: '2024-03-17T09:45:29.337Z',
  },
  {
    uuid: 'noticon_u2grin1nsofigcgpkxgu',
    title: 'tiktok',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1710751777/noticon/u2grin1nsofigcgpkxgu.png',
    keywords: 'tiktok‡tiktok',
    date: '2024-03-18T08:49:39.249Z',
  },
  {
    uuid: 'noticon_nthikpsuz0haa7hvvxyu',
    title: 'openstack',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1710826491/noticon/nthikpsuz0haa7hvvxyu.png',
    keywords: 'openstack‡openstack',
    date: '2024-03-19T05:34:54.305Z',
  },
  {
    uuid: 'noticon_cqodkxxnlif3633hcbuw',
    title: '상공회의소',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1710981099/noticon/cqodkxxnlif3633hcbuw.png',
    keywords: '‡',
    date: '2024-03-21T00:31:43.302Z',
  },
  {
    uuid: 'noticon_qkfxxokm6ggvmdqe1uiv',
    title: '24hane',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1711012217/noticon/qkfxxokm6ggvmdqe1uiv.png',
    keywords: 'hane‡24hane',
    date: '2024-03-21T09:10:19.555Z',
  },
  {
    uuid: 'noticon_mqndhz0ls5nmhsdeh6ng',
    title: 'cabi',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1711012313/noticon/mqndhz0ls5nmhsdeh6ng.png',
    keywords: 'cabi‡42cabi',
    date: '2024-03-21T09:11:56.157Z',
  },
  {
    uuid: 'noticon_ujw1y2vxsnmui5uvyijq',
    title: 'springdb',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1711036192/noticon/ujw1y2vxsnmui5uvyijq.png',
    keywords: 'spring‡db',
    date: '2024-03-21T15:49:55.083Z',
  },
  {
    uuid: 'noticon_gjrofrjgku7rlbdbx4dr',
    title: 'quartz',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1711036304/noticon/gjrofrjgku7rlbdbx4dr.png',
    keywords: 'spring quartz‡quartz',
    date: '2024-03-21T15:51:47.105Z',
  },
  {
    uuid: 'noticon_ut87ltqbttjk0ywry2ux',
    title: '토심이',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1711039593/noticon/ut87ltqbttjk0ywry2ux.gif',
    keywords: '‡',
    date: '2024-03-21T16:46:37.953Z',
  },
  {
    uuid: 'noticon_ug4ak38juvygwqyrykvc',
    title: '토심이2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1711039618/noticon/ug4ak38juvygwqyrykvc.gif',
    keywords: '‡',
    date: '2024-03-21T16:47:02.182Z',
  },
  {
    uuid: 'noticon_qscd1ga2p9xnkqzvvsaa',
    title: '토심이3',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1711039639/noticon/qscd1ga2p9xnkqzvvsaa.gif',
    keywords: '토심이‡',
    date: '2024-03-21T16:47:22.778Z',
  },
  {
    uuid: 'noticon_r7hu3mbz8omzheibrd3p',
    title: 'cafe24',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1711345608/noticon/r7hu3mbz8omzheibrd3p.png',
    keywords: 'cafe24‡',
    date: '2024-03-25T05:46:51.402Z',
  },
  {
    uuid: 'noticon_kqpo0azhhvig9jqacjis',
    title: 'Stitch',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1711347381/noticon/kqpo0azhhvig9jqacjis.gif',
    keywords: '‡',
    date: '2024-03-25T06:16:24.488Z',
  },
  {
    uuid: 'noticon_nvivti8nea6qbjvbxbdh',
    title: '토심이의 까꿍',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1711596254/noticon/nvivti8nea6qbjvbxbdh.gif',
    keywords: '‡',
    date: '2024-03-28T03:24:17.161Z',
  },
  {
    uuid: 'noticon_goy8tfeuevcdimme8vcl',
    title: '열공춘식',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1711609978/noticon/goy8tfeuevcdimme8vcl.png',
    keywords: '‡',
    date: '2024-03-28T07:13:00.747Z',
  },
  {
    uuid: 'noticon_rr6cjuhwrscygirl10wh',
    title: '객체지향의 사실과 오해',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1711639562/noticon/rr6cjuhwrscygirl10wh.png',
    keywords: '‡',
    date: '2024-03-28T15:26:04.895Z',
  },
  {
    uuid: 'noticon_nbb7dia4v091tqsakont',
    title: 'kyungsung univ',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1711640553/noticon/nbb7dia4v091tqsakont.png',
    keywords: '‡',
    date: '2024-03-28T15:42:35.323Z',
  },
  {
    uuid: 'noticon_y96e8lnwraf5e34iwbqt',
    title: '경성대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1711640719/noticon/y96e8lnwraf5e34iwbqt.png',
    keywords: '‡',
    date: '2024-03-28T15:45:21.569Z',
  },
  {
    uuid: 'noticon_t0boj5btqesxnyxp4nfq',
    title: 'gsap',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1712215318/noticon/t0boj5btqesxnyxp4nfq.png',
    keywords: 'gsap‡gsap',
    date: '2024-04-04T07:22:01.457Z',
  },
  {
    uuid: 'noticon_o4ialttr07fhmqrl16ab',
    title: '荣耀',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1713253125/noticon/o4ialttr07fhmqrl16ab.png',
    keywords: '‡',
    date: '2024-04-16T07:38:49.168Z',
  },
  {
    uuid: 'noticon_n7nm2fyqczvhjqylredj',
    title: '小红书',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1713253420/noticon/n7nm2fyqczvhjqylredj.png',
    keywords: '‡',
    date: '2024-04-16T07:43:43.611Z',
  },
  {
    uuid: 'noticon_zw2cdrebbrolk2kxew8d',
    title: '베러',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1713316494/noticon/zw2cdrebbrolk2kxew8d.png',
    keywords: '‡',
    date: '2024-04-17T01:14:56.924Z',
  },
  {
    uuid: 'noticon_mfwqrmncs5axqyedwkmp',
    title: '청강게임스쿨갸오',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1713324671/noticon/mfwqrmncs5axqyedwkmp.png',
    keywords: '‡',
    date: '2024-04-17T03:31:13.704Z',
  },
  {
    uuid: 'noticon_fd3nlgsrergu6iyyf7kn',
    title: '숨쉬는커비',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1713324892/noticon/fd3nlgsrergu6iyyf7kn.gif',
    keywords: '‡',
    date: '2024-04-17T03:34:57.043Z',
  },
  {
    uuid: 'noticon_hrv1fuxzxqp09t8kfawy',
    title: '터키 국기',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1713336883/noticon/hrv1fuxzxqp09t8kfawy.png',
    keywords: '‡',
    date: '2024-04-17T06:54:46.287Z',
  },
  {
    uuid: 'noticon_jpyeyfvqq2zv8lv5sl98',
    title: '엘파인드',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1713429572/noticon/jpyeyfvqq2zv8lv5sl98.png',
    keywords: 'Lfind‡엘박스',
    date: '2024-04-18T08:39:34.790Z',
  },
  {
    uuid: 'noticon_qzftwhladvnwhcyloekj',
    title: '엘박스',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1713429611/noticon/qzftwhladvnwhcyloekj.png',
    keywords: 'LBOX‡엘파인드',
    date: '2024-04-18T08:40:14.539Z',
  },
  {
    uuid: 'noticon_p9e2nmnnloeaalyodsxw',
    title: 'PWA',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1713706922/noticon/p9e2nmnnloeaalyodsxw.png',
    keywords: 'pwa‡progressive web application',
    date: '2024-04-21T13:42:04.803Z',
  },
  {
    uuid: 'noticon_twwsmsyqcnptkfiexhbu',
    title: 'dot dot dot',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1713766211/noticon/twwsmsyqcnptkfiexhbu.png',
    keywords: '...‡',
    date: '2024-04-22T06:10:14.062Z',
  },
  {
    uuid: 'noticon_kfqsrximvn35dz90chux',
    title: 'dot dot dot',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1713766662/noticon/kfqsrximvn35dz90chux.png',
    keywords: '...‡',
    date: '2024-04-22T06:17:44.802Z',
  },
  {
    uuid: 'noticon_fqdmqmpsyx0biwxiyp1d',
    title: 'Trenbe',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1713790261/noticon/fqdmqmpsyx0biwxiyp1d.png',
    keywords: '‡',
    date: '2024-04-22T12:51:05.060Z',
  },
  {
    uuid: 'noticon_e3bal1zbigcioe4xyexn',
    title: '4GSR',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1713833615/noticon/e3bal1zbigcioe4xyexn.png',
    keywords: '‡',
    date: '2024-04-23T00:53:38.007Z',
  },
  {
    uuid: 'noticon_lostajgwj6djjeou24ab',
    title: 'oop',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1713858839/noticon/lostajgwj6djjeou24ab.png',
    keywords: '‡',
    date: '2024-04-23T07:54:02.918Z',
  },
  {
    uuid: 'noticon_s4ve9vkonpcw2ollw3u0',
    title: '뭘',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1714115905/noticon/s4ve9vkonpcw2ollw3u0.gif',
    keywords: '‡',
    date: '2024-04-26T07:18:28.085Z',
  },
  {
    uuid: 'noticon_admobk3knh7n53qsseii',
    title: '패턴',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1714210763/noticon/admobk3knh7n53qsseii.png',
    keywords: '그레이‡',
    date: '2024-04-27T09:39:26.141Z',
  },
  {
    uuid: 'noticon_wn3peh7uaykziehxqxup',
    title: '와콤',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1714625654/noticon/wn3peh7uaykziehxqxup.png',
    keywords: '‡',
    date: '2024-05-02T04:54:17.351Z',
  },
  {
    uuid: 'noticon_brlhiqmwphp9bviduxq3',
    title: 'jobkorea',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1714808404/noticon/brlhiqmwphp9bviduxq3.png',
    keywords: '‡',
    date: '2024-05-04T07:40:06.469Z',
  },
  {
    uuid: 'noticon_me240rltoziuwc0ounns',
    title: 'Conalog PATCH',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1714824183/noticon/me240rltoziuwc0ounns.png',
    keywords: 'PATCH‡PATCH',
    date: '2024-05-04T12:03:05.995Z',
  },
  {
    uuid: 'noticon_bwwnsn616pen0k5gr39h',
    title: 'Conalog',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1714824219/noticon/bwwnsn616pen0k5gr39h.png',
    keywords: 'Conalog‡Conalog',
    date: '2024-05-04T12:03:41.728Z',
  },
  {
    uuid: 'noticon_b5qtvlk5annneshndpfj',
    title: 'Couchbase',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1715057969/noticon/b5qtvlk5annneshndpfj.png',
    keywords: 'couchbase‡couchbase',
    date: '2024-05-07T04:59:36.871Z',
  },
  {
    uuid: 'noticon_h2ei3faqe0srlahxjvbl',
    title: 'deleo',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1715139247/noticon/h2ei3faqe0srlahxjvbl.png',
    keywords: 'deleo_korea‡deleo_korea_D',
    date: '2024-05-08T03:34:09.873Z',
  },
  {
    uuid: 'noticon_zlmubrnrxs8tzzqjlsmv',
    title: 'keycloak',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1715152293/noticon/zlmubrnrxs8tzzqjlsmv.png',
    keywords: '‡',
    date: '2024-05-08T07:11:38.543Z',
  },
  {
    uuid: 'noticon_xas0o8pesihmjag98rjd',
    title: 'keycloak',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1715152380/noticon/xas0o8pesihmjag98rjd.png',
    keywords: '‡',
    date: '2024-05-08T07:13:03.765Z',
  },
  {
    uuid: 'noticon_itra66q3z4elb32sdvfb',
    title: '연봉인상',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1715255250/noticon/itra66q3z4elb32sdvfb.png',
    keywords: '‡',
    date: '2024-05-09T11:47:32.806Z',
  },
  {
    uuid: 'noticon_goddwrdcmjonqaz34sxp',
    title: '연봉인상 핑크',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1715255355/noticon/goddwrdcmjonqaz34sxp.png',
    keywords: '‡',
    date: '2024-05-09T11:49:17.823Z',
  },
  {
    uuid: 'noticon_eaylki3awceztdfobkvq',
    title: '연봉인상 민트',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1715255589/noticon/eaylki3awceztdfobkvq.png',
    keywords: '‡',
    date: '2024-05-09T11:53:11.930Z',
  },
  {
    uuid: 'noticon_xgorftfafa1ngnlrwf65',
    title: 'done',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1715331622/noticon/xgorftfafa1ngnlrwf65.png',
    keywords: '‡',
    date: '2024-05-10T09:00:24.927Z',
  },
  {
    uuid: 'noticon_rn7t2ujkmyg2nknnnhv9',
    title: 'Exception',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1715661059/noticon/rn7t2ujkmyg2nknnnhv9.png',
    keywords: 'Exception‡Exception',
    date: '2024-05-14T04:31:01.762Z',
  },
  {
    uuid: 'noticon_uuazsyrd9j1dxaan5vvc',
    title: 'codeit',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1715767529/noticon/uuazsyrd9j1dxaan5vvc.png',
    keywords: '‡',
    date: '2024-05-15T10:05:32.381Z',
  },
  {
    uuid: 'noticon_x6ds082ifszz7bjsratk',
    title: 'codeit 2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1715780789/noticon/x6ds082ifszz7bjsratk.png',
    keywords: '‡',
    date: '2024-05-15T13:46:31.499Z',
  },
  {
    uuid: 'noticon_imvwynltyfkcz4dsvw8v',
    title: 'ChatGPT',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1715781781/noticon/imvwynltyfkcz4dsvw8v.png',
    keywords: '‡',
    date: '2024-05-15T14:03:03.900Z',
  },
  {
    uuid: 'noticon_seh9elkswcqbrpsxvmhd',
    title: 'axios',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1716180510/noticon/seh9elkswcqbrpsxvmhd.png',
    keywords: 'axios‡axios',
    date: '2024-05-20T04:48:32.808Z',
  },
  {
    uuid: 'noticon_kqmtneiychmvyxqfv3cy',
    title: '크래프톤',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1716196398/noticon/kqmtneiychmvyxqfv3cy.png',
    keywords: '크래프톤‡배그',
    date: '2024-05-20T09:13:20.526Z',
  },
  {
    uuid: 'noticon_tkqx193xaxdnwb4zs16c',
    title: 'VMS',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1716383075/noticon/tkqx193xaxdnwb4zs16c.png',
    keywords: 'vms‡',
    date: '2024-05-22T13:04:40.309Z',
  },
  {
    uuid: 'noticon_jkxhhjmgyiqmjrwgyxo6',
    title: '춘식단발',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1716447016/noticon/jkxhhjmgyiqmjrwgyxo6.png',
    keywords: '‡',
    date: '2024-05-23T06:50:18.409Z',
  },
  {
    uuid: 'noticon_jcvffa0pixuy5itkgnxo',
    title: '춘식단발',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1716447034/noticon/jcvffa0pixuy5itkgnxo.png',
    keywords: '‡',
    date: '2024-05-23T06:50:37.730Z',
  },
  {
    uuid: 'noticon_qpligdfqeccrhtwafgc6',
    title: '폼폼푸린',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1716450160/noticon/qpligdfqeccrhtwafgc6.png',
    keywords: '‡',
    date: '2024-05-23T07:42:42.533Z',
  },
  {
    uuid: 'noticon_d8lxdvnbkge2boslxgqj',
    title: '움직이는 폼폼푸린',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1716450266/noticon/d8lxdvnbkge2boslxgqj.gif',
    keywords: '‡',
    date: '2024-05-23T07:44:29.125Z',
  },
  {
    uuid: 'noticon_lufykrw6hjsnfm90kaxp',
    title: 'imweb',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1716771252/noticon/lufykrw6hjsnfm90kaxp.png',
    keywords: '‡',
    date: '2024-05-27T00:54:15.173Z',
  },
  {
    uuid: 'noticon_gbyghythwmj3mwggbhc1',
    title: '포포',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1716772384/noticon/gbyghythwmj3mwggbhc1.png',
    keywords: '‡',
    date: '2024-05-27T01:13:07.183Z',
  },
  {
    uuid: 'noticon_kfnjt3mzaewjadkr8kps',
    title: 'danbi',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1716784867/noticon/kfnjt3mzaewjadkr8kps.gif',
    keywords: 'danbi‡danbi',
    date: '2024-05-27T04:41:10.939Z',
  },
  {
    uuid: 'noticon_fg4jg8pyynloge0mxgsn',
    title: 'CloudFront',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1716859349/noticon/fg4jg8pyynloge0mxgsn.png',
    keywords: 'Content delivery network‡클라우드프론트',
    date: '2024-05-28T01:22:31.724Z',
  },
  {
    uuid: 'noticon_ifar9lf7wwharnsq6sh9',
    title: '타이핑 커리지',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1716861667/noticon/ifar9lf7wwharnsq6sh9.gif',
    keywords: '‡',
    date: '2024-05-28T02:01:09.889Z',
  },
  {
    uuid: 'noticon_vyjdaefuy7xvszk8xv0j',
    title: 'KMall24',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1716945305/noticon/vyjdaefuy7xvszk8xv0j.png',
    keywords: 'kmall24‡케이몰24',
    date: '2024-05-29T01:15:07.453Z',
  },
  {
    uuid: 'noticon_tvu93txzjctbsimpg8i6',
    title: 'ignoring',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1717053507/noticon/tvu93txzjctbsimpg8i6.gif',
    keywords: 'ignoring‡ignoring',
    date: '2024-05-30T07:18:34.385Z',
  },
  {
    uuid: 'noticon_etgpj3ahlig6e82l5jja',
    title: 'dowork',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1717132911/noticon/etgpj3ahlig6e82l5jja.png',
    keywords: 'dowork‡dowork',
    date: '2024-05-31T05:21:53.882Z',
  },
  {
    uuid: 'noticon_dxadhqme2nhzuj3socfw',
    title: 'Globee (kotra)',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1717289104/noticon/dxadhqme2nhzuj3socfw.png',
    keywords: 'kotra‡kotra',
    date: '2024-06-02T00:45:08.448Z',
  },
  {
    uuid: 'noticon_uyk48en5w9gpyngvwjjx',
    title: '대한무역투자진흥공사 (KOTRA)',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1717289632/noticon/uyk48en5w9gpyngvwjjx.png',
    keywords: 'kotra‡kotra',
    date: '2024-06-02T00:53:54.635Z',
  },
  {
    uuid: 'noticon_eml7hloqfsckrmkndkle',
    title: 'AWS Chatbot',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1717555674/noticon/eml7hloqfsckrmkndkle.png',
    keywords: 'Chatbot‡chatbot',
    date: '2024-06-05T02:47:56.820Z',
  },
  {
    uuid: 'noticon_skz7jyyvubz8hfb3sxn9',
    title: '한국항공대',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1718434703/noticon/skz7jyyvubz8hfb3sxn9.png',
    keywords: '한국항공대, 항공대, kau‡',
    date: '2024-06-15T06:58:26.476Z',
  },
  {
    uuid: 'noticon_s81jjdbczhz6urzgsvwu',
    title: '한국항공대',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1718434788/noticon/s81jjdbczhz6urzgsvwu.png',
    keywords: '한국항공대, 항공대, kau‡',
    date: '2024-06-15T06:59:50.091Z',
  },
  {
    uuid: 'noticon_meprqybq3f8v0gpkmt8m',
    title: '한국세무사회',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1718438531/noticon/meprqybq3f8v0gpkmt8m.png',
    keywords: '세무‡',
    date: '2024-06-15T08:02:14.481Z',
  },
  {
    uuid: 'noticon_xl1wnno21amlfxfux6fs',
    title: '한국데이터진흥원',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1718438673/noticon/xl1wnno21amlfxfux6fs.png',
    keywords: '데이터‡',
    date: '2024-06-15T08:04:38.450Z',
  },
  {
    uuid: 'noticon_npgxubyeuarxngw0w4pv',
    title: '록히드마틴',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1718439120/noticon/npgxubyeuarxngw0w4pv.png',
    keywords: '‡',
    date: '2024-06-15T08:12:03.989Z',
  },
  {
    uuid: 'noticon_gmu4rpbpihqti5x6rpos',
    title: '관세청',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1718439280/noticon/gmu4rpbpihqti5x6rpos.png',
    keywords: '‡',
    date: '2024-06-15T08:14:42.842Z',
  },
  {
    uuid: 'noticon_oqwyfwnvlrul20tth3xb',
    title: 'Buildspace',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1718470222/noticon/oqwyfwnvlrul20tth3xb.png',
    keywords: 'startup‡pyramid',
    date: '2024-06-15T16:50:24.409Z',
  },
  {
    uuid: 'noticon_lzr6kjzt4zv8v0gncpfw',
    title: '빵빵이',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1718697084/noticon/lzr6kjzt4zv8v0gncpfw.png',
    keywords: '빵빵이‡빵빵이',
    date: '2024-06-18T07:51:29.489Z',
  },
  {
    uuid: 'noticon_gjfixzonmpuikwfas0oh',
    title: 'ecmascript',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1718698059/noticon/gjfixzonmpuikwfas0oh.png',
    keywords: 'es‡ecmascript',
    date: '2024-06-18T08:07:41.359Z',
  },
  {
    uuid: 'noticon_yvirr6xv0vhmfnyv34lx',
    title: '연세대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1718699883/noticon/yvirr6xv0vhmfnyv34lx.png',
    keywords: 'yonsei‡',
    date: '2024-06-18T08:38:05.979Z',
  },
  {
    uuid: 'noticon_cerqgt36xvzsmxrlanai',
    title: 'material design',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1718780458/noticon/cerqgt36xvzsmxrlanai.png',
    keywords: '‡',
    date: '2024-06-19T07:01:01.027Z',
  },
  {
    uuid: 'noticon_ngxsw8o0qxbcxqsvgaqk',
    title: 'opencost',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1718791074/noticon/ngxsw8o0qxbcxqsvgaqk.png',
    keywords: '오픈코스트‡',
    date: '2024-06-19T09:57:56.575Z',
  },
  {
    uuid: 'noticon_aohrlsswbimli5dslklt',
    title: '디시인사이드',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1718845337/noticon/aohrlsswbimli5dslklt.png',
    keywords: 'DC‡',
    date: '2024-06-20T01:02:23.058Z',
  },
  {
    uuid: 'noticon_rw0b9bhuohf1xt9jwjej',
    title: '한국 소비자원',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1718875173/noticon/rw0b9bhuohf1xt9jwjej.png',
    keywords: 'KCA‡공기업',
    date: '2024-06-20T09:19:35.390Z',
  },
  {
    uuid: 'noticon_wu6qwz7wxwe8oq4evdb2',
    title: 'text',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1719022709/noticon/wu6qwz7wxwe8oq4evdb2.png',
    keywords: 'text‡text',
    date: '2024-06-22T02:18:31.716Z',
  },
  {
    uuid: 'noticon_n4jur7kddob3gt5xk9n9',
    title: '공무원연금공단',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1719312927/noticon/n4jur7kddob3gt5xk9n9.png',
    keywords: 'GEPS‡공기업',
    date: '2024-06-25T10:55:28.988Z',
  },
  {
    uuid: 'noticon_rjqeauju8dx33nvdsbs1',
    title: '국민연금공단',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1719313051/noticon/rjqeauju8dx33nvdsbs1.png',
    keywords: 'NPS‡공기업',
    date: '2024-06-25T10:57:33.580Z',
  },
  {
    uuid: 'noticon_mtyr2wzi618igjzt1ncg',
    title: '건강보험심사평가원',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1719314018/noticon/mtyr2wzi618igjzt1ncg.png',
    keywords: 'HIRA‡공기업',
    date: '2024-06-25T11:13:40.691Z',
  },
  {
    uuid: 'noticon_dt1qoxffjgpenlqs1qfh',
    title: 'centralpharm',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1719474832/noticon/dt1qoxffjgpenlqs1qfh.png',
    keywords: '‡',
    date: '2024-06-27T07:53:55.265Z',
  },
  {
    uuid: 'noticon_e8k6sbhovxtecbj53usy',
    title: 'maryruths',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1719474940/noticon/e8k6sbhovxtecbj53usy.png',
    keywords: '‡',
    date: '2024-06-27T07:55:42.773Z',
  },
  {
    uuid: 'noticon_scf0uaqdnbex7lb9jde4',
    title: 'gardenoflife',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1719474995/noticon/scf0uaqdnbex7lb9jde4.png',
    keywords: '‡',
    date: '2024-06-27T07:56:38.477Z',
  },
  {
    uuid: 'noticon_f4fi8dkox7iw3effqgjz',
    title: 'vpn',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1719477280/noticon/f4fi8dkox7iw3effqgjz.png',
    keywords: '‡',
    date: '2024-06-27T08:34:43.652Z',
  },
  {
    uuid: 'noticon_j8ct56qwezfvuywdngyy',
    title: 'rip',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1719543933/noticon/j8ct56qwezfvuywdngyy.png',
    keywords: '‡',
    date: '2024-06-28T03:05:36.613Z',
  },
  {
    uuid: 'noticon_mlzptunm55l2fjnyqf7t',
    title: 'paw',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1719586006/noticon/mlzptunm55l2fjnyqf7t.gif',
    keywords: '‡',
    date: '2024-06-28T14:46:49.720Z',
  },
  {
    uuid: 'noticon_yeqwdeuiybor5m4hh7zj',
    title: '스파르타코딩클럽',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1719643111/noticon/yeqwdeuiybor5m4hh7zj.png',
    keywords: '‡',
    date: '2024-06-29T06:38:33.896Z',
  },
  {
    uuid: 'noticon_t6xpbmtya0ngnbbiofxg',
    title: 'bang',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1719722571/noticon/t6xpbmtya0ngnbbiofxg.png',
    keywords: 'bangduck‡',
    date: '2024-06-30T04:42:53.795Z',
  },
  {
    uuid: 'noticon_yjsggps4fr8wevtlntp4',
    title: 'bangbang',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1719722622/noticon/yjsggps4fr8wevtlntp4.png',
    keywords: 'bangbangduck‡',
    date: '2024-06-30T04:43:44.111Z',
  },
  {
    uuid: 'noticon_ks5qfqbu6gkhr23m25k9',
    title: 'bangtransp',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1719722865/noticon/ks5qfqbu6gkhr23m25k9.png',
    keywords: 'bangtransp‡',
    date: '2024-06-30T04:47:47.055Z',
  },
  {
    uuid: 'noticon_yn42fdaufqenlhi0nysl',
    title: 'bang1',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1719723017/noticon/yn42fdaufqenlhi0nysl.png',
    keywords: '‡',
    date: '2024-06-30T04:50:19.619Z',
  },
  {
    uuid: 'noticon_cadhjmfchvzpf3bpli1z',
    title: 'bang2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1719723035/noticon/cadhjmfchvzpf3bpli1z.png',
    keywords: '‡',
    date: '2024-06-30T04:50:36.985Z',
  },
  {
    uuid: 'noticon_yuxesuqglwjaphellg1o',
    title: 'bang3',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1719723069/noticon/yuxesuqglwjaphellg1o.png',
    keywords: '‡',
    date: '2024-06-30T04:51:11.290Z',
  },
  {
    uuid: 'noticon_bhkq0jknckonyzkghaih',
    title: 'ptbuddylogo',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1719736760/noticon/bhkq0jknckonyzkghaih.png',
    keywords: '‡',
    date: '2024-06-30T08:39:22.355Z',
  },
  {
    uuid: 'noticon_olwwz7up0lqc0jjxgcvr',
    title: 'CMake',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1719841009/noticon/olwwz7up0lqc0jjxgcvr.png',
    keywords: 'cmake‡c++',
    date: '2024-07-01T13:36:51.287Z',
  },
  {
    uuid: 'noticon_fbxo8bfutyifbufuiqz4',
    title: '한국공학대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1719910832/noticon/fbxo8bfutyifbufuiqz4.png',
    keywords: 'TUK‡TUKorea',
    date: '2024-07-02T09:00:34.413Z',
  },
  {
    uuid: 'noticon_trewskh119emzcmbkhmo',
    title: 'chiikawa1',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1719918298/noticon/trewskh119emzcmbkhmo.png',
    keywords: '‡',
    date: '2024-07-02T11:05:01.364Z',
  },
  {
    uuid: 'noticon_xgqx8avgi9keemgqgklw',
    title: 'usagi1',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1719918696/noticon/xgqx8avgi9keemgqgklw.png',
    keywords: '‡',
    date: '2024-07-02T11:11:38.033Z',
  },
  {
    uuid: 'noticon_sydkckgnkqllpursz426',
    title: '페페',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1719922756/noticon/sydkckgnkqllpursz426.png',
    keywords: '‡',
    date: '2024-07-02T12:19:18.719Z',
  },
  {
    uuid: 'noticon_wgv5ufajbpnjdhexz6jc',
    title: 'OCI',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1719981319/noticon/wgv5ufajbpnjdhexz6jc.png',
    keywords: 'Oracle Cloud‡',
    date: '2024-07-03T04:35:21.624Z',
  },
  {
    uuid: 'noticon_yfqn33fjcxotusv9vorw',
    title: 'jetbrains',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1719981857/noticon/yfqn33fjcxotusv9vorw.png',
    keywords: '제트브레인즈‡제트브레인',
    date: '2024-07-03T04:44:19.652Z',
  },
  {
    uuid: 'noticon_umjygky0wnwwuxhbnr3h',
    title: 'Claude',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1719981991/noticon/umjygky0wnwwuxhbnr3h.png',
    keywords: 'claude‡클로드',
    date: '2024-07-03T04:46:34.037Z',
  },
  {
    uuid: 'noticon_sf6zinwvln05mmnejgba',
    title: 'Claude',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1719982169/noticon/sf6zinwvln05mmnejgba.png',
    keywords: '‡',
    date: '2024-07-03T04:49:32.085Z',
  },
  {
    uuid: 'noticon_elq8e21qpfg2gptgjnek',
    title: 'asdf',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1719982684/noticon/elq8e21qpfg2gptgjnek.png',
    keywords: '‡',
    date: '2024-07-03T04:58:06.746Z',
  },
  {
    uuid: 'noticon_ym79eu6tswdqbetf0zap',
    title: 'sublimetext',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1719993855/noticon/ym79eu6tswdqbetf0zap.png',
    keywords: '‡',
    date: '2024-07-03T08:04:17.335Z',
  },
  {
    uuid: 'noticon_emdibzjcehvfzo8gmiki',
    title: 'openvpn',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1719993972/noticon/emdibzjcehvfzo8gmiki.png',
    keywords: '‡',
    date: '2024-07-03T08:06:14.624Z',
  },
  {
    uuid: 'noticon_fcucop9fadrkncpa6hba',
    title: '에렠',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1720037957/noticon/fcucop9fadrkncpa6hba.gif',
    keywords: '‡',
    date: '2024-07-03T20:19:23.492Z',
  },
  {
    uuid: 'noticon_wlsg8eush9nsl45cittv',
    title: '아무것도안함',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1720075001/noticon/wlsg8eush9nsl45cittv.png',
    keywords: '고양이‡',
    date: '2024-07-04T06:36:43.719Z',
  },
  {
    uuid: 'noticon_bfocfn6enhqv7cuizrnc',
    title: 'Mexican cat',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1720102388/noticon/bfocfn6enhqv7cuizrnc.gif',
    keywords: '‡',
    date: '2024-07-04T14:13:13.375Z',
  },
  {
    uuid: 'noticon_j8fbrkdmvxd7xezg75hk',
    title: 'AWS 교과서',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1720160544/noticon/j8fbrkdmvxd7xezg75hk.png',
    keywords: 'AWS‡교과서',
    date: '2024-07-05T06:22:26.574Z',
  },
  {
    uuid: 'noticon_qyrf4wlledukk65lsvjg',
    title: 'postgresql-logo-nocut',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1720506037/noticon/qyrf4wlledukk65lsvjg.png',
    keywords: '‡',
    date: '2024-07-09T06:20:40.210Z',
  },
  {
    uuid: 'noticon_r0brv7ahaz6nkvmglpzy',
    title: 'BepleBay',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1720536265/noticon/r0brv7ahaz6nkvmglpzy.png',
    keywords: '‡',
    date: '2024-07-09T14:44:27.518Z',
  },
  {
    uuid: 'noticon_uql1szce5wqghojy1rcq',
    title: 'BeplePay',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1720536323/noticon/uql1szce5wqghojy1rcq.png',
    keywords: '‡',
    date: '2024-07-09T14:45:25.935Z',
  },
  {
    uuid: 'noticon_lxhyu7xo7ujsxvuxmiuc',
    title: 'supabase',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1720579881/noticon/lxhyu7xo7ujsxvuxmiuc.png',
    keywords: '‡',
    date: '2024-07-10T02:51:23.788Z',
  },
  {
    uuid: 'noticon_u2enrbls0ibsslwaibhh',
    title: '건강해짐',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1720587480/noticon/u2enrbls0ibsslwaibhh.png',
    keywords: '‡',
    date: '2024-07-10T04:58:02.846Z',
  },
  {
    uuid: 'noticon_jf7kk09gnjdy5g52wzul',
    title: '카카오선물하기',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1720689333/noticon/jf7kk09gnjdy5g52wzul.png',
    keywords: '‡',
    date: '2024-07-11T09:15:35.815Z',
  },
  {
    uuid: 'noticon_x8u0z4hwisktsrgepset',
    title: '카카오쇼핑하기',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1720689348/noticon/x8u0z4hwisktsrgepset.png',
    keywords: '‡',
    date: '2024-07-11T09:15:51.130Z',
  },
  {
    uuid: 'noticon_ylg5mgru4cax21cdqnpo',
    title: 'HEAD',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1720697794/noticon/ylg5mgru4cax21cdqnpo.png',
    keywords: '‡',
    date: '2024-07-11T11:36:36.317Z',
  },
  {
    uuid: 'noticon_oneqia6pfg1ccufzzab1',
    title: 'brave',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1720748275/noticon/oneqia6pfg1ccufzzab1.png',
    keywords: '‡',
    date: '2024-07-12T01:37:57.606Z',
  },
  {
    uuid: 'noticon_wl9o5cgi3bzzqvhpqpou',
    title: 'AWS WAF',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1721108234/noticon/wl9o5cgi3bzzqvhpqpou.png',
    keywords: 'WAF‡AWS 웹 애플리케이션 방화벽',
    date: '2024-07-16T05:37:16.265Z',
  },
  {
    uuid: 'noticon_vxz061vx0mltgsjd3r9j',
    title: '카카오쇼핑라이브',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1721121307/noticon/vxz061vx0mltgsjd3r9j.png',
    keywords: '‡',
    date: '2024-07-16T09:15:09.235Z',
  },
  {
    uuid: 'noticon_yv3o2epgzcwowijiczf1',
    title: '불주먹커비',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1721133315/noticon/yv3o2epgzcwowijiczf1.gif',
    keywords: '커비,zjql,별의커비‡',
    date: '2024-07-16T12:35:18.306Z',
  },
  {
    uuid: 'noticon_nwpuoiczmm1ktyckb0s6',
    title: 'offsec',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1721798555/noticon/nwpuoiczmm1ktyckb0s6.png',
    keywords: 'oscp‡',
    date: '2024-07-24T05:22:37.466Z',
  },
  {
    uuid: 'noticon_r1bmolyjlcugjwxbonjm',
    title: 'wepli',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1721837870/noticon/r1bmolyjlcugjwxbonjm.png',
    keywords: 'wepli‡wepli',
    date: '2024-07-24T16:17:53.194Z',
  },
  {
    uuid: 'noticon_osaa5xxpk9zbhtxf6i9h',
    title: 'Tmax 구해줘',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1721878692/noticon/osaa5xxpk9zbhtxf6i9h.png',
    keywords: '‡',
    date: '2024-07-25T03:38:15.443Z',
  },
  {
    uuid: 'noticon_ijh8j2rjzrvbvmfnzvva',
    title: 'minion',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1721958218/noticon/ijh8j2rjzrvbvmfnzvva.png',
    keywords: '‡',
    date: '2024-07-26T01:43:41.685Z',
  },
  {
    uuid: 'noticon_jgzt7qf31ewbvdjx6q6y',
    title: '팽도리',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1722244959/noticon/jgzt7qf31ewbvdjx6q6y.png',
    keywords: '팽도리‡팽도리',
    date: '2024-07-29T09:22:41.247Z',
  },
  {
    uuid: 'noticon_arfr6x0kj0fljgtns2tk',
    title: '12',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1722256691/noticon/arfr6x0kj0fljgtns2tk.gif',
    keywords: '212‡133',
    date: '2024-07-29T12:38:13.718Z',
  },
  {
    uuid: 'noticon_kptbmyxfknr0fnhv3ehw',
    title: '고위드',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1722320979/noticon/kptbmyxfknr0fnhv3ehw.png',
    keywords: '고위드‡고위드',
    date: '2024-07-30T06:29:41.486Z',
  },
  {
    uuid: 'noticon_eznyeuiwxhr30s4cwkxy',
    title: '신한은행',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1722321093/noticon/eznyeuiwxhr30s4cwkxy.png',
    keywords: '신한은행‡신한은행',
    date: '2024-07-30T06:31:35.716Z',
  },
  {
    uuid: 'noticon_t2kzrfapr06j7pdghs5g',
    title: '오피스키퍼',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1722321180/noticon/t2kzrfapr06j7pdghs5g.png',
    keywords: '오피스키퍼‡오피스키퍼',
    date: '2024-07-30T06:33:02.452Z',
  },
  {
    uuid: 'noticon_q9psfhgyluhxm1rodsum',
    title: 'V3',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1722321304/noticon/q9psfhgyluhxm1rodsum.png',
    keywords: 'V3‡V3',
    date: '2024-07-30T06:35:06.342Z',
  },
  {
    uuid: 'noticon_y80zzxdd1z87lggxbgdn',
    title: 'OS',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1722392855/noticon/y80zzxdd1z87lggxbgdn.png',
    keywords: '‡',
    date: '2024-07-31T02:27:37.434Z',
  },
  {
    uuid: 'noticon_h5gug29fj1qugj0p7bvm',
    title: 'Web RTC',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1722403650/noticon/h5gug29fj1qugj0p7bvm.png',
    keywords: 'Web RTC‡Web RTC',
    date: '2024-07-31T05:27:32.515Z',
  },
  {
    uuid: 'noticon_dy10lqodlqixe8m12gqq',
    title: '구글 캘린더',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1722484225/noticon/dy10lqodlqixe8m12gqq.png',
    keywords: '구글 캘린더‡구글 캘린더',
    date: '2024-08-01T03:50:29.143Z',
  },
  {
    uuid: 'noticon_sgco44kgdrtawuwcrtbd',
    title: 'tuist',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1722496996/noticon/sgco44kgdrtawuwcrtbd.png',
    keywords: '‡',
    date: '2024-08-01T07:23:18.654Z',
  },
  {
    uuid: 'noticon_xsrohcurgxd5w29qzzvu',
    title: 'ngrok',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1722681845/noticon/xsrohcurgxd5w29qzzvu.png',
    keywords: 'ngrok‡',
    date: '2024-08-03T10:44:07.093Z',
  },
  {
    uuid: 'noticon_swkagmaeseq1i4bjc4uw',
    title: 'runpod',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1722766294/noticon/swkagmaeseq1i4bjc4uw.png',
    keywords: '‡',
    date: '2024-08-04T10:11:36.084Z',
  },
  {
    uuid: 'noticon_owbfnodgyule2ccsr3rt',
    title: 'minGW',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1722766434/noticon/owbfnodgyule2ccsr3rt.png',
    keywords: 'MinGW‡mingw',
    date: '2024-08-04T10:13:56.621Z',
  },
  {
    uuid: 'noticon_jvdipwuyp0jotbkwtluq',
    title: 'gorse',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1722766477/noticon/jvdipwuyp0jotbkwtluq.png',
    keywords: 'Gorse‡',
    date: '2024-08-04T10:14:38.795Z',
  },
  {
    uuid: 'noticon_kqvjzgxv3lgngbifaz9w',
    title: 'internet archive',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1722766747/noticon/kqvjzgxv3lgngbifaz9w.png',
    keywords: 'archive‡',
    date: '2024-08-04T10:19:09.033Z',
  },
  {
    uuid: 'noticon_hpuwmmztjjcrwx33stym',
    title: 'internet archive',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1722766774/noticon/hpuwmmztjjcrwx33stym.png',
    keywords: 'archive‡',
    date: '2024-08-04T10:19:36.484Z',
  },
  {
    uuid: 'noticon_m6vlftyeocugpllumqmx',
    title: 'books',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1722767750/noticon/m6vlftyeocugpllumqmx.png',
    keywords: '‡',
    date: '2024-08-04T10:35:52.179Z',
  },
  {
    uuid: 'noticon_biznoblpqhiwvweq3fe4',
    title: 'llm',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1722768416/noticon/biznoblpqhiwvweq3fe4.png',
    keywords: 'LLM‡',
    date: '2024-08-04T10:46:58.867Z',
  },
  {
    uuid: 'noticon_v0urwqxk7yuiyq9rwxf6',
    title: 'realmysql1',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1722933821/noticon/v0urwqxk7yuiyq9rwxf6.png',
    keywords: 'mysql‡',
    date: '2024-08-06T08:43:43.598Z',
  },
  {
    uuid: 'noticon_lehwj6ve3wzugo50w6fr',
    title: 'realmysql2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1722933846/noticon/lehwj6ve3wzugo50w6fr.png',
    keywords: 'mysql‡',
    date: '2024-08-06T08:44:08.504Z',
  },
  {
    uuid: 'noticon_pqlpu5zmcgf6erbl9kxo',
    title: 'test framework',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1723074538/noticon/pqlpu5zmcgf6erbl9kxo.png',
    keywords: 'pytest‡',
    date: '2024-08-07T23:49:00.295Z',
  },
  {
    uuid: 'noticon_xeqro4tff2kp0hyiiawa',
    title: 'Splunk',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1723195153/noticon/xeqro4tff2kp0hyiiawa.png',
    keywords: 'splunk‡스플렁크',
    date: '2024-08-09T09:19:15.863Z',
  },
  {
    uuid: 'noticon_uoecsqjfdirixvhc2wfy',
    title: 'Filament',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1723461576/noticon/uoecsqjfdirixvhc2wfy.png',
    keywords: 'filament‡laravel',
    date: '2024-08-12T11:19:39.461Z',
  },
  {
    uuid: 'noticon_khvqmiqnzdsjcuiojqch',
    title: '에레우노',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1723529226/noticon/khvqmiqnzdsjcuiojqch.png',
    keywords: '‡',
    date: '2024-08-13T06:07:08.428Z',
  },
  {
    uuid: 'noticon_iukirrhkt8qqtuvpax5m',
    title: '에레우노',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1723529244/noticon/iukirrhkt8qqtuvpax5m.png',
    keywords: '‡',
    date: '2024-08-13T06:07:26.603Z',
  },
  {
    uuid: 'noticon_a6tv67i1dawq1tztwpur',
    title: '마이포뮬러',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1723529516/noticon/a6tv67i1dawq1tztwpur.png',
    keywords: '‡',
    date: '2024-08-13T06:11:57.894Z',
  },
  {
    uuid: 'noticon_ebjbzwq4kfdhxiqp3hdv',
    title: '리엠피',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1723529616/noticon/ebjbzwq4kfdhxiqp3hdv.png',
    keywords: '‡',
    date: '2024-08-13T06:13:37.999Z',
  },
  {
    uuid: 'noticon_g3skkkqosrwvraqrj9xz',
    title: '쥬시졸리',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1723529699/noticon/g3skkkqosrwvraqrj9xz.png',
    keywords: '‡',
    date: '2024-08-13T06:15:01.964Z',
  },
  {
    uuid: 'noticon_vx6fvxnvbttcegksai9o',
    title: '쥬시졸리',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1723529766/noticon/vx6fvxnvbttcegksai9o.png',
    keywords: '‡',
    date: '2024-08-13T06:16:09.013Z',
  },
  {
    uuid: 'noticon_l8somjj0lb7e27m41seo',
    title: '바바우',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1723529936/noticon/l8somjj0lb7e27m41seo.png',
    keywords: '‡',
    date: '2024-08-13T06:18:58.824Z',
  },
  {
    uuid: 'noticon_x5sadm9huir8io3ecynb',
    title: '웨어에이아이',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1723530018/noticon/x5sadm9huir8io3ecynb.png',
    keywords: '‡',
    date: '2024-08-13T06:20:19.917Z',
  },
  {
    uuid: 'noticon_c8of59sxro5f349wnxgh',
    title: '한국산업인력공단',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1723540251/noticon/c8of59sxro5f349wnxgh.png',
    keywords: 'HRDK‡',
    date: '2024-08-13T09:10:54.257Z',
  },
  {
    uuid: 'noticon_dv2dtvnjelqlajon1qyf',
    title: '한국방송통신전파진흥원',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1723544042/noticon/dv2dtvnjelqlajon1qyf.png',
    keywords: 'KCA‡',
    date: '2024-08-13T10:14:04.997Z',
  },
  {
    uuid: 'noticon_p0ccc8ll9bjzov7quuwd',
    title: '1',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1723959280/noticon/p0ccc8ll9bjzov7quuwd.png',
    keywords: '김민수‡숫자1',
    date: '2024-08-18T05:34:42.151Z',
  },
  {
    uuid: 'noticon_bc7yq9qth7yc0dajrjsy',
    title: '2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1723959308/noticon/bc7yq9qth7yc0dajrjsy.png',
    keywords: '김민수‡숫자2',
    date: '2024-08-18T05:35:09.882Z',
  },
  {
    uuid: 'noticon_dvzbzkis81mjkg1ywryl',
    title: '3',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1723959326/noticon/dvzbzkis81mjkg1ywryl.png',
    keywords: '김민수‡숫자3',
    date: '2024-08-18T05:35:28.239Z',
  },
  {
    uuid: 'noticon_vurpxmohkqpp6aozcvll',
    title: '4',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1723959343/noticon/vurpxmohkqpp6aozcvll.png',
    keywords: '김민수‡숫자4',
    date: '2024-08-18T05:35:46.084Z',
  },
  {
    uuid: 'noticon_nftptxrawudofajpfg6l',
    title: '5',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1723959363/noticon/nftptxrawudofajpfg6l.png',
    keywords: '김민수‡숫자5',
    date: '2024-08-18T05:36:05.166Z',
  },
  {
    uuid: 'noticon_f2jf2pnvmilwgvyoetzx',
    title: 'mario mushroom',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1723978789/noticon/f2jf2pnvmilwgvyoetzx.png',
    keywords: 'mario‡mushroom',
    date: '2024-08-18T10:59:51.562Z',
  },
  {
    uuid: 'noticon_umkfkjsupg0vwlrff7bc',
    title: '동북아역사재단',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1724121638/noticon/umkfkjsupg0vwlrff7bc.png',
    keywords: '‡',
    date: '2024-08-20T02:40:40.274Z',
  },
  {
    uuid: 'noticon_gajmpnzmiapnpq2co3ux',
    title: 'colorchipsicon',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1724142241/noticon/gajmpnzmiapnpq2co3ux.png',
    keywords: 'feo‡',
    date: '2024-08-20T08:24:03.498Z',
  },
  {
    uuid: 'noticon_ozss0nupboy1irlxbdmh',
    title: '하루치',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1724262889/noticon/ozss0nupboy1irlxbdmh.png',
    keywords: '‡',
    date: '2024-08-21T17:54:51.383Z',
  },
  {
    uuid: 'noticon_svtwtuzjw8n1zs02gatv',
    title: 'hmm..',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1724297670/noticon/svtwtuzjw8n1zs02gatv.png',
    keywords: 'doyeon‡',
    date: '2024-08-22T03:34:33.093Z',
  },
  {
    uuid: 'noticon_ukskhvuk0zzygu54u4bs',
    title: 'Ollama',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1724655094/noticon/ukskhvuk0zzygu54u4bs.png',
    keywords: 'AI‡',
    date: '2024-08-26T06:51:36.560Z',
  },
  {
    uuid: 'noticon_e8o8d5u4p8yvq3brwi7u',
    title: 'BytePlus',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1724667434/noticon/e8o8d5u4p8yvq3brwi7u.png',
    keywords: 'byteplus‡바이트플러스',
    date: '2024-08-26T10:17:16.668Z',
  },
  {
    uuid: 'noticon_s4tkdthiv4we4bjr4qq8',
    title: 'aiffel',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1724726261/noticon/s4tkdthiv4we4bjr4qq8.png',
    keywords: '‡',
    date: '2024-08-27T02:37:44.666Z',
  },
  {
    uuid: 'noticon_pavhactrgjdej7opjkdj',
    title: '상명대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1724824964/noticon/pavhactrgjdej7opjkdj.png',
    keywords: '학교‡상명',
    date: '2024-08-28T06:02:47.890Z',
  },
  {
    uuid: 'noticon_m4nv5ayhio8rykpxwsgp',
    title: '상명대',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1724825211/noticon/m4nv5ayhio8rykpxwsgp.png',
    keywords: '학교‡대학교',
    date: '2024-08-28T06:06:58.000Z',
  },
  {
    uuid: 'noticon_fiujffxmm9jihbbv3ccr',
    title: 'wacannai',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1724906108/noticon/fiujffxmm9jihbbv3ccr.png',
    keywords: '‡',
    date: '2024-08-29T04:35:10.557Z',
  },
  {
    uuid: 'noticon_bpnljqwget6uhcc8o2yg',
    title: 'joayo',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1724906192/noticon/bpnljqwget6uhcc8o2yg.png',
    keywords: '‡',
    date: '2024-08-29T04:36:34.453Z',
  },
  {
    uuid: 'noticon_u31yo4avhkaazlhdt6bf',
    title: 'KEEPPLEY',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1724907072/noticon/u31yo4avhkaazlhdt6bf.png',
    keywords: 'BRAND LOGO‡',
    date: '2024-08-29T04:51:15.181Z',
  },
  {
    uuid: 'noticon_uk41o4sfzusjtv2kf4mk',
    title: 'ls',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1725026779/noticon/uk41o4sfzusjtv2kf4mk.png',
    keywords: '‡',
    date: '2024-08-30T14:06:21.454Z',
  },
  {
    uuid: 'noticon_i8cg1ukljj7idoglpde4',
    title: 'mabinogi 마비노기',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1725082284/noticon/i8cg1ukljj7idoglpde4.png',
    keywords: '마비노기‡',
    date: '2024-08-31T05:31:26.464Z',
  },
  {
    uuid: 'noticon_cr0esxk5kyimbjk0apcf',
    title: '마비노기',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1725082344/noticon/cr0esxk5kyimbjk0apcf.png',
    keywords: 'mabinogi‡',
    date: '2024-08-31T05:32:26.550Z',
  },
  {
    uuid: 'noticon_akyxxyxm9bgao5ryjxbg',
    title: 'money',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1725082481/noticon/akyxxyxm9bgao5ryjxbg.gif',
    keywords: '날개달린돈 ‡',
    date: '2024-08-31T05:34:44.251Z',
  },
  {
    uuid: 'noticon_bgwr0yjetrvsbnmzujhg',
    title: 'money',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1725082608/noticon/bgwr0yjetrvsbnmzujhg.gif',
    keywords: '돈 ‡',
    date: '2024-08-31T05:36:50.628Z',
  },
  {
    uuid: 'noticon_aw4dgxrxvkrtcrvm3djw',
    title: '아리에티',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1725196755/noticon/aw4dgxrxvkrtcrvm3djw.gif',
    keywords: '지브리‡마루 밑 아리에티',
    date: '2024-09-01T13:19:22.747Z',
  },
  {
    uuid: 'noticon_lmowlriavf4gt7x0izrg',
    title: '오리',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1725198963/noticon/lmowlriavf4gt7x0izrg.gif',
    keywords: '지브리‡센과 치히로의 행방불명',
    date: '2024-09-01T13:56:06.461Z',
  },
  {
    uuid: 'noticon_mclonktd7y1oetr6ctek',
    title: '한라대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1725251134/noticon/mclonktd7y1oetr6ctek.png',
    keywords: '한라대학교‡한라',
    date: '2024-09-02T04:25:36.377Z',
  },
  {
    uuid: 'noticon_rmwoyhmqabjf98js7hkk',
    title: '한국장애인고용공',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1725251159/noticon/rmwoyhmqabjf98js7hkk.png',
    keywords: 'KEAD‡',
    date: '2024-09-02T04:26:02.647Z',
  },
  {
    uuid: 'noticon_y4phwntnmuhq25nr7qkj',
    title: '영남대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1725251200/noticon/y4phwntnmuhq25nr7qkj.png',
    keywords: '영남대‡영남',
    date: '2024-09-02T04:26:42.491Z',
  },
  {
    uuid: 'noticon_fbdh4hjdc3msnatyutw6',
    title: 'amap',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1725251303/noticon/fbdh4hjdc3msnatyutw6.png',
    keywords: 'a-map‡amap',
    date: '2024-09-02T04:28:25.526Z',
  },
  {
    uuid: 'noticon_didn0i5rmhsvzxtltheg',
    title: '미모_만도',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1725251440/noticon/didn0i5rmhsvzxtltheg.png',
    keywords: '미모‡만도',
    date: '2024-09-02T04:30:42.896Z',
  },
  {
    uuid: 'noticon_xzevyyrumkxvqb70dwyb',
    title: '미모_HL',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1725251532/noticon/xzevyyrumkxvqb70dwyb.png',
    keywords: 'HL‡미모',
    date: '2024-09-02T04:32:15.009Z',
  },
  {
    uuid: 'noticon_ibohko2tfyiixqlov2c3',
    title: '미모_catia',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1725251584/noticon/ibohko2tfyiixqlov2c3.png',
    keywords: '‡',
    date: '2024-09-02T04:33:06.254Z',
  },
  {
    uuid: 'noticon_bfzismmeodvniorzth2p',
    title: '미모_투명',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1725251645/noticon/bfzismmeodvniorzth2p.png',
    keywords: '미모‡투명',
    date: '2024-09-02T04:34:07.399Z',
  },
  {
    uuid: 'noticon_l6dgvnpv8favow7kvjja',
    title: 'Sonnet AI',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1725251844/noticon/l6dgvnpv8favow7kvjja.png',
    keywords: '‡',
    date: '2024-09-02T04:37:25.944Z',
  },
  {
    uuid: 'noticon_kztyvjkhzl8oc0g0k9ez',
    title: '24',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1725283882/noticon/kztyvjkhzl8oc0g0k9ez.png',
    keywords: '‡',
    date: '2024-09-02T13:31:24.351Z',
  },
  {
    uuid: 'noticon_xhvwfyvgbhvsmxsvokgl',
    title: '뉴채널톡',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1725358663/noticon/xhvwfyvgbhvsmxsvokgl.png',
    keywords: '‡',
    date: '2024-09-03T10:17:45.477Z',
  },
  {
    uuid: 'noticon_b67dmxajbqw8xfvtdm2n',
    title: '화살표',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1725432431/noticon/b67dmxajbqw8xfvtdm2n.png',
    keywords: '화살‡표',
    date: '2024-09-04T06:47:13.746Z',
  },
  {
    uuid: 'noticon_rwuuauqm4quamae6xwc8',
    title: 'keang',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1725514721/noticon/rwuuauqm4quamae6xwc8.png',
    keywords: '‡',
    date: '2024-09-05T05:38:44.103Z',
  },
  {
    uuid: 'noticon_gwiwme9qh52qcwpddivc',
    title: 'rightnow',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1725514758/noticon/gwiwme9qh52qcwpddivc.png',
    keywords: '‡',
    date: '2024-09-05T05:39:20.880Z',
  },
  {
    uuid: 'noticon_jciykyyzckmoishnt1ui',
    title: 'mocopunch',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1725514859/noticon/jciykyyzckmoishnt1ui.gif',
    keywords: '‡',
    date: '2024-09-05T05:41:01.780Z',
  },
  {
    uuid: 'noticon_sblgv79xjh64gyyim47y',
    title: 'D&D',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1725515220/noticon/sblgv79xjh64gyyim47y.png',
    keywords: '‡',
    date: '2024-09-05T05:47:02.449Z',
  },
  {
    uuid: 'noticon_yzcnivtsrrhu3ozkgahp',
    title: 'workflow',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1725519074/noticon/yzcnivtsrrhu3ozkgahp.gif',
    keywords: '‡',
    date: '2024-09-05T06:51:17.702Z',
  },
  {
    uuid: 'noticon_m1tpwsekqlnk9crog5uc',
    title: 'review',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1725519107/noticon/m1tpwsekqlnk9crog5uc.gif',
    keywords: '‡',
    date: '2024-09-05T06:51:50.257Z',
  },
  {
    uuid: 'noticon_l9zyqfrtooiyzmetiryx',
    title: 'unita',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1725519204/noticon/l9zyqfrtooiyzmetiryx.gif',
    keywords: '‡',
    date: '2024-09-05T06:53:27.008Z',
  },
  {
    uuid: 'noticon_h1begpvdi5i4drpsvv0c',
    title: 'thx',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1725519206/noticon/h1begpvdi5i4drpsvv0c.gif',
    keywords: '‡',
    date: '2024-09-05T06:53:28.933Z',
  },
  {
    uuid: 'noticon_yjkpmwsq6bqifmvvyrlw',
    title: 'dadada',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1725542974/noticon/yjkpmwsq6bqifmvvyrlw.png',
    keywords: '‡',
    date: '2024-09-05T13:29:36.714Z',
  },
  {
    uuid: 'noticon_hbrjugfdebl0yzyqvmig',
    title: 'ike',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1725542994/noticon/hbrjugfdebl0yzyqvmig.png',
    keywords: '‡',
    date: '2024-09-05T13:29:55.838Z',
  },
  {
    uuid: 'noticon_icrmdfytpbrcchigx4gi',
    title: 'andae',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1725543018/noticon/icrmdfytpbrcchigx4gi.png',
    keywords: '‡',
    date: '2024-09-05T13:30:21.638Z',
  },
  {
    uuid: 'noticon_ggujioy0bxisvdwg9gne',
    title: 'logic analyzer',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1725591184/noticon/ggujioy0bxisvdwg9gne.png',
    keywords: 'logic‡',
    date: '2024-09-06T02:53:06.298Z',
  },
  {
    uuid: 'noticon_wj66s1amsznldrlhm9mw',
    title: 'TSL1401',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1725591335/noticon/wj66s1amsznldrlhm9mw.png',
    keywords: '‡',
    date: '2024-09-06T02:55:37.743Z',
  },
  {
    uuid: 'noticon_qai7jntmsaeavl1dwgt3',
    title: '악마',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1725607764/noticon/qai7jntmsaeavl1dwgt3.png',
    keywords: 'devil‡',
    date: '2024-09-06T07:29:27.987Z',
  },
  {
    uuid: 'noticon_tz6myzowurvr4dkhfjrq',
    title: '용인대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1725783290/noticon/tz6myzowurvr4dkhfjrq.png',
    keywords: '‡',
    date: '2024-09-08T08:14:53.341Z',
  },
  {
    uuid: 'noticon_v4uqjycfwwp88lf6ader',
    title: '숯검댕이',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1726734807/noticon/v4uqjycfwwp88lf6ader.png',
    keywords: '센과 치히로의 행방불명‡스스와타리',
    date: '2024-09-19T08:33:30.691Z',
  },
  {
    uuid: 'noticon_dmj0fsriaut8ssjisiub',
    title: '불쌍한내인생',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1726790929/noticon/dmj0fsriaut8ssjisiub.gif',
    keywords: '‡',
    date: '2024-09-20T00:08:54.150Z',
  },
  {
    uuid: 'noticon_xenahjhmrhlaahxtkmby',
    title: '질량중심',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1726802565/noticon/xenahjhmrhlaahxtkmby.png',
    keywords: '‡',
    date: '2024-09-20T03:22:47.454Z',
  },
  {
    uuid: 'noticon_ymavjtruwdpsnfibn1fl',
    title: '안동대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1726817948/noticon/ymavjtruwdpsnfibn1fl.png',
    keywords: '엠뷸럼마크‡',
    date: '2024-09-20T07:39:10.543Z',
  },
  {
    uuid: 'noticon_k0qdvoxrjjnyrw3a3azd',
    title: '안동대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1726817981/noticon/k0qdvoxrjjnyrw3a3azd.png',
    keywords: '심볼마크‡',
    date: '2024-09-20T07:39:43.543Z',
  },
  {
    uuid: 'noticon_ejafdeuipuewkjp23nlj',
    title: '안동대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1726818333/noticon/ejafdeuipuewkjp23nlj.png',
    keywords: '‡',
    date: '2024-09-20T07:45:35.896Z',
  },
  {
    uuid: 'noticon_lyai76cmv2lt9evtfnnl',
    title: 'pixi.js',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1726916287/noticon/lyai76cmv2lt9evtfnnl.png',
    keywords: '‡',
    date: '2024-09-21T10:58:09.337Z',
  },
  {
    uuid: 'noticon_cc4jopldlenflyhzevuw',
    title: 'jogakzip',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1726985357/noticon/cc4jopldlenflyhzevuw.png',
    keywords: '‡',
    date: '2024-09-22T06:09:19.431Z',
  },
  {
    uuid: 'noticon_afmxa0wzprpa8ulnwat4',
    title: '배열',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1727066468/noticon/afmxa0wzprpa8ulnwat4.png',
    keywords: '‡',
    date: '2024-09-23T04:41:11.077Z',
  },
  {
    uuid: 'noticon_tvweglcykbbscxvn7j7k',
    title: '대학수학',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1727135301/noticon/tvweglcykbbscxvn7j7k.png',
    keywords: '‡',
    date: '2024-09-23T23:48:24.421Z',
  },
  {
    uuid: 'noticon_yodnn8ryegvi6zsvyhpp',
    title: 'news',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1727150095/noticon/yodnn8ryegvi6zsvyhpp.png',
    keywords: '‡',
    date: '2024-09-24T03:54:58.785Z',
  },
  {
    uuid: 'noticon_uevwcjhpsznxnfgitxzb',
    title: '후기',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1727160555/noticon/uevwcjhpsznxnfgitxzb.gif',
    keywords: '‡',
    date: '2024-09-24T06:49:18.823Z',
  },
  {
    uuid: 'noticon_lmtrsb7ayojmb74sdrs0',
    title: '경희대학교(배경제거)',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1727360336/noticon/lmtrsb7ayojmb74sdrs0.png',
    keywords: '경희대학교‡경희대학교',
    date: '2024-09-26T14:18:58.983Z',
  },
  {
    uuid: 'noticon_vtwgeh8e7zngmlhidh65',
    title: '자동차라인',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1727420767/noticon/vtwgeh8e7zngmlhidh65.png',
    keywords: '‡',
    date: '2024-09-27T07:06:09.990Z',
  },
  {
    uuid: 'noticon_nivoawgli8endj25nlsb',
    title: '코스콤',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1727432390/noticon/nivoawgli8endj25nlsb.png',
    keywords: '코스콤‡koscom',
    date: '2024-09-27T10:19:52.731Z',
  },
  {
    uuid: 'noticon_p0pqjb5rtxkbgiae4lpw',
    title: '파수',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1727793184/noticon/p0pqjb5rtxkbgiae4lpw.png',
    keywords: '파수‡fasoo',
    date: '2024-10-01T14:33:06.730Z',
  },
  {
    uuid: 'noticon_oglqncczzvjc1c08dgf2',
    title: 'KDB',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1727793529/noticon/oglqncczzvjc1c08dgf2.png',
    keywords: 'KDB‡산업',
    date: '2024-10-01T14:38:51.171Z',
  },
  {
    uuid: 'noticon_whrfepumksb4o2izhh8j',
    title: '항해99',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1727832479/noticon/whrfepumksb4o2izhh8j.png',
    keywords: '캠프‡',
    date: '2024-10-02T01:28:01.994Z',
  },
  {
    uuid: 'noticon_njxsv5yuxsruqho4zixv',
    title: 'LS그룹',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1727857712/noticon/njxsv5yuxsruqho4zixv.png',
    keywords: 'LS‡LS그룹',
    date: '2024-10-02T08:28:35.156Z',
  },
  {
    uuid: 'noticon_sx8twwdsg099hafahnhv',
    title: 'zalza',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1727867975/noticon/sx8twwdsg099hafahnhv.png',
    keywords: '‡',
    date: '2024-10-02T11:19:37.262Z',
  },
  {
    uuid: 'noticon_zbozgr1guixpjj2bv2cv',
    title: 'CES',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1728016768/noticon/zbozgr1guixpjj2bv2cv.png',
    keywords: '‡',
    date: '2024-10-04T04:39:30.476Z',
  },
  {
    uuid: 'noticon_lyolbl0zghukgdedygd8',
    title: 'ces 2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1728016852/noticon/lyolbl0zghukgdedygd8.png',
    keywords: '‡',
    date: '2024-10-04T04:40:54.690Z',
  },
  {
    uuid: 'noticon_ciwrhvxskgcztvgfhx4i',
    title: '기술동향',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1728045191/noticon/ciwrhvxskgcztvgfhx4i.png',
    keywords: '‡',
    date: '2024-10-04T12:33:13.300Z',
  },
  {
    uuid: 'noticon_jkyiytiiceteswcl71ax',
    title: '맥도날드',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1728116939/noticon/jkyiytiiceteswcl71ax.png',
    keywords: '‡',
    date: '2024-10-05T08:29:01.230Z',
  },
  {
    uuid: 'noticon_nzcqmrpdo1qmorguizi9',
    title: 'Mc',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1728116946/noticon/nzcqmrpdo1qmorguizi9.png',
    keywords: '‡',
    date: '2024-10-05T08:29:08.797Z',
  },
  {
    uuid: 'noticon_rddjs1ccjzjllz9wppdv',
    title: '참빛원주도시가스',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1728117023/noticon/rddjs1ccjzjllz9wppdv.png',
    keywords: '‡',
    date: '2024-10-05T08:30:26.425Z',
  },
  {
    uuid: 'noticon_jaceidx1lbc6cuah2yjr',
    title: 'project',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1728223960/noticon/jaceidx1lbc6cuah2yjr.png',
    keywords: '‡',
    date: '2024-10-06T14:12:43.032Z',
  },
  {
    uuid: 'noticon_jmphmwzgkkuqu43mbzx5',
    title: '헬쓱',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1728224674/noticon/jmphmwzgkkuqu43mbzx5.png',
    keywords: '‡',
    date: '2024-10-06T14:24:37.287Z',
  },
  {
    uuid: 'noticon_y2u3orqmft09dpur2pme',
    title: 'kjhh',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1728225002/noticon/y2u3orqmft09dpur2pme.png',
    keywords: '‡',
    date: '2024-10-06T14:30:04.986Z',
  },
  {
    uuid: 'noticon_crqknnej2mhj9dexaqty',
    title: '12',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1728225231/noticon/crqknnej2mhj9dexaqty.png',
    keywords: '‡',
    date: '2024-10-06T14:33:53.918Z',
  },
  {
    uuid: 'noticon_ju4glg83jzb8nzchgzrj',
    title: '13',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1728225247/noticon/ju4glg83jzb8nzchgzrj.png',
    keywords: '‡',
    date: '2024-10-06T14:34:09.412Z',
  },
  {
    uuid: 'noticon_mo5buf014dijj2iolmqy',
    title: '14',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1728225306/noticon/mo5buf014dijj2iolmqy.png',
    keywords: '‡',
    date: '2024-10-06T14:35:09.297Z',
  },
  {
    uuid: 'noticon_pz5ihjcw47ycujh1ls0u',
    title: '11',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1728225338/noticon/pz5ihjcw47ycujh1ls0u.png',
    keywords: '‡',
    date: '2024-10-06T14:35:40.568Z',
  },
  {
    uuid: 'noticon_zwnsz310trtndue9u5hh',
    title: '가을양!!!',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1728225366/noticon/zwnsz310trtndue9u5hh.png',
    keywords: '‡',
    date: '2024-10-06T14:36:08.889Z',
  },
  {
    uuid: 'noticon_xlkxuhowqx2koci5ozip',
    title: '15',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1728225390/noticon/xlkxuhowqx2koci5ozip.png',
    keywords: '‡',
    date: '2024-10-06T14:36:32.714Z',
  },
  {
    uuid: 'noticon_cd1kbphwdqqgcce68pqv',
    title: '롯데리아',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1728225419/noticon/cd1kbphwdqqgcce68pqv.png',
    keywords: '‡',
    date: '2024-10-06T14:37:01.495Z',
  },
  {
    uuid: 'noticon_shtvygtqvzwcnexfedug',
    title: 'kfc',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1728225453/noticon/shtvygtqvzwcnexfedug.png',
    keywords: '‡',
    date: '2024-10-06T14:37:35.087Z',
  },
  {
    uuid: 'noticon_rkermatv4li0a5n2iqme',
    title: 'mos',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1728225498/noticon/rkermatv4li0a5n2iqme.png',
    keywords: '‡',
    date: '2024-10-06T14:38:20.174Z',
  },
  {
    uuid: 'noticon_beiamacaogptc5hghycg',
    title: 'd',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1728225520/noticon/beiamacaogptc5hghycg.png',
    keywords: '‡',
    date: '2024-10-06T14:38:41.811Z',
  },
  {
    uuid: 'noticon_brpl6rkfkwjkdoinre22',
    title: '베라',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1728225564/noticon/brpl6rkfkwjkdoinre22.png',
    keywords: '‡',
    date: '2024-10-06T14:39:27.016Z',
  },
  {
    uuid: 'noticon_isfyyprdm5rno0wn5mfp',
    title: '엔코더',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1728276312/noticon/isfyyprdm5rno0wn5mfp.png',
    keywords: 'Encoder‡encoder',
    date: '2024-10-07T04:45:14.650Z',
  },
  {
    uuid: 'noticon_yccg1ddlrzxwisuauqrf',
    title: '무료플러스 요금제',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1728366547/noticon/yccg1ddlrzxwisuauqrf.png',
    keywords: '‡',
    date: '2024-10-08T05:49:09.623Z',
  },
  {
    uuid: 'noticon_xwkmnb4eymqonz03c4zt',
    title: 'MAYA_MEL',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1728375259/noticon/xwkmnb4eymqonz03c4zt.png',
    keywords: 'mel‡melscript',
    date: '2024-10-08T08:14:21.361Z',
  },
  {
    uuid: 'noticon_swvpfcgxytitm3fv5nh0',
    title: '품질재단',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1728448902/noticon/swvpfcgxytitm3fv5nh0.png',
    keywords: '‡',
    date: '2024-10-09T04:41:44.790Z',
  },
  {
    uuid: 'noticon_jtprrdwqom9kamehpt2f',
    title: '경북테크노파크',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1728449126/noticon/jtprrdwqom9kamehpt2f.png',
    keywords: '‡',
    date: '2024-10-09T04:45:28.023Z',
  },
  {
    uuid: 'noticon_kzaq4bhmundcqvfn8k3c',
    title: '수원여대',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1728449215/noticon/kzaq4bhmundcqvfn8k3c.png',
    keywords: '‡',
    date: '2024-10-09T04:46:57.854Z',
  },
  {
    uuid: 'noticon_tlmpnaecu5blllv9kgyf',
    title: '산업은행',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1728449355/noticon/tlmpnaecu5blllv9kgyf.png',
    keywords: '‡',
    date: '2024-10-09T04:49:17.137Z',
  },
  {
    uuid: 'noticon_pdqdo9y9fjeonywb9hzb',
    title: 'EC헤리티지',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1728449753/noticon/pdqdo9y9fjeonywb9hzb.png',
    keywords: '‡',
    date: '2024-10-09T04:55:56.752Z',
  },
  {
    uuid: 'noticon_ohn29q2pbko4heyyd5kw',
    title: '내프킨',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1728457129/noticon/ohn29q2pbko4heyyd5kw.png',
    keywords: '‡',
    date: '2024-10-09T06:58:51.366Z',
  },
  {
    uuid: 'noticon_mtobbfx8mvhvuaxivcmh',
    title: 'EA',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1728524785/noticon/mtobbfx8mvhvuaxivcmh.png',
    keywords: 'EA‡EA Sports',
    date: '2024-10-10T01:46:27.165Z',
  },
  {
    uuid: 'noticon_r9caq2xe9wh7pdcmj2bd',
    title: 'Microsoft Fabric',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1728601864/noticon/r9caq2xe9wh7pdcmj2bd.png',
    keywords: 'fabric‡',
    date: '2024-10-10T23:11:05.993Z',
  },
  {
    uuid: 'noticon_vtixmgi9md6z6ytoulcx',
    title: 'NVIDIA',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1728608094/noticon/vtixmgi9md6z6ytoulcx.png',
    keywords: 'nvidia‡logo',
    date: '2024-10-11T00:54:57.137Z',
  },
  {
    uuid: 'noticon_augpxdydp7iccmlcwibd',
    title: 'Robusta',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1728608263/noticon/augpxdydp7iccmlcwibd.png',
    keywords: '‡',
    date: '2024-10-11T00:57:45.258Z',
  },
  {
    uuid: 'noticon_yg5qykx8tw8omtoydxj6',
    title: '한국교직원공제회',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1728625191/noticon/yg5qykx8tw8omtoydxj6.png',
    keywords: '한교공‡더케이',
    date: '2024-10-11T05:39:55.900Z',
  },
  {
    uuid: 'noticon_ehltbojfrahebadq1eua',
    title: '하츄핑',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1728867188/noticon/ehltbojfrahebadq1eua.png',
    keywords: '‡',
    date: '2024-10-14T00:53:10.955Z',
  },
  {
    uuid: 'noticon_qtovhmqfbtqcaqayu1iq',
    title: '아두이노 메가',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1728879222/noticon/qtovhmqfbtqcaqayu1iq.png',
    keywords: '메가‡아두이노',
    date: '2024-10-14T04:13:45.524Z',
  },
  {
    uuid: 'noticon_h8ej23l6od46nlbgnaxf',
    title: '루나',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1729054583/noticon/h8ej23l6od46nlbgnaxf.png',
    keywords: '동물의숲‡',
    date: '2024-10-16T04:56:24.971Z',
  },
  {
    uuid: 'noticon_hwok4jg7mfjmvvhrofun',
    title: '토끼하츄핑',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1729702896/noticon/hwok4jg7mfjmvvhrofun.png',
    keywords: '‡',
    date: '2024-10-23T17:01:39.279Z',
  },
  {
    uuid: 'noticon_hk8t7tuzcf6nbjadlqoa',
    title: '발레핑',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1729702959/noticon/hk8t7tuzcf6nbjadlqoa.png',
    keywords: '‡',
    date: '2024-10-23T17:02:43.248Z',
  },
  {
    uuid: 'noticon_rsf5anhgycie1vhfyyny',
    title: 'cursorAI',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1729754377/noticon/rsf5anhgycie1vhfyyny.png',
    keywords: 'cursorAI‡cursorAI',
    date: '2024-10-24T07:19:40.143Z',
  },
  {
    uuid: 'noticon_ouozafaxx05sc4m3gngk',
    title: 'tRPC',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1729930189/noticon/ouozafaxx05sc4m3gngk.png',
    keywords: 'trpc‡',
    date: '2024-10-26T08:09:52.049Z',
  },
  {
    uuid: 'noticon_sr1qchmbg3e6q03iun4c',
    title: '라프텔',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1729938875/noticon/sr1qchmbg3e6q03iun4c.png',
    keywords: 'OTT‡',
    date: '2024-10-26T10:34:37.324Z',
  },
  {
    uuid: 'noticon_yt6athh5pwbevfdnsbon',
    title: 'Express VPN',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1729939409/noticon/yt6athh5pwbevfdnsbon.png',
    keywords: 'VPN‡',
    date: '2024-10-26T10:43:32.980Z',
  },
  {
    uuid: 'noticon_zzc5wggz6yq1jvqljzo4',
    title: '돌돌이 크루',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1730352047/noticon/zzc5wggz6yq1jvqljzo4.png',
    keywords: '#돌돌이‡',
    date: '2024-10-31T05:20:49.862Z',
  },
  {
    uuid: 'noticon_chtpyquicn3l3nebwofc',
    title: 'desuwat',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1730714250/noticon/chtpyquicn3l3nebwofc.png',
    keywords: '‡',
    date: '2024-11-04T09:57:32.635Z',
  },
  {
    uuid: 'noticon_w7dtqb42lwipg1yovdsj',
    title: 'n8n',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1730781200/noticon/w7dtqb42lwipg1yovdsj.png',
    keywords: 'n8n‡ai',
    date: '2024-11-05T04:33:22.923Z',
  },
  {
    uuid: 'noticon_hnziaisqz7ez5y7ho8me',
    title: '포르쉐',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1730792212/noticon/hnziaisqz7ez5y7ho8me.png',
    keywords: '‡',
    date: '2024-11-05T07:36:56.732Z',
  },
  {
    uuid: 'noticon_eddlzwrgecn0rurefzdc',
    title: '포르쉐',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1730792301/noticon/eddlzwrgecn0rurefzdc.png',
    keywords: '‡',
    date: '2024-11-05T07:38:23.516Z',
  },
  {
    uuid: 'noticon_jpmfkwfzq3iwyyitymw2',
    title: 'etcd',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1731257172/noticon/jpmfkwfzq3iwyyitymw2.png',
    keywords: '‡',
    date: '2024-11-10T16:46:16.359Z',
  },
  {
    uuid: 'noticon_oas1oltehwd6wiyxljsv',
    title: 'keystone',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1731258011/noticon/oas1oltehwd6wiyxljsv.png',
    keywords: '‡',
    date: '2024-11-10T17:00:15.296Z',
  },
  {
    uuid: 'noticon_dmumlkhr6mse6almq0jc',
    title: 'glance',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1731287750/noticon/dmumlkhr6mse6almq0jc.png',
    keywords: '‡',
    date: '2024-11-11T01:15:53.832Z',
  },
  {
    uuid: 'noticon_in3eme1xzsfcdcgdzcpu',
    title: 'placement',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1731289631/noticon/in3eme1xzsfcdcgdzcpu.png',
    keywords: '‡',
    date: '2024-11-11T01:47:15.327Z',
  },
  {
    uuid: 'noticon_lblm5q6sodvizuhxdg7g',
    title: 'nova',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1731291077/noticon/lblm5q6sodvizuhxdg7g.png',
    keywords: '‡',
    date: '2024-11-11T02:11:19.751Z',
  },
  {
    uuid: 'noticon_npnpx1kpsaic2dob2z0m',
    title: 'alloy',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1731373037/noticon/npnpx1kpsaic2dob2z0m.png',
    keywords: 'grafana‡',
    date: '2024-11-12T00:57:19.491Z',
  },
  {
    uuid: 'noticon_eti2w2xrybtnf1uqphrc',
    title: 'flowchart',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1731463977/noticon/eti2w2xrybtnf1uqphrc.png',
    keywords: '‡',
    date: '2024-11-13T02:12:59.690Z',
  },
  {
    uuid: 'noticon_hiymaympke6fhjkkeyqu',
    title: 'C',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1731473570/noticon/hiymaympke6fhjkkeyqu.png',
    keywords: 'C언어‡',
    date: '2024-11-13T04:52:53.719Z',
  },
  {
    uuid: 'noticon_bzxswhna1bejtrsktrf2',
    title: 'CosPro',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1731473905/noticon/bzxswhna1bejtrsktrf2.png',
    keywords: '‡',
    date: '2024-11-13T04:58:27.326Z',
  },
  {
    uuid: 'noticon_sjqevrzn6bt7qj78rqe1',
    title: 'database',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1731549623/noticon/sjqevrzn6bt7qj78rqe1.png',
    keywords: '‡',
    date: '2024-11-14T02:00:25.394Z',
  },
  {
    uuid: 'noticon_lainew5kdipabpqbdkwc',
    title: 'database',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1731549675/noticon/lainew5kdipabpqbdkwc.png',
    keywords: '‡',
    date: '2024-11-14T02:01:17.169Z',
  },
  {
    uuid: 'noticon_dcca9cfjw7grba8lc969',
    title: 'database',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1731549704/noticon/dcca9cfjw7grba8lc969.png',
    keywords: '‡',
    date: '2024-11-14T02:01:46.268Z',
  },
  {
    uuid: 'noticon_ywo96zsr0qwg9jhz1gcs',
    title: 'fastapi',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1731579295/noticon/ywo96zsr0qwg9jhz1gcs.png',
    keywords: '‡',
    date: '2024-11-14T10:14:58.234Z',
  },
  {
    uuid: 'noticon_fwdiwzh5ku41wn7ea4bz',
    title: 'database',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1731579393/noticon/fwdiwzh5ku41wn7ea4bz.png',
    keywords: '‡',
    date: '2024-11-14T10:16:34.774Z',
  },
  {
    uuid: 'noticon_zmaw52sougiwhy0vhmbt',
    title: 'jedi',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1731654172/noticon/zmaw52sougiwhy0vhmbt.png',
    keywords: '제다이‡스타워즈',
    date: '2024-11-15T07:02:55.627Z',
  },
  {
    uuid: 'noticon_my9h6xfcnfdac9w0gqor',
    title: '한노아',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1731657710/noticon/my9h6xfcnfdac9w0gqor.gif',
    keywords: '한노아‡한노아 노아 플레이브 plave noah',
    date: '2024-11-15T08:01:54.632Z',
  },
  {
    uuid: 'noticon_a0vfh6lbbkcichga7uzf',
    title: '한라',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1731659138/noticon/a0vfh6lbbkcichga7uzf.png',
    keywords: '‡',
    date: '2024-11-15T08:25:40.300Z',
  },
  {
    uuid: 'noticon_qoscmzl2msqzjxlnpbcj',
    title: 'insta',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1731754167/noticon/qoscmzl2msqzjxlnpbcj.png',
    keywords: '‡',
    date: '2024-11-16T10:49:29.636Z',
  },
  {
    uuid: 'noticon_wgd4wicbmgh75mpybulb',
    title: 'knitting',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1731816494/noticon/wgd4wicbmgh75mpybulb.png',
    keywords: '‡',
    date: '2024-11-17T04:08:16.739Z',
  },
  {
    uuid: 'noticon_hnnmc0tcm4kwvrg2rxf5',
    title: '에어브릿지',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1731949557/noticon/hnnmc0tcm4kwvrg2rxf5.png',
    keywords: 'airbridge‡',
    date: '2024-11-18T17:06:00.490Z',
  },
  {
    uuid: 'noticon_bvhn5o50oszyxnfbcejv',
    title: '앰플리튜드',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1731950017/noticon/bvhn5o50oszyxnfbcejv.png',
    keywords: 'amplitude‡',
    date: '2024-11-18T17:13:39.909Z',
  },
  {
    uuid: 'noticon_k4m6be7ha1ekgejepgzm',
    title: 'Logisim',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1732060823/noticon/k4m6be7ha1ekgejepgzm.png',
    keywords: 'Logisim‡',
    date: '2024-11-20T00:00:25.491Z',
  },
  {
    uuid: 'noticon_ysb53gxvseorudn69nou',
    title: 'inno',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1732250820/noticon/ysb53gxvseorudn69nou.png',
    keywords: '‡',
    date: '2024-11-22T04:47:04.132Z',
  },
  {
    uuid: 'noticon_vdeq0jfflxg5zt6uki01',
    title: 'DC모터',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1732260726/noticon/vdeq0jfflxg5zt6uki01.png',
    keywords: '‡',
    date: '2024-11-22T07:32:08.782Z',
  },
  {
    uuid: 'noticon_fohogykscd4qnkyiq8bp',
    title: 'api',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1732469041/noticon/fohogykscd4qnkyiq8bp.png',
    keywords: '‡',
    date: '2024-11-24T17:24:03.653Z',
  },
  {
    uuid: 'noticon_x5f2nkszlsqojepef3yv',
    title: 'api',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1732469095/noticon/x5f2nkszlsqojepef3yv.png',
    keywords: '‡',
    date: '2024-11-24T17:24:57.129Z',
  },
  {
    uuid: 'noticon_skynqz9b1pdvxmmwmcff',
    title: 'authorization',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1732698747/noticon/skynqz9b1pdvxmmwmcff.png',
    keywords: '‡',
    date: '2024-11-27T09:12:30.339Z',
  },
  {
    uuid: 'noticon_vjckdhkofd9t3bg9hl8c',
    title: '라프텔',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1732918229/noticon/vjckdhkofd9t3bg9hl8c.png',
    keywords: '‡',
    date: '2024-11-29T22:10:32.014Z',
  },
  {
    uuid: 'noticon_vx9jpx8dpnzpev1bjphk',
    title: 'boot camp',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1733018059/noticon/vx9jpx8dpnzpev1bjphk.png',
    keywords: '‡',
    date: '2024-12-01T01:54:20.741Z',
  },
  {
    uuid: 'noticon_pshedrnosbykkv6ow8jh',
    title: 'SNS',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1733142785/noticon/pshedrnosbykkv6ow8jh.png',
    keywords: 'Simple Notification Service‡',
    date: '2024-12-02T12:33:07.569Z',
  },
  {
    uuid: 'noticon_nstn7sg7a1j1b3oiwwep',
    title: 'monitoring',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1733143401/noticon/nstn7sg7a1j1b3oiwwep.png',
    keywords: '‡',
    date: '2024-12-02T12:43:23.944Z',
  },
  {
    uuid: 'noticon_xldxhuzluop75rkmshmh',
    title: 'tistory',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1733363183/noticon/xldxhuzluop75rkmshmh.png',
    keywords: '‡',
    date: '2024-12-05T01:46:25.388Z',
  },
  {
    uuid: 'noticon_kebnyynzckea9qrkw78r',
    title: 'neutron',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1733606755/noticon/kebnyynzckea9qrkw78r.png',
    keywords: 'openstack‡',
    date: '2024-12-07T21:25:57.934Z',
  },
  {
    uuid: 'noticon_tazqena3xcdundixda6s',
    title: 'placement',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1733708984/noticon/tazqena3xcdundixda6s.png',
    keywords: '‡',
    date: '2024-12-09T01:49:46.740Z',
  },
  {
    uuid: 'noticon_bsecrij4vbrbue9rrwjd',
    title: 'pikmin rock ',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1733789094/noticon/bsecrij4vbrbue9rrwjd.png',
    keywords: '‡',
    date: '2024-12-10T00:04:57.264Z',
  },
  {
    uuid: 'noticon_stmtiuc33fwr48ypljua',
    title: 'Nexacro',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1733836920/noticon/stmtiuc33fwr48ypljua.png',
    keywords: 'Nexagro‡',
    date: '2024-12-10T13:22:02.261Z',
  },
  {
    uuid: 'noticon_hljewahkl9vblgn12poa',
    title: 'poetry',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1734071499/noticon/hljewahkl9vblgn12poa.png',
    keywords: '‡',
    date: '2024-12-13T06:31:42.068Z',
  },
  {
    uuid: 'noticon_xgh8ozzb0nzxojsod1nb',
    title: 'T1',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1734347045/noticon/xgh8ozzb0nzxojsod1nb.png',
    keywords: 'T1‡티원',
    date: '2024-12-16T11:04:10.094Z',
  },
  {
    uuid: 'noticon_v8etimmfiu1mxgtrmxe8',
    title: 'tictok',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1734418528/noticon/v8etimmfiu1mxgtrmxe8.png',
    keywords: 'tictok‡',
    date: '2024-12-17T06:55:30.603Z',
  },
  {
    uuid: 'noticon_ahhpjx8t7yq19hl0vvcg',
    title: 'Jest',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1734449855/noticon/ahhpjx8t7yq19hl0vvcg.png',
    keywords: 'Jest‡',
    date: '2024-12-17T15:37:38.126Z',
  },
  {
    uuid: 'noticon_se15ppdrkzrl9tmqzzjf',
    title: 'iceberg',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1734504484/noticon/se15ppdrkzrl9tmqzzjf.png',
    keywords: '‡',
    date: '2024-12-18T06:48:07.672Z',
  },
  {
    uuid: 'noticon_nqlff4cqcszbnsnyvnog',
    title: 'plotly',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1734583654/noticon/nqlff4cqcszbnsnyvnog.png',
    keywords: '‡',
    date: '2024-12-19T04:47:42.035Z',
  },
  {
    uuid: 'noticon_lphjnz3lhjuk39m4umzt',
    title: 'css',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1734675382/noticon/lphjnz3lhjuk39m4umzt.png',
    keywords: '‡',
    date: '2024-12-20T06:16:24.179Z',
  },
  {
    uuid: 'noticon_exlhjhttoah0eytuct1i',
    title: 'Weights & Biases',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1734881694/noticon/exlhjhttoah0eytuct1i.png',
    keywords: '‡',
    date: '2024-12-22T15:34:56.595Z',
  },
  {
    uuid: 'noticon_ew7q4him4i56wvb76s6t',
    title: 'mixpanel',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1735374886/noticon/ew7q4him4i56wvb76s6t.png',
    keywords: '‡',
    date: '2024-12-28T08:34:49.101Z',
  },
  {
    uuid: 'noticon_rnothspjcxtcxrybf0bp',
    title: 'RXC',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1735376710/noticon/rnothspjcxtcxrybf0bp.png',
    keywords: '‡',
    date: '2024-12-28T09:05:13.110Z',
  },
  {
    uuid: 'noticon_ed9mxysotdtzyu6xmwls',
    title: 'Wrtn',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1735382757/noticon/ed9mxysotdtzyu6xmwls.png',
    keywords: '‡',
    date: '2024-12-28T10:46:00.477Z',
  },
  {
    uuid: 'noticon_gulo2k4nn08pmrzppzdg',
    title: 'loading',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1735548979/noticon/gulo2k4nn08pmrzppzdg.gif',
    keywords: 'load‡ing',
    date: '2024-12-30T08:56:22.411Z',
  },
  {
    uuid: 'noticon_ouqr7apbx73nmeywcyio',
    title: '네이버맵',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1735655603/noticon/ouqr7apbx73nmeywcyio.png',
    keywords: '‡',
    date: '2024-12-31T14:33:26.441Z',
  },
  {
    uuid: 'noticon_vvrpvmbiqwpv0tmbllas',
    title: 'rs',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1735706113/noticon/vvrpvmbiqwpv0tmbllas.png',
    keywords: '‡',
    date: '2025-01-01T04:35:16.205Z',
  },
  {
    uuid: 'noticon_uiusiv70uxwcptbj1kbe',
    title: 'rswave',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1735706197/noticon/uiusiv70uxwcptbj1kbe.png',
    keywords: '‡',
    date: '2025-01-01T04:36:39.336Z',
  },
  {
    uuid: 'noticon_ppf3pnnvferrt0g2dmrp',
    title: 'SSAFY',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1735769874/noticon/ppf3pnnvferrt0g2dmrp.png',
    keywords: '‡',
    date: '2025-01-01T22:17:56.571Z',
  },
  {
    uuid: 'noticon_w0pqeivtivxlrq823gdd',
    title: '카카오내비',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1735831195/noticon/w0pqeivtivxlrq823gdd.png',
    keywords: '‡',
    date: '2025-01-02T15:19:58.151Z',
  },
  {
    uuid: 'noticon_habn7yb20qp1llnuk78z',
    title: 'ㅇ',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1735866023/noticon/habn7yb20qp1llnuk78z.png',
    keywords: '‡',
    date: '2025-01-03T01:00:27.391Z',
  },
  {
    uuid: 'noticon_pjhfxp3n42qfhqexmcyk',
    title: '0102-12-31T15:32:08.000Z',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1735866527/noticon/pjhfxp3n42qfhqexmcyk.png',
    keywords: '‡',
    date: '2025-01-03T01:08:49.367Z',
  },
  {
    uuid: 'noticon_xhr5tfwdpjelbmcyh8ln',
    title: '0103-01-31T15:32:08.000Z',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1735866690/noticon/xhr5tfwdpjelbmcyh8ln.png',
    keywords: '‡',
    date: '2025-01-03T01:11:33.534Z',
  },
  {
    uuid: 'noticon_wkmzlhtu034vpx7kgtrb',
    title: 'ROS',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1735870624/noticon/wkmzlhtu034vpx7kgtrb.png',
    keywords: '‡',
    date: '2025-01-03T02:17:06.759Z',
  },
  {
    uuid: 'noticon_ox1dmrlmfep1bv5ztkdo',
    title: 'NEXTERS_25',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1735929842/noticon/ox1dmrlmfep1bv5ztkdo.png',
    keywords: 'nexters‡넥스터즈',
    date: '2025-01-03T18:44:05.401Z',
  },
  {
    uuid: 'noticon_vgcx86nzhxj74i3frgml',
    title: 'NEXTERS_26',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1735929943/noticon/vgcx86nzhxj74i3frgml.png',
    keywords: 'nexters‡넥스터즈',
    date: '2025-01-03T18:45:45.658Z',
  },
  {
    uuid: 'noticon_dxpfolfjfqflpyjwn6wv',
    title: 'mlflow',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1736239274/noticon/dxpfolfjfqflpyjwn6wv.png',
    keywords: '‡',
    date: '2025-01-07T08:41:16.206Z',
  },
  {
    uuid: 'noticon_sryhox9oeskaqpmaw9qh',
    title: '벽면 주행로봇',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1736249121/noticon/sryhox9oeskaqpmaw9qh.png',
    keywords: '‡',
    date: '2025-01-07T11:25:22.886Z',
  },
  {
    uuid: 'noticon_g1vcjstk7thqiidsaplc',
    title: 'Optuna',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1736303513/noticon/g1vcjstk7thqiidsaplc.png',
    keywords: '‡',
    date: '2025-01-08T02:31:55.239Z',
  },
  {
    uuid: 'noticon_qlfc0apzg7asmz94qnne',
    title: 'mentos',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1736333543/noticon/qlfc0apzg7asmz94qnne.png',
    keywords: 'mentos‡',
    date: '2025-01-08T10:52:26.376Z',
  },
  {
    uuid: 'noticon_oymx0wpuksyjige4vnvg',
    title: '단국대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1736425622/noticon/oymx0wpuksyjige4vnvg.png',
    keywords: '‡',
    date: '2025-01-09T12:27:04.853Z',
  },
  {
    uuid: 'noticon_xwgkk2q0hhdeccqj8zi0',
    title: '단국대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1736425939/noticon/xwgkk2q0hhdeccqj8zi0.gif',
    keywords: '‡',
    date: '2025-01-09T12:32:22.718Z',
  },
  {
    uuid: 'noticon_wzxcvzkrcphdjuvg6rnv',
    title: '쿠키친구들',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1736428052/noticon/wzxcvzkrcphdjuvg6rnv.png',
    keywords: '‡',
    date: '2025-01-09T13:07:36.146Z',
  },
  {
    uuid: 'noticon_d96ae7r7wqxapa1nzmgh',
    title: '열일키티',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1736514011/noticon/d96ae7r7wqxapa1nzmgh.png',
    keywords: '#키티‡',
    date: '2025-01-10T13:00:14.346Z',
  },
  {
    uuid: 'noticon_p3j7wvbyjpmuvxwjofml',
    title: '스레드',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1736514579/noticon/p3j7wvbyjpmuvxwjofml.png',
    keywords: '‡',
    date: '2025-01-10T13:09:41.732Z',
  },
  {
    uuid: 'noticon_vxfbxj3o0nhonkicmyu5',
    title: '읽는 키티',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1736515232/noticon/vxfbxj3o0nhonkicmyu5.png',
    keywords: '‡',
    date: '2025-01-10T13:20:34.812Z',
  },
  {
    uuid: 'noticon_m0ceksm5fkdal5aol3sg',
    title: 'canva',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1736672016/noticon/m0ceksm5fkdal5aol3sg.png',
    keywords: '‡',
    date: '2025-01-12T08:53:39.253Z',
  },
  {
    uuid: 'noticon_idrb87adxldxtfxp4gdg',
    title: '한세대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1736731144/noticon/idrb87adxldxtfxp4gdg.png',
    keywords: '‡',
    date: '2025-01-13T01:19:06.770Z',
  },
  {
    uuid: 'noticon_iiucuqvnwfkbtjylo1oo',
    title: '인포그래픽',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1736771972/noticon/iiucuqvnwfkbtjylo1oo.png',
    keywords: '‡',
    date: '2025-01-13T12:39:34.783Z',
  },
  {
    uuid: 'noticon_soci2bm38opauhta3p5f',
    title: '세얼간이',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1736900731/noticon/soci2bm38opauhta3p5f.png',
    keywords: '‡',
    date: '2025-01-15T00:25:34.609Z',
  },
  {
    uuid: 'noticon_ibepck0lnw4x5dccixbl',
    title: '라즈베리파이 카메라',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1736901808/noticon/ibepck0lnw4x5dccixbl.png',
    keywords: '‡',
    date: '2025-01-15T00:43:30.296Z',
  },
  {
    uuid: 'noticon_tknmwzbnywsortxwc8xi',
    title: 'HL_rqt',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1736902410/noticon/tknmwzbnywsortxwc8xi.png',
    keywords: '‡',
    date: '2025-01-15T00:53:32.656Z',
  },
  {
    uuid: 'noticon_uh7ic7zfxgskb8y0klln',
    title: 'animon',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1736920992/noticon/uh7ic7zfxgskb8y0klln.png',
    keywords: '‡',
    date: '2025-01-15T06:03:15.732Z',
  },
  {
    uuid: 'noticon_uognnboykyalbmhytxal',
    title: '엔터키',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1736945586/noticon/uognnboykyalbmhytxal.png',
    keywords: '‡',
    date: '2025-01-15T12:53:08.835Z',
  },
  {
    uuid: 'noticon_lribmrsfodbthpdpld1h',
    title: 'certificate_자격증',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1737114881/noticon/lribmrsfodbthpdpld1h.png',
    keywords: '‡',
    date: '2025-01-17T11:54:43.320Z',
  },
  {
    uuid: 'noticon_vqujmcz8v09lnyvlydkm',
    title: '메모장_윈도우',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1737170239/noticon/vqujmcz8v09lnyvlydkm.png',
    keywords: '‡',
    date: '2025-01-18T03:17:22.237Z',
  },
  {
    uuid: 'noticon_al5s4wcmy79lu3brgllo',
    title: 'robot',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1737343903/noticon/al5s4wcmy79lu3brgllo.png',
    keywords: 'robot‡',
    date: '2025-01-20T03:31:45.288Z',
  },
  {
    uuid: 'noticon_tqlyg8pmpcqjbsembhmx',
    title: '랠릿',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1737346494/noticon/tqlyg8pmpcqjbsembhmx.png',
    keywords: '‡',
    date: '2025-01-20T04:14:56.415Z',
  },
  {
    uuid: 'noticon_wasdvd3p0dvflctslpep',
    title: '오이이아이이오이이이아이이',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1737350953/noticon/wasdvd3p0dvflctslpep.gif',
    keywords: '‡',
    date: '2025-01-20T05:29:17.027Z',
  },
  {
    uuid: 'noticon_mmctgqzpuyod29jnmgro',
    title: 'pyserial',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1737509023/noticon/mmctgqzpuyod29jnmgro.png',
    keywords: '‡',
    date: '2025-01-22T01:23:45.495Z',
  },
  {
    uuid: 'noticon_gaurxwgmg1eiiis2h5cv',
    title: 'pyserial',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1737509069/noticon/gaurxwgmg1eiiis2h5cv.png',
    keywords: '‡',
    date: '2025-01-22T01:24:32.964Z',
  },
  {
    uuid: 'noticon_lxbcjhxritfnoyf0lfrs',
    title: 'thread',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1737509229/noticon/lxbcjhxritfnoyf0lfrs.png',
    keywords: '‡',
    date: '2025-01-22T01:27:11.533Z',
  },
  {
    uuid: 'noticon_tljarhisw9pbjmo0uhlh',
    title: '차란',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1737879949/noticon/tljarhisw9pbjmo0uhlh.png',
    keywords: '‡',
    date: '2025-01-26T08:25:51.649Z',
  },
  {
    uuid: 'noticon_mcpbdrhgf3ifx3wnaav9',
    title: '루프',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1737900966/noticon/mcpbdrhgf3ifx3wnaav9.png',
    keywords: '루프‡루프',
    date: '2025-01-26T14:16:10.320Z',
  },
  {
    uuid: 'noticon_ccg2xykhxnpdeq9tdoaw',
    title: 'Typeform',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1737932931/noticon/ccg2xykhxnpdeq9tdoaw.png',
    keywords: 'Typeform  ‡',
    date: '2025-01-26T23:08:54.222Z',
  },
  {
    uuid: 'noticon_vydo9qwms6kazb5nrau3',
    title: 'chill guy',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1737967588/noticon/vydo9qwms6kazb5nrau3.png',
    keywords: '‡',
    date: '2025-01-27T08:46:30.661Z',
  },
  {
    uuid: 'noticon_gepermuh39ujljzf72e6',
    title: 'Next.js',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1738065463/noticon/gepermuh39ujljzf72e6.png',
    keywords: '‡',
    date: '2025-01-28T11:57:45.755Z',
  },
  {
    uuid: 'noticon_jusgmzvqghciutthtavw',
    title: 'Express',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1738067262/noticon/jusgmzvqghciutthtavw.png',
    keywords: '‡',
    date: '2025-01-28T12:27:44.152Z',
  },
  {
    uuid: 'noticon_tmghb8iu5rgxnpnpghxw',
    title: 'JetBrains',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1738067431/noticon/tmghb8iu5rgxnpnpghxw.png',
    keywords: '‡',
    date: '2025-01-28T12:30:35.113Z',
  },
  {
    uuid: 'noticon_wjtjrftibcvlcmfsvvt7',
    title: 'ElasticSearch',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1738119093/noticon/wjtjrftibcvlcmfsvvt7.png',
    keywords: '‡',
    date: '2025-01-29T02:51:35.400Z',
  },
  {
    uuid: 'noticon_pd7lhv27sqfag4ftwakp',
    title: 'Logstash',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1738119136/noticon/pd7lhv27sqfag4ftwakp.png',
    keywords: '‡',
    date: '2025-01-29T02:52:18.957Z',
  },
  {
    uuid: 'noticon_lt6ulk9kli9d827mrj7p',
    title: 'Kibana',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1738119186/noticon/lt6ulk9kli9d827mrj7p.png',
    keywords: '‡',
    date: '2025-01-29T02:53:09.086Z',
  },
  {
    uuid: 'noticon_ji0yaojebmaz4xcefpbg',
    title: '뉴스보이',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1738322648/noticon/ji0yaojebmaz4xcefpbg.png',
    keywords: '‡',
    date: '2025-01-31T11:24:10.066Z',
  },
  {
    uuid: 'noticon_l5cmvwbinxbihnonzd9l',
    title: 'elyn',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1738494604/noticon/l5cmvwbinxbihnonzd9l.png',
    keywords: 'elyn‡',
    date: '2025-02-02T11:10:06.837Z',
  },
  {
    uuid: 'noticon_pmy2hnktazlogncyv1g8',
    title: 'Udemy',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1738619517/noticon/pmy2hnktazlogncyv1g8.png',
    keywords: '‡',
    date: '2025-02-03T21:52:00.224Z',
  },
  {
    uuid: 'noticon_ihv6hgjaov11eiebzgii',
    title: 'langchian',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1738642100/noticon/ihv6hgjaov11eiebzgii.png',
    keywords: '‡',
    date: '2025-02-04T04:08:22.523Z',
  },
  {
    uuid: 'noticon_fhhckicanlz5z4mowkid',
    title: 'flux',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1738642339/noticon/fhhckicanlz5z4mowkid.png',
    keywords: '‡',
    date: '2025-02-04T04:12:21.386Z',
  },
  {
    uuid: 'noticon_cdekmmwpo9gstwsculgd',
    title: 'tldraw',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1738642663/noticon/cdekmmwpo9gstwsculgd.png',
    keywords: '‡',
    date: '2025-02-04T04:17:46.437Z',
  },
  {
    uuid: 'noticon_ylmb0rs2aqujwgbhhqkb',
    title: 'comfyui',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1738648080/noticon/ylmb0rs2aqujwgbhhqkb.png',
    keywords: '‡',
    date: '2025-02-04T05:48:02.916Z',
  },
  {
    uuid: 'noticon_ur7zfrwr7ov2enqnfeof',
    title: 'SQLAlchemy',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1738906659/noticon/ur7zfrwr7ov2enqnfeof.png',
    keywords: '‡',
    date: '2025-02-07T05:37:41.130Z',
  },
  {
    uuid: 'noticon_uf8tjssfmadofrzcayzs',
    title: '[한라] jetson nano',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1739175716/noticon/uf8tjssfmadofrzcayzs.png',
    keywords: '‡',
    date: '2025-02-10T08:21:59.296Z',
  },
  {
    uuid: 'noticon_qyedwattvdw2kxpeenyl',
    title: 'number-1',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1739407112/noticon/qyedwattvdw2kxpeenyl.png',
    keywords: '‡',
    date: '2025-02-13T00:38:36.029Z',
  },
  {
    uuid: 'noticon_sjliygu1rhpwcdjjxzuc',
    title: 'number-black-2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1739407245/noticon/sjliygu1rhpwcdjjxzuc.png',
    keywords: '‡',
    date: '2025-02-13T00:40:48.010Z',
  },
  {
    uuid: 'noticon_yhxuyxg6oziwwiclrhei',
    title: 'number-black-3',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1739407328/noticon/yhxuyxg6oziwwiclrhei.png',
    keywords: '‡',
    date: '2025-02-13T00:42:11.295Z',
  },
  {
    uuid: 'noticon_aurwe6w06fq1dqm6khd1',
    title: 'number-black-4',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1739407381/noticon/aurwe6w06fq1dqm6khd1.png',
    keywords: '‡',
    date: '2025-02-13T00:43:03.544Z',
  },
  {
    uuid: 'noticon_hrmvgcfgsp9yqvow9gm1',
    title: 'number-black-5',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1739407423/noticon/hrmvgcfgsp9yqvow9gm1.png',
    keywords: '‡',
    date: '2025-02-13T00:43:45.592Z',
  },
  {
    uuid: 'noticon_nx7bg4zckjey754fklya',
    title: 'number-balck-6',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1739407464/noticon/nx7bg4zckjey754fklya.png',
    keywords: '‡',
    date: '2025-02-13T00:44:28.603Z',
  },
  {
    uuid: 'noticon_go7fdr8u7nzlrvqvqx8j',
    title: 'number-black-7',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1739407516/noticon/go7fdr8u7nzlrvqvqx8j.png',
    keywords: '‡',
    date: '2025-02-13T00:45:18.009Z',
  },
  {
    uuid: 'noticon_dqccp0xzavzsspigotwc',
    title: 'number-black-8',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1739407559/noticon/dqccp0xzavzsspigotwc.png',
    keywords: '‡',
    date: '2025-02-13T00:46:01.968Z',
  },
  {
    uuid: 'noticon_bcdsxojx9dj2owcczjij',
    title: 'number-black-9',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1739407605/noticon/bcdsxojx9dj2owcczjij.png',
    keywords: '‡',
    date: '2025-02-13T00:46:49.558Z',
  },
  {
    uuid: 'noticon_nje3d2scshk9hsax3cxj',
    title: 'number-black-10',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1739407680/noticon/nje3d2scshk9hsax3cxj.png',
    keywords: '‡',
    date: '2025-02-13T00:48:02.966Z',
  },
  {
    uuid: 'noticon_cmuibymtjxpwirwiifns',
    title: 'number-black-12',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1739407734/noticon/cmuibymtjxpwirwiifns.png',
    keywords: '‡',
    date: '2025-02-13T00:48:57.049Z',
  },
  {
    uuid: 'noticon_tgzvb5hdznwdhd6f62i3',
    title: 'number-black-12',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1739407797/noticon/tgzvb5hdznwdhd6f62i3.png',
    keywords: '‡',
    date: '2025-02-13T00:49:59.880Z',
  },
  {
    uuid: 'noticon_i03kzlt8tz6zosfbt8fu',
    title: 'number-12',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1739408220/noticon/i03kzlt8tz6zosfbt8fu.png',
    keywords: '‡',
    date: '2025-02-13T00:57:06.868Z',
  },
  {
    uuid: 'noticon_xek2jk1c2hixpdvmrekw',
    title: 'number-11',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1739408268/noticon/xek2jk1c2hixpdvmrekw.png',
    keywords: '‡',
    date: '2025-02-13T00:57:51.415Z',
  },
  {
    uuid: 'noticon_e1knenmoorocd3bnjhv1',
    title: 'number-10',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1739408314/noticon/e1knenmoorocd3bnjhv1.png',
    keywords: '‡',
    date: '2025-02-13T00:58:36.506Z',
  },
  {
    uuid: 'noticon_lj6fgrh7ennpqygff8rj',
    title: 'number-9',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1739408376/noticon/lj6fgrh7ennpqygff8rj.png',
    keywords: '‡',
    date: '2025-02-13T00:59:38.698Z',
  },
  {
    uuid: 'noticon_h6peapoomn5cbbw2fdvn',
    title: 'number-8',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1739408436/noticon/h6peapoomn5cbbw2fdvn.png',
    keywords: '‡',
    date: '2025-02-13T01:00:40.537Z',
  },
  {
    uuid: 'noticon_r4ziltt6mu3d4cggd1qh',
    title: 'number-7',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1739408515/noticon/r4ziltt6mu3d4cggd1qh.png',
    keywords: '‡',
    date: '2025-02-13T01:01:58.915Z',
  },
  {
    uuid: 'noticon_ejfh4ipnakl0jgsjarno',
    title: 'number-6',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1739408575/noticon/ejfh4ipnakl0jgsjarno.png',
    keywords: '‡',
    date: '2025-02-13T01:03:00.464Z',
  },
  {
    uuid: 'noticon_mftozx576wpkugmrf4ut',
    title: 'number-5',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1739408644/noticon/mftozx576wpkugmrf4ut.png',
    keywords: '‡',
    date: '2025-02-13T01:04:06.620Z',
  },
  {
    uuid: 'noticon_pcebp84seen1oc9f490u',
    title: 'number-4',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1739408688/noticon/pcebp84seen1oc9f490u.png',
    keywords: '‡',
    date: '2025-02-13T01:04:52.425Z',
  },
  {
    uuid: 'noticon_iatjwxbijdzmwljiehqp',
    title: 'number-3',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1739408823/noticon/iatjwxbijdzmwljiehqp.png',
    keywords: '‡',
    date: '2025-02-13T01:07:05.110Z',
  },
  {
    uuid: 'noticon_jc9ua8gijj6adk6jonw0',
    title: 'number-2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1739408864/noticon/jc9ua8gijj6adk6jonw0.png',
    keywords: '‡',
    date: '2025-02-13T01:07:46.701Z',
  },
  {
    uuid: 'noticon_fcg9zd1mp4eil20otvje',
    title: 'number-1',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1739409003/noticon/fcg9zd1mp4eil20otvje.png',
    keywords: '‡',
    date: '2025-02-13T01:10:05.864Z',
  },
  {
    uuid: 'noticon_syoznsjzcpikv3vxtgnl',
    title: '오버액션토끼삼형제',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1739414347/noticon/syoznsjzcpikv3vxtgnl.gif',
    keywords: '‡',
    date: '2025-02-13T02:39:10.520Z',
  },
  {
    uuid: 'noticon_hdbtaxf0kg1mir6tilyt',
    title: '[한라] Protocol',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1739427586/noticon/hdbtaxf0kg1mir6tilyt.png',
    keywords: '‡',
    date: '2025-02-13T06:19:48.865Z',
  },
  {
    uuid: 'noticon_chbmexyin2jtn8hnxmbh',
    title: 'Tanstack',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1739440524/noticon/chbmexyin2jtn8hnxmbh.png',
    keywords: '‡',
    date: '2025-02-13T09:55:31.510Z',
  },
  {
    uuid: 'noticon_wewaenqjz0stb7mwdxhi',
    title: 'SPI',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1739511166/noticon/wewaenqjz0stb7mwdxhi.png',
    keywords: '‡',
    date: '2025-02-14T05:32:48.849Z',
  },
  {
    uuid: 'noticon_w2gz0vs3azlc2z9h6kdt',
    title: 'MCP2515',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1739512625/noticon/w2gz0vs3azlc2z9h6kdt.png',
    keywords: '‡',
    date: '2025-02-14T05:57:09.540Z',
  },
  {
    uuid: 'noticon_me3dyzmx9cc1gdzbpq7a',
    title: 'spider man',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1739939276/noticon/me3dyzmx9cc1gdzbpq7a.png',
    keywords: '‡',
    date: '2025-02-19T04:28:00.954Z',
  },
  {
    uuid: 'noticon_rm3fthxdsxkfnixcuz7k',
    title: '알고리즘',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1739960455/noticon/rm3fthxdsxkfnixcuz7k.png',
    keywords: '‡',
    date: '2025-02-19T10:20:57.891Z',
  },
  {
    uuid: 'noticon_urb9zr0pwn3kia7bsoaw',
    title: '닥터나우',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1740022551/noticon/urb9zr0pwn3kia7bsoaw.png',
    keywords: '‡',
    date: '2025-02-20T03:35:52.856Z',
  },
  {
    uuid: 'noticon_fzgdvlyflt6hzzhhvx9p',
    title: '[한라[ ROS IMU',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1740057272/noticon/fzgdvlyflt6hzzhhvx9p.png',
    keywords: '‡',
    date: '2025-02-20T13:14:34.490Z',
  },
  {
    uuid: 'noticon_qrdiinjkjwi1eldququn',
    title: '반짝반짝',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1740279370/noticon/qrdiinjkjwi1eldququn.gif',
    keywords: '‡',
    date: '2025-02-23T02:56:12.924Z',
  },
  {
    uuid: 'noticon_jmdopszwbmhxbd3y7ixg',
    title: 'heart purple',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1740279491/noticon/jmdopszwbmhxbd3y7ixg.gif',
    keywords: '‡',
    date: '2025-02-23T02:58:13.955Z',
  },
  {
    uuid: 'noticon_xyw3fwb1weezfvsdcefq',
    title: 'heart pink',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1740279520/noticon/xyw3fwb1weezfvsdcefq.gif',
    keywords: '‡',
    date: '2025-02-23T02:58:43.231Z',
  },
  {
    uuid: 'noticon_n1fo7pfmgtisplahpg42',
    title: 'Q&A(Q)',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1740356641/noticon/n1fo7pfmgtisplahpg42.png',
    keywords: '‡',
    date: '2025-02-24T00:24:04.042Z',
  },
  {
    uuid: 'noticon_r3ry7vbiczkqh2uds9dg',
    title: 'Q&A(A)',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1740356706/noticon/r3ry7vbiczkqh2uds9dg.png',
    keywords: '‡',
    date: '2025-02-24T00:25:08.240Z',
  },
  {
    uuid: 'noticon_bjdpfb3m0n1nnjigryyu',
    title: 'SketchUP',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1740416251/noticon/bjdpfb3m0n1nnjigryyu.png',
    keywords: 'Program‡Design',
    date: '2025-02-24T16:57:34.140Z',
  },
  {
    uuid: 'noticon_qzdq7fog8wkdiipgnx9w',
    title: 'D5 Render',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1740416459/noticon/qzdq7fog8wkdiipgnx9w.png',
    keywords: 'Program‡',
    date: '2025-02-24T17:01:03.311Z',
  },
  {
    uuid: 'noticon_uueeopdahzapvqxswtrc',
    title: 'D5 Render',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1740416506/noticon/uueeopdahzapvqxswtrc.png',
    keywords: '‡',
    date: '2025-02-24T17:01:49.622Z',
  },
  {
    uuid: 'noticon_eqqdhmumhj5kvpsqyclp',
    title: '치코파',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1740740766/noticon/eqqdhmumhj5kvpsqyclp.gif',
    keywords: '‡',
    date: '2025-02-28T11:06:09.481Z',
  },
  {
    uuid: 'noticon_k3r3lkjunytqn2pogppo',
    title: 'onion',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1740740920/noticon/k3r3lkjunytqn2pogppo.gif',
    keywords: '‡',
    date: '2025-02-28T11:08:43.886Z',
  },
  {
    uuid: 'noticon_hb2fyxd8zseqdn2ziysd',
    title: '위잉',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1740920538/noticon/hb2fyxd8zseqdn2ziysd.png',
    keywords: '‡',
    date: '2025-03-02T13:02:20.226Z',
  },
  {
    uuid: 'noticon_awuczoit7jkue7nn4j7q',
    title: 'butterfly',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1740987519/noticon/awuczoit7jkue7nn4j7q.png',
    keywords: '‡',
    date: '2025-03-03T07:38:42.377Z',
  },
  {
    uuid: 'noticon_t5f1v56hlrpprlvrina2',
    title: '[한라]SBUS',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1741092317/noticon/t5f1v56hlrpprlvrina2.png',
    keywords: '‡',
    date: '2025-03-04T12:45:20.513Z',
  },
  {
    uuid: 'noticon_whqhhulwqkiyt2ebgbr6',
    title: 'Zustand',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1741157974/noticon/whqhhulwqkiyt2ebgbr6.png',
    keywords: 'react‡',
    date: '2025-03-05T06:59:36.959Z',
  },
  {
    uuid: 'noticon_oxik0iy0atbrwqdqjuxf',
    title: '[한라] AD변환',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1741166027/noticon/oxik0iy0atbrwqdqjuxf.png',
    keywords: '‡',
    date: '2025-03-05T09:13:49.289Z',
  },
  {
    uuid: 'noticon_iqqqbtkh6ybpkvz0opnm',
    title: 'jpa',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1741217250/noticon/iqqqbtkh6ybpkvz0opnm.png',
    keywords: 'jpa‡jpa',
    date: '2025-03-05T23:27:34.301Z',
  },
  {
    uuid: 'noticon_y0zlqrsomb6niytj9odh',
    title: 'pizza',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1741276269/noticon/y0zlqrsomb6niytj9odh.png',
    keywords: '‡',
    date: '2025-03-06T15:51:14.585Z',
  },
  {
    uuid: 'noticon_qui2iqyihw9hyti7ilia',
    title: 'pizza1',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1741276784/noticon/qui2iqyihw9hyti7ilia.png',
    keywords: '‡',
    date: '2025-03-06T15:59:46.999Z',
  },
  {
    uuid: 'noticon_pd1lsshtwvbb28sxc9pt',
    title: 'RTOS',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1741330796/noticon/pd1lsshtwvbb28sxc9pt.png',
    keywords: '‡',
    date: '2025-03-07T06:59:58.405Z',
  },
  {
    uuid: 'noticon_isqby84td4zdeo0ovnbs',
    title: '국립경국대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1741427473/noticon/isqby84td4zdeo0ovnbs.png',
    keywords: '‡',
    date: '2025-03-08T09:51:16.207Z',
  },
  {
    uuid: 'noticon_y3eagfufddirccxmuha7',
    title: '국립경국대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1741427712/noticon/y3eagfufddirccxmuha7.png',
    keywords: '‡',
    date: '2025-03-08T09:55:14.435Z',
  },
  {
    uuid: 'noticon_u6weaa7yayo2dpsol0t1',
    title: '치지직',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1741441234/noticon/u6weaa7yayo2dpsol0t1.png',
    keywords: '‡',
    date: '2025-03-08T13:40:36.376Z',
  },
  {
    uuid: 'noticon_ciu0voqxzitnwnr4kfss',
    title: 'infinity component',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1741538250/noticon/ciu0voqxzitnwnr4kfss.gif',
    keywords: 'react‡',
    date: '2025-03-09T16:37:34.607Z',
  },
  {
    uuid: 'noticon_ynytnevatnkm0moarrqk',
    title: 'Coin',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1741545510/noticon/ynytnevatnkm0moarrqk.gif',
    keywords: '‡',
    date: '2025-03-09T18:38:32.866Z',
  },
  {
    uuid: 'noticon_sresb67zshqrzi1yl2e1',
    title: 'embedded',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1741584706/noticon/sresb67zshqrzi1yl2e1.png',
    keywords: 'embedded‡',
    date: '2025-03-10T05:31:49.436Z',
  },
  {
    uuid: 'noticon_uwfk9hp5wy0tgmlhqegu',
    title: 'AutoCad',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1741591517/noticon/uwfk9hp5wy0tgmlhqegu.png',
    keywords: '‡',
    date: '2025-03-10T07:25:20.074Z',
  },
  {
    uuid: 'noticon_odellrbbaezttger309l',
    title: '[한라]전기전자',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1741592130/noticon/odellrbbaezttger309l.png',
    keywords: '‡',
    date: '2025-03-10T07:35:32.552Z',
  },
  {
    uuid: 'noticon_tfilxat7xd0vrrgdwons',
    title: '[한라] 저항',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1741664361/noticon/tfilxat7xd0vrrgdwons.png',
    keywords: '‡',
    date: '2025-03-11T03:39:23.935Z',
  },
  {
    uuid: 'noticon_a6sdkgk81bmdjyphkyt2',
    title: '[한라]우분투',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1741677514/noticon/a6sdkgk81bmdjyphkyt2.png',
    keywords: '‡',
    date: '2025-03-11T07:18:36.335Z',
  },
  {
    uuid: 'noticon_ldekdu72folpnb6nvs6n',
    title: 'Catboost',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1741719059/noticon/ldekdu72folpnb6nvs6n.png',
    keywords: '‡',
    date: '2025-03-11T18:51:01.952Z',
  },
  {
    uuid: 'noticon_dihnlmrn8aopedon41ur',
    title: 'ㅁ',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1741777507/noticon/dihnlmrn8aopedon41ur.gif',
    keywords: 'ㅁ‡ㅁ',
    date: '2025-03-12T11:05:09.951Z',
  },
  {
    uuid: 'noticon_nqlft2rthsp6w1jgxo7r',
    title: 'Salesforce MC',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1741820640/noticon/nqlft2rthsp6w1jgxo7r.png',
    keywords: '‡',
    date: '2025-03-12T23:04:03.105Z',
  },
  {
    uuid: 'noticon_bptzuvnivxgotfitmqdc',
    title: 'MC',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1741820719/noticon/bptzuvnivxgotfitmqdc.png',
    keywords: '‡',
    date: '2025-03-12T23:05:21.386Z',
  },
  {
    uuid: 'noticon_ojmrhreyip3ybiecpppf',
    title: '이펙티브 자바',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1742223622/noticon/ojmrhreyip3ybiecpppf.png',
    keywords: '‡',
    date: '2025-03-17T15:00:24.817Z',
  },
  {
    uuid: 'noticon_cnmi4ctdekdwezc56qg1',
    title: 'github',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1742259527/noticon/cnmi4ctdekdwezc56qg1.png',
    keywords: '‡',
    date: '2025-03-18T00:58:49.753Z',
  },
  {
    uuid: 'noticon_gglrqpgxhydfsry2blxk',
    title: '라쿤',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1742373284/noticon/gglrqpgxhydfsry2blxk.gif',
    keywords: '‡',
    date: '2025-03-19T08:34:48.416Z',
  },
  {
    uuid: 'noticon_ty6lrjvc9sriplq41a5m',
    title: 'Langflow',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1742395379/noticon/ty6lrjvc9sriplq41a5m.png',
    keywords: 'Langchain‡',
    date: '2025-03-19T14:43:01.684Z',
  },
  {
    uuid: 'noticon_yztuqlb3gimvomvbyzrz',
    title: '[한라]컨텐서',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1742445615/noticon/yztuqlb3gimvomvbyzrz.png',
    keywords: '‡',
    date: '2025-03-20T04:40:17.726Z',
  },
  {
    uuid: 'noticon_ecdx9xgc03fgj5butmbu',
    title: '라운즈',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1742618729/noticon/ecdx9xgc03fgj5butmbu.png',
    keywords: '‡',
    date: '2025-03-22T04:45:31.763Z',
  },
  {
    uuid: 'noticon_bhg5jmrg4q4b7ajjbtpm',
    title: 'Coloso',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1742658666/noticon/bhg5jmrg4q4b7ajjbtpm.png',
    keywords: '‡',
    date: '2025-03-22T15:51:08.241Z',
  },
  {
    uuid: 'noticon_yzjlmjqgegjrmczsf7vc',
    title: 'swing',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1742798158/noticon/yzjlmjqgegjrmczsf7vc.png',
    keywords: 'java swing‡',
    date: '2025-03-24T06:35:59.894Z',
  },
  {
    uuid: 'noticon_rx5sxg6o8ob8c0pvuaar',
    title: 'sts',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1742798428/noticon/rx5sxg6o8ob8c0pvuaar.png',
    keywords: 'spring tool suite‡',
    date: '2025-03-24T06:40:31.003Z',
  },
  {
    uuid: 'noticon_mefxzt0vki1hjnxvnh5c',
    title: 'AI',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1743061732/noticon/mefxzt0vki1hjnxvnh5c.png',
    keywords: '‡',
    date: '2025-03-27T07:48:58.291Z',
  },
  {
    uuid: 'noticon_qnkhuac4lglwgdsobruz',
    title: '플랜핏',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1743172069/noticon/qnkhuac4lglwgdsobruz.png',
    keywords: '‡',
    date: '2025-03-28T14:27:52.190Z',
  },
  {
    uuid: 'noticon_qy12xbmjcltjxeahh7sn',
    title: '코파일럿',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1743249529/noticon/qy12xbmjcltjxeahh7sn.png',
    keywords: '‡',
    date: '2025-03-29T11:58:51.483Z',
  },
  {
    uuid: 'noticon_azkyg8grpohwajn6u33q',
    title: '딜리버리 히어로',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1743502502/noticon/azkyg8grpohwajn6u33q.png',
    keywords: '‡',
    date: '2025-04-01T10:15:04.992Z',
  },
  {
    uuid: 'noticon_n0gy5p6htnuli16amhd3',
    title: 'MFC',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1743698987/noticon/n0gy5p6htnuli16amhd3.png',
    keywords: 'mfc‡',
    date: '2025-04-03T16:49:50.187Z',
  },
  {
    uuid: 'noticon_snik2bznnvbnzrdyjjtc',
    title: 'RTU',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1743747898/noticon/snik2bznnvbnzrdyjjtc.png',
    keywords: '‡',
    date: '2025-04-04T06:25:02.194Z',
  },
  {
    uuid: 'noticon_ta6yusxtufnajlgfnmyf',
    title: 'pixelio',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1743814879/noticon/ta6yusxtufnajlgfnmyf.png',
    keywords: 'pixelio‡',
    date: '2025-04-05T01:01:21.773Z',
  },
  {
    uuid: 'noticon_o4scufgxmn01xtkpxqgc',
    title: '홈택스',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1743855352/noticon/o4scufgxmn01xtkpxqgc.png',
    keywords: 'hometax‡',
    date: '2025-04-05T12:15:54.665Z',
  },
  {
    uuid: 'noticon_mbaj2pvkeozzchfvqhxn',
    title: '홈택스(blue)',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1743855480/noticon/mbaj2pvkeozzchfvqhxn.png',
    keywords: 'hometax‡',
    date: '2025-04-05T12:18:02.435Z',
  },
  {
    uuid: 'noticon_wi6ztuvu6mvute251vum',
    title: 'tax',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1743857355/noticon/wi6ztuvu6mvute251vum.png',
    keywords: 'tax‡',
    date: '2025-04-05T12:49:17.403Z',
  },
  {
    uuid: 'noticon_vswxyrqjanklninmmdqj',
    title: '[한라]멀티미터기',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1744009921/noticon/vswxyrqjanklninmmdqj.png',
    keywords: '‡',
    date: '2025-04-07T07:12:05.186Z',
  },
  {
    uuid: 'noticon_u8lwl17evnaxxywbovh9',
    title: '안경만두',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1744106951/noticon/u8lwl17evnaxxywbovh9.png',
    keywords: '안경만두‡만두',
    date: '2025-04-08T10:09:13.494Z',
  },
  {
    uuid: 'noticon_bqgqk8ljrnymhy3pmett',
    title: '동서울대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1744117416/noticon/bqgqk8ljrnymhy3pmett.png',
    keywords: '‡',
    date: '2025-04-08T13:03:39.813Z',
  },
  {
    uuid: 'noticon_p0qbheeu3z7jqlxnxoco',
    title: '동서울대학교',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1744117503/noticon/p0qbheeu3z7jqlxnxoco.png',
    keywords: '‡',
    date: '2025-04-08T13:05:06.837Z',
  },
  {
    uuid: 'noticon_dpvwen4dckoauzspwir6',
    title: '핑구',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1744186715/noticon/dpvwen4dckoauzspwir6.png',
    keywords: '핑구‡행복',
    date: '2025-04-09T08:18:37.804Z',
  },
  {
    uuid: 'noticon_du5o8ah6mvnec6kukakp',
    title: 'React Native',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1744245547/noticon/du5o8ah6mvnec6kukakp.png',
    keywords: 'React Native‡',
    date: '2025-04-10T00:39:10.400Z',
  },
  {
    uuid: 'noticon_j9b0ylhmgtemcdba0poe',
    title: 'React Native',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1744245680/noticon/j9b0ylhmgtemcdba0poe.png',
    keywords: 'React Native‡',
    date: '2025-04-10T00:41:22.997Z',
  },
  {
    uuid: 'noticon_csmb11d9mkmfcpnkg1ge',
    title: '퍼플렉시티',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1744359498/noticon/csmb11d9mkmfcpnkg1ge.png',
    keywords: '‡',
    date: '2025-04-11T08:18:20.376Z',
  },
  {
    uuid: 'noticon_z8d2zgheicv7rurfkqoc',
    title: 'Alluer',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1744673550/noticon/z8d2zgheicv7rurfkqoc.png',
    keywords: '‡',
    date: '2025-04-14T23:32:32.690Z',
  },
  {
    uuid: 'noticon_hmmkrdssveiagf90sxzc',
    title: '기획만2시간',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1744763499/noticon/hmmkrdssveiagf90sxzc.png',
    keywords: '무한도전‡무도',
    date: '2025-04-16T00:31:42.338Z',
  },
  {
    uuid: 'noticon_btsmg9m2nlkw0zltxkxi',
    title: '파형',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1744814539/noticon/btsmg9m2nlkw0zltxkxi.png',
    keywords: '‡',
    date: '2025-04-16T14:42:21.533Z',
  },
  {
    uuid: 'noticon_aftplctbtuesgu8ljhhm',
    title: '[한라]Flyback',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1744816269/noticon/aftplctbtuesgu8ljhhm.png',
    keywords: '‡',
    date: '2025-04-16T15:11:13.251Z',
  },
  {
    uuid: 'noticon_jw6vetkj6gdkbdur11h9',
    title: 'NUGU',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1744867943/noticon/jw6vetkj6gdkbdur11h9.png',
    keywords: '‡',
    date: '2025-04-17T05:32:26.088Z',
  },
  {
    uuid: 'noticon_k31hvbebldeqmz6jtcl7',
    title: '썬돌 날돌람쥐',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1744947052/noticon/k31hvbebldeqmz6jtcl7.png',
    keywords: '‡',
    date: '2025-04-18T03:30:55.993Z',
  },
  {
    uuid: 'noticon_byiaodpjkqeadps8ujms',
    title: "I'm very tired",
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1745387540/noticon/byiaodpjkqeadps8ujms.png',
    keywords: '‡',
    date: '2025-04-23T05:52:22.966Z',
  },
  {
    uuid: 'noticon_yvbatxq39h845zetrsnt',
    title: '훔쳐보기',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1745387618/noticon/yvbatxq39h845zetrsnt.png',
    keywords: '‡',
    date: '2025-04-23T05:53:41.233Z',
  },
  {
    uuid: 'noticon_g7ifuz1gkftubjlqbl95',
    title: 'Element Plus',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1745658364/noticon/g7ifuz1gkftubjlqbl95.png',
    keywords: 'Element Plus‡',
    date: '2025-04-26T09:06:06.985Z',
  },
  {
    uuid: 'noticon_ikvidcvtgb5q4v5wgdvi',
    title: 'Chakra ui',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1745658482/noticon/ikvidcvtgb5q4v5wgdvi.png',
    keywords: 'Chakra‡ui',
    date: '2025-04-26T09:08:04.452Z',
  },
  {
    uuid: 'noticon_d6ztn1aa8cesnfcznebm',
    title: 'HighChart',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1745658569/noticon/d6ztn1aa8cesnfcznebm.png',
    keywords: 'HighChart‡HighChart',
    date: '2025-04-26T09:09:32.267Z',
  },
  {
    uuid: 'noticon_fzfn7p79hmdh5kjmcdxz',
    title: '패러블',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1745726720/noticon/fzfn7p79hmdh5kjmcdxz.png',
    keywords: '‡',
    date: '2025-04-27T04:05:21.816Z',
  },
  {
    uuid: 'noticon_n24esn4cwnhy5zxd0i3s',
    title: '마참내',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1745895616/noticon/n24esn4cwnhy5zxd0i3s.png',
    keywords: '‡',
    date: '2025-04-29T03:00:20.979Z',
  },
  {
    uuid: 'noticon_lafsw2so8s0xicwqr2dt',
    title: 'tapnine',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1745908475/noticon/lafsw2so8s0xicwqr2dt.png',
    keywords: '‡',
    date: '2025-04-29T06:34:37.980Z',
  },
  {
    uuid: 'noticon_phgvjwgnpu3uuwqsuecm',
    title: 'Amazon Route 53',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1746098826/noticon/phgvjwgnpu3uuwqsuecm.png',
    keywords: '‡',
    date: '2025-05-01T11:27:08.876Z',
  },
  {
    uuid: 'noticon_lcyuqhwosa1xrpnb3lww',
    title: 'Jsoup',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1746099047/noticon/lcyuqhwosa1xrpnb3lww.png',
    keywords: '‡',
    date: '2025-05-01T11:30:49.666Z',
  },
  {
    uuid: 'noticon_uognp31tlmwstbqlvama',
    title: 'Kotlin coroutines',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1746099110/noticon/uognp31tlmwstbqlvama.png',
    keywords: '‡',
    date: '2025-05-01T11:31:52.558Z',
  },
  {
    uuid: 'noticon_ianvk7ibdx6wdhonmsot',
    title: 'xvfb',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1746099197/noticon/ianvk7ibdx6wdhonmsot.png',
    keywords: '‡',
    date: '2025-05-01T11:33:19.928Z',
  },
  {
    uuid: 'noticon_fc1oiq6fmzuaq9pldp3j',
    title: 'zep',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1746099884/noticon/fc1oiq6fmzuaq9pldp3j.png',
    keywords: '‡',
    date: '2025-05-01T11:44:46.986Z',
  },
  {
    uuid: 'noticon_mqm0b734nsnjh89y8wjq',
    title: 'notebrew',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1746362742/noticon/mqm0b734nsnjh89y8wjq.png',
    keywords: 'cafe‡study',
    date: '2025-05-04T12:45:44.321Z',
  },
  {
    uuid: 'noticon_rtqx0p4bz7brcwvnj4hl',
    title: '컴포즈커피',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1746435415/noticon/rtqx0p4bz7brcwvnj4hl.png',
    keywords: '‡',
    date: '2025-05-05T08:56:57.268Z',
  },
  {
    uuid: 'noticon_vyg25brxlku6j5gzgnln',
    title: 'CodeRabbit AI',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1746539802/noticon/vyg25brxlku6j5gzgnln.png',
    keywords: '‡',
    date: '2025-05-06T13:56:44.768Z',
  },
  {
    uuid: 'noticon_fz4eofo6zrnptibcaqhf',
    title: 'GS',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1746771185/noticon/fz4eofo6zrnptibcaqhf.png',
    keywords: 'GSR‡지에스리테일',
    date: '2025-05-09T06:13:07.680Z',
  },
  {
    uuid: 'noticon_xhj3dbqcu1zbyc2fooin',
    title: '뽀야미1',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1746975253/noticon/xhj3dbqcu1zbyc2fooin.gif',
    keywords: '‡',
    date: '2025-05-11T14:54:17.953Z',
  },
  {
    uuid: 'noticon_lvs6oxx26prcfgqhvkes',
    title: '뽀야미2',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1746975274/noticon/lvs6oxx26prcfgqhvkes.gif',
    keywords: '‡',
    date: '2025-05-11T14:54:37.110Z',
  },
  {
    uuid: 'noticon_yabul4wodluaflmllgwe',
    title: '지크예겅',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1747048383/noticon/yabul4wodluaflmllgwe.png',
    keywords: '‡',
    date: '2025-05-12T11:13:06.536Z',
  },
  {
    uuid: 'noticon_re8yqy0xnol9fp9ngzcp',
    title: '지유다',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1747048475/noticon/re8yqy0xnol9fp9ngzcp.png',
    keywords: '‡',
    date: '2025-05-12T11:14:38.921Z',
  },
  {
    uuid: 'noticon_ezxcsfrapd5eeetc7qhn',
    title: 'thetradedesk (TTD)',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1747117892/noticon/ezxcsfrapd5eeetc7qhn.png',
    keywords: 'ttd‡ttd',
    date: '2025-05-13T06:31:34.337Z',
  },
  {
    uuid: 'noticon_syv6zg1irayprtp2rlml',
    title: '조졌을때사용',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1747269097/noticon/syv6zg1irayprtp2rlml.png',
    keywords: '‡',
    date: '2025-05-15T00:31:39.989Z',
  },
  {
    uuid: 'noticon_xlbalzql10rct5nuzl1b',
    title: 'fedex',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1747276455/noticon/xlbalzql10rct5nuzl1b.png',
    keywords: 'FedEx‡',
    date: '2025-05-15T02:34:18.057Z',
  },
  {
    uuid: 'noticon_w9qdm12fjphatw4gxdii',
    title: 'hiworks',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1747379229/noticon/w9qdm12fjphatw4gxdii.png',
    keywords: '하이웍스‡메일',
    date: '2025-05-16T07:07:11.827Z',
  },
  {
    uuid: 'noticon_hi0srmcve53whgqs2txz',
    title: 'spine 2d',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1747860865/noticon/hi0srmcve53whgqs2txz.png',
    keywords: 'spine 2d‡spine 2d',
    date: '2025-05-21T20:54:28.399Z',
  },
  {
    uuid: 'noticon_cnm4ejm44p2seimj1rzd',
    title: 'NOL',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1747930776/noticon/cnm4ejm44p2seimj1rzd.png',
    keywords: '‡',
    date: '2025-05-22T16:19:38.703Z',
  },
  {
    uuid: 'noticon_phplfeytuj0s1egsyztf',
    title: 'Hanwha Eagles',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1748225554/noticon/phplfeytuj0s1egsyztf.png',
    keywords: 'baseball‡',
    date: '2025-05-26T02:12:39.277Z',
  },
  {
    uuid: 'noticon_zbb8o2uzpanjr1wunl5j',
    title: 'Gasai Yuno',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1748225696/noticon/zbb8o2uzpanjr1wunl5j.png',
    keywords: '‡',
    date: '2025-05-26T02:14:59.333Z',
  },
  {
    uuid: 'noticon_qptmgfhpinx0sszhwhwf',
    title: '[한라] LM741',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1748246643/noticon/qptmgfhpinx0sszhwhwf.png',
    keywords: '‡',
    date: '2025-05-26T08:04:06.072Z',
  },
  {
    uuid: 'noticon_o9j3yl7g6df2y6m3lkjs',
    title: '트립닷컴',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1748258320/noticon/o9j3yl7g6df2y6m3lkjs.png',
    keywords: '‡',
    date: '2025-05-26T11:18:42.613Z',
  },
  {
    uuid: 'noticon_ndqf5ssyjziq3z6etnzg',
    title: '오일나우',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1748273741/noticon/ndqf5ssyjziq3z6etnzg.png',
    keywords: '‡',
    date: '2025-05-26T15:35:43.250Z',
  },
  {
    uuid: 'noticon_qz1ddqsg9wkt9ddyxsmk',
    title: '블루리본서베이',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1748342661/noticon/qz1ddqsg9wkt9ddyxsmk.png',
    keywords: 'blueribbojn‡맛집',
    date: '2025-05-27T10:44:23.311Z',
  },
  {
    uuid: 'noticon_mggjjmvwrc5a2amkf13f',
    title: '티머니GO',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1748366014/noticon/mggjjmvwrc5a2amkf13f.png',
    keywords: '‡',
    date: '2025-05-27T17:13:37.141Z',
  },
  {
    uuid: 'noticon_dlhflzojllbzg4waxvpn',
    title: 'VECO',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1748422800/noticon/dlhflzojllbzg4waxvpn.png',
    keywords: '‡',
    date: '2025-05-28T09:00:02.718Z',
  },
  {
    uuid: 'noticon_mkm2g8qud2uy8gaffnug',
    title: 'gemini',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1748440451/noticon/mkm2g8qud2uy8gaffnug.png',
    keywords: 'gemini‡gemini',
    date: '2025-05-28T13:54:13.104Z',
  },
  {
    uuid: 'noticon_o9rjorbx388phzbz4j1l',
    title: 'loopy',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1748599885/noticon/o9rjorbx388phzbz4j1l.png',
    keywords: '‡',
    date: '2025-05-30T10:11:27.999Z',
  },
  {
    uuid: 'noticon_y4ueyl3r1r5qupxudsps',
    title: 'Good Job',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1748599940/noticon/y4ueyl3r1r5qupxudsps.gif',
    keywords: '‡',
    date: '2025-05-30T10:12:22.783Z',
  },
  {
    uuid: 'noticon_hsirv8amp8oajm8yrnyb',
    title: '안녕하세요 최화정에요',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1748705335/noticon/hsirv8amp8oajm8yrnyb.png',
    keywords: '최화정‡맛집',
    date: '2025-05-31T15:28:57.817Z',
  },
  {
    uuid: 'noticon_zgao0ndopnis6m2m3kqm',
    title: 'C',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1749015366/noticon/zgao0ndopnis6m2m3kqm.png',
    keywords: '‡',
    date: '2025-06-04T05:36:08.161Z',
  },
  {
    uuid: 'noticon_cbmue9trltzwaphrbxe7',
    title: 'filter',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1749016836/noticon/cbmue9trltzwaphrbxe7.png',
    keywords: '‡',
    date: '2025-06-04T06:00:39.070Z',
  },
  {
    uuid: 'noticon_wgieoc45q4povpmtohyx',
    title: 'riot',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1749081869/noticon/wgieoc45q4povpmtohyx.png',
    keywords: '‡',
    date: '2025-06-05T00:04:31.774Z',
  },
  {
    uuid: 'noticon_dbwqrg51os1wkftdfsh3',
    title: 'League of Legends',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1749081943/noticon/dbwqrg51os1wkftdfsh3.png',
    keywords: '‡',
    date: '2025-06-05T00:05:46.786Z',
  },
  {
    uuid: 'noticon_imohw0l5eqqlbp1d27f2',
    title: 'Unranked',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1749082219/noticon/imohw0l5eqqlbp1d27f2.png',
    keywords: 'League of Legends‡',
    date: '2025-06-05T00:10:21.411Z',
  },
  {
    uuid: 'noticon_wlarbjjjhlijetu12mj3',
    title: 'Iron',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1749082395/noticon/wlarbjjjhlijetu12mj3.png',
    keywords: 'League of Legends‡',
    date: '2025-06-05T00:13:17.414Z',
  },
  {
    uuid: 'noticon_uiecwivsthifynedodak',
    title: 'Bronze',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1749082416/noticon/uiecwivsthifynedodak.png',
    keywords: 'League of Legends‡',
    date: '2025-06-05T00:13:38.667Z',
  },
  {
    uuid: 'noticon_rxeg4qigzdvrdji7zsnl',
    title: 'Sliver',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1749082438/noticon/rxeg4qigzdvrdji7zsnl.png',
    keywords: 'League of Legends‡',
    date: '2025-06-05T00:14:06.697Z',
  },
  {
    uuid: 'noticon_rxymz2xtpdggi10pqgx7',
    title: '5만원',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1749099535/noticon/rxymz2xtpdggi10pqgx7.png',
    keywords: '신사임당‡',
    date: '2025-06-05T04:58:57.805Z',
  },
  {
    uuid: 'noticon_gzmvmfeml0hjsyw8l6z9',
    title: '커햄',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1749108700/noticon/gzmvmfeml0hjsyw8l6z9.png',
    keywords: '진중햄스터‡진중한햄스터캐릭터',
    date: '2025-06-05T07:31:42.916Z',
  },
  {
    uuid: 'noticon_pnqabnnsmi1vcjkbvfpu',
    title: 'fragile',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1749348980/noticon/pnqabnnsmi1vcjkbvfpu.png',
    keywords: '‡',
    date: '2025-06-08T02:16:21.850Z',
  },
  {
    uuid: 'noticon_oncto38jt94gvb6rlgep',
    title: 'KCP',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1749434675/noticon/oncto38jt94gvb6rlgep.png',
    keywords: 'kcp‡kcp',
    date: '2025-06-09T02:04:39.283Z',
  },
  {
    uuid: 'noticon_awiao9innqtxgjzamfa7',
    title: 'OP_AMP',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1749448704/noticon/awiao9innqtxgjzamfa7.png',
    keywords: '‡',
    date: '2025-06-09T05:58:26.670Z',
  },
  {
    uuid: 'noticon_l6ezjdazjlkra9ullzvn',
    title: 'doooongji',
    imgUrl:
      'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1749772885/noticon/l6ezjdazjlkra9ullzvn.png',
    keywords: 'dog‡',
    date: '2025-06-13T00:01:27.927Z',
  },
];
