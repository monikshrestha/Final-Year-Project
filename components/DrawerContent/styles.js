import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    drawerContent: {
        flex: 1,
      },

      userInfoSection: {
        paddingLeft: 20,
      },

      title: {
        fontSize: 16,
        marginTop: 6,
        fontWeight: 'bold',
      },

      drawerSection: {
        marginTop: 15,
      },

      bottomDrawerSection: {
          marginBottom: 15,
          borderTopColor: '#f4f4f4',
          borderTopWidth: 1
      },
      
      preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
      },
    });

export default styles;