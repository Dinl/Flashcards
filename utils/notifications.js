import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'
import { NOTIFICATION_KEY } from './constants'

createNotification = () => ({
	title: 'Flascards',
	body: 'Is time for a new quiz!',
	android: {
		sound: true,
		priority: 'normal',
		vibrate: true
	},
	ios: {
		sound: true
	}
});

export function setNotifications() {
	AsyncStorage.getItem(NOTIFICATION_KEY)
		.then(JSON.parse)
		.then( (data) => {
			if(data  === null){
				Permissions.askAsync(Permissions.NOTIFICATIONS)
					.then( ({status}) => {
						if(status === 'granted'){
							Notifications.cancelAllScheduledNotificationsAsync();
							let nextNotifications = new Date();
							nextNotifications.setMinutes(nextNotifications.getMinutes()+1);
							Notifications.scheduleLocalNotificationAsync(
								createNotification(),
								{
									time: nextNotifications,
									repeat: 'minute'
								}
							);
							AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
						}
					})
			}
		})
}