import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
// Calculate button width dynamically based on screen size
const buttonWidth = (width - 60) / 4; 

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5F7', // Soft off-white background
    paddingHorizontal: 20,
    paddingBottom: 30,
    justifyContent: 'flex-end', // Aligns calculator to the bottom
  },
  displayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 40,
  },
  displayText: {
    fontSize: 64,
    color: '#333333',
    fontWeight: '300',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  // Base button style
  button: {
    width: buttonWidth,
    height: buttonWidth,
    borderRadius: buttonWidth / 2, // Perfect circle/capsule curve
    justifyContent: 'center',
    alignItems: 'center',
    // Soft shadow effect
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  // Specific Button Theme Variations
  numButton: {
    backgroundColor: '#FFFFFF',
  },
  numText: {
    fontSize: 28,
    color: '#2D2D2D',
  },
  opButton: {
    backgroundColor: '#ECEFF1', // Light gray background for standard operators
  },
  opText: {
    fontSize: 28,
    color: '#FF9500', // Orange text for operators
  },
  equalButton: {
    backgroundColor: '#FF9500', // Bright orange background for "="
  },
  equalText: {
    fontSize: 28,
    color: '#FFFFFF',
  },
  // Expanded/Pill Button Variations
  zeroButton: {
    width: (buttonWidth * 2) + 12, // Spans across 2 columns
    borderRadius: buttonWidth / 2,
  },
  clearButton: {
    width: '100%', // Full-width clear button at the bottom
    height: 55,
    borderRadius: 28,
    backgroundColor: '#ECEFF1',
    marginTop: 8,
  },
  clearText: {
    fontSize: 20,
    color: '#333333',
  },
});