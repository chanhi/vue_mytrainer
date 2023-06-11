<template>
  <div class="calendar">
    <div class="cal_header">
      <button @click="prevMonth">&lt;</button>
      <h2>{{ currentMonth }}</h2>
      <button @click="nextMonth">&gt;</button>
    </div>
    <table>
      <thead>
        <tr>
          <th v-for="day in daysOfWeek" :key="day">{{ day }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="week in weeks" :key="week">
          <td v-for="day in week" :key="day">
            <div class="day" :class="{ disabled: day === 0 }">
              <span class="date">{{ day !== 0 ? day : "" }}</span>
              <div class="reminders">
                <div
                  v-for="reminder in getRemindersForDay(day)"
                  :key="reminder.id"
                  class="reminder"
                >
                  {{ reminder.text }}
                </div>
              </div>
              <div class="add-reminder">
                <input
                  type="text"
                  v-model="newReminderText"
                  @keydown.enter="addReminder(day)"
                />
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentDate: new Date(),
      reminders: [],
      newReminderText: ''
    }
  },
  computed: {
    currentMonth () {
      return this.currentDate.toLocaleString('default', {
        month: 'long',
        year: 'numeric'
      })
    },
    daysOfWeek () {
      return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    weeks () {
      const firstDayOfMonth = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth(),
        1
      )
      const lastDayOfMonth = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth() + 1,
        0
      )
      const firstDayOfWeek = firstDayOfMonth.getDay()
      const totalDays = lastDayOfMonth.getDate()
      const weeks = [[]]
      let currentDay = 1

      for (let i = 0; i < firstDayOfWeek; i++) {
        weeks[0].push(0) // Add placeholders for previous month's days
      }

      for (let day = 1; day <= totalDays; day++) {
        if (weeks[weeks.length - 1].length === 7) {
          weeks.push([])
        }
        weeks[weeks.length - 1].push(currentDay)
        currentDay++
      }
      return weeks
    }
  },
  methods: {
    prevMonth () {
      this.currentDate = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth() - 1,
        1
      )
    },
    nextMonth () {
      this.currentDate = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth() + 1,
        1
      )
    },
    getRemindersForDay (day) {
      return this.reminders.filter((reminder) => reminder.day === day)
    },
    addReminder (day) {
      if (this.newReminderText.trim() !== '') {
        const newReminder = {
          id: Date.now(),
          day: day,
          text: this.newReminderText
        }
        this.reminders.push(newReminder)
        this.newReminderText = ''
      }
    }
  }
}
</script>

<style>
.calendar {
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  font-family: Arial, sans-serif;
}

.cal_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 5px;
  text-align: center;
}

th {
  font-weight: bold;
}

td {
  cursor: pointer;
}

.disabled {
  color: #ccc;
}

.day {
  position: relative;
}

.date {
  font-weight: bold;
  margin-bottom: 5px;
}

.reminders {
  margin-bottom: 5px;
}

.reminder {
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 2px 5px;
  margin-bottom: 2px;
}

.add-reminder {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 5px;
  background-color: #f5f5f5;
}

.add-reminder input {
  width: 100%;
  border: none;
  outline: none;
  padding: 2px;
  border-radius: 2px;
}
</style>
