import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#EF506B', 
    letterSpacing: 0.5,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    height: 54,
    borderWidth: 1,
    borderColor: '#E0E0E0', // Light gray full border
    borderRadius: 10,       // Rounded corners for the rectangle
    fontSize: 16,
    color: '#333333',
    paddingHorizontal: 16,  // Horizontal padding so text doesn't touch the border
    backgroundColor: '#FFFFFF',
  },
  button: {
    backgroundColor: '#EF506B', 
    height: 54,
    borderRadius: 10,       // Matches the input field's roundness
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    shadowColor: '#EF506B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 2, 
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});