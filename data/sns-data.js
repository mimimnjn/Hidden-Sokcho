// 미리 조사한 SNS 게시물 수 (장소별 집계 숫자만). 직접 고치지 않음
const SNS_DATA = {
 "measuredOn": "2026-10-05",
 "method": "직접 조사 · 최근 30일 게시물 수 × 속초 글 비율",
 "byId": {
  "cheongchosu": {
   "est": 84,
   "sokchoRatio": 0.59,
   "score": 84,
   "measuredOn": "2026-10-02"
  },
  "mansuk": {
   "est": 51,
   "sokchoRatio": 0.54,
   "score": 51,
   "measuredOn": "2026-10-05"
  },
  "bongpo-meoguri": {
   "est": 15,
   "sokchoRatio": 0.5,
   "score": 15,
   "measuredOn": "2026-10-02"
  },
  "t-3511c7c6fa8128c59140537a9bd8037c": {
   "est": 16,
   "sokchoRatio": 0.96,
   "score": 16,
   "measuredOn": "2026-10-02"
  },
  "88-grill": {
   "est": 15,
   "sokchoRatio": 0.71,
   "score": 15,
   "measuredOn": "2026-10-02"
  },
  "cafe-gid": {
   "est": 15,
   "sokchoRatio": 0.52,
   "score": 15,
   "measuredOn": "2026-10-02"
  },
  "t-7b4774d51b5c39780f7ce192f07a5369": {
   "est": 8,
   "sokchoRatio": 0.58,
   "score": 8,
   "measuredOn": "2026-10-02"
  },
  "shltr": {
   "est": 17,
   "sokchoRatio": 0.83,
   "score": 17,
   "measuredOn": "2026-10-02"
  },
  "t-ca9a482d49a193a052760a1ecc3b6fda": {
   "est": 27,
   "sokchoRatio": 0.33,
   "score": 18,
   "measuredOn": "2026-10-02"
  },
  "t-5666e0116bdafc588bfe30948cf7f8d1": {
   "est": 3,
   "sokchoRatio": 0.62,
   "score": 3,
   "measuredOn": "2026-10-02"
  },
  "t-6bbe07dfdd796f06edd74fd786fbaa0b": {
   "est": 9,
   "sokchoRatio": 0.38,
   "score": 7,
   "measuredOn": "2026-10-02"
  },
  "t-a579ad4663078b8c434ca870eb4eb6ca": {
   "est": 13,
   "sokchoRatio": 0.1,
   "score": 3,
   "measuredOn": "2026-10-02"
  },
  "t-8fef1af1e15c9b04056ceddd0231d21c": {
   "est": 22,
   "sokchoRatio": 0.63,
   "score": 22,
   "measuredOn": "2026-10-02"
  },
  "t-7b0e3e1368760355dbc182a8e44f7a98": {
   "est": 1,
   "sokchoRatio": 0.81,
   "score": 1,
   "measuredOn": "2026-10-02"
  },
  "t-2db2f5cf3221852e1665206cc5f52238": {
   "est": 4,
   "sokchoRatio": 0.74,
   "score": 4,
   "measuredOn": "2026-10-02"
  },
  "bossanova": {
   "est": 11,
   "sokchoRatio": 0.11,
   "score": 2,
   "measuredOn": "2026-10-02"
  },
  "t-e553583ef05c1685f4e5191571af4cc7": {
   "est": 21,
   "sokchoRatio": 0.62,
   "score": 21,
   "measuredOn": "2026-10-02"
  },
  "abai-hoe-guksu": {
   "est": 7,
   "sokchoRatio": 0.62,
   "score": 7,
   "measuredOn": "2026-10-02"
  },
  "t-39374f5548ae2e9631d7ca4ab8e4df19": {
   "est": 5,
   "sokchoRatio": 1,
   "score": 5,
   "measuredOn": "2026-10-02"
  },
  "t-10f86b07384fb546a20e3bd7319dcec7": {
   "est": 4,
   "sokchoRatio": 0.71,
   "score": 4,
   "measuredOn": "2026-10-02"
  },
  "t-4c73343de61678818001e357a1d670a2": {
   "est": 3,
   "sokchoRatio": 0.5,
   "score": 3,
   "measuredOn": "2026-10-02"
  },
  "t-ad5d69377d352ad40209e23adccdccd3": {
   "est": 2,
   "sokchoRatio": 0.75,
   "score": 2,
   "measuredOn": "2026-10-02"
  },
  "t-405fcb5c00ff68a2b5e363056c3d76f1": {
   "est": 1,
   "sokchoRatio": 0.71,
   "score": 1,
   "measuredOn": "2026-10-02"
  },
  "dancheon": {
   "est": 3,
   "sokchoRatio": 0.86,
   "score": 3,
   "measuredOn": "2026-10-02"
  },
  "t-4b50c926b50408af03b4732c17f37fc4": {
   "est": 24,
   "sokchoRatio": 0,
   "score": 0,
   "measuredOn": "2026-10-02"
  },
  "bong-bread": {
   "est": 5,
   "sokchoRatio": 0.75,
   "score": 5,
   "measuredOn": "2026-10-02"
  },
  "t-fa83d01dc64c56538811f294625f2096": {
   "est": 7,
   "sokchoRatio": 0.96,
   "score": 7,
   "measuredOn": "2026-10-02"
  },
  "t-2d4b0d3642076952f570c59c9174860a": {
   "est": 5,
   "sokchoRatio": 0.76,
   "score": 5,
   "measuredOn": "2026-10-02"
  },
  "t-a47f202775e4db47266653cee92bb92d": {
   "est": 2,
   "sokchoRatio": 0.63,
   "score": 2,
   "measuredOn": "2026-10-02"
  },
  "t-8fb8e774675050fab97d4afe1f6b8ad9": {
   "est": 0,
   "sokchoRatio": 0.79,
   "score": 0,
   "measuredOn": "2026-10-02"
  },
  "t-c141af12f361e51f3133bb2491a9c847": {
   "est": 9,
   "sokchoRatio": 0.81,
   "score": 9,
   "measuredOn": "2026-10-02"
  },
  "t-5bed4dc49e968573edf78eae2aad10a0": {
   "est": 7,
   "sokchoRatio": 0.85,
   "score": 7,
   "measuredOn": "2026-10-02"
  },
  "t-6c72c7e0269d6771dab69b9dcc7b044c": {
   "est": 2,
   "sokchoRatio": 0.62,
   "score": 2,
   "measuredOn": "2026-10-02"
  },
  "t-25a4436aca37624484693e0c3657b610": {
   "est": 9,
   "sokchoRatio": 0.63,
   "score": 9,
   "measuredOn": "2026-10-02"
  },
  "t-b59f15d4c25fe8f3cefca9e4d1368957": {
   "est": 3,
   "sokchoRatio": 0.67,
   "score": 3,
   "measuredOn": "2026-10-02"
  },
  "t-f93b9bd01dcacbc81bdc1d6ab03595dc": {
   "est": 1,
   "sokchoRatio": 0.9,
   "score": 1,
   "measuredOn": "2026-10-02"
  },
  "t-6b921127d045b6d9400c6d10b646340d": {
   "est": 8,
   "sokchoRatio": 0.62,
   "score": 8,
   "measuredOn": "2026-10-02"
  },
  "t-131d5bb77a11259b01f71fe982fe0760": {
   "est": 0,
   "sokchoRatio": 0.85,
   "score": 0,
   "measuredOn": "2026-10-02"
  },
  "t-63ba9fe0b36983d821fb9ccac28e410a": {
   "est": 1,
   "sokchoRatio": 0.3,
   "score": 1,
   "measuredOn": "2026-10-02"
  },
  "t-5b0e881468744810b58def75f03e9c97": {
   "est": 3,
   "sokchoRatio": 0.67,
   "score": 3,
   "measuredOn": "2026-10-02"
  },
  "t-ba245cf0771d37cd6741e9b8958aac8c": {
   "est": 1,
   "sokchoRatio": 0.89,
   "score": 1,
   "measuredOn": "2026-10-02"
  },
  "t-ac4fabb731f8dec2121dae6f25898717": {
   "est": 3,
   "sokchoRatio": 0.48,
   "score": 3,
   "measuredOn": "2026-10-02"
  },
  "t-37d22898d24b95f1b57d0ea33ab189b0": {
   "est": 6,
   "sokchoRatio": 1,
   "score": 6,
   "measuredOn": "2026-10-02"
  },
  "t-7d36344eb5b3ec9632653c5a0423c1a7": {
   "est": 1,
   "sokchoRatio": 0.53,
   "score": 1,
   "measuredOn": "2026-10-02"
  },
  "t-5870d153811365621a6c247fac74958b": {
   "est": 0,
   "sokchoRatio": 0.83,
   "score": 0,
   "measuredOn": "2026-10-02"
  },
  "t-429d9e7fc18780c9deba402256e69d99": {
   "est": 13,
   "sokchoRatio": 0.25,
   "score": 7,
   "measuredOn": "2026-10-02"
  },
  "t-eec6248f6607038fc003df72b3ec3b3d": {
   "est": 0,
   "sokchoRatio": 0.73,
   "score": 0,
   "measuredOn": "2026-10-02"
  },
  "t-b228768ba7488232d5beee7522af2eeb": {
   "est": 6,
   "sokchoRatio": 0.81,
   "score": 6,
   "measuredOn": "2026-10-02"
  },
  "t-330be6ed381d932162c2d92c6e6656f7": {
   "est": 3,
   "sokchoRatio": 0.46,
   "score": 3,
   "measuredOn": "2026-10-02"
  },
  "t-16ec3a15206333e6f9b8827e42a0e758": {
   "est": 15,
   "sokchoRatio": 0.67,
   "score": 15,
   "measuredOn": "2026-10-02"
  },
  "t-a66cbd9bed5f0616ea16d44d943b4d00": {
   "est": 1,
   "sokchoRatio": 1,
   "score": 1,
   "measuredOn": "2026-10-02"
  },
  "t-2093587538a8ff8507956b4f4f8c0168": {
   "est": 3,
   "sokchoRatio": 0.78,
   "score": 3,
   "measuredOn": "2026-10-02"
  },
  "t-3f8690ad4e26ef8feff2abc43a2020ee": {
   "est": 9,
   "sokchoRatio": 0.88,
   "score": 9,
   "measuredOn": "2026-10-02"
  },
  "t-8136a5f5a45da863e4160a73831922a8": {
   "est": 0,
   "sokchoRatio": 0.67,
   "score": 0,
   "measuredOn": "2026-10-02"
  },
  "t-164c56de0de28d9a09a2cd190e5a4362": {
   "est": 1,
   "sokchoRatio": 0.95,
   "score": 1,
   "measuredOn": "2026-10-02"
  },
  "t-8a11cf7dc2d9641febf4e83e7ef620d7": {
   "est": 0,
   "sokchoRatio": 0.96,
   "score": 0,
   "measuredOn": "2026-10-02"
  },
  "t-8bc57273424d5676ed54ebc533e1b4dd": {
   "est": 7,
   "sokchoRatio": 0.37,
   "score": 5,
   "measuredOn": "2026-10-02"
  },
  "t-37267ebed35d0058d4f31b004b1a45fb": {
   "est": 6,
   "sokchoRatio": 0.52,
   "score": 6,
   "measuredOn": "2026-10-02"
  },
  "t-4df33e5ec0ca42b8153d0cf190ab24d4": {
   "est": 9,
   "sokchoRatio": 0.62,
   "score": 9,
   "measuredOn": "2026-10-02"
  },
  "t-cadd1967d41d1061250ce4dbc977032e": {
   "est": 0,
   "sokchoRatio": 0.67,
   "score": 0,
   "measuredOn": "2026-10-02"
  },
  "t-1320c420c04e39a7997dadc76eb437c5": {
   "est": 11,
   "sokchoRatio": 0.67,
   "score": 11,
   "measuredOn": "2026-10-02"
  },
  "t-15315b6a84875d3d3c9afb3e5eb44318": {
   "est": 4,
   "sokchoRatio": 0.71,
   "score": 4,
   "measuredOn": "2026-10-02"
  },
  "t-c15147af37917abdd19ef98296c4a28a": {
   "est": 2,
   "sokchoRatio": 0.52,
   "score": 2,
   "measuredOn": "2026-10-02"
  },
  "t-8c26dd8c63d5ebbee254b605919e6045": {
   "est": 9,
   "sokchoRatio": 0.54,
   "score": 9,
   "measuredOn": "2026-10-02"
  },
  "t-820733a44e6e3ad54398c2f811dd7e0e": {
   "est": 12,
   "sokchoRatio": 1,
   "score": 12,
   "measuredOn": "2026-10-02"
  },
  "t-86d994c02f6519f4e609e768837ba1f3": {
   "est": 4,
   "sokchoRatio": 0.48,
   "score": 4,
   "measuredOn": "2026-10-02"
  },
  "hieung-coffee": {
   "est": 5,
   "sokchoRatio": 0.79,
   "score": 5,
   "measuredOn": "2026-10-02"
  },
  "t-8027f144f128f2251e45b53ecfc01a45": {
   "est": 0,
   "sokchoRatio": 1,
   "score": 0,
   "measuredOn": "2026-10-02"
  },
  "t-a133a94c57e4afa524f550bf22896251": {
   "est": 8,
   "sokchoRatio": 0.19,
   "score": 3,
   "measuredOn": "2026-10-02"
  },
  "t-053fa787f0fd5b8fc1dc3c3ef7534cef": {
   "est": 17,
   "sokchoRatio": 0.62,
   "score": 17,
   "measuredOn": "2026-10-02"
  },
  "t-6c26f73288f577b60ec7614e5d53269e": {
   "est": 5,
   "sokchoRatio": 0.96,
   "score": 5,
   "measuredOn": "2026-10-02"
  },
  "t-d5959c3efd0817a94f52d9b1a513ab52": {
   "est": 13,
   "sokchoRatio": 0,
   "score": 0,
   "measuredOn": "2026-10-02"
  },
  "t-9716eb69287e6ca6f89b9ee8b90eae8a": {
   "est": 14,
   "sokchoRatio": 0.26,
   "score": 7,
   "measuredOn": "2026-10-02"
  },
  "t-fb7d3e33f58a3bacd9ab7765a495cca6": {
   "est": 0,
   "sokchoRatio": 0.29,
   "score": 0,
   "measuredOn": "2026-10-02"
  },
  "t-26916e1fe735afde9c4a41dd18781c47": {
   "est": 0,
   "sokchoRatio": 0.91,
   "score": 0,
   "measuredOn": "2026-10-02"
  },
  "t-357c9980f66fa70a920c6696b14380c9": {
   "est": 25,
   "sokchoRatio": 0.04,
   "score": 2,
   "measuredOn": "2026-10-02"
  },
  "t-1089f5d76b435cd8044d39d8eda93bf2": {
   "est": 0,
   "sokchoRatio": 0.71,
   "score": 0,
   "measuredOn": "2026-10-02"
  },
  "t-7bad15b40b058088fa3a02b786560a98": {
   "est": 8,
   "sokchoRatio": 0.17,
   "score": 3,
   "measuredOn": "2026-10-02"
  },
  "t-f030b32605045cdbd8521c03a64323fb": {
   "est": 3,
   "sokchoRatio": 0.79,
   "score": 3,
   "measuredOn": "2026-10-02"
  },
  "haksapyeong-tofu": {
   "est": 0,
   "sokchoRatio": 0.89,
   "score": 0,
   "measuredOn": "2026-10-02"
  },
  "t-04b667f05e542b11cdc52fad41542ec5": {
   "est": 2,
   "sokchoRatio": 0.79,
   "score": 2,
   "measuredOn": "2026-10-02"
  },
  "t-a403029f5aa8f639e42f54677b37ea82": {
   "est": 1,
   "sokchoRatio": 0.71,
   "score": 1,
   "measuredOn": "2026-10-02"
  },
  "t-350acb9ac14abdd93fe93e3b3a16580e": {
   "est": 1,
   "sokchoRatio": 1,
   "score": 1,
   "measuredOn": "2026-10-02"
  },
  "t-9128aae3cad3b58d4dd538c947ae7fd1": {
   "est": 8,
   "sokchoRatio": 0.95,
   "score": 8,
   "measuredOn": "2026-10-02"
  },
  "t-0a44b9bd667251167a68bb4ecbc01a22": {
   "est": 4,
   "sokchoRatio": 0,
   "score": 0,
   "measuredOn": "2026-10-02"
  },
  "t-4569f48f070c1f1ef4c1032b1f94963a": {
   "est": 3,
   "sokchoRatio": 0.62,
   "score": 3,
   "measuredOn": "2026-10-02"
  },
  "t-ee1f170c44d9c3c2ca11ab153964092b": {
   "est": 2,
   "sokchoRatio": 0.8,
   "score": 2,
   "measuredOn": "2026-10-02"
  },
  "t-85cc534f10727bb19cf116c7254cab2d": {
   "est": 12,
   "sokchoRatio": 0.11,
   "score": 3,
   "measuredOn": "2026-10-02"
  },
  "t-5eb0b82c44ba94346ca6bc3c183185d1": {
   "est": 4,
   "sokchoRatio": 0.33,
   "score": 3,
   "measuredOn": "2026-10-02"
  },
  "t-969f3785bbd7d632e639557f93e81c85": {
   "est": 1,
   "sokchoRatio": 1,
   "score": 1,
   "measuredOn": "2026-10-02"
  },
  "t-d579f1accb8ed7f3e60b92d610d78e29": {
   "est": 0,
   "sokchoRatio": 0.95,
   "score": 0,
   "measuredOn": "2026-10-02"
  },
  "t-d0b9908720448ac9cc892a41cdeb3eaa": {
   "est": 4,
   "sokchoRatio": 0.92,
   "score": 4,
   "measuredOn": "2026-10-02"
  },
  "t-1730491eb54cf89666f0b01976124f00": {
   "est": 15,
   "sokchoRatio": 0.79,
   "score": 15,
   "measuredOn": "2026-10-02"
  },
  "t-9549395837a16feb28bf8fee1fb12f2d": {
   "est": 4,
   "sokchoRatio": 0.76,
   "score": 4,
   "measuredOn": "2026-10-02"
  },
  "t-2820de79840d69b9e0089e5dc60e0ee1": {
   "est": 119,
   "sokchoRatio": 0,
   "score": 0,
   "measuredOn": "2026-10-02"
  },
  "t-876f35151b5a180b191859fbb6a6ee6f": {
   "est": 9,
   "sokchoRatio": 0.52,
   "score": 9,
   "measuredOn": "2026-10-02"
  },
  "t-c3de6f84073062ea8e02f20277cbff74": {
   "est": 1,
   "sokchoRatio": 0.79,
   "score": 1,
   "measuredOn": "2026-10-02"
  },
  "t-d7de296c8a3e47e3342f993fa2c205e2": {
   "est": 1,
   "sokchoRatio": 0.75,
   "score": 1,
   "measuredOn": "2026-10-02"
  },
  "t-28a4195e84b290dc8728c8797bc4b5db": {
   "est": 0,
   "sokchoRatio": 0.86,
   "score": 0,
   "measuredOn": "2026-10-02"
  },
  "t-bdf205bbfd35d08933a8a41795dd3b7c": {
   "est": 0,
   "sokchoRatio": 0.75,
   "score": 0,
   "measuredOn": "2026-10-02"
  },
  "t-1f25487bb044f451c607145ee9471ac8": {
   "est": 0,
   "sokchoRatio": 0.54,
   "score": 0,
   "measuredOn": "2026-10-02"
  },
  "t-1bd04879f2c44736c7acc8e3a119e233": {
   "est": 4,
   "sokchoRatio": 0.93,
   "score": 4,
   "measuredOn": "2026-10-02"
  },
  "t-13c1729235214ee1c2735ed84346216c": {
   "est": 1,
   "sokchoRatio": 0.78,
   "score": 1,
   "measuredOn": "2026-10-02"
  },
  "t-6ed0c5da90ae38d84935391158acfa64": {
   "est": 11,
   "sokchoRatio": 0.59,
   "score": 11,
   "measuredOn": "2026-10-02"
  },
  "t-10a0ace76a93b3bee8931555627e5fe1": {
   "est": 4,
   "sokchoRatio": 0.74,
   "score": 4,
   "measuredOn": "2026-10-02"
  },
  "t-3853bb0018e9dd5f18f1836eab5d9158": {
   "est": 24,
   "sokchoRatio": 0.04,
   "score": 2,
   "measuredOn": "2026-10-02"
  },
  "t-7f75ac8a17bdf422a3d0449cbbff51c2": {
   "est": 1,
   "sokchoRatio": 0.63,
   "score": 1,
   "measuredOn": "2026-10-02"
  },
  "t-04f7bb54db1e6c86a77dd00585d216af": {
   "est": 0,
   "sokchoRatio": 0.79,
   "score": 0,
   "measuredOn": "2026-10-02"
  },
  "t-35f27219f67cddc5b8cf8ff133818483": {
   "est": 0,
   "sokchoRatio": 0.38,
   "score": 0,
   "measuredOn": "2026-10-02"
  },
  "sokcho-beach": {
   "est": 244,
   "sokchoRatio": 0.95,
   "score": 244,
   "measuredOn": "2026-10-02"
  },
  "sokcho-eye": {
   "est": 20,
   "sokchoRatio": 0.92,
   "score": 20,
   "measuredOn": "2026-10-02"
  },
  "oeongchi-beach": {
   "est": 6,
   "sokchoRatio": 0.78,
   "score": 6,
   "measuredOn": "2026-10-02"
  },
  "oeongchi-port": {
   "est": 8,
   "sokchoRatio": 0.67,
   "score": 8,
   "measuredOn": "2026-10-02"
  },
  "yeonggeumjeong": {
   "est": 104,
   "sokchoRatio": 0.71,
   "score": 104,
   "measuredOn": "2026-10-02"
  },
  "dongmyeong-port": {
   "est": 49,
   "sokchoRatio": 0.83,
   "score": 49,
   "measuredOn": "2026-10-02"
  },
  "lighthouse-observatory": {
   "est": 1,
   "sokchoRatio": 0.88,
   "score": 1,
   "measuredOn": "2026-10-02"
  },
  "deungdae-beach": {
   "est": 15,
   "sokchoRatio": 0.52,
   "score": 15,
   "measuredOn": "2026-10-02"
  },
  "jangsa-port": {
   "est": 40,
   "sokchoRatio": 0.58,
   "score": 40,
   "measuredOn": "2026-10-02"
  },
  "haemaji-park": {
   "est": 2,
   "sokchoRatio": 0.76,
   "score": 2,
   "measuredOn": "2026-10-02"
  },
  "cheongchoho-park": {
   "est": 4,
   "sokchoRatio": 0.83,
   "score": 4,
   "measuredOn": "2026-10-02"
  },
  "yeongnangho-bridge": {
   "est": 8,
   "sokchoRatio": 0.75,
   "score": 8,
   "measuredOn": "2026-10-02"
  },
  "cheoksan-footbath": {
   "est": 1,
   "sokchoRatio": 0.87,
   "score": 1,
   "measuredOn": "2026-10-02"
  },
  "seorak-hyanggiro": {
   "est": 11,
   "sokchoRatio": 0.79,
   "score": 11,
   "measuredOn": "2026-10-02"
  },
  "sinheungsa": {
   "est": 80,
   "sokchoRatio": 0.19,
   "score": 30,
   "measuredOn": "2026-10-02"
  },
  "cheongdaesan": {
   "est": 13,
   "sokchoRatio": 0.59,
   "score": 13,
   "measuredOn": "2026-10-02"
  },
  "sangdomun": {
   "est": 3,
   "sokchoRatio": 0.74,
   "score": 3,
   "measuredOn": "2026-10-02"
  },
  "fish-market": {
   "est": 0,
   "sokchoRatio": 0,
   "score": 0,
   "measuredOn": "2026-10-02"
  },
  "abai-village": {
   "est": 26,
   "sokchoRatio": 0.63,
   "score": 26,
   "measuredOn": "2026-10-02"
  },
  "abai-ferry": {
   "est": 3,
   "sokchoRatio": 0.94,
   "score": 3,
   "measuredOn": "2026-10-02"
  },
  "sokcho-museum": {
   "est": 22,
   "sokchoRatio": 0.96,
   "score": 22,
   "measuredOn": "2026-10-05"
  },
  "balhae-museum": {
   "est": 0,
   "sokchoRatio": 0.92,
   "score": 0,
   "measuredOn": "2026-10-02"
  },
  "seokbong-ceramics": {
   "est": 1,
   "sokchoRatio": 0.76,
   "score": 1,
   "measuredOn": "2026-10-02"
  },
  "daepo-observatory": {
   "est": 0,
   "sokchoRatio": 0.74,
   "score": 0,
   "measuredOn": "2026-10-02"
  },
  "expo-tower": {
   "est": 4,
   "sokchoRatio": 0.48,
   "score": 4,
   "measuredOn": "2026-10-02"
  },
  "seorak-cablecar": {
   "est": 85,
   "sokchoRatio": 0.48,
   "score": 82,
   "measuredOn": "2026-10-02"
  },
  "biryong-falls": {
   "est": 21,
   "sokchoRatio": 0.24,
   "score": 10,
   "measuredOn": "2026-10-02"
  },
  "yukdam-falls": {
   "est": 6,
   "sokchoRatio": 0.07,
   "score": 1,
   "measuredOn": "2026-10-02"
  },
  "native-plant-garden": {
   "est": 4,
   "sokchoRatio": 0.67,
   "score": 4,
   "measuredOn": "2026-10-02"
  },
  "mountain-museum": {
   "est": 8,
   "sokchoRatio": 0.9,
   "score": 8,
   "measuredOn": "2026-10-02"
  },
  "museum-x": {
   "est": 8,
   "sokchoRatio": 0.61,
   "score": 8,
   "measuredOn": "2026-10-02"
  },
  "teddybear-farm": {
   "est": 1,
   "sokchoRatio": 0.62,
   "score": 1,
   "measuredOn": "2026-10-02"
  },
  "happy-owl-house": {
   "est": 27,
   "sokchoRatio": 0,
   "score": 0,
   "measuredOn": "2026-10-02"
  },
  "terra-crab-farm": {
   "est": 0,
   "sokchoRatio": 0.85,
   "score": 0,
   "measuredOn": "2026-10-02"
  },
  "alive-heart": {
   "est": 2,
   "sokchoRatio": 0.8,
   "score": 2,
   "measuredOn": "2026-10-02"
  },
  "waterpia": {
   "est": 39,
   "sokchoRatio": 0.72,
   "score": 39,
   "measuredOn": "2026-10-02"
  },
  "cheoksan-spa": {
   "est": 2,
   "sokchoRatio": 0.76,
   "score": 2,
   "measuredOn": "2026-10-02"
  },
  "yeongnangho": {
   "est": 23,
   "sokchoRatio": 0.71,
   "score": 23,
   "measuredOn": "2026-10-02"
  },
  "yeongnangho-wetland": {
   "est": 0,
   "sokchoRatio": 0.59,
   "score": 0,
   "measuredOn": "2026-10-02"
  },
  "yeongnangho-mud-path": {
   "est": 0,
   "sokchoRatio": 0.92,
   "score": 0,
   "measuredOn": "2026-10-02"
  },
  "cheongchojeong": {
   "est": 1,
   "sokchoRatio": 0.88,
   "score": 1,
   "measuredOn": "2026-10-02"
  },
  "bogwangsa": {
   "est": 27,
   "sokchoRatio": 0.04,
   "score": 2,
   "measuredOn": "2026-10-02"
  },
  "sokcho-port": {
   "est": 18,
   "sokchoRatio": 1,
   "score": 18,
   "measuredOn": "2026-10-02"
  },
  "seorak-port": {
   "est": 4,
   "sokchoRatio": 0.62,
   "score": 4,
   "measuredOn": "2026-10-02"
  },
  "cheongho-beach": {
   "est": 4,
   "sokchoRatio": 0.75,
   "score": 4,
   "measuredOn": "2026-10-02"
  },
  "abai-mural": {
   "est": 0,
   "sokchoRatio": 1,
   "score": 0,
   "measuredOn": "2026-10-02"
  },
  "haeparang-45": {
   "est": 2,
   "sokchoRatio": 0.71,
   "score": 2,
   "measuredOn": "2026-10-02"
  },
  "t-db3196a2f87095a9167e0e78a64eb146": {
   "est": 36,
   "sokchoRatio": 0.67,
   "score": 36,
   "measuredOn": "2026-10-02"
  },
  "t-6a55898faeb67dc00d8a2e7040a7b943": {
   "est": 4,
   "sokchoRatio": 0.33,
   "score": 3,
   "measuredOn": "2026-10-02"
  },
  "t-61c95d3d2916b3127ac95589955c48cf": {
   "est": 68,
   "sokchoRatio": 0.83,
   "score": 68,
   "measuredOn": "2026-10-02"
  },
  "t-3368986bdca0efedda1eda8d39b3ae6c": {
   "est": 71,
   "sokchoRatio": 0.42,
   "score": 60,
   "measuredOn": "2026-10-02"
  },
  "t-0c98a361f1cc0f7e8280b4c3a1bd373e": {
   "est": 0,
   "sokchoRatio": 0.75,
   "score": 0,
   "measuredOn": "2026-10-02"
  },
  "t-f1c5c40151ed8162e633357229dcd617": {
   "est": 0,
   "sokchoRatio": 0.58,
   "score": 0,
   "measuredOn": "2026-10-02"
  },
  "t-2e4fcc7e192791bf7b3f6190eef75dc2": {
   "est": 1,
   "sokchoRatio": 0.93,
   "score": 1,
   "measuredOn": "2026-10-02"
  },
  "t-3ad5fbfda3b2a191d6aa3a420c3add33": {
   "est": 1,
   "sokchoRatio": 0.61,
   "score": 1,
   "measuredOn": "2026-10-02"
  },
  "t-a205b3c43a982b62d3e86226ef10e178": {
   "est": 0,
   "sokchoRatio": 0.72,
   "score": 0,
   "measuredOn": "2026-10-02"
  },
  "k-125805": {
   "est": 29,
   "sokchoRatio": 0.2,
   "score": 12,
   "measuredOn": "2026-10-02"
  },
  "k-250359": {
   "est": 27,
   "sokchoRatio": 0.11,
   "score": 6,
   "measuredOn": "2026-10-02"
  },
  "k-2710945": {
   "est": 1,
   "sokchoRatio": 0.67,
   "score": 1,
   "measuredOn": "2026-10-02"
  },
  "k-2710965": {
   "est": 3,
   "sokchoRatio": 0.83,
   "score": 3,
   "measuredOn": "2026-10-02"
  },
  "k-3041240": {
   "est": 0,
   "sokchoRatio": 0.59,
   "score": 0,
   "measuredOn": "2026-10-02"
  },
  "k-125680": {
   "est": 27,
   "sokchoRatio": 0.07,
   "score": 4,
   "measuredOn": "2026-10-02"
  },
  "t-25f7edd5991e475a5ee154f7faf75b13": {
   "est": 16,
   "sokchoRatio": 0.71,
   "score": 16,
   "measuredOn": "2026-10-05"
  },
  "yukgu": {
   "est": 80,
   "sokchoRatio": 0.63,
   "score": 80,
   "measuredOn": "2026-10-05"
  },
  "t-5b88a046fe9c4002fa7168703d598752": {
   "est": 0,
   "sokchoRatio": 0.71,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-b7256984e987d860980408c10a463c14": {
   "est": 0,
   "sokchoRatio": 0.76,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-bb69201f1a043e1ee32dd96e8f00f0e1": {
   "est": 0,
   "sokchoRatio": 1,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-147128385810a85791d9f13d33aaf6df": {
   "est": 0,
   "sokchoRatio": 0.72,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-911fcf8c30e1823cd6f5e34c65a7f36a": {
   "est": 1,
   "sokchoRatio": 0.78,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-484ade8f282a3f1615bedfad8e098d66": {
   "est": 7,
   "sokchoRatio": 0.42,
   "score": 6,
   "measuredOn": "2026-10-05"
  },
  "t-3df23186ab34e8a58576f5008706cce9": {
   "est": 0,
   "sokchoRatio": 0.25,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-a1e7d561d16f297e1d939f337490fc95": {
   "est": 3,
   "sokchoRatio": 0.75,
   "score": 3,
   "measuredOn": "2026-10-05"
  },
  "t-e002053776804eaf3144eaaea7512373": {
   "est": 13,
   "sokchoRatio": 0.54,
   "score": 13,
   "measuredOn": "2026-10-05"
  },
  "t-ccff252581d557076090f7e9b32ea8d8": {
   "est": 0,
   "sokchoRatio": 0.79,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-274a33cec7a0f70587bc9657e973a8a4": {
   "est": 0,
   "sokchoRatio": 0.42,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-94e3d4024a799e09cc08449b1f4878ed": {
   "est": 0,
   "sokchoRatio": 0.94,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-685b19c68887171d4587519720b0e31e": {
   "est": 0,
   "sokchoRatio": 0.67,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-48b47560d76bd1641566a66465eeadee": {
   "est": 1,
   "sokchoRatio": 0.74,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-21013ae5014f9b2972adff99a8efcc27": {
   "est": 1,
   "sokchoRatio": 0.59,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-75b3e8e40fe7aa2da97c947edd34418d": {
   "est": 25,
   "sokchoRatio": 0.11,
   "score": 6,
   "measuredOn": "2026-10-05"
  },
  "t-e0189b50f57ff596f17b7092986b99dc": {
   "est": 1,
   "sokchoRatio": 0.14,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-caa8c8c4ec233670a7ad183c1109b8a8": {
   "est": 5,
   "sokchoRatio": 0.63,
   "score": 5,
   "measuredOn": "2026-10-05"
  },
  "t-091b093291ab6466caff17728a7aa83a": {
   "est": 2,
   "sokchoRatio": 0.63,
   "score": 2,
   "measuredOn": "2026-10-05"
  },
  "t-8d84ef19a299b14af4ae07b59808fd6d": {
   "est": 1,
   "sokchoRatio": 0.89,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-11cc17747a1de59a5047e0651429eb04": {
   "est": 13,
   "sokchoRatio": 0.05,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-f0b096c8ee73bc3ef8d56ad3c0f59d22": {
   "est": 1,
   "sokchoRatio": 0.8,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-4f370807f2b9adcf4cc74b44c7a4388f": {
   "est": 0,
   "sokchoRatio": 0.71,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-10c719b9796e140f1ca030e6e867bee6": {
   "est": 1,
   "sokchoRatio": 0.63,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-367ee47da74d3906895be9b3789e390b": {
   "est": 0,
   "sokchoRatio": 0.87,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-612a67ba5d4e68ee827b9f5cf7edaaf9": {
   "est": 3,
   "sokchoRatio": 0.76,
   "score": 3,
   "measuredOn": "2026-10-05"
  },
  "t-3c1b229e470a5bec5dfd55f1d839580f": {
   "est": 3,
   "sokchoRatio": 0.86,
   "score": 3,
   "measuredOn": "2026-10-05"
  },
  "t-90dc78af58f7594eca2def7ecd73d507": {
   "est": 0,
   "sokchoRatio": 0.58,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-f9d050b8870f836cd65b4326a678b900": {
   "est": 2,
   "sokchoRatio": 0.8,
   "score": 2,
   "measuredOn": "2026-10-05"
  },
  "t-ce6d9638a1df15f256d76d83da5e5b1e": {
   "est": 13,
   "sokchoRatio": 0,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "food-town": {
   "est": 0,
   "sokchoRatio": 0.58,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-9c0a7b5526d2955d154c8330653d279b": {
   "est": 4,
   "sokchoRatio": 0.56,
   "score": 4,
   "measuredOn": "2026-10-05"
  },
  "t-9ac4765a79faca9204b1db8f42a07b8f": {
   "est": 0,
   "sokchoRatio": 0.63,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-d988f52b2827da017a16627879ab4414": {
   "est": 1,
   "sokchoRatio": 0.88,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-cd3d2de8921a80c2988c91f7bf8567da": {
   "est": 0,
   "sokchoRatio": 0.67,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-d8495e6eb67122d2d200cf5f5fa06e27": {
   "est": 2,
   "sokchoRatio": 0.78,
   "score": 2,
   "measuredOn": "2026-10-05"
  },
  "t-00092e531d637e25cd75cb35855681b3": {
   "est": 3,
   "sokchoRatio": 0.04,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-e0619bbf2c1a74f72a4465bd8fb0d3aa": {
   "est": 11,
   "sokchoRatio": 0.39,
   "score": 9,
   "measuredOn": "2026-10-05"
  },
  "t-9301448157cacad9e2e729da442761c2": {
   "est": 0,
   "sokchoRatio": 0,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-d35bd5028c1230df72839db6aad2057b": {
   "est": 3,
   "sokchoRatio": 0.57,
   "score": 3,
   "measuredOn": "2026-10-05"
  },
  "t-5aa9f4d90ff6d875761704e71bf05104": {
   "est": 1,
   "sokchoRatio": 0.79,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-67469e75c3a865b50c2dfa439b2a647b": {
   "est": 1,
   "sokchoRatio": 1,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-9a8deb2682f1f0d98c6324f8313a07c5": {
   "est": 0,
   "sokchoRatio": 1,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-839c2bbf820820fbf400c5dff528af5c": {
   "est": 10,
   "sokchoRatio": 0.05,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-c7265c9a37ee9dd8ef5416f66b0a224b": {
   "est": 1,
   "sokchoRatio": 0.72,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-34e29fbad80bfdb37cd4f86be6e186d3": {
   "est": 0,
   "sokchoRatio": 0.96,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-cb77a9b5ba8c567b4a6eba7dc9518be9": {
   "est": 2,
   "sokchoRatio": 0.13,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-c8eccbab39adbe0fdd56abe68b28a91e": {
   "est": 0,
   "sokchoRatio": 0.59,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-08b91e898d6ed800aa32a2dd3ebb0b68": {
   "est": 1,
   "sokchoRatio": 0.72,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-9468ccfd6fc27043851038d545367b09": {
   "est": 0,
   "sokchoRatio": 0.95,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-6e6451b78401c217e0900de98da504cf": {
   "est": 0,
   "sokchoRatio": 0.79,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-e1e1ca302b7640f33c88f0b501af5f73": {
   "est": 1,
   "sokchoRatio": 0.83,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-e2b0c081479c4da2467144df2f1a6a1a": {
   "est": 4,
   "sokchoRatio": 0.19,
   "score": 2,
   "measuredOn": "2026-10-05"
  },
  "t-a7c50da408e13f1d1d66d7ba9f3d8de1": {
   "est": 0,
   "sokchoRatio": 0.95,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-97722292466c6b9044ee455aca7ffed5": {
   "est": 11,
   "sokchoRatio": 0.76,
   "score": 11,
   "measuredOn": "2026-10-05"
  },
  "t-2c322bd281a8374142a8c4beb961a3d0": {
   "est": 3,
   "sokchoRatio": 0.67,
   "score": 3,
   "measuredOn": "2026-10-05"
  },
  "t-3660af59f4621465735965491f75ae9f": {
   "est": 0,
   "sokchoRatio": 0.67,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-c617ad9a8f9c5982070fea419833a113": {
   "est": 0,
   "sokchoRatio": 0.71,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-6f45b6cb29b941cf907364db93fe82ec": {
   "est": 0,
   "sokchoRatio": 0.83,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-453e97343e2f2e0fafd2f71140d1d48c": {
   "est": 1,
   "sokchoRatio": 0.81,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-3ab432f8f11806175d4f18bebed6abde": {
   "est": 3,
   "sokchoRatio": 0,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-53ae25f7b5319bf88094a95ffc4be777": {
   "est": 1,
   "sokchoRatio": 0.88,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-4a8cce6564f2b6c16a1b19c6d23ba004": {
   "est": 0,
   "sokchoRatio": 0.67,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-5321aec85cb3984bd16de0a5e527331f": {
   "est": 3,
   "sokchoRatio": 0.44,
   "score": 3,
   "measuredOn": "2026-10-05"
  },
  "t-f945273cf5a657d435e149aa321c1bec": {
   "est": 0,
   "sokchoRatio": 0.8,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-c613f1a81c7db21db981d82d7bb90a63": {
   "est": 5,
   "sokchoRatio": 0.07,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-fe1370f3ff37c9562db3fd2b2f96f7ae": {
   "est": 0,
   "sokchoRatio": 1,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-b629c3452ebf4138d3fe8627c59536fb": {
   "est": 1,
   "sokchoRatio": 0.41,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-9e1a8d64dd840c1789650c0f257f3b1f": {
   "est": 0,
   "sokchoRatio": 0.17,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-69583046b6a501cd5c87da9f386950d9": {
   "est": 0,
   "sokchoRatio": 0.87,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-2ccf4e05aa2a5952f31acf29edafdc91": {
   "est": 2,
   "sokchoRatio": 0.75,
   "score": 2,
   "measuredOn": "2026-10-05"
  },
  "t-54973dbbb8247d8913dbe0d44c283e1f": {
   "est": 0,
   "sokchoRatio": 0.92,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-63d9ae48ba6e8410afcc9c3addab2d5f": {
   "est": 0,
   "sokchoRatio": 1,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-34dc8ce752d1cc45d8e6ef8734ea4c6c": {
   "est": 0,
   "sokchoRatio": 0.85,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-6203f2a54b98623254f504edfd8165a5": {
   "est": 8,
   "sokchoRatio": 0.25,
   "score": 4,
   "measuredOn": "2026-10-05"
  },
  "t-fa4ce31916f9bfd3d574d20ea8ca44ce": {
   "est": 4,
   "sokchoRatio": 0.48,
   "score": 4,
   "measuredOn": "2026-10-05"
  },
  "t-8ec7c81a12b3c926588a84012d4a6061": {
   "est": 1,
   "sokchoRatio": 0.81,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-ab2271ea8a695ba2edee78199400fd01": {
   "est": 2,
   "sokchoRatio": 0.29,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-d8c7596ad5acc9ee50dc0f981b5b973c": {
   "est": 8,
   "sokchoRatio": 0.5,
   "score": 8,
   "measuredOn": "2026-10-05"
  },
  "t-e3efbee69e9143991eb33f7737ac0995": {
   "est": 59,
   "sokchoRatio": 0.03,
   "score": 4,
   "measuredOn": "2026-10-05"
  },
  "t-3606d3b9e702117dc0c0daa7168c31cc": {
   "est": 9,
   "sokchoRatio": 0.11,
   "score": 2,
   "measuredOn": "2026-10-05"
  },
  "t-5ce054ead783c94a8c524a2f5301ee9b": {
   "est": 0,
   "sokchoRatio": 0,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-44eb5ec6c631461cb6499e41bd1c2a53": {
   "est": 2,
   "sokchoRatio": 1,
   "score": 2,
   "measuredOn": "2026-10-05"
  },
  "t-58f114e5a662054f28403c4bcd143319": {
   "est": 3,
   "sokchoRatio": 0.63,
   "score": 3,
   "measuredOn": "2026-10-05"
  },
  "t-ee0dec9401066cfa782225275f51c90e": {
   "est": 2,
   "sokchoRatio": 0.83,
   "score": 2,
   "measuredOn": "2026-10-05"
  },
  "t-4cf613478d054d803ccfa820335beaff": {
   "est": 1,
   "sokchoRatio": 0.85,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-52740b34ab14d4767836c03a240b0e94": {
   "est": 2,
   "sokchoRatio": 0.92,
   "score": 2,
   "measuredOn": "2026-10-05"
  },
  "t-8048b8898d9cdd10ce34e1c76347d117": {
   "est": 2,
   "sokchoRatio": 0.93,
   "score": 2,
   "measuredOn": "2026-10-05"
  },
  "t-5b971b2e05c431bea2145bc1880c8c80": {
   "est": 0,
   "sokchoRatio": 0.83,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-1cc0af56697e2e5c5dfe315e06cb2e4d": {
   "est": 3,
   "sokchoRatio": 1,
   "score": 3,
   "measuredOn": "2026-10-05"
  },
  "t-11d84c9bba828b2d6fa0d6dd5637a750": {
   "est": 0,
   "sokchoRatio": 1,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-fb3d43f0b9e58f955ba38e28f6c81806": {
   "est": 0,
   "sokchoRatio": 0.63,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-fdd0e2bea7304203c3fac9597889c50e": {
   "est": 1,
   "sokchoRatio": 0.75,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-d5c43b3cb4855dca6ebe48820036f5bf": {
   "est": 0,
   "sokchoRatio": 0.88,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-450275c4833f5841f7136ddb4c7a63f0": {
   "est": 0,
   "sokchoRatio": 0.87,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-bd07c2916b4a95879236ace6584e771c": {
   "est": 3,
   "sokchoRatio": 0.05,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-3fc9004c7ded832a4dbb9d8a6f69fce2": {
   "est": 0,
   "sokchoRatio": 0.91,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-022acebe57ca3a70cabcffb5a93a77a2": {
   "est": 0,
   "sokchoRatio": 0.55,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-851235d95c321c064d9c4c406243a258": {
   "est": 3,
   "sokchoRatio": 0.63,
   "score": 3,
   "measuredOn": "2026-10-05"
  },
  "t-93d4cebf1d0e6ffa689adc19239e7a39": {
   "est": 0,
   "sokchoRatio": 1,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-282cd5499aacd9bef5fcf8be17728b66": {
   "est": 1,
   "sokchoRatio": 0.94,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-559bf0cf05dc0714d3bdda593f2e45a9": {
   "est": 9,
   "sokchoRatio": 0.08,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-3e9453dbc7955a506f6606ab3515e927": {
   "est": 0,
   "sokchoRatio": 0.67,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-f004e3828185444110ee2972594cab45": {
   "est": 9,
   "sokchoRatio": 0.93,
   "score": 9,
   "measuredOn": "2026-10-05"
  },
  "t-6baeac97475c989cf305db31debb378f": {
   "est": 4,
   "sokchoRatio": 0.63,
   "score": 4,
   "measuredOn": "2026-10-05"
  },
  "t-b2196ae325f6490334953c332aeb5b53": {
   "est": 0,
   "sokchoRatio": 0.13,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-20b656b4462a7738ec4fc828c2809089": {
   "est": 0,
   "sokchoRatio": 0.21,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-df0b1b5b383b154c1b5b34f8aefc2247": {
   "est": 1,
   "sokchoRatio": 0.88,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-6a1dbdbbfc24cefd92f6e304380757ef": {
   "est": 0,
   "sokchoRatio": 0.59,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-d5feb3f3097aa4d69e3a2e9048424aab": {
   "est": 1,
   "sokchoRatio": 0.57,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-b3460fc19de4a5618252de4fc4e16cf4": {
   "est": 1,
   "sokchoRatio": 0.71,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-209c0a8550f5edeb476b20a3c666f98c": {
   "est": 0,
   "sokchoRatio": 0.88,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-9303e632a81c5547f4916f20cf87a351": {
   "est": 11,
   "sokchoRatio": 0.48,
   "score": 11,
   "measuredOn": "2026-10-05"
  },
  "t-8cc53d3dcf6fecc9aa875a4b0e6f12db": {
   "est": 0,
   "sokchoRatio": 0.88,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-f69c1f81e56bea77982754fefd410320": {
   "est": 1,
   "sokchoRatio": 0.15,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-c480b98ca94bc46c045465c308315729": {
   "est": 1,
   "sokchoRatio": 1,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-982c2f00ce644091cc5b04e8b4d90081": {
   "est": 0,
   "sokchoRatio": 0.75,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-35fbe3a3b5f080ea9a550e050d15ef8c": {
   "est": 0,
   "sokchoRatio": 0.67,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-8c01b1e87c803fef40a733155e8455e6": {
   "est": 4,
   "sokchoRatio": 1,
   "score": 4,
   "measuredOn": "2026-10-05"
  },
  "t-91881445478b5930b91dc6cb30ca472e": {
   "est": 0,
   "sokchoRatio": 0.5,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-c12383d41d17ea3ab8b9f99758b8c77b": {
   "est": 1,
   "sokchoRatio": 1,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-f172a7d4df03d6e21de8093f87defcc7": {
   "est": 0,
   "sokchoRatio": 0.36,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-1a8d2ab943b4fc7223bfdf92f0881843": {
   "est": 1,
   "sokchoRatio": 0.85,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-80c29633346c08d11a10d4c05bdc9951": {
   "est": 2,
   "sokchoRatio": 0.04,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-736be3876c138fc1f4ac8cbb9ec18e30": {
   "est": 13,
   "sokchoRatio": 0.63,
   "score": 13,
   "measuredOn": "2026-10-05"
  },
  "t-0bef125168c238dacd682a4410446615": {
   "est": 1,
   "sokchoRatio": 0.89,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-49c976b3e447e1b8080d663800732f6f": {
   "est": 1,
   "sokchoRatio": 0.67,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-48302500291ba2a7b43c26e74e259219": {
   "est": 2,
   "sokchoRatio": 0.08,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-21fc9dc8adfd9f3950898c8c70947372": {
   "est": 0,
   "sokchoRatio": 0.71,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-2ec2b83209a4f5e9b91809de734e5645": {
   "est": 1,
   "sokchoRatio": 0.43,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-721c7a05ac6a315add0fd039d2d7c2c9": {
   "est": 0,
   "sokchoRatio": 0.74,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-7bbd59b38c25596743c6239c35d3fa92": {
   "est": 0,
   "sokchoRatio": 0.96,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-bdfff5548f4fa266dd27db06cd3ae743": {
   "est": 0,
   "sokchoRatio": 0,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "cheongchoho-barefoot": {
   "est": 0,
   "sokchoRatio": 1,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "joyang-prehistoric": {
   "est": 0,
   "sokchoRatio": 0.74,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "ssangcheon-path": {
   "est": 0,
   "sokchoRatio": 1,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "cherry-tunnel": {
   "est": 0,
   "sokchoRatio": 0.83,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-ff6ee09f10e26967fd56c57f62a691cf": {
   "est": 0,
   "sokchoRatio": 0.79,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-2b8d655d6c7a586bfb7fdeb9278d7f03": {
   "est": 1,
   "sokchoRatio": 0.72,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-6ba0c3c3a057a46b641e10ba74390634": {
   "est": 1,
   "sokchoRatio": 0.92,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-21a3fdc37014fdffb779753f036884ff": {
   "est": 1,
   "sokchoRatio": 0.94,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-b6e41b35c3dc71a52bc8b0858f4b9022": {
   "est": 15,
   "sokchoRatio": 0.07,
   "score": 2,
   "measuredOn": "2026-10-05"
  },
  "t-76a473fd661b5788a54dede5a4f7b987": {
   "est": 6,
   "sokchoRatio": 1,
   "score": 6,
   "measuredOn": "2026-10-05"
  },
  "t-874a2c5170fdff9632ff51b0ba45ff2c": {
   "est": 1,
   "sokchoRatio": 0.42,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-47c674d5c99cdf479c966a65b0b3aa4a": {
   "est": 3,
   "sokchoRatio": 0.8,
   "score": 3,
   "measuredOn": "2026-10-05"
  },
  "t-be4d1b66a025710b530173dba6cf5405": {
   "est": 18,
   "sokchoRatio": 0.21,
   "score": 8,
   "measuredOn": "2026-10-05"
  },
  "t-454ea32298069561137c8528421fa47b": {
   "est": 0,
   "sokchoRatio": 0.83,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-3c4e80a930be594dd2ce793c79eab55a": {
   "est": 2,
   "sokchoRatio": 0.83,
   "score": 2,
   "measuredOn": "2026-10-05"
  },
  "t-6821540d9bdcd0c8e053486712c0a33b": {
   "est": 7,
   "sokchoRatio": 0.83,
   "score": 7,
   "measuredOn": "2026-10-05"
  },
  "t-89d72df53f42d732ac148e0f7883d7e1": {
   "est": 0,
   "sokchoRatio": 0.73,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-4c93335215d920f14ced5ad3dc86f274": {
   "est": 0,
   "sokchoRatio": 0.82,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-16b69a917f04a0638c8a069cc37da17f": {
   "est": 1,
   "sokchoRatio": 1,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-6659be58f790802a5f63d6a430010de1": {
   "est": 0,
   "sokchoRatio": 0.41,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-9d20d9d0dd180407d168af5a5f560c50": {
   "est": 0,
   "sokchoRatio": 0,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-68b41e32a2f7b2c208ba4b09a4a88ad0": {
   "est": 5,
   "sokchoRatio": 1,
   "score": 5,
   "measuredOn": "2026-10-05"
  },
  "t-e78c6281a9d098b75f51b2572d1adc73": {
   "est": 2,
   "sokchoRatio": 0.87,
   "score": 2,
   "measuredOn": "2026-10-05"
  },
  "t-c3aee310f106224093fa8fca63e99064": {
   "est": 0,
   "sokchoRatio": 0.9,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-bc039b2d74c3112ed3f15a9eeeb44649": {
   "est": 0,
   "sokchoRatio": 0.79,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-686ff5653a5b3d8de770cd80bb940823": {
   "est": 1,
   "sokchoRatio": 0.71,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-342a7e5f54819c27c75ecfd4e5a566da": {
   "est": 0,
   "sokchoRatio": 0.95,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-d1774b902c2d12da488ef15d9ee95efd": {
   "est": 1,
   "sokchoRatio": 0.92,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "t-a32f1db9d12a15891bae199b9f50d4d6": {
   "est": 0,
   "sokchoRatio": 0.11,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-0a1a2b6aca2d6afff84bc899f819c1ac": {
   "est": 0,
   "sokchoRatio": 1,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-476c0d46719691fdae060255288d0815": {
   "est": 0,
   "sokchoRatio": 0.73,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-0b258b955e7a57f8564a8f82d4e4951a": {
   "est": 0,
   "sokchoRatio": 0,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-f5ac835ecdea7ea1b87935c445f088d5": {
   "est": 0,
   "sokchoRatio": 1,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "t-371ea2ec896d1e59de9a244f343fc2d0": {
   "est": 0,
   "sokchoRatio": 0.7,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "k-125756": {
   "est": 2,
   "sokchoRatio": 0.92,
   "score": 2,
   "measuredOn": "2026-10-05"
  },
  "k-125730": {
   "est": 20,
   "sokchoRatio": 0.74,
   "score": 20,
   "measuredOn": "2026-10-05"
  },
  "k-2710858": {
   "est": 1,
   "sokchoRatio": 1,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "k-3041338": {
   "est": 0,
   "sokchoRatio": 1,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "k-129032": {
   "est": 0,
   "sokchoRatio": 0,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "k-3041546": {
   "est": 0,
   "sokchoRatio": 0.95,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "k-3041101": {
   "est": 0,
   "sokchoRatio": 0.75,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "k-2702210": {
   "est": 0,
   "sokchoRatio": 0.78,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "k-2788927": {
   "est": 1,
   "sokchoRatio": 0.63,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "k-3041283": {
   "est": 0,
   "sokchoRatio": 0.76,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "k-125806": {
   "est": 0,
   "sokchoRatio": 1,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "k-2612292": {
   "est": 11,
   "sokchoRatio": 0.89,
   "score": 11,
   "measuredOn": "2026-10-05"
  },
  "k-127586": {
   "est": 342,
   "sokchoRatio": 1,
   "score": 342,
   "measuredOn": "2026-10-05"
  },
  "k-2743258": {
   "est": 1,
   "sokchoRatio": 0.95,
   "score": 1,
   "measuredOn": "2026-10-05"
  },
  "k-1993692": {
   "est": 0,
   "sokchoRatio": 0,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "k-2734043": {
   "est": 0,
   "sokchoRatio": 0.96,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "k-2364960": {
   "est": 0,
   "sokchoRatio": 1,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "k-1799724": {
   "est": 0,
   "sokchoRatio": 1,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "k-2782125": {
   "est": 0,
   "sokchoRatio": 1,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "k-2714833": {
   "est": 0,
   "sokchoRatio": 0.67,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "k-2710897": {
   "est": 0,
   "sokchoRatio": 0,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "k-2788935": {
   "est": 0,
   "sokchoRatio": 1,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "k-129031": {
   "est": 0,
   "sokchoRatio": 0.88,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "k-129027": {
   "est": 0,
   "sokchoRatio": 0.67,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "k-125675": {
   "est": 4,
   "sokchoRatio": 0.89,
   "score": 4,
   "measuredOn": "2026-10-05"
  },
  "k-2714645": {
   "est": 3,
   "sokchoRatio": 0.67,
   "score": 3,
   "measuredOn": "2026-10-05"
  },
  "k-2791156": {
   "est": 0,
   "sokchoRatio": 0.88,
   "score": 0,
   "measuredOn": "2026-10-05"
  },
  "k-125676": {
   "est": 17,
   "sokchoRatio": 0.94,
   "score": 17,
   "measuredOn": "2026-10-05"
  },
  "k-2782493": {
   "est": 2,
   "sokchoRatio": 0.24,
   "score": 1,
   "measuredOn": "2026-10-05"
  }
 }
};
