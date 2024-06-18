// 간단한 딜레이 유틸리티 함수
function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

export default sleep
