import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const bookingApi = {
    // Create new booking
    async createBooking(bookingData) {
        try {
            // Transform frontend data to match backend DTO
            const transformedData = {
                brandName: bookingData.brandName,
                contactName: bookingData.contactName,
                contact: bookingData.contact,
                eventDate: new Date(bookingData.eventDate).toISOString(),
                location: bookingData.location,
                eventType: bookingData.eventType,
                description: bookingData.description,
                services: this.mapServiceNamesToIds(bookingData.services),
            };

            const response = await fetch(`${API_URL}/bookings`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(transformedData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Error creating booking:', error);
            throw new Error(error.message || 'Failed to create booking');
        }
    },

    // Get all bookings (for admin purposes)
    async getBookings(status) {
        try {
            const params = status ? { status } : {};
            const response = await api.get('/bookings', { params });
            return response.data;
        } catch (error) {
            console.error('Error fetching bookings:', error);
            throw new Error(error.response?.data?.message || 'Failed to fetch bookings');
        }
    },

    // Update booking status
    async updateBookingStatus(id, status) {
        try {
            const response = await api.patch(`/bookings/${id}/status`, { status });
            return response.data;
        } catch (error) {
            console.error('Error updating booking status:', error);
            throw new Error(error.response?.data?.message || 'Failed to update booking status');
        }
    },

    // Get booking stats
    async getBookingStats() {
        try {
            const response = await api.get('/bookings/stats');
            return response.data;
        } catch (error) {
            console.error('Error fetching booking stats:', error);
            throw new Error(error.response?.data?.message || 'Failed to fetch booking stats');
        }
    },

    // Map service names to IDs (you'll need to adjust this based on your actual service IDs)
    mapServiceNamesToIds(serviceNames) {
        const serviceMap = {
            'Event Organizer': 'event-organizer',
            'Creative Agency': 'creative-agency',
            'Talent & Artist Management': 'talent-management',
            'Brand Strategy': 'brand-strategy'
        };

        return serviceNames.map(name => serviceMap[name]).filter(Boolean);
    }
};

export default bookingApi;