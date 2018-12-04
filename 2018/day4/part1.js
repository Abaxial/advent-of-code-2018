module.exports = input => {
  input = input.sort()
  guardSleepMinutes = {}
  longestSleeper = {
    guard: 0,
    minutes: 0
  }


  guard = 0
  asleepTime = 0
  awakeTime = 0

  for (var minute of input) {
    awake = false
    parsedMinute = minute.match(/:(\d\d)]\s(.*)/)
    if (parsedMinute[2].includes('Guard')) {
      guard = parsedMinute[2]
      continue
    }

    if (parsedMinute[2].includes('sleep')) {
      asleepTime = parsedMinute[1]
    } else if (parsedMinute[2].includes('wake')) {
      awakeTime = parsedMinute[1]
      awake = true
    }

    if (awake) {
      if (guardSleepMinutes[guard] == null) {
        guardSleepMinutes[guard] = {
          minutesSleeping: 0
        }
      }

      minutesAsleep = awakeTime - asleepTime
      guardSleepMinutes[guard].minutesSleeping += minutesAsleep

      if (longestSleeper.minutes < guardSleepMinutes[guard].minutesSleeping) {
        longestSleeper.minutes = guardSleepMinutes[guard].minutesSleeping
        longestSleeper.guard   = guardSleepMinutes[guard]
        longestSleeper.id      = guard
      }

      for (var i = asleepTime; i < awakeTime; i++) {
        if (guardSleepMinutes[guard][i] == null) {
          guardSleepMinutes[guard][i] = 0
        } else {
          guardSleepMinutes[guard][i] += 1
        }
      }

      asleepTime = 0
      awakeTime  = 0
    }
  }

  return [longestSleeper]
}
